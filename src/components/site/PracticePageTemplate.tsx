import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Clock, LucideIcon, Phone, Quote } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { FAQ, FAQItem } from "./FAQ";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import ResultCard from "./ResultCard";
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
  outcomes, signatureQuote, practiceArea,
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
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Il contesto" title="Una materia di confine, dove conta la strategia." compact />
            <div className="mt-8 prose prose-lg max-w-none">
              <div className="font-serif text-2xl leading-relaxed text-primary text-pretty">
                {intro}
              </div>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="border-l-2 border-gold pl-8 py-2">
              <h3 className="font-serif text-2xl text-primary mb-6">A chi ci rivolgiamo</h3>
              <ul className="space-y-4">
                {whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-gold-deep mt-1.5 flex-shrink-0" strokeWidth={2.5} />
                    <span className="leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-20 lg:py-28">
          <SectionHeader
            eyebrow="I servizi"
            title="Assistenza completa, in ogni fase del procedimento."
          />
          <div className="mt-16 lg:mt-20 grid md:grid-cols-2 gap-px bg-primary/10 border hairline">
            {services.map((s, i) => (
              <div key={s.title} className="bg-background p-10 lg:p-12">
                <span className="text-[11px] tracking-[0.2em] uppercase text-gold-deep font-semibold">
                  Servizio {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-primary leading-snug">{s.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
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

      {/* Process */}
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="Il metodo" title="Un processo trasparente." />
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-lg text-muted-foreground leading-relaxed self-end">
              Ogni mandato segue un iter strutturato e prevedibile. Dalla prima analisi
              fino alla decisione finale, il cliente riceve aggiornamenti puntuali e
              tempistiche certe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border hairline">
            {process.map((step) => (
              <div key={step.num} className="bg-background p-8 lg:p-10 relative">
                <span className="font-serif italic text-5xl text-gold/40 leading-none">{step.num}</span>
                <h4 className="mt-6 font-serif text-xl text-primary">{step.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature quote (optional) */}
      {signatureQuote && (
        <section className="bg-surface-container-low border-y hairline">
          <div className="editorial-container py-20 lg:py-24 max-w-4xl">
            <Quote className="w-12 h-12 text-gold/50 mb-8" strokeWidth={1} />
            <blockquote className="font-serif text-2xl lg:text-3xl text-primary leading-relaxed text-pretty">
              "{signatureQuote.quote}"
            </blockquote>
            {signatureQuote.attribution && (
              <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                — {signatureQuote.attribution}
              </p>
            )}
          </div>
        </section>
      )}

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

      {/* Final CTA */}
      <section className="relative bg-primary text-primary-foreground border-y border-gold/30 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="relative editorial-container py-24 lg:py-32 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
              <span aria-hidden className="w-6 h-px bg-gold" />
              Termini decadenziali stretti
              <span aria-hidden className="w-6 h-px bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 serif-display text-display-xl text-background text-balance leading-[1.05]">
              Ogni giorno conta. Agisci entro i termini.
            </h2>
            <p className="mt-6 text-lg text-background/75 leading-relaxed">
              La nostra prima consulenza è gratuita e si svolge entro 48 ore
              dalla richiesta.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTAButton to="/contatti" variant="gold">
                Richiedi consulenza
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
