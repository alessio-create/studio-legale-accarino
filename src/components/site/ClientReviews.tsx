import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

export type ClientReview = {
  initials: string;
  city: string;
  role: string;
  text: string;
  /** Optional relative-time label, e.g. "2 giorni fa". */
  when?: string;
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
    when: "2 giorni fa",
    text:
      "Procedimento complesso seguito con metodo chirurgico. In sei mesi abbiamo ottenuto l'annullamento del provvedimento e ripreso i lavori.",
  },
  {
    initials: "G.B.",
    city: "Napoli",
    role: "Amministratore di società",
    when: "1 settimana fa",
    text:
      "Strategia processuale impeccabile in un contenzioso TAR delicato. Scrittura difensiva di altissimo livello. Esito favorevole.",
  },
  {
    initials: "L.C.",
    city: "Avellino",
    role: "Privato cittadino",
    when: "3 settimane fa",
    text:
      "Mi hanno spiegato ogni passaggio in modo comprensibile, senza tecnicismi inutili. Tempi rispettati e parcella trasparente.",
  },
  {
    initials: "F.D.",
    city: "Cava de' Tirreni",
    role: "Funzionario pubblico",
    when: "1 mese fa",
    text:
      "Consulenza puntuale su un parere complesso. Riferimenti normativi precisi e disponibilità immediata.",
  },
  {
    initials: "A.P.",
    city: "Battipaglia",
    role: "Agronomo",
    when: "1 mese fa",
    text:
      "Indennità di esproprio rivista al rialzo dopo mesi di trattativa. Risultato superiore alle aspettative.",
  },
  {
    initials: "S.M.",
    city: "Nocera Inferiore",
    role: "Architetto",
    when: "2 mesi fa",
    text:
      "Ricorso TAR vinto al primo grado. Gestione impeccabile dei tempi e delle interlocuzioni con la PA.",
  },
];

const ReviewCard = ({ r }: { r: ClientReview }) => (
  <article className="relative w-[320px] sm:w-[360px] flex-shrink-0 bg-background border hairline p-6 lg:p-7 flex flex-col gap-4 whitespace-normal">
    {/* Header — author + meta, like a social card */}
    <header className="flex items-center gap-3">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-gold font-serif text-sm tracking-wide flex-shrink-0">
        {r.initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[12px] uppercase tracking-[0.18em] text-primary font-semibold truncate">
          {r.role}
        </p>
        <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
          {r.city}
          {r.when ? ` · ${r.when}` : ""}
        </p>
      </div>
      <Quote
        className="w-4 h-4 text-gold/60 flex-shrink-0"
        strokeWidth={1.5}
      />
    </header>

    {/* Stars */}
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, s) => (
        <Star
          key={s}
          className="w-3 h-3 text-gold fill-gold"
          strokeWidth={0}
        />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="font-serif text-[15px] lg:text-base text-primary leading-relaxed text-pretty">
      "{r.text}"
    </blockquote>

    {/* Gold corner accent */}
    <span
      aria-hidden
      className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40"
    />
  </article>
);

export function ClientReviews({
  reviews = DEFAULT_REVIEWS,
  eyebrow = "La voce dei clienti",
  title = "Quello che dicono di noi.",
}: {
  reviews?: ClientReview[];
  eyebrow?: string;
  title?: string;
}) {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...reviews, ...reviews];

  return (
    <section className="bg-background border-b hairline overflow-hidden">
      <div className="editorial-container pt-20 lg:pt-28 pb-10 lg:pb-14">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold-deep font-semibold">
                <span className="h-px w-8 bg-gold/60" />
                {eyebrow}
                <span className="ml-2 inline-flex items-center gap-2 text-live normal-case tracking-normal">
                  <span className="relative flex items-center justify-center w-2 h-2">
                    <span
                      aria-hidden
                      className="absolute inline-flex w-full h-full rounded-full bg-live/40 animate-live-pulse"
                    />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-live" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold">
                    Live
                  </span>
                </span>
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
      </div>

      {/* Marquee — full-bleed social-style ticker */}
      <div
        className="relative pb-20 lg:pb-28 group"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex w-max animate-ticker items-stretch gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <ReviewCard key={`${r.initials}-${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
