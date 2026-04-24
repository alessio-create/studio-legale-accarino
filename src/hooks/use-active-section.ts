import { useEffect, useState } from "react";

/**
 * Scroll-spy: returns the id of the section currently most in view among the
 * provided ids. Uses IntersectionObserver with a top offset so the active
 * link flips just before the section reaches the top of the viewport.
 */
export function useActiveSection(ids: string[], rootMargin = "-30% 0px -60% 0px") {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry whose intersection ratio is highest among intersecting ones.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join("|"), rootMargin]);

  return active;
}