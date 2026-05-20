import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoFullSquare from "@/assets/logo-full-square.svg";

/**
 * Click-intercepting route transition. We hijack in-app link clicks, run the
 * curtain enter animation on the CURRENT page, only then navigate to the
 * destination, hold briefly with the wordmark + gold hairline, and finally
 * fade the curtain away. This eliminates the brief flash of the next page
 * before the curtain. Respects `prefers-reduced-motion`.
 */
type Phase = "idle" | "covering" | "held" | "revealing";

const COVER_MS = 850;   // curtain slides in from bottom
const HOLD_MS = 650;    // logo on screen while page swaps
const REVEAL_MS = 700;  // curtain fades out

export const RouteTransition = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => {
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;
      if (/^(mailto:|tel:|#)/i.test(href)) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;

      const nextPath = url.pathname + url.search + url.hash;
      if (url.pathname === pathname) return; // same page, let default scroll behavior handle it

      e.preventDefault();

      if (reduced) {
        navigate(nextPath);
        return;
      }

      clearTimers();
      setPhase("covering");

      // After cover completes, swap the route, then hold, then reveal.
      timers.current.push(
        window.setTimeout(() => {
          navigate(nextPath);
          window.scrollTo(0, 0);
          setPhase("held");
        }, COVER_MS)
      );
      timers.current.push(
        window.setTimeout(() => setPhase("revealing"), COVER_MS + HOLD_MS)
      );
      timers.current.push(
        window.setTimeout(
          () => setPhase("idle"),
          COVER_MS + HOLD_MS + REVEAL_MS
        )
      );
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, [navigate, pathname]);

  if (phase === "idle") return null;

  const covered = phase !== "covering"; // covering keyframe handles the slide; held/revealing keep it at 0
  const fading = phase === "revealing";
  const showLogo = phase === "held" || phase === "revealing" || phase === "covering";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Caricamento pagina"
      className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-primary will-change-transform"
        style={{
          transform: covered ? "translate3d(0, 0, 0)" : undefined,
          animation:
            phase === "covering"
              ? `rt-cover ${COVER_MS}ms cubic-bezier(0.65, 0, 0.35, 1) forwards`
              : undefined,
          opacity: fading ? 0 : 1,
          transition: `opacity ${REVEAL_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        <div aria-hidden className="absolute inset-0 bg-noise opacity-25" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background:
              "radial-gradient(45% 55% at 50% 50%, hsl(var(--gold)) 0%, transparent 65%)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex flex-col items-center gap-6"
            style={{
              opacity: showLogo ? 1 : 0,
              transform: showLogo ? "scale(1)" : "scale(0.97)",
              transition:
                "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) 220ms, transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 220ms",
            }}
          >
            <img
              src={logoFullSquare}
              alt="Studio Legale Accarino"
              className="h-24 lg:h-28 w-auto"
              draggable={false}
            />
            <span
              aria-hidden
              className="block h-px bg-gold origin-center"
              style={{
                width: 88,
                transform: showLogo ? "scaleX(1)" : "scaleX(0)",
                transition:
                  "transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 420ms",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
