import { useEffect, useState } from "react";

/**
 * Tracks the current URL hash (without `#`) and provides a "highlighted"
 * id that can be used to flash a target element after a deep-link jump.
 *
 * - Reads `location.hash` on mount and on `hashchange`.
 * - Smooth-scrolls the matching element into view with a navbar offset.
 * - Returns `targetedId`, which clears itself after `highlightMs` so the
 *   pulse/glow can fade out.
 */
export function useHashTarget(highlightMs = 2400, scrollOffset = 96) {
  const [targetedId, setTargetedId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    const focusHash = () => {
      const raw = window.location.hash.replace(/^#/, "");
      if (!raw) return;
      // Defer one tick so React has rendered the target element on first load
      requestAnimationFrame(() => {
        const el = document.getElementById(raw);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({ top, behavior: "smooth" });
        setTargetedId(raw);
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => setTargetedId(null), highlightMs);
      });
    };

    focusHash();
    window.addEventListener("hashchange", focusHash);
    return () => {
      window.removeEventListener("hashchange", focusHash);
      if (timer) clearTimeout(timer);
    };
  }, [highlightMs, scrollOffset]);

  /** Manually trigger a highlight — useful when the side-nav scrolls without changing the hash. */
  const flash = (id: string) => {
    setTargetedId(id);
    window.setTimeout(() => setTargetedId((curr) => (curr === id ? null : curr)), highlightMs);
  };

  return { targetedId, flash } as const;
}