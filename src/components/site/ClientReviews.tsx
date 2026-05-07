import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export type ClientReview = {
  initials: string;
  city: string;
  role: string;
  text: string;
};

/**
 * Anonymized client reviews — placeholder copy designed to be
 * replaced by real testimonials or a Google Reviews integration.
 */
const DEFAULT_REVIEWS: ClientReview[] = [
  {
    initials: "M.R.",
    city: "Salerno",
    role: "Imprenditore edile",
    text:
      "Procedimento complesso seguito con metodo chirurgico. In sei mesi abbiamo ottenuto l'annullamento del provvedimento e ripreso i lavori. Comunicazione costante, nessuna sorpresa.",
  },
  {
    initials: "G.B.",
    city: "Napoli",
    role: "Amministratore di società",
    text:
      "Lo studio ci ha guidati con chiarezza in un contenzioso TAR delicato. Strategia processuale impeccabile, scrittura difensiva di altissimo livello. Esito favorevole.",
  },
  {
    initials: "L.C.",
    city: "Avellino",
    role: "Privato cittadino",
    text:
      "Mi hanno spiegato ogni passaggio in modo comprensibile, senza tecnicismi inutili. Tempi rispettati e parcella trasparente fin dal primo incontro.",
  },
];

export function ClientReviews({
  reviews = DEFAULT_REVIEWS,
  eyebrow = "La voce dei clienti",
  title = "Quello che dicono di noi.",
}: {
  reviews?: ClientReview[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-background border-b hairline">
      <div className="editorial-container py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold-deep font-semibold">
                <span className="h-px w-8 bg-gold/60" />
                {eyebrow}
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-4xl lg:text-5xl text-primary leading-[1.05] text-balance">
                {title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5">
            <p className="text-sm text-muted-foreground leading-relaxed lg:text-right max-w-md lg:ml-auto">
              Testimonianze anonimizzate nel rispetto del segreto professionale.
              Citazioni autorizzate dai clienti.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-primary/10 border hairline">
          {reviews.map((r, i) => (
            <Reveal
              key={r.initials + i}
              delay={i * 120}
              className="bg-background"
            >
              <article className="relative h-full p-8 lg:p-10 flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 text-gold fill-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-lg lg:text-xl text-primary leading-relaxed text-pretty flex-1">
                  "{r.text}"
                </blockquote>

                {/* Attribution */}
                <div className="mt-8 pt-6 border-t hairline flex items-center gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary text-gold font-serif text-sm tracking-wide">
                    {r.initials}
                  </span>
                  <div className="text-[11px] uppercase tracking-[0.18em]">
                    <p className="text-primary font-semibold">{r.role}</p>
                    <p className="text-muted-foreground mt-1 normal-case tracking-normal text-xs">
                      {r.city}
                    </p>
                  </div>
                </div>

                {/* Gold corner accent */}
                <span
                  aria-hidden
                  className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
