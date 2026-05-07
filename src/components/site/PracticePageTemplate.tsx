import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Clock, LucideIcon, Phone, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { FAQ, FAQItem } from "./FAQ";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import ResultCard from "./ResultCard";
import { ProcessIllustration, PROCESS_VARIANTS } from "./ProcessIllustration";
import { ClientReviews } from "./ClientReviews";
import { BlueprintBackdrop } from "./BlueprintBackdrop";
import { PracticeIntroSection } from "./PracticeIntroSection";
import { procedures, type Procedure } from "@/data/procedures";

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
  whoFor, services, process, stats, faq, intro,
  outcomes, signatureQuote: _signatureQuote, practiceArea,
}: Props) => {
  const areaProcedures = practiceArea
    ? procedures.filter((p) => p.practiceArea === practiceArea)
    : [];
  return (
    <>
      {/* Hero — canonical editorial composition */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
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
              <h1 className="mt-8 serif-display text-display-2xl text-primary text-balance leading-[1.04]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                {lead}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton to="/contatti">Prenota una consulenza</CTAButton>
                <a
                  href="tel:+390891234567"
                  className="inline-flex items-center gap-3 px-6 py-4 text-label-sm uppercase tracking-[0.16em] text-primary hover:text-gold-deep transition-colors border border-primary/20 hover:border-gold"
                >
                  <Phone className="w-4 h-4 text-gold-deep" strokeWidth={2} />
                  089 123 4567
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative gold-corner p-3">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-[420px] object-cover grayscale-[20%]"
                width={900}
                height={1100}
                loading="lazy"
              />
              <div className="absolute -bottom-px left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 flex items-center gap-3">
                <Icon className="w-5 h-5 text-gold" />
                <span className="text-[11px] uppercase tracking-[0.2em]">
                  Area Specializzata
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes strip (optional) */}
      {outcomes && outcomes.length > 0 && (
        <section className="bg-primary text-primary-foreground border-y border-gold/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-25" />
          {/* Premium ambient gold wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              background:
                "radial-gradient(60% 70% at 0% 0%, hsl(var(--gold)) 0%, transparent 60%), radial-gradient(50% 60% at 100% 100%, hsl(var(--gold)) 0%, transparent 60%)",
            }}
          />
          <span aria-hidden className="absolute top-0 left-0 right-0 h-px bg-gradient-gold-line opacity-60" />
          <span aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-gold-line opacity-40" />

          <div className="relative editorial-container py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20 items-end">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold font-semibold">
                  <span className="h-px w-8 bg-gold/60" />
                  Risultati che parlano per noi
                </span>
                <h2 className="mt-6 font-serif text-4xl lg:text-5xl text-background leading-[1.05] text-balance">
                  Casi reali, esiti concreti.
                </h2>
              </div>
              <p className="lg:col-span-5 text-sm text-background/55 leading-relaxed lg:text-right max-w-md lg:ml-auto">
                Esempi illustrativi del tipo di esito ottenibile. Casi anonimizzati nel rispetto del segreto professionale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((o, i) => (
                <div
                  key={o.label + i}
                  className={`relative ${
                    i > 0 ? "lg:border-l lg:border-background/10" : ""
                  } ${i > 0 && i % 2 !== 0 ? "sm:border-l sm:border-background/10 lg:border-l" : ""}`}
                >
                  <ResultCard result={o} index={i} isFirst={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
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
        <div className="relative editorial-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold-deep font-semibold">
                  <span className="h-px w-8 bg-gold/60" />
                  I servizi
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-6 font-serif text-4xl lg:text-5xl text-primary leading-[1.05] text-balance">
                  Assistenza completa,<br />in ogni fase del procedimento.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <p className="text-base text-muted-foreground leading-relaxed lg:text-right max-w-md lg:ml-auto">
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

      {/* Procedure dell'area — full editorial list */}
      {areaProcedures.length > 0 && (
        <section id="procedure" className="bg-background border-b hairline">
          <div className="editorial-container py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">
              <div className="lg:col-span-5">
                <SectionHeader
                  eyebrow="Le procedure"
                  title={`${areaProcedures.length} procedure dedicate a quest'area.`}
                  compact
                />
              </div>
              <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
                Ogni procedura è una monografia editoriale a sé: contesto normativo,
                strategia processuale, tempistiche, esiti tipici. Apri quella che ti
                riguarda per leggere il dossier completo.
              </p>
            </div>

            <ol className="border-t hairline">
              {areaProcedures.map((p, i) => (
                <li
                  key={p.slug}
                  className="border-b hairline group"
                >
                  <Link
                    to={`/${p.slug}`}
                    className="grid grid-cols-12 gap-6 lg:gap-10 py-8 lg:py-10 items-start hover:bg-surface-container-low transition-colors -mx-4 px-4 lg:-mx-6 lg:px-6"
                  >
                    {/* Numeral */}
                    <span className="col-span-2 lg:col-span-1 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold tabular-nums pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Title + lead */}
                    <div className="col-span-10 lg:col-span-8">
                      <h3 className="font-serif text-2xl lg:text-[1.7rem] text-primary leading-tight text-balance group-hover:text-gold-deep transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed text-pretty">
                        {p.lead}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                          <Clock className="w-3 h-3 text-gold-deep" />
                          {p.readingTime} min
                        </span>
                        <span aria-hidden className="w-1 h-1 rounded-full bg-gold/60" />
                        <span>{p.audience}</span>
                        {p.normativa.length > 0 && (
                          <>
                            <span aria-hidden className="w-1 h-1 rounded-full bg-gold/60" />
                            <span className="text-primary/60 normal-case tracking-normal">
                              {p.normativa.slice(0, 2).join(" · ")}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex col-span-3 justify-end items-start pt-2">
                      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                        Apri dossier
                        <ArrowUpRight
                          className="w-3.5 h-3.5 text-gold-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={1.75}
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Process — line-art illustrated steps */}
      <section className="relative bg-background border-b hairline overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            background:
              "radial-gradient(50% 70% at 0% 100%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold-deep font-semibold">
                  <span className="h-px w-8 bg-gold/60" />
                  Il metodo
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-6 font-serif text-4xl lg:text-5xl text-primary leading-[1.05] text-balance">
                  Un processo trasparente,<br />in quattro tempi.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <p className="text-base text-muted-foreground leading-relaxed lg:text-right max-w-md lg:ml-auto">
                Ogni mandato segue un iter strutturato e prevedibile. Dalla prima
                analisi alla decisione finale, il cliente riceve aggiornamenti
                puntuali e tempistiche certe.
              </p>
            </Reveal>
          </div>

          {/* Connecting hairline (desktop) */}
          <div className="relative">
            <span
              aria-hidden
              className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            />
            <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {process.map((step, i) => (
                <Reveal key={step.num} delay={i * 140}>
                  <li className="group relative flex flex-col items-center text-center px-2">
                    <ProcessIllustration
                      variant={PROCESS_VARIANTS[i % PROCESS_VARIANTS.length]}
                      index={i}
                    />
                    <span className="mt-6 text-[10px] uppercase tracking-[0.28em] text-gold-deep font-semibold tabular-nums">
                      Fase {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-3 font-serif text-xl lg:text-[1.35rem] text-primary leading-snug text-balance">
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

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="editorial-container relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 divide-x divide-background/10">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-4 lg:px-8 ${i === 0 ? "lg:pl-0" : ""}`}>
                <p className="font-serif text-display-xl text-gold leading-none">{s.value}</p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-background/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client reviews — placed just before FAQ */}
      <ClientReviews />

      {/* FAQ */}
      <section className="bg-surface-container-low border-y hairline">
        <div className="editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Domande frequenti"
              title="Le risposte alle domande più comuni."
              intro="Hai un quesito specifico? Prenota una consulenza riservata di 15 minuti."
              compact
            />
            <div className="mt-8">
              <CTAButton to="/contatti" variant="ghost">Parla con un avvocato</CTAButton>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQ items={faq} />
          </div>
        </div>
      </section>

      {/* Final CTA — premium animated blueprint backdrop */}
      <section className="relative bg-primary text-primary-foreground border-y border-gold/30 overflow-hidden">
        <BlueprintBackdrop />
        <div className="relative editorial-container py-28 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <Reveal>
                <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold font-semibold">
                  <span aria-hidden className="w-6 h-px bg-gold" />
                  Termini decadenziali stretti
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-8 serif-display text-display-xl lg:text-display-2xl text-background text-balance leading-[1.02]">
                  Ogni giorno conta.<br />
                  <span className="text-gold italic font-light">Agisci entro i termini.</span>
                </h2>
                <p className="mt-8 text-lg text-background/75 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Prima consulenza gratuita, entro 48 ore dalla richiesta.
                  Riservata, senza impegno, condotta da un avvocato del team.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
                  <CTAButton to="/contatti" variant="gold">
                    Parla con un avvocato
                  </CTAButton>
                  <a
                    href="tel:+390891234567"
                    className="inline-flex items-center gap-3 px-6 py-4 text-label-sm uppercase tracking-[0.16em] text-background hover:text-gold transition-colors border border-background/25 hover:border-gold"
                  >
                    <Phone className="w-4 h-4 text-gold" strokeWidth={2} />
                    089 123 4567
                  </a>
                </div>
              </Reveal>
            </div>

            {/* What you get */}
            <Reveal delay={300} className="lg:col-span-5">
              <div className="relative gold-corner-frame bg-primary/40 backdrop-blur-sm p-8 lg:p-10">
                <p className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  La consulenza include
                </p>
                <ul className="mt-6 space-y-5">
                  {[
                    "Inquadramento giuridico del caso",
                    "Valutazione dei termini decadenziali",
                    "Strategia processuale preliminare",
                    "Stima onorari trasparente",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-background/90 animate-fade-in"
                      style={{ animationDelay: `${400 + i * 100}ms` }}
                    >
                      <Check
                        className="w-4 h-4 text-gold mt-1 flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="leading-relaxed text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-background/15 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-background/60">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  Risposta entro 48 ore
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};
