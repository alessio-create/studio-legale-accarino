import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, ScrollText, User } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CTAButton } from "@/components/site/CTAButton";
import { Reveal } from "@/components/site/Reveal";
import { Seo } from "@/components/site/Seo";
import { getArticleBySlug, getRelatedArticles } from "@/data/blog";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <Navigate to="/blog" replace />;

  const related = getRelatedArticles(article.slug, 3);

  return (
    <Layout>
      <Seo
        title={`${article.title} · Blog Studio Legale Accarino`}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
      />

      {/* Article hero — title + image */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-20 lg:py-28">
          <Reveal>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold hover:text-gold-deep transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-gold-deep transition-transform duration-300 group-hover:-translate-x-1" />
              Torna al blog
            </Link>
          </Reveal>
          <div className="mt-10 grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                  <span aria-hidden className="w-8 h-px bg-gold" />
                  {article.category}
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="mt-8 serif-display text-display-xl text-primary text-balance leading-[1.05]">
                  {article.title}
                </h1>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                  {article.excerpt}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-gold-deep" />
                    {article.author}
                  </span>
                  <span aria-hidden className="w-1 h-1 rotate-45 bg-gold/70" />
                  <span>{article.date}</span>
                  <span aria-hidden className="w-1 h-1 rotate-45 bg-gold/70" />
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-deep" />
                    {article.readingTime}
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200} className="lg:col-span-5">
              <div className="relative gold-corner p-3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[360px] object-cover grayscale-[20%]"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main column */}
          <article className="lg:col-span-8">
            {/* Bullets summary */}
            <Reveal>
              <div className="border-l-2 border-gold pl-6 lg:pl-8 py-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                  In sintesi
                </p>
                <ul className="mt-6 space-y-3">
                  {article.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-primary leading-relaxed">
                      <span
                        aria-hidden
                        className="mt-2 block w-1.5 h-1.5 rotate-45 bg-gold flex-shrink-0"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Long-form sections */}
            <div className="mt-16 space-y-14">
              {article.sections.map((s, i) => (
                <Reveal key={s.heading} delay={i * 80}>
                  <div>
                    <h2 className="font-serif text-2xl lg:text-3xl text-primary leading-snug text-balance">
                      {s.heading}
                    </h2>
                    <span aria-hidden className="block mt-4 h-px w-12 bg-gold" />
                    <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
                      {s.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Sources */}
            <Reveal>
              <div className="mt-16 pt-10 border-t hairline">
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                  <BookOpen className="w-3.5 h-3.5" />
                  Fonti normative e giurisprudenziali
                </p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {article.sources.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="font-serif text-gold-deep tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </article>

          {/* Sticky sidebar — evidence */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8">
              <Reveal>
                <div className="bg-surface-container-low border hairline p-8">
                  <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                    <ScrollText className="w-3.5 h-3.5" />
                    Evidenze chiave
                  </p>
                  <dl className="mt-6 divide-y hairline">
                    {article.evidence.map((e) => (
                      <div key={e.label} className="py-4 first:pt-0 last:pb-0">
                        <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {e.label}
                        </dt>
                        <dd className="mt-2 font-serif text-lg text-primary leading-snug">
                          {e.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="bg-primary text-primary-foreground p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-25" />
                  <p className="relative text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
                    Hai un caso simile?
                  </p>
                  <p className="relative mt-4 font-serif text-xl leading-snug text-balance">
                    Una consulenza riservata di 15 minuti per inquadrare la tua posizione.
                  </p>
                  <div className="relative mt-6">
                    <CTAButton to="/contatti" variant="gold">
                      Parla con un avvocato
                    </CTAButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA banner */}
      <section className="relative bg-primary text-primary-foreground border-y border-gold/30 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="relative editorial-container py-24 lg:py-32 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
              <span aria-hidden className="w-6 h-px bg-gold" />
              Studio Legale Accarino
              <span aria-hidden className="w-6 h-px bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 serif-display text-display-xl text-background text-balance leading-[1.05]">
              Dalla teoria al tuo caso concreto.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-background/75 leading-relaxed">
              Ogni vicenda ha specificità che fanno la differenza. Confrontiamoci
              sulla tua, in totale riservatezza.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 flex justify-center">
              <CTAButton to="/contatti" variant="gold">
                Parla con un avvocato
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-background border-b hairline">
          <div className="editorial-container py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 mb-12 lg:mb-16 items-end">
              <div className="lg:col-span-7">
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                  <span aria-hidden className="w-8 h-px bg-gold" />
                  Continua a leggere
                </p>
                <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-primary leading-[1.1] text-balance">
                  Altri approfondimenti dallo Studio.
                </h2>
              </div>
              <Link
                to="/blog"
                className="lg:col-span-5 lg:justify-self-end group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold hover:text-gold-deep transition-colors"
              >
                Tutti gli articoli
                <ArrowUpRight className="w-4 h-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {related.map((a, i) => (
                <Reveal key={a.slug} delay={i * 80}>
                  <Link
                    to={`/blog/${a.slug}`}
                    className="group flex flex-col h-full bg-background border hairline overflow-hidden transition-all duration-500 hover:shadow-[0_24px_60px_-30px_hsl(217_50%_12%/0.25)]"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gold-deep font-semibold">
                        {a.category}
                      </p>
                      <h3 className="mt-3 font-serif text-lg text-primary leading-snug text-balance transition-colors duration-300 group-hover:text-gold-deep">
                        {a.title}
                      </h3>
                    </div>
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

export default BlogArticle;