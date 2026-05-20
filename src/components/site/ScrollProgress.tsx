import { useEffect, useState } from "react";

/**
 * Global scroll progress bar — a 2px gold ribbon pinned just under the
 * navbar. Premium signature, zero layout cost. Uses requestAnimationFrame
 * throttling and respects reduced-motion (still visible, just not animated).
 */
export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(1, h.scrollTop / total) : 0);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-gold via-gold-deep to-gold transition-[transform] duration-100 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
