import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { ProceduresLayout } from "@/components/site/ProceduresLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Seo } from "@/components/site/Seo";
import {
  getGroupedProcedures,
  procedures,
  type Procedure,
} from "@/data/procedures";

/**
 * Index of every procedure offered by the studio. Grouped by audience
 * (Per gli Enti / Per le Persone) and then by practice area, with an
 * inline keyword filter for quick lookup. The visual language matches
 * the rest of the site: gold rule + uppercase eyebrow, serif-display
 * headings, hairline dividers.
 */
export default function Procedures() {
  const grouped = useMemo(() => getGroupedProcedures(), []);
  const [query, setQuery] = useState("");

  const filter = (items: Procedure[]) => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.lead.toLowerCase().includes(q) ||
        p.practiceArea.toLowerCase().includes(q),
    );
  };

  return (
    <ProceduresLayout>
      <Seo
        title="Indice delle Procedure · Studio Legale Accarino"
        includeBrand={false}
        description="Mappa completa delle procedure trattate dallo Studio: divise per Pubbliche Amministrazioni e privati, organizzate per area di pratica. Risposta in 48h."
        path="/procedure"
      />

      <PageHero
        eyebrow="Indice delle procedure"
        eyebrowSuffix={`${procedures.length} voci`}
        title={
          <>
            Tutte le procedure che gestiamo,{" "}
            <span className="italic">in un'unica mappa</span>.
          </>
        }
        lead="Una mappa operativa dei servizi: dalla consulenza preventiva al contenzioso davanti alle Magistrature Superiori, organizzata per Pubbliche Amministrazioni e soggetti privati e suddivisa per area di pratica."
      >
        {/* Inline filter — keeps the editorial composition intact */}
        <div className="relative max-w-xl">
          <Search
            aria-hidden
            className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-deep"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cerca una procedura, un'area, un termine…"
            className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-gold focus:outline-none pl-7 pr-2 py-3 font-serif text-lg text-primary placeholder:text-muted-foreground transition-colors"
            aria-label="Filtra le procedure"
          />
        </div>
      </PageHero>

      {grouped.map((bucket, bi) => {
        const visibleGroups = bucket.groups
          .map((g) => ({ ...g, items: filter(g.items) }))
          .filter((g) => g.items.length > 0);
        if (visibleGroups.length === 0) return null;

        return (
          <section
            key={bucket.audience}
            className={`border-b hairline ${bi % 2 === 0 ? "bg-background" : "bg-surface-container-low"}`}
          >
            <div className="editorial-container py-20 lg:py-28">
              <SectionHeader
                eyebrow={bucket.audience}
                title={
                  bucket.audience === "Per gli Enti"
                    ? "Pubbliche Amministrazioni e stazioni appaltanti."
                    : "Privati cittadini, professionisti, imprese."
                }
                intro={
                  bucket.audience === "Per gli Enti"
                    ? "Prevenzione del contenzioso, consulenza istituzionale, difesa in giudizio: assistenza completa per Comuni, Enti e PA in Campania."
                    : "Tutela dei tuoi diritti nei rapporti con la Pubblica Amministrazione, dall'analisi del provvedimento al ricorso davanti alle Magistrature Superiori."
                }
              />

              <div className="mt-16 lg:mt-20 space-y-16 lg:space-y-20">
                {visibleGroups.map((group, gi) => (
                  <div
                    key={group.practiceArea}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                  >
                    <div className="lg:col-span-3">
                      <div className="lg:sticky lg:top-32">
                        <span
                          aria-hidden
                          className="block w-8 h-px bg-gold mb-6"
                        />
                        <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                          Area {String(gi + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-4 font-serif text-2xl text-primary leading-snug">
                          {group.practiceArea}
                        </h3>
                        <p className="mt-4 text-sm text-muted-foreground">
                          {group.items.length}{" "}
                          {group.items.length === 1 ? "procedura" : "procedure"}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-9">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                        {group.items.map((p, idx) => (
                          <li
                            key={p.slug}
                            className="group border-t hairline first:border-t-0 md:[&:nth-child(2)]:border-t-0"
                          >
                            <Reveal delay={idx * 60}>
                              <Link
                                to={`/${p.slug}`}
                                className="flex items-start justify-between gap-6 py-6"
                              >
                                <div className="pr-4">
                                  <span className="font-serif text-lg text-primary leading-snug text-pretty group-hover:text-gold-deep transition-colors">
                                    {p.title}
                                  </span>
                                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                    {p.lead}
                                  </p>
                                </div>
                                <span className="flex items-center gap-3 pt-1 flex-shrink-0">
                                  <ArrowUpRight className="w-4 h-4 text-gold-deep opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  <span className="text-[11px] tabular-nums tracking-[0.18em] text-muted-foreground">
                                    {String(idx + 1).padStart(2, "0")}
                                  </span>
                                </span>
                              </Link>
                            </Reveal>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Empty state when filter matches nothing */}
      {query.trim() &&
        grouped.every((b) =>
          b.groups.every((g) => filter(g.items).length === 0),
        ) && (
          <section className="bg-background border-b hairline">
            <div className="editorial-container py-24 text-center max-w-xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                Nessun risultato
              </p>
              <h2 className="mt-6 serif-display text-display-lg text-primary text-balance">
                Nessuna procedura corrisponde a "{query}".
              </h2>
              <button
                onClick={() => setQuery("")}
                className="mt-8 text-sm uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors"
              >
                Azzera la ricerca →
              </button>
            </div>
          </section>
        )}
    </ProceduresLayout>
  );
}