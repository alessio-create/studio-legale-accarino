import { ReactNode } from "react";
import { LucideIcon, Phone } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { FAQ, FAQItem } from "./FAQ";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { ClientReviews } from "./ClientReviews";
import { PracticeIntroSection } from "./PracticeIntroSection";
import { OutcomesTicker } from "./OutcomesTicker";
import type { Procedure } from "@/data/procedures";

export interface PracticeStat { value: string; label: string }
export interface PracticeStep { num: string; title: string; description: string }
export interface PracticeOutcome { value: string; label: string; caseType: string }

interface Props {
  number: string;
  eyebrow: string;
  title: string;
  lead: string;
  heroImage: string;
  icon: LucideIcon;
  whoFor: string[];
  services: { title: string; description: string }[];
  process: PracticeStep[];
  stats: PracticeStat[];
  faq: FAQItem[];
  intro: ReactNode;
  outcomes?: PracticeOutcome[];
  signatureQuote?: { quote: string; attribution?: string };
  /** When provided, renders the full list of procedures of that area
   *  with editorial copy and links to the dedicated pages. */
  practiceArea?: Procedure["practiceArea"];
}

export const PracticePageTemplate = ({
  number, eyebrow, title, lead, heroImage, icon: Icon,
  whoFor, services, process, stats: _stats, faq, intro,
  outcomes, signatureQuote: _signatureQuote, practiceArea,
}: Props) => {
  void practiceArea;
  return (
    <>
      {/* Hero — canonical editorial composition */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div className="relative editorial-container py-12 sm:py-16 lg:py-28 grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                <span className="font-serif italic normal-case tracking-normal text-gold-deep text-base not-italic-on-print">
                  {number}
                </span>
                <span aria-hidden className="w-3 h-px bg-gold/50" />
                <span>{eyebrow}</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 sm:mt-8 serif-display text-display-2xl text-primary text-balance leading-[1.06]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 sm:mt-8 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                {lead}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-7 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                <CTAButton to="/contatti">Parla con un avvocato</CTAButton>
                <a
                  href="tel:+390891234567"
                  className="group inline-flex items-center justify-center gap-2.5 px-5 py-3 min-h-[44px] text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors duration-300"
                >
                  <Phone
                    className="w-3.5 h-3.5 text-gold-deep transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                  <span>089 123 4567</span>
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative gold-corner p-3">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-[240px] sm:h-[340px] lg:h-[420px] object-cover grayscale-[20%]"
                width={900}
                height={1100}
                loading="lazy"
              />
              <div className="absolute -bottom-px left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">
                  Area Specializzata
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes — marquee ticker matching the page rhythm */}
      {outcomes && outcomes.length > 0 && (
        <OutcomesTicker outcomes={outcomes} />
      )}

      {/* Intro & For Whom */}
      <section className="relative bg-background border-b hairline overflow-hidden">
        {/* Subtle gold ambient wash for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            background:
              "radial-gradient(55% 70% at 100% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <PracticeIntroSection intro={intro} whoFor={whoFor} />
      </section>

      {/* Services — premium asymmetric editorial composition */}
      <section id="servizi" className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(50% 70% at 100% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold-deep font-semibold">
                  <span className="h-px w-8 bg-gold/60" />
                  I servizi
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-5 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.08] text-balance">
                  Assistenza completa,<br />in ogni fase del procedimento.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed lg:text-right max-w-md lg:ml-auto">
                Una squadra dedicata segue ogni mandato dall'analisi preliminare
                fino all'esito finale, con interlocutore unico e tempistiche
                certe.
              </p>
            </Reveal>
          </div>

          {/* Editorial list — uniform typographic scale, gold numerals, hairline rows */}
          <ol className="border-t hairline">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <li className="group border-b hairline">
                  <div className="grid grid-cols-12 gap-6 lg:gap-10 py-7 lg:py-8 items-baseline transition-colors duration-300 hover:bg-background/60 -mx-4 px-4 lg:-mx-6 lg:px-6">
                    {/* Numeral — kept, the user likes it */}
                    <span className="col-span-2 lg:col-span-1 font-serif text-xl lg:text-2xl text-gold/70 tabular-nums leading-none transition-colors duration-300 group-hover:text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <h3 className="col-span-10 lg:col-span-5 font-serif text-xl lg:text-[1.4rem] text-primary leading-snug text-pretty transition-colors duration-300 group-hover:text-gold-deep">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="col-span-12 lg:col-span-5 lg:col-start-8 text-[15px] text-muted-foreground leading-relaxed text-pretty">
                      {s.description}
                    </p>

                    {/* Hover indicator */}
                    <span
                      aria-hidden
                      className="hidden lg:block col-span-1 col-start-12 justify-self-end h-px w-6 bg-gold/30 transition-all duration-500 group-hover:w-10 group-hover:bg-gold"
                    />
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Process — line-art illustrated steps */}
      <section className="relative bg-background border-b hairline overflow-hidden">
        <div className="relative editorial-container py-14 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold-deep font-semibold">
                  <span className="h-px w-8 bg-gold/60" />
                  Il metodo
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-5 sm:mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.08] text-balance">
                  Un processo trasparente,<br />in quattro tempi.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed lg:text-right max-w-md lg:ml-auto">
                Ogni mandato segue un iter strutturato e prevedibile. Dalla prima
                analisi alla decisione finale, il cliente riceve aggiornamenti
                puntuali e tempistiche certe.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8">
              {process.map((step, i) => (
                <Reveal key={step.num} delay={i * 140}>
                  <li className="group relative flex flex-col items-center text-center px-2">
                    {/* Custom separator ticker between phases (desktop) */}
                    {i > 0 && (
                      <span
                        aria-hidden
                        className="hidden lg:flex absolute top-8 -left-4 -translate-y-1/2 items-center gap-1.5"
                      >
                        <span className="block w-1 h-1 rotate-45 bg-gold/70" />
                        <span className="block w-1 h-1 rotate-45 bg-gold" />
                        <span className="block w-1 h-1 rotate-45 bg-gold/70" />
                      </span>
                    )}
                    {/* Engraved roman numeral — minimal, editorial */}
                    <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gold-deep leading-none tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-5 inline-block h-px w-8 bg-gold/60" aria-hidden />
                    <span className="mt-5 text-[10px] uppercase tracking-[0.28em] text-gold-deep font-semibold tabular-nums">
                      Fase {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-3 font-serif text-lg sm:text-xl lg:text-[1.35rem] text-primary leading-snug text-balance">
                      {step.title}
                    </h4>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[28ch]">
                      {step.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Client reviews — placed just before FAQ */}
      <ClientReviews />

      {/* FAQ */}
      <section className="bg-surface-container-low border-y hairline">
        <div className="editorial-container py-14 sm:py-20 lg:py-28 grid lg:grid-cols-12 gap-8 sm:gap-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Domande frequenti"
              title="Le risposte alle domande più comuni."
              intro="Hai un quesito specifico? Prenota una consulenza riservata di 15 minuti."
              compact
            />
            <div className="mt-6 sm:mt-8">
              <CTAButton to="/contatti" variant="ghost">Parla con un avvocato</CTAButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faq} />
          </div>
        </div>
      </section>
    </>
  );
};
