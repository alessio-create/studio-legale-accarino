import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Clock, Phone, Quote, Scale } from "lucide-react";
import { Layout } from "./Layout";
import { Eyebrow } from "./Eyebrow";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";
import { FAQ } from "./FAQ";
import { Seo, faqJsonLd, serviceJsonLd } from "./Seo";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  Procedure,
  getRelatedProcedures,
} from "@/data/procedures";

interface Props {
  procedure: Procedure;
}

/**
 * Editorial "blog-style" template for a single procedure page.
 *
 * Layout:
 *   ┌────────────────── HERO ──────────────────┐
 *   │  audience · area · reading time          │
 *   │  H1 title                                │
 *   │  lead paragraph                          │
 *   │  HERO IMAGE (full-bleed editorial)       │
 *   └──────────────────────────────────────────┘
 *
 *   ┌── META RAIL ──┐  ┌── BODY ──┐  ┌── TOC ──┐
 *   │ Audience      │  │ Section1 │  │ Indice  │
 *   │ Lettura       │  │  + image │  │ • s1    │
 *   │ Normativa     │  │ Section2 │  │ • s2    │
 *   │ Area pratica  │  │  + image │  │ • s3    │
 *   └───────────────┘  └──────────┘  └─────────┘
 *
 *   FAQ → Final CTA → Related procedures
 */
export const ProcedurePageTemplate = ({ procedure }: Props) => {
  const sectionIds = useMemo(
    () => procedure.sections.map((s) => s.id),
    [procedure.sections],
  );
  const active = useActiveSection(sectionIds);
  const related = getRelatedProcedures(procedure, 3);

  return (
    <Layout>
      <Seo
        title={procedure.title}
        description={procedure.metaDescription}
        path={`/${procedure.slug}`}
        jsonLd={[
          serviceJsonLd({
            name: procedure.title,
            description: procedure.metaDescription,
            path: `/${procedure.slug}`,
          }),
          faqJsonLd(procedure.faq),
        ]}
      />

      {/* ─────────── HERO ─────────── */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div className="editorial-container pt-16 lg:pt-24 pb-14 lg:pb-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-8">
              <Link
                to="/"
                className="text-muted-foreground hover:text-gold-deep transition-colors"
              >
                Procedure
              </Link>
              <span aria-hidden className="text-primary/30">/</span>
              <span>{procedure.audience}</span>
              <span aria-hidden className="w-6 h-px bg-gold ml-2" />
              <span className="text-primary">{procedure.practiceArea}</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="serif-display text-display-2xl text-primary text-balance max-w-4xl">
              {procedure.title}
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              {procedure.lead}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-deep" />
                {procedure.readingTime} min di lettura
              </span>
              <span className="inline-flex items-center gap-2">
                <Scale className="w-3.5 h-3.5 text-gold-deep" />
                Diritto amministrativo
              </span>
            </div>
          </Reveal>
        </div>

        {/* Hero image strip */}
        <Reveal delay={400} className="editorial-container pb-16 lg:pb-24">
          <div className="relative gold-corner p-3">
            <img
              src={procedure.heroImage}
              alt={procedure.title}
              className="w-full h-[320px] md:h-[420px] lg:h-[520px] object-cover"
              width={1600}
              height={900}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-3"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--primary) / 0.05) 0%, hsl(var(--primary) / 0.45) 100%)",
              }}
            />
          </div>
        </Reveal>
      </section>

      {/* ─────────── BODY: meta · sections · TOC ─────────── */}
      <section className="bg-background">
        <div className="editorial-container py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* ── Left meta rail (sticky, animated in) ── */}
            <Reveal
              as="aside"
              className="lg:col-span-3 lg:sticky lg:top-32 self-start"
            >
              <div className="border-l-2 border-gold pl-6 lg:pl-7 space-y-8">
                <MetaItem label="Per chi" value={procedure.audience} />
                <MetaItem
                  label="Area di pratica"
                  value={procedure.practiceArea}
                />
                <MetaItem
                  label="Lettura"
                  value={`${procedure.readingTime} minuti`}
                />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-gold-deep font-semibold mb-3">
                    Normativa
                  </p>
                  <ul className="space-y-2">
                    {procedure.normativa.map((n) => (
                      <li
                        key={n}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inline CTA card inside the rail */}
                <div className="pt-6 mt-6 border-t hairline">
                  <p className="font-serif text-base text-primary leading-snug mb-4">
                    Hai un caso simile?
                  </p>
                  <Link
                    to="/contatti"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold-deep font-semibold hover:text-primary transition-colors group"
                  >
                    Parla con un avvocato
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* ── Body sections ── */}
            <div className="lg:col-span-6 space-y-20 lg:space-y-28">
              {procedure.sections.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-32"
                >
                  <Reveal>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-serif italic text-gold-deep text-lg">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="h-px w-10 bg-gold" />
                    </div>
                    <h2 className="serif-display text-display-lg text-primary text-balance leading-[1.05]">
                      {s.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={120}>
                    <div className="mt-8 space-y-5">
                      {s.paragraphs.map((p, pi) => (
                        <p
                          key={pi}
                          className="text-lg text-muted-foreground leading-relaxed text-pretty"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>

                  {/* Side image — alternates left/right at md+ for editorial rhythm */}
                  <Reveal delay={200} className="mt-12">
                    <figure className="relative gold-corner p-2.5">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-[260px] lg:h-[340px] object-cover"
                        width={1024}
                        height={640}
                      />
                    </figure>
                  </Reveal>

                  {s.highlights && s.highlights.length > 0 && (
                    <Reveal delay={280} className="mt-10">
                      <div className="border-t hairline pt-8">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-5">
                          Punti chiave
                        </p>
                        <ul className="space-y-3">
                          {s.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-3 text-primary"
                            >
                              <Check
                                className="w-4 h-4 text-gold-deep mt-1.5 flex-shrink-0"
                                strokeWidth={2.5}
                              />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  )}
                </article>
              ))}
            </div>

            {/* ── Right TOC (sticky, scroll-spy) ── */}
            <Reveal
              as="aside"
              delay={150}
              className="hidden lg:block lg:col-span-3 lg:sticky lg:top-32 self-start"
            >
              <div className="pl-2">
                <p className="text-[10px] uppercase tracking-[0.24em] text-gold-deep font-semibold mb-6">
                  Indice
                </p>
                <ol className="space-y-4">
                  {procedure.sections.map((s, i) => {
                    const isActive = active === s.id;
                    return (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className={`group flex items-start gap-3 text-sm leading-snug transition-colors ${
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`mt-2 h-px transition-all duration-500 flex-shrink-0 ${
                              isActive
                                ? "w-6 bg-gold"
                                : "w-3 bg-primary/20 group-hover:w-5 group-hover:bg-gold"
                            }`}
                          />
                          <span className="font-serif">
                            <span className="tabular-nums text-[10px] uppercase tracking-[0.22em] text-gold-deep block mb-1">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {s.title}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ol>

                <div className="mt-10 pt-8 border-t hairline">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-gold-deep font-semibold mb-3">
                    Risposta in 48h
                  </p>
                  <a
                    href="tel:+390891234567"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-deep transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-deep" />
                    089 123 4567
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="bg-surface-container-low border-y hairline">
        <div className="editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Domande frequenti</Eyebrow>
            <h2 className="mt-6 serif-display text-display-lg text-balance">
              Le domande più comuni su questa procedura
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Hai un quesito specifico? Una consulenza riservata di 15 minuti
              chiarisce subito i termini del tuo caso.
            </p>
            <div className="mt-8">
              <CTAButton to="/contatti" variant="ghost">
                Parla con un avvocato
              </CTAButton>
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <FAQ items={procedure.faq} />
          </div>
        </div>
      </section>

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="relative bg-primary text-primary-foreground border-y border-gold/30 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="relative editorial-container py-24 lg:py-32 text-center max-w-3xl mx-auto">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold font-semibold">
              <span aria-hidden className="w-6 h-px bg-gold" />
              Per la tua situazione
              <span aria-hidden className="w-6 h-px bg-gold" />
            </span>
          </Reveal>
          <Reveal delay={120}>
            <Quote className="mx-auto mt-10 w-10 h-10 text-gold/60" strokeWidth={1} />
            <h2 className="mt-6 serif-display text-display-xl text-background text-balance">
              Ogni caso è diverso. La tua difesa parte da una conversazione.
            </h2>
            <p className="mt-6 text-lg text-background/75 leading-relaxed">
              Prenota una prima consulenza riservata: rispondiamo entro 48 ore
              con una valutazione preliminare del tuo caso.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CTAButton to="/contatti">Richiedi consulenza</CTAButton>
              <a
                href="tel:+390891234567"
                className="inline-flex items-center gap-3 px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-background hover:text-gold transition-colors border border-background/20 hover:border-gold"
              >
                <Phone className="w-4 h-4 text-gold" />
                089 123 4567
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── RELATED ─────────── */}
      {related.length > 0 && (
        <section className="bg-background">
          <div className="editorial-container py-20 lg:py-28">
            <div className="flex items-end justify-between flex-wrap gap-8 mb-14">
              <div className="max-w-2xl">
                <Eyebrow>Procedure correlate</Eyebrow>
                <h2 className="mt-6 serif-display text-display-lg text-balance">
                  Altre procedure {procedure.audience.toLowerCase()}
                </h2>
              </div>
              <Link
                to="/#area-imprese-pa-proc-6"
                className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors font-semibold"
              >
                Tutte le procedure
                <ArrowRight className="w-4 h-4 text-gold-deep" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10 border hairline">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 110} className="bg-background">
                  <Link
                    to={`/${r.slug}`}
                    className="block group p-8 lg:p-10 h-full hover:bg-surface-container-low transition-colors"
                  >
                    <span className="text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                      {r.practiceArea}
                    </span>
                    <h3 className="mt-5 font-serif text-xl text-primary leading-snug group-hover:text-gold-deep transition-colors">
                      {r.title}
                    </h3>
                    <span
                      aria-hidden
                      className="block mt-6 w-8 h-px bg-gold/60 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"
                    />
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                      Approfondisci
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

/* ───────────────────── helpers ───────────────────── */

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.24em] text-gold-deep font-semibold mb-2">
        {label}
      </p>
      <p className="text-sm text-primary leading-relaxed">{value}</p>
    </div>
  );
}