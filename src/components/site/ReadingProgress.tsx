import { useEffect, useState } from "react";

/**
 * Premium editorial signature: a 2px gold progress bar pinned just under the
 * navbar that fills as the article is read. Subtle but instantly conveys
 * "long-form authority". Pure CSS transform — no layout cost.
 */
export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(1, scrolled / total) : 0);
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
      className="fixed left-0 right-0 top-[64px] lg:top-[72px] z-40 h-[2px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-gold via-gold-deep to-gold transition-[transform] duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
};
