import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
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
  detail?: {
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
  const hasDetail = Boolean(result.detail);

  const cancelHold = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    startRef.current = null;
    setProgress(0);
  };

  const startHold = () => {
    if (!hasDetail) return;
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
          if (!hasDetail) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className={`group relative text-left w-full px-6 lg:px-8 py-8 lg:py-10 select-none animate-fade-up focus:outline-none transition-colors duration-300 hover:bg-background/[0.03] ${
          hasDetail ? "cursor-pointer" : "cursor-default"
        }`}
        style={{ animationDelay: `${index * 120}ms` }}
        aria-label={
          hasDetail
            ? `${result.value} — ${result.label}. Tieni premuto per i dettagli.`
            : `${result.value} — ${result.label}`
        }
      >
        {/* Hold progress bar */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-6 lg:left-8 right-6 lg:right-8 top-0 h-px overflow-hidden"
        >
          <span
            className="block h-full bg-gold transition-[width] duration-75"
            style={{ width: `${progress * 100}%`, opacity: progress > 0 ? 1 : 0 }}
          />
        </span>

        {/* Index marker */}
        <span className="block text-[10px] uppercase tracking-[0.28em] text-gold/60 mb-5 font-medium">
          {String(index + 1).padStart(2, "0")}
        </span>

        <p
          className="font-serif text-gold leading-[1.05] tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 hyphens-none"
          style={{
            fontSize: "clamp(1.5rem, 1.9vw, 2.125rem)",
            wordBreak: "keep-all",
            overflowWrap: "normal",
          }}
        >
          {result.value}
        </p>
        <p className="mt-6 text-[15px] text-background/90 font-serif leading-snug">
          {result.label}
        </p>
        <span aria-hidden className="block mt-5 h-px w-8 bg-gold/40 group-hover:w-12 transition-all duration-300" />
        <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-background/45">
          {result.caseType}
        </p>
        {hasDetail && (
          <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-gold/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ◍ Tieni premuto
          </p>
        )}
      </button>

      {hasDetail && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md bg-primary text-primary-foreground border-gold/30 p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              {result.caseType}
            </p>
            <DialogTitle className="font-serif text-xl md:text-2xl text-gold leading-tight">
              {result.detail!.title}
            </DialogTitle>
            <DialogDescription className="text-background/70 font-serif italic text-sm leading-snug">
              {result.detail!.summary}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-3 rounded-md border border-background/10 bg-background/[0.04] py-3 px-4 text-center">
            <p className="font-serif text-3xl md:text-4xl text-gold leading-none">
              {result.value}
            </p>
            <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-background/60">
              {result.label}
            </p>
          </div>
          <DetailAccordion
            items={[
              { label: "Procedura", value: result.detail!.procedure },
              { label: "Durata", value: result.detail!.duration },
              { label: "Esito", value: result.detail!.outcome, highlight: true },
            ]}
          />
          <p className="mt-3 text-[10px] italic text-background/40 border-t border-background/10 pt-3">
            Caso anonimizzato. Esempio illustrativo, non garanzia di risultato.
          </p>
        </DialogContent>
      </Dialog>
      )}
    </>
  );
}

function DetailAccordion({
  items,
}: {
  items: { label: string; value: string; highlight?: boolean }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-3 border-t border-background/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.label} className="border-b border-background/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-2.5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-background/70">
                {it.label}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gold/70 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`pb-3 pr-6 text-sm leading-snug ${
                    it.highlight ? "text-gold font-serif" : "text-background/90"
                  }`}
                >
                  {it.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
