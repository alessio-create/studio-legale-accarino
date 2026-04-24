import { useEffect, useState } from "react";
import { MapPin, Star } from "lucide-react";

/**
 * Curated local reviews displayed as a live, rotating ticker.
 *
 * Mimics a "real-time" feed (live pulse dot + relative timestamps that
 * decrement on every interval) without requiring any backend integration.
 * Reviews are anonymised by initial + city in the spirit of legal-sector
 * confidentiality.
 *
 * Variants:
 *   - "compact": single horizontal line, ideal for the navbar / mega-menu
 *   - "stack":   stacked card with quote + author, for sidebar/footer use
 */
export interface LocalReview {
  initial: string;
  city: string;
  rating: number;
  quote: string;
  /** Minutes ago at component mount; ticks up over time. */
  minutesAgo: number;
  practice: string;
}

const REVIEWS: LocalReview[] = [
  {
    initial: "M.R.",
    city: "Salerno",
    rating: 5,
    quote:
      "Hanno ottenuto la sospensiva in 28 giorni. Spiegazioni chiare, zero giri di parole.",
    minutesAgo: 3,
    practice: "Appalti Pubblici",
  },
  {
    initial: "G.D.",
    city: "Cava de' Tirreni",
    rating: 5,
    quote:
      "Indennità di esproprio quasi triplicata. Trasparenza assoluta in ogni passaggio.",
    minutesAgo: 12,
    practice: "Espropriazioni",
  },
  {
    initial: "A.P.",
    city: "Battipaglia",
    rating: 5,
    quote:
      "Ricorso TAR vinto al primo grado. Professionalità e risposta puntuale.",
    minutesAgo: 27,
    practice: "Concorsi Pubblici",
  },
  {
    initial: "F.L.",
    city: "Nocera Inferiore",
    rating: 5,
    quote:
      "Sanatoria edilizia ottenuta nonostante il vincolo. Gestione impeccabile.",
    minutesAgo: 44,
    practice: "Urbanistica",
  },
  {
    initial: "C.E.",
    city: "Pagani",
    rating: 5,
    quote:
      "Studio serio, pareri tecnici puntuali. Difesa solida davanti al Consiglio di Stato.",
    minutesAgo: 61,
    practice: "Diritto Amministrativo",
  },
];

const formatRelative = (mins: number) => {
  if (mins < 1) return "ora";
  if (mins < 60) return `${mins} min fa`;
  const h = Math.floor(mins / 60);
  if (h < 24) return `${h} ${h === 1 ? "ora" : "ore"} fa`;
  const d = Math.floor(h / 24);
  return `${d} ${d === 1 ? "giorno" : "giorni"} fa`;
};

interface Props {
  variant?: "compact" | "stack";
  /** ms between rotations */
  intervalMs?: number;
  className?: string;
}

export const LiveReviewsTicker = ({
  variant = "stack",
  intervalMs = 5500,
  className = "",
}: Props) => {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0); // forces "X min fa" to refresh
  const [animKey, setAnimKey] = useState(0);

  // Rotate the visible review.
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
      setAnimKey((k) => k + 1);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  // Bump relative time once a minute so the feed feels alive.
  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const current = REVIEWS[index];
  const minutes = current.minutesAgo + tick;
  const relative = formatRelative(minutes);

  if (variant === "compact") {
    return (
      <div
        className={`flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] ${className}`}
      >
        <span className="relative flex items-center justify-center w-2.5 h-2.5">
          <span
            aria-hidden
            className="absolute inline-flex w-full h-full rounded-full bg-emerald-500/40 animate-live-pulse"
          />
          <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-gold-deep font-semibold">Live</span>
        <span aria-hidden className="h-3 w-px bg-border" />
        <div
          key={animKey}
          className="flex items-center gap-2 animate-review-in min-w-0"
        >
          <span className="font-serif normal-case tracking-normal text-sm text-primary truncate">
            "{current.quote}"
          </span>
          <span className="text-muted-foreground whitespace-nowrap">
            — {current.initial}, {current.city} · {relative}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative bg-background border hairline overflow-hidden ${className}`}
    >
      {/* live indicator */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex items-center justify-center w-2.5 h-2.5">
            <span
              aria-hidden
              className="absolute inline-flex w-full h-full rounded-full bg-emerald-500/40 animate-live-pulse"
            />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-emerald-600 font-semibold">
            Recensioni live
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <MapPin className="w-3 h-3 text-gold-deep" />
          Provincia di Salerno
        </span>
      </div>

      <div key={animKey} className="px-5 pb-5 pt-3 animate-review-in">
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: current.rating }).map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 text-gold fill-gold"
              strokeWidth={1}
            />
          ))}
        </div>
        <p className="font-serif text-base text-primary leading-snug text-balance">
          "{current.quote}"
        </p>
        <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em]">
          <span className="text-gold-deep font-semibold">
            {current.initial} · {current.city}
          </span>
          <span className="text-muted-foreground normal-case tracking-normal">
            {current.practice} · {relative}
          </span>
        </div>
      </div>

      {/* progress bar — visual cue of the rotation cadence */}
      <div
        key={`bar-${animKey}`}
        className="h-px bg-gold/70 origin-left"
        style={{
          animation: `mega-in ${intervalMs}ms linear forwards`,
          transform: "scaleX(0)",
          animationName: "ticker-progress",
        }}
      />
      <style>{`
        @keyframes ticker-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};