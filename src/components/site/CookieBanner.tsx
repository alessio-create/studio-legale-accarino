import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "studio.cookie-consent";
type Consent = "accepted" | "essential" | null;

/**
 * Editorial cookie banner — bottom-left card with hairline frame and
 * gold corner accents. Persists choice in localStorage so it appears
 * only on first load (or until the user clears storage).
 */
export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY) as Consent;
      if (!v) {
        // Slight delay so it doesn't fight the hero animation.
        const t = window.setTimeout(() => setVisible(true), 600);
        return () => window.clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (c: Exclude<Consent, null>) => {
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-[60] animate-fade-in"
    >
      <div className="relative bg-background border hairline shadow-2xl p-5 lg:p-6">
        {/* Gold corner accents */}
        <span aria-hidden className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold" />
        <span aria-hidden className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold" />
        <span aria-hidden className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold" />
        <span aria-hidden className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold" />

        <button
          onClick={() => choose("essential")}
          aria-label="Chiudi"
          className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-primary transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-start gap-3">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/5 text-gold-deep flex-shrink-0">
            <Cookie className="w-4 h-4" strokeWidth={1.75} />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
              Privacy
            </p>
            <h3 className="mt-1 font-serif text-base text-primary leading-snug">
              Rispettiamo la tua riservatezza.
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Utilizziamo cookie tecnici essenziali e, previo consenso, cookie
              analitici per migliorare il sito. Consulta la{" "}
              <Link to="/" className="text-gold-deep underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => choose("accepted")}
            className="flex-1 min-w-[140px] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold bg-primary text-primary-foreground hover:bg-primary-glow transition-colors"
          >
            Accetta tutti
          </button>
          <button
            onClick={() => choose("essential")}
            className="flex-1 min-w-[140px] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold border border-primary/25 text-primary hover:border-gold hover:text-gold-deep transition-colors"
          >
            Solo essenziali
          </button>
        </div>
      </div>
    </div>
  );
};