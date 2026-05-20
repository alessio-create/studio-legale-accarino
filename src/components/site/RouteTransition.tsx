import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logoFullSquare from "@/assets/logo-full-square.svg";

/**
 * Premium route transition — a navy curtain wipes up from below with an
 * easing curve, the wordmark fades in centered behind a thin gold hairline
 * that draws in, then the curtain wipes off the top to reveal the new page.
 * Choreographed and brief (~1000ms total). Skipped on the first paint and
 * for users with `prefers-reduced-motion`.
 */
const TOTAL_MS = 1100;
const EXIT_AT = 850;

export const RouteTransition = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    setVisible(true);
    setPhase("enter");
    window.scrollTo(0, 0);

    const toHold = window.setTimeout(() => setPhase("hold"), 320);
    const toExit = window.setTimeout(() => setPhase("exit"), EXIT_AT);
    const toHide = window.setTimeout(() => setVisible(false), TOTAL_MS);

    return () => {
      window.clearTimeout(toHold);
      window.clearTimeout(toExit);
      window.clearTimeout(toHide);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Caricamento pagina"
      className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
    >
      {/* Curtain */}
      <div
        className="absolute inset-0 bg-primary will-change-transform"
        style={{
          transform:
            phase === "enter"
              ? "translate3d(0, 100%, 0)"
              : "translate3d(0, 0, 0)",
          opacity: phase === "exit" ? 0 : 1,
          transition:
            "transform 520ms cubic-bezier(0.76, 0, 0.24, 1), opacity 280ms ease-out",
        }}
      >
        {/* Texture + subtle gold halo for parchment depth */}
        <div aria-hidden className="absolute inset-0 bg-noise opacity-25" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background:
              "radial-gradient(45% 55% at 50% 50%, hsl(var(--gold)) 0%, transparent 65%)",
          }}
        />

        {/* Centered mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex flex-col items-center gap-6"
            style={{
              opacity: phase === "hold" ? 1 : 0,
              transform: phase === "hold" ? "scale(1)" : "scale(0.985)",
              transition:
                "opacity 380ms cubic-bezier(0.22, 1, 0.36, 1) 80ms, transform 520ms cubic-bezier(0.22, 1, 0.36, 1) 80ms",
            }}
          >
            <img
              src={logoFullSquare}
              alt="Studio Legale Accarino"
              className="h-24 lg:h-28 w-auto"
              draggable={false}
            />
            {/* Hairline draws in */}
            <span
              aria-hidden
              className="block h-px bg-gold origin-center"
              style={{
                width: 72,
                transform: phase === "hold" ? "scaleX(1)" : "scaleX(0)",
                transition:
                  "transform 520ms cubic-bezier(0.22, 1, 0.36, 1) 160ms",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
