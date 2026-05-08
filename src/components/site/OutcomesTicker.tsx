import type { PracticeOutcome } from "./PracticePageTemplate";

interface Props {
  outcomes: PracticeOutcome[];
}

/**
 * Outcomes presented as a slim editorial marquee — same rhythm and
 * vocabulary as the MaximTicker so the page reads as one composition.
 * Each item pairs a gold serif numeral (the result) with an uppercase
 * label and a smaller case-type tag.
 */
export const OutcomesTicker = ({ outcomes }: Props) => {
  const loop = [...outcomes, ...outcomes];

  return (
    <section
      aria-label="Risultati ottenuti per i clienti"
      className="bg-primary-deep text-background border-y border-gold/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-20" aria-hidden />

      {/* Eyebrow row */}
      <div className="relative editorial-container pt-10 pb-6 flex items-center justify-between gap-6">
        <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
          <span aria-hidden className="h-px w-8 bg-gold/60" />
          Risultati che parlano per noi
        </span>
        <span className="hidden md:inline text-[10px] uppercase tracking-[0.22em] text-background/50">
          Casi anonimizzati · Esempi illustrativi
        </span>
      </div>

      <div
        className="relative flex overflow-hidden pb-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex w-max animate-ticker items-center gap-16 whitespace-nowrap">
          {loop.map((o, i) => (
            <span
              key={`${o.label}-${i}`}
              className="flex items-center gap-16 pr-16"
            >
              <span className="flex items-baseline gap-5">
                <span className="font-serif italic text-[clamp(1.6rem,2.4vw,2.4rem)] leading-none text-gold">
                  {o.value}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[12px] uppercase tracking-[0.22em] text-background/90 font-semibold">
                    {o.label}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-background/50">
                    {o.caseType}
                  </span>
                </span>
              </span>
              <span
                aria-hidden
                className="w-1 h-1 rotate-45 bg-gold/70 flex-shrink-0"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};