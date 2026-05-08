/**
 * Editorial values marquee — used on the Studio page between the hero
 * and the heritage block. Mirrors the visual rhythm of MaximTicker but
 * carries the firm's foundational pillars as uppercase tracked labels
 * separated by gold diamond markers.
 */
const items = [
  "Le nostre fondamenta",
  "Rigore tecnico",
  "Riservatezza assoluta",
  "Risultato misurabile",
  "Continuità professionale",
  "Esperienza dal 1974",
  "Patrocinio cassazionista",
  "Due sedi · Salerno · Cava",
  "Network accademico nazionale",
  "Interlocutore unico",
] as const;

export function ValuesTicker() {
  const loop = [...items, ...items];
  return (
    <section
      aria-label="I valori dello Studio"
      className="bg-primary-deep text-background border-y border-gold/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div
        className="relative flex overflow-hidden py-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-ticker items-center gap-12 whitespace-nowrap">
          {loop.map((it, i) => (
            <span key={`${it}-${i}`} className="flex items-center gap-12 pr-12">
              <span className="text-[11px] uppercase tracking-[0.28em] text-background/85 font-semibold">
                {it}
              </span>
              <span aria-hidden className="block w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
