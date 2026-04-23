import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type ResultDetail = {
  value: string;
  label: string;
  caseType: string;
  detail: {
    title: string;
    summary: string;
    procedure: string;
    duration: string;
    outcome: string;
  };
};

const HOLD_MS = 600;

export default function ResultCard({
  result,
  index,
  isFirst,
}: {
  result: ResultDetail;
  index: number;
  isFirst: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const cancelHold = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    startRef.current = null;
    setProgress(0);
  };

  const startHold = () => {
    cancelHold();
    startRef.current = performance.now();
    const tick = (t: number) => {
      if (startRef.current === null) return;
      const elapsed = t - startRef.current;
      const p = Math.min(1, elapsed / HOLD_MS);
      setProgress(p);
      if (p >= 1) {
        cancelHold();
        setOpen(true);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => () => cancelHold(), []);

  return (
    <>
      <button
        type="button"
        onMouseDown={startHold}
        onMouseUp={cancelHold}
        onMouseLeave={cancelHold}
        onTouchStart={startHold}
        onTouchEnd={cancelHold}
        onTouchCancel={cancelHold}
        onContextMenu={(e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={`group relative text-left w-full px-2 lg:px-6 ${
          isFirst ? "lg:pl-0" : ""
        } pt-6 lg:pt-0 select-none cursor-pointer animate-fade-up focus:outline-none`}
        style={{ animationDelay: `${index * 120}ms` }}
        aria-label={`${result.value} — ${result.label}. Tieni premuto per i dettagli.`}
      >
        {/* Hold progress bar */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-2 lg:left-6 right-2 lg:right-6 top-0 h-px overflow-hidden"
        >
          <span
            className="block h-full bg-gold transition-[width] duration-75"
            style={{ width: `${progress * 100}%`, opacity: progress > 0 ? 1 : 0 }}
          />
        </span>

        <p className="font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] text-gold leading-[1.05] tracking-tight break-words hyphens-auto transition-transform duration-300 group-hover:-translate-y-0.5">
          {result.value}
        </p>
        <p className="mt-3 text-sm text-background font-serif break-words">{result.label}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-background/60 break-words">
          {result.caseType}
        </p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-gold/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ◍ Tieni premuto
        </p>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg bg-primary text-primary-foreground border-gold/30">
          <DialogHeader>
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold mb-2">
              {result.caseType}
            </p>
            <DialogTitle className="font-serif text-3xl text-gold leading-tight">
              {result.detail.title}
            </DialogTitle>
            <DialogDescription className="text-background/70 font-serif italic pt-2">
              {result.detail.summary}
            </DialogDescription>
          </DialogHeader>
          <dl className="mt-4 space-y-4 text-sm">
            <div className="grid grid-cols-3 gap-4 border-t border-background/10 pt-4">
              <dt className="text-[10px] uppercase tracking-[0.2em] text-background/60">
                Procedura
              </dt>
              <dd className="col-span-2 text-background">
                {result.detail.procedure}
              </dd>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-background/10 pt-4">
              <dt className="text-[10px] uppercase tracking-[0.2em] text-background/60">
                Durata
              </dt>
              <dd className="col-span-2 text-background">
                {result.detail.duration}
              </dd>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-background/10 pt-4">
              <dt className="text-[10px] uppercase tracking-[0.2em] text-background/60">
                Esito
              </dt>
              <dd className="col-span-2 text-gold font-serif">
                {result.detail.outcome}
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-[10px] italic text-background/40 border-t border-background/10 pt-4">
            Caso anonimizzato. Esempio illustrativo, non garanzia di risultato.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
