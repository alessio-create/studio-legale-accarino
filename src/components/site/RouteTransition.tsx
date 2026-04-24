import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Minimal premium route transition: a full-screen navy curtain with the
 * studio wordmark and a thin gold loading bar. Plays for ~750ms on every
 * route change. Uses ARIA live region semantics so screen readers announce
 * navigation without being noisy.
 */
const TOTAL_MS = 750;

export const RouteTransition = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"in" | "out">("in");
  // Skip the transition on the very first paint so the initial load doesn't
  // stutter behind a curtain.
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }
    setVisible(true);
    setPhase("in");

    // Hold the curtain briefly, then fade out.
    const fadeOut = window.setTimeout(() => setPhase("out"), TOTAL_MS - 200);
    const hide = window.setTimeout(() => setVisible(false), TOTAL_MS);

    // Bring the user to the top of the new page once the curtain is up.
    // SmoothScroll also handles this via Lenis, but we keep a hard fallback.
    window.scrollTo(0, 0);

    return () => {
      window.clearTimeout(fadeOut);
      window.clearTimeout(hide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Caricamento pagina"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-primary text-primary-foreground transition-opacity duration-200 ease-out ${
        phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle noise + gold radial glow for parchment depth */}
      <div aria-hidden className="absolute inset-0 bg-noise opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, hsl(var(--gold)) 0%, transparent 60%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8 animate-rt-fade">
        {/* Top hairline */}
        <span aria-hidden className="block h-px w-24 bg-gold/60" />

        {/* Wordmark — mirrors the editorial Logo lockup */}
        <div className="flex flex-col items-center text-center leading-none">
          <span className="text-xs uppercase tracking-[0.32em] text-gold font-semibold">
            Studio Legale
          </span>
          <span className="mt-4 font-serif text-3xl lg:text-4xl text-background tracking-[-0.02em]">
            Accarino
          </span>
          <span className="mt-3 text-[10px] uppercase tracking-[0.28em] text-background/60">
            Avvocati — Salerno
          </span>
        </div>

        {/* Loading bar */}
        <div className="relative mt-2 h-px w-44 bg-background/15 overflow-hidden">
          <span className="absolute inset-y-0 left-0 w-1/3 bg-gold animate-rt-load" />
        </div>
      </div>
    </div>
  );
};
