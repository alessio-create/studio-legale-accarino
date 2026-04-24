import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

/**
 * Premium smooth-scroll provider powered by Lenis.
 *
 * - Inertial easing tuned for editorial reading rhythm (not bouncy)
 * - Respects prefers-reduced-motion (auto-disabled)
 * - Resets to top instantly on route change so the curtain transition
 *   doesn't fight an in-flight smooth scroll
 * - Patches anchor links so in-page hashes glide via Lenis instead of
 *   the browser's hard jump
 */
export const SmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      // Editorial easing — no overshoot, gentle settle.
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Glide on in-page anchor clicks (e.g. TOC links).
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -96, duration: 1.4 });
    };
    document.addEventListener("click", onAnchorClick);

    // Expose for the route transition curtain to instant-reset.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Instant jump on route change so the curtain transition is clean.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
