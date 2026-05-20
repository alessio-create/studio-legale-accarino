import { MouseEvent, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Clock,
  Landmark,
  Phone,
  Quote,
  Scale,
} from "lucide-react";
import { ProceduresLayout } from "./ProceduresLayout";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";
import { FAQ } from "./FAQ";
import { Seo, faqJsonLd, serviceJsonLd } from "./Seo";
import { SectionHeader } from "./SectionHeader";
import { MobileTOC } from "./MobileTOC";
import { useActiveSection } from "@/hooks/use-active-section";
import {
  Procedure,
  getRelatedProcedures,
} from "@/data/procedures";
import { blogArticles } from "@/data/blog";

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

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    event.stopPropagation();

    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight =
      document.querySelector<HTMLElement>("header")?.getBoundingClientRect().height ?? 0;
    const procedureBarHeight =
      document.querySelector<HTMLElement>("[data-procedure-trigger-bar]")?.getBoundingClientRect().height ?? 0;
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight - procedureBarHeight - 28;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, options?: { duration?: number }) => void } }).__lenis;

    window.history.pushState(null, "", `#${id}`);
    if (lenis) lenis.scrollTo(top, { duration: 1.05 });
    else window.scrollTo({ top, behavior: "smooth" });
  };

  // Pick up to 3 blog articles that share the procedure's practice area;
  // fall back to the most recent if none match.
  const relatedArticles = (() => {
    const area = procedure.practiceArea.toLowerCase();
    const matched = blogArticles.filter((a) =>
      a.category.toLowerCase().includes(area.split(" ")[0])
    );
    return (matched.length ? matched : blogArticles).slice(0, 3);
  })();

  return (
    <ProceduresLayout>
      <Seo
        title={procedure.title}
        description={procedure.metaDescription}
        path={`/${procedure.slug}`}
        includeBrand={false}
        jsonLd={[
          serviceJsonLd({
            name: procedure.title,
            description: procedure.metaDescription,
            path: `/${procedure.slug}`,
          }),
          faqJsonLd(procedure.faq),
        ]}
      />

      {/* ─────────── HERO — editorial monograph cover ─────────── */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-40" />

        <div className="relative editorial-container pt-4 sm:pt-6 lg:pt-10 pb-10 sm:pb-14 lg:pb-20">
          {/* Breadcrumb / kicker */}
          <Reveal>
            <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-semibold">
              <span aria-hidden className="w-8 h-px bg-gold" />
              <Link
                to="/procedure"
                className="text-muted-foreground hover:text-gold-deep transition-colors"
              >
                Procedure
              </Link>
              <span aria-hidden className="w-2 h-px bg-gold/50" />
              <span className="text-gold-deep">{procedure.audience}</span>
              <span aria-hidden className="w-2 h-px bg-gold/50" />
              <span className="text-primary/60">{procedure.practiceArea}</span>
            </p>
          </Reveal>

          {/* Headline cluster with ghost numeral */}
          <div className="relative mt-7 sm:mt-10">
            <span
              aria-hidden
              className="ghost-numeral hidden md:block absolute -top-10 right-0 text-[10rem] lg:text-[14rem]"
            >
              §
            </span>

            <Reveal delay={120}>
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold-deep font-semibold mb-5">
                Procedura · Monografia
              </p>
            </Reveal>

            <Reveal delay={180}>
              <h1 className="serif-display text-display-2xl text-primary text-balance leading-[1.06] max-w-4xl">
                {procedure.title}
              </h1>
            </Reveal>

            <Reveal delay={280}>
              <span
                aria-hidden
                className="block mt-6 sm:mt-8 h-px w-20 sm:w-24 editorial-rule"
              />
            </Reveal>

            <Reveal delay={340}>
              <p className="mt-5 sm:mt-8 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                {procedure.lead}
              </p>
            </Reveal>
          </div>

          {/* Meta dock — datasheet-style */}
          <Reveal delay={420}>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-primary/10 border hairline max-w-3xl">
              <HeroMeta
                icon={<Clock className="w-3.5 h-3.5" />}
                label="Lettura"
                value={`${procedure.readingTime} min`}
              />
              <HeroMeta
                icon={<Scale className="w-3.5 h-3.5" />}
                label="Materia"
                value="Amministrativo"
              />
              <HeroMeta
                icon={<Landmark className="w-3.5 h-3.5" />}
                label="Foro"
                value="TAR · CdS"
              />
              <HeroMeta
                icon={<BookOpen className="w-3.5 h-3.5" />}
                label="Sezioni"
                value={String(procedure.sections.length).padStart(2, "0")}
              />
            </div>
          </Reveal>
        </div>

        {/* Hero image — clipped reveal + ornamental frame */}
        <Reveal delay={500} className="editorial-container pb-10 sm:pb-16 lg:pb-24">
          <figure className="relative gold-corner-frame p-3">
            <div className="overflow-hidden">
              <img
                src={procedure.heroImage}
                alt={procedure.title}
                className="w-full h-[220px] sm:h-[320px] md:h-[440px] lg:h-[560px] object-cover animate-image-reveal"
                width={1600}
                height={900}
              />
            </div>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-3"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--primary) / 0.0) 50%, hsl(var(--primary) / 0.55) 100%)",
              }}
            />
            {/* Caption tab — magazine plate style */}
            <figcaption className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-6">
              <span className="bg-background/95 backdrop-blur px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-gold-deep font-semibold">
                Tav. I · {procedure.practiceArea}
              </span>
              <span className="hidden md:inline-block bg-primary/85 backdrop-blur text-background px-4 py-2 text-[10px] uppercase tracking-[0.22em] font-semibold">
                Studio Legale Accarino
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ─────────── BODY: meta · sections · TOC ─────────── */}
      <section className="bg-background">
        <div className="editorial-container py-14 sm:py-20 lg:py-28">
          <MobileTOC
            sections={procedure.sections.map((s) => ({
              id: s.id,
              title: s.title,
            }))}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
            {/* ── Left meta rail (sticky, animated in) ── */}
            <Reveal
              as="aside"
              className="lg:col-span-3 lg:sticky lg:top-[180px] self-start"
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
            <div className="lg:col-span-6 space-y-14 sm:space-y-20 lg:space-y-28">
              {procedure.sections.map((s, i) => (
                <article
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-[196px] relative"
                >
                  {/* Oversized ghost numeral — museum catalog cue */}
                  <span
                    aria-hidden
                    className="ghost-numeral hidden md:block absolute -left-20 -top-10 text-[8rem] lg:text-[10rem]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <Reveal>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] uppercase tracking-[0.28em] text-gold-deep font-semibold tabular-nums">
                        Cap. {String(i + 1).padStart(2, "0")} / {String(procedure.sections.length).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="h-px flex-1 max-w-[80px] bg-gold/60" />
                    </div>
                    <h2 className="serif-display text-display-lg text-primary text-balance leading-[1.04]">
                      {s.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={120}>
                    <div className="mt-8 space-y-5">
                      {s.paragraphs.map((p, pi) => {
                        // Promote the second paragraph of every other section to a
                        // pull-quote for editorial cadence.
                        const isPullQuote = i % 2 === 1 && pi === 1 && s.paragraphs.length > 1;
                        if (isPullQuote) {
                          return (
                            <blockquote
                              key={pi}
                              className="pull-quote my-10 font-serif text-2xl lg:text-[1.6rem] text-primary leading-snug text-balance"
                            >
                              {p}
                            </blockquote>
                          );
                        }
                        return (
                          <p
                            key={pi}
                            className="text-lg text-muted-foreground leading-relaxed text-pretty"
                          >
                            {p}
                          </p>
                        );
                      })}
                    </div>
                  </Reveal>

                  {/* Side image — alternates left/right at md+ for editorial rhythm */}
                  <Reveal delay={200} className="mt-12">
                    <figure className="relative gold-corner-frame p-2.5">
                      <div className="overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        loading="lazy"
                          className="w-full h-[260px] lg:h-[340px] object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
                        width={1024}
                        height={640}
                      />
                      </div>
                      <figcaption className="absolute left-4 bottom-4 bg-background/95 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                        Fig. {String(i + 1).padStart(2, "0")}
                      </figcaption>
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
              className="hidden lg:block lg:col-span-3 lg:sticky lg:top-[180px] self-start"
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
                          onClick={(event) => scrollToSection(event, s.id)}
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
                    href="tel:+39089343140"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-gold-deep transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-deep" />
                    089 343140
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="bg-surface-container-low border-y hairline">
        <div className="editorial-container py-14 sm:py-20 lg:py-28 grid lg:grid-cols-12 gap-8 sm:gap-12">
          <Reveal className="lg:col-span-4">
            <SectionHeader
              eyebrow="Domande frequenti"
              title="Le domande più comuni su questa procedura."
              intro="Hai un quesito specifico? Una consulenza riservata di 15 minuti chiarisce subito i termini del tuo caso."
              compact
            />
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

      {/* ─────────── DAL BLOG · Risorse correlate ─────────── */}
      {relatedArticles.length > 0 && (
        <section className="bg-background border-b hairline">
          <div className="editorial-container py-14 sm:py-20 lg:py-24">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10 sm:mb-14">
              <SectionHeader
                eyebrow="Dal blog"
                title="Approfondimenti e risorse correlate."
                intro="Articoli editoriali sulla materia, aggiornati alla giurisprudenza più recente."
                compact
              />
              <Link
                to="/blog"
                className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors font-semibold"
              >
                Tutti gli articoli
                <ArrowRight className="w-4 h-4 text-gold-deep" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {relatedArticles.map((a, i) => (
                <Reveal key={a.slug} delay={i * 110}>
                  <Link to={`/blog/${a.slug}`} className="group block">
                    <div className="relative overflow-hidden aspect-[4/3] mb-5">
                      <img
                        src={a.image}
                        alt={a.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-3 top-3 bg-background/95 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                        {a.category}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold mb-3">
                      {a.date} · {a.readingTime}
                    </p>
                    <h3 className="font-serif text-xl text-primary leading-snug text-balance group-hover:text-gold-deep transition-colors">
                      {a.title}
                    </h3>
                    <span
                      aria-hidden
                      className="block mt-5 w-8 h-px bg-gold/60 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"
                    />
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                      Leggi l'articolo
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────── FINAL CTA ─────────── */}
      <section className="relative bg-primary text-primary-foreground border-y border-gold/30 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-25" />
        {/* Decorative ghost glyph */}
        <span
          aria-hidden
          className="ghost-numeral absolute -top-12 -right-6 text-[18rem] lg:text-[24rem] opacity-30"
        >
          §
        </span>

        <div className="relative editorial-container py-16 sm:py-24 lg:py-32 max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-gold font-semibold">
              <span aria-hidden className="w-8 h-px bg-gold" />
              Per la tua situazione
              <span aria-hidden className="w-8 h-px bg-gold" />
            </span>
          </Reveal>

          <Reveal delay={120}>
            <Quote className="mx-auto mt-7 sm:mt-10 w-7 h-7 sm:w-8 sm:h-8 text-gold/70" strokeWidth={1} />
            <h2 className="mt-5 sm:mt-6 serif-display text-display-xl text-background text-balance leading-[1.08]">
              Ogni caso è diverso. La tua difesa parte da una conversazione.
            </h2>
            <p className="mt-5 sm:mt-7 text-base sm:text-lg text-background/75 leading-relaxed max-w-2xl mx-auto">
              Prenota una prima consulenza riservata: rispondiamo entro 48 ore
              con una valutazione preliminare del tuo caso.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
              <CTAButton to="/contatti">Richiedi consulenza</CTAButton>
              <a
                href="tel:+39089343140"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 min-h-[44px] text-[11px] uppercase tracking-[0.2em] text-background hover:text-gold transition-colors border border-background/20 hover:border-gold"
              >
                <Phone className="w-4 h-4 text-gold" />
                089 343140
              </a>
            </div>
          </Reveal>

          {/* Studio signature line */}
          <Reveal delay={360}>
            <div className="mt-16 pt-8 border-t border-background/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-[0.24em] text-background/50">
              <span>Studio Legale Accarino</span>
              <span aria-hidden className="w-1 h-1 rounded-full bg-gold/60" />
              <span>Salerno · Cava de&apos; Tirreni</span>
              <span aria-hidden className="w-1 h-1 rounded-full bg-gold/60" />
              <span>dal 1975</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────── RELATED ─────────── */}
      {related.length > 0 && (
        <section className="bg-background">
          <div className="editorial-container py-14 sm:py-20 lg:py-28">
            <div className="flex items-end justify-between flex-wrap gap-6 sm:gap-8 mb-10 sm:mb-14">
              <div className="max-w-2xl">
                <SectionHeader
                  eyebrow="Procedure correlate"
                  title={`Altre procedure ${procedure.audience.toLowerCase()}.`}
                  compact
                />
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
    </ProceduresLayout>
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

function HeroMeta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-background px-5 py-4">
      <div className="flex items-center gap-2 text-gold-deep mb-2">
        {icon}
        <span className="text-[9px] uppercase tracking-[0.24em] font-semibold">
          {label}
        </span>
      </div>
      <p className="font-serif text-base text-primary leading-tight">{value}</p>
    </div>
  );
}