import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Seo } from "@/components/site/Seo";
import { blogArticles } from "@/data/blog";

const PAGE_SIZE = 4;

const Blog = () => {
  const categories = useMemo(
    () => ["Tutti", ...Array.from(new Set(blogArticles.map((a) => a.category)))],
    []
  );
  const [active, setActive] = useState<string>("Tutti");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      active === "Tutti"
        ? blogArticles
        : blogArticles.filter((a) => a.category === active),
    [active]
  );
  const totalPages = Math.max(1, Math.ceil((filtered.length - 1) / PAGE_SIZE));
  const featured = filtered[0];
  const rest = filtered.slice(1);
  const paginated = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Layout>
      <Seo
        title="Blog · Diritto Amministrativo, Appalti, Espropri"
        description="Approfondimenti, sentenze commentate e guide pratiche su espropriazioni, appalti pubblici, concorsi e urbanistica. A cura dello Studio Legale Accarino."
        path="/blog"
      />
      <PageHero
        eyebrow="Insights & Aggiornamenti"
        eyebrowSuffix="Aggiornato 2025"
        title="Approfondimenti dallo Studio."
        lead="Sentenze commentate, guide operative e analisi di novità normative su espropriazioni, appalti pubblici, concorsi e urbanistica edilizia. Firmate dai professionisti dello Studio."
      />

      {/* Featured article */}
      {featured && (
        <section className="bg-background border-b hairline">
          <div className="editorial-container py-14 sm:py-20 lg:py-28">
            <Reveal>
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center"
              >
                <div className="lg:col-span-7 relative gold-corner p-2 sm:p-3 overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-[220px] sm:h-[360px] lg:h-[440px] object-cover grayscale-[20%] transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                  />
                </div>
                <div className="lg:col-span-5">
                  <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                    <span aria-hidden className="w-8 h-px bg-gold" />
                    In evidenza
                    <span aria-hidden className="w-3 h-px bg-gold/50" />
                    <span className="text-primary/70">{featured.category}</span>
                  </p>
                  <h2 className="mt-5 sm:mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl text-primary leading-[1.12] text-balance transition-colors duration-300 group-hover:text-gold-deep">
                    {featured.title}
                  </h2>
                  <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span>{featured.date}</span>
                    <span aria-hidden className="w-1 h-1 rotate-45 bg-gold/70" />
                    <span className="inline-flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-gold-deep" />
                      {featured.readingTime}
                    </span>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                    Leggi l'articolo
                    <ArrowUpRight className="w-4 h-4 text-gold-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filters + grid */}
      <section className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-14 sm:py-20 lg:py-28">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16">
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => {
                    setActive(c);
                    setPage(1);
                  }}
                  className={`px-4 py-2.5 min-h-[40px] text-[11px] uppercase tracking-[0.18em] font-semibold border hairline transition-colors duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-primary hover:border-primary"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {paginated.map((a, i) => (
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
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold-deep font-semibold">
                      {a.category}
                    </p>
                    <h3 className="mt-3 sm:mt-4 font-serif text-xl sm:text-2xl text-primary leading-snug text-balance transition-colors duration-300 group-hover:text-gold-deep">
                      {a.title}
                    </h3>
                    <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                      {a.excerpt}
                    </p>
                    <div className="mt-5 sm:mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      <span>{a.date}</span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-gold-deep" />
                        {a.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Paginazione articoli"
              className="mt-16 flex items-center justify-center gap-2"
            >
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                const isActive = p === page;
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-10 h-10 flex items-center justify-center text-[12px] font-semibold tabular-nums border hairline transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-primary hover:border-primary"
                    }`}
                  >
                    {String(p).padStart(2, "0")}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
