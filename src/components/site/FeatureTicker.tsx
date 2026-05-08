/**
 * Feature / action ticker — sits between the heritage (story) and team
 * sections on the Studio page. A slim dark band that carries the firm’s
 * concrete credentials and action promises, separated by gold diamond markers.
 */
const items = [
  "Patrocinio in Cassazione",
  "Consulenza in 48 ore",
  "50 anni di esperienza",
  "Due sedi operative",
  "Network accademico nazionale",
  "Riservatezza assoluta",
  "Risultato misurabile",
  "Magistrature Superiori",
  "Contenzioso amministrativo",
  "Continuità professionale",
] as const;

export function FeatureTicker() {
  const loop = [...items, ...items];
  return (
    <section
      aria-label="I punti di forza dello Studio"
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
              <span
                aria-hidden
                className="block w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
