/**
 * Slim italic-serif marquee shown between Heritage and Testimonials.
 * Mixes Latin maxims with Italian legal sources to reinforce gravitas.
 */
const items = [
  { kind: "maxim", text: "Audiatur et altera pars" },
  { kind: "source", text: "Art. 42 Cost." },
  { kind: "maxim", text: "Pacta sunt servanda" },
  { kind: "source", text: "L. 241 / 1990" },
  { kind: "maxim", text: "In claris non fit interpretatio" },
  { kind: "source", text: "D.lgs. 50 / 2016" },
  { kind: "maxim", text: "Iura novit curia" },
  { kind: "source", text: "D.P.R. 327 / 2001" },
  { kind: "maxim", text: "Ubi lex voluit dixit" },
  { kind: "source", text: "Cod. Proc. Amm." },
  { kind: "maxim", text: "Nemo iudex in causa sua" },
  { kind: "source", text: "Art. 97 Cost." },
] as const;

export function MaximTicker() {
  const loop = [...items, ...items];
  return (
    <section
      aria-label="Massime di diritto e fonti normative"
      className="bg-primary-deep text-background border-y border-gold/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-monogram-light" />
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
            <span key={`${it.text}-${i}`} className="flex items-center gap-12 pr-12">
              {it.kind === "maxim" ? (
                <span className="font-serif italic text-[clamp(1rem,1.6vw,1.5rem)] text-background/85 leading-none">
                  {it.text}
                </span>
              ) : (
                <span className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                  {it.text}
                </span>
              )}
              <span aria-hidden className="w-1 h-1 rounded-full bg-gold/70 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}