import { Building } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { ValuesTicker } from "@/components/site/ValuesTicker";
import { FeatureTicker } from "@/components/site/FeatureTicker";
import { Seo, orgJsonLd } from "@/components/site/Seo";
import office from "@/assets/office.jpg";
import monogramCircle from "@/assets/monogram-circle.png";
import francescoPhoto from "@/assets/team-francesco-accarino.png";
import paoloPhoto from "@/assets/team-paolo-accarino.png";
import danielePhoto from "@/assets/team-daniele-accarino.png";
import antoniaPhoto from "@/assets/team-antonia-bacco.png";

const team = [
  {
    name: "Francesco Accarino",
    role: "Founding Partner",
    focus: "Diritto amministrativo, espropriazioni, contenzioso.",
    initials: "FA",
    photo: francescoPhoto,
  },
  {
    name: "Paolo Accarino",
    role: "Senior Partner",
    focus: "Diritto amministrativo, appalti pubblici, urbanistica.",
    initials: "PA",
    photo: paoloPhoto,
  },
  {
    name: "Daniele Accarino",
    role: "Partner",
    focus: "Diritto amministrativo, concorsi pubblici, sanità.",
    initials: "DA",
    photo: danielePhoto,
  },
  {
    name: "Antonia Bacco",
    role: "Avvocato",
    focus: "Diritto amministrativo, contenzioso, consulenza.",
    initials: "AB",
    photo: antoniaPhoto,
    objectPosition: "center 20%",
    imageScale: "scale-[1.12]",
    hoverScale: "group-hover:scale-[1.22]",
  },
];

const partners = [
  { name: "Prof. Tedeschini", area: "Diritto europeo" },
  { name: "Prof. Abbamonte", area: "Diritto societario" },
  { name: "Prof. Villani", area: "Diritto sanitario" },
  { name: "Prof. Romano", area: "Diritto tributario" },
  { name: "Prof. Marini", area: "Diritto bancario" },
  { name: "Prof. De Santis", area: "Diritto del lavoro" },
];

const milestones = [
  { year: "1975", title: "Fondazione", text: "L'Avv. Francesco Accarino apre lo Studio con vocazione amministrativista." },
  { year: "1989", title: "Patrocinio in Cassazione", text: "Abilitazione alle giurisdizioni superiori e primi grandi contenziosi espropriativi." },
  { year: "2003", title: "Seconda generazione", text: "Si consolida la struttura partner con l'ingresso dell'Avv. Paolo Accarino." },
  { year: "2012", title: "Sede di Salerno", text: "Apertura della seconda sede operativa a Salerno." },
  { year: "2025", title: "Cinquant'anni", text: "Una rete consolidata, oltre 600 mandati amministrativi seguiti." },
];

export default function ChiSiamo() {
  return (
    <Layout>
      <Seo
        title="Studio Accarino · Salerno dal 1975"
        description="Studio Legale Accarino: cinquant'anni di diritto amministrativo a Salerno. Due sedi, nove professionisti, una rete di partner di caratura nazionale."
        path="/studio"
        includeBrand={false}
        jsonLd={orgJsonLd}
      />
      {/* Editorial hero — image first on mobile, side-by-side on desktop */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div className="relative editorial-container pt-4 sm:pt-6 lg:pt-10 pb-14 sm:pb-20 lg:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                <span>Studio</span>
                <span aria-hidden className="w-3 h-px bg-gold/50" />
                <span className="text-primary/70">Dal 1975</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 sm:mt-8 serif-display text-[2rem] sm:text-5xl lg:text-display-2xl text-primary text-balance leading-[1.05]">
                Cinquant'anni al servizio del diritto amministrativo.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 sm:mt-8 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Fondato nel 1975, lo Studio Legale Accarino è oggi uno
                dei riferimenti nel Sud Italia per il contenzioso amministrativo.
                Una storia di continuità professionale, costruita su tre
                principi: rigore tecnico, riservatezza, risultato.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative gold-corner p-3">
              <img
                src={office}
                alt="Interno dello Studio Legale Accarino a Salerno"
                className="w-full h-[280px] sm:h-[400px] lg:h-[480px] object-cover grayscale-[20%]"
                loading="eager"
                width={1200}
                height={1500}
              />
              <div className="absolute -bottom-px left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">
                  SALERNO · CAVA DE&apos; TIRRENI
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values ticker — the firm's foundations */}
      <ValuesTicker />

      {/* Heritage block — story + credentials */}
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="La nostra storia"
                title="Una continuità professionale rara nel panorama italiano."
              />
            </div>
            <Reveal delay={150} className="lg:col-span-5">
              <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed lg:text-right max-w-md lg:ml-auto">
                Cinque decenni di amministrativismo, dalle prime grandi
                espropriazioni degli anni '70 al contenzioso sui fondi PNRR di
                oggi. Stessa famiglia professionale, stessa metodologia.
              </p>
            </Reveal>
          </div>

          {/* Editorial timeline — boxed rows, hairline-separated */}
          <ol className="border-t hairline">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <li className="group relative border-b hairline">
                  <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-10 py-7 sm:py-8 items-baseline transition-colors duration-300 hover:bg-surface-container-low/60 -mx-4 px-4 lg:-mx-6 lg:px-6">
                    <span className="col-span-3 lg:col-span-2 font-serif text-2xl sm:text-3xl lg:text-4xl text-gold-deep tabular-nums leading-none">
                      {m.year}
                    </span>
                    <h3 className="col-span-9 lg:col-span-4 font-serif text-lg sm:text-xl text-primary leading-snug text-pretty transition-colors duration-300 group-hover:text-gold-deep">
                      {m.title}
                    </h3>
                    <p className="col-span-12 lg:col-span-6 text-[15px] text-muted-foreground leading-relaxed text-pretty">
                      {m.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Credenziali — riga editoriale sobria, due colonne tipografiche */}
          <Reveal>
            <div className="mt-16 sm:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12 border-t hairline pt-10">
              <p className="lg:col-span-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                Credenziali
              </p>
              <dl className="lg:col-span-9 grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  { t: "Magistrature Superiori", d: "Cassazione, Consiglio di Stato, Corte dei Conti, Tribunale Superiore delle Acque Pubbliche." },
                  { t: "Enti pubblici assistiti", d: "Regione, Comuni, ASL, Consorzio ASI, CIRA (Centro Italiano Ricerca Aerospaziali)." },
                  { t: "Attività scientifica", d: "Pubblicazioni e contributi su riviste di settore." },
                ].map((c) => (
                  <div key={c.t} className="flex flex-col">
                    <dt className="font-serif text-base text-primary leading-snug">
                      {c.t}
                    </dt>
                    <dd className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {c.d}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature ticker — divides heritage from team */}
      <FeatureTicker />

      {/* Team — placeholder cards (no portraits yet) */}
      <section className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-16 sm:py-20 lg:py-28">
          <div className="mb-12 sm:mb-16 lg:mb-20 max-w-3xl">
            <SectionHeader
              eyebrow="Il team"
              title="Avvocati. Specialisti. Persone."
              intro="Una squadra ristretta di professionisti dedicati: ogni mandato è seguito personalmente da un partner di riferimento."
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-3xl mx-auto">
            {team.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="group bg-background border hairline overflow-hidden transition-all duration-500 hover:shadow-[0_24px_60px_-30px_hsl(217_50%_12%/0.25)]">
                  {/* Portrait */}
                  <div className="relative aspect-[3/4] bg-primary text-primary-foreground overflow-hidden">
                    <img
                      src={m.photo}
                      alt={`Ritratto di ${m.name}`}
                      className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[1200ms] ease-out group-hover:grayscale-0 ${(m as any).imageScale ?? ""} ${(m as any).hoverScale ?? "group-hover:scale-[1.04]"}`}
                      style={{ objectPosition: (m as any).objectPosition ?? "center 15%" }}
                      loading="lazy"
                    />
                    {/* Subtle gradient for legibility of corner marks over light backgrounds */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/30"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                      {m.role}
                    </p>
                    <h3 className="mt-3 font-serif text-lg sm:text-xl text-primary leading-snug transition-colors duration-300 group-hover:text-gold-deep">
                      {m.name}
                    </h3>
                    <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">
                      {m.focus}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners — orbital constellation */}
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
            <SectionHeader
              eyebrow="Network"
              title="Una rete di partner di caratura nazionale."
              intro="Per le materie più specialistiche e i contenziosi più complessi, lo Studio opera in collaborazione con accademici e professionisti di primo piano, garantendo al cliente competenze trasversali in ogni ambito del diritto."
            />
          </div>

          <PartnersOrbit partners={partners} />
        </div>
      </section>

    </Layout>
  );
}

/* ----------------------------------------------------------------- *\
 * PartnersOrbit
 * Desktop: SVG circle with the Studio monogram at the center and the
 * partners arranged around it on the orbit. A slow rotating gold dash
 * adds a refined editorial micro-animation.
 * Mobile: falls back to a clean stacked editorial list.
\* ----------------------------------------------------------------- */
function PartnersOrbit({
  partners,
}: {
  partners: { name: string; area: string }[];
}) {
  const count = partners.length;
  return (
    <div>
      {/* Mobile / tablet — editorial stacked list */}
      <ol className="lg:hidden border-t hairline">
        {partners.map((p, i) => (
          <Reveal key={p.name} delay={i * 70}>
            <li className="group border-b hairline">
              <div className="grid grid-cols-12 gap-4 py-6 items-baseline transition-colors duration-300 hover:bg-surface-container-low/60 -mx-4 px-4">
                <span className="col-span-2 font-serif text-lg text-gold-deep tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="col-span-10 font-serif text-lg text-primary leading-snug transition-colors duration-300 group-hover:text-gold-deep">
                  {p.name}
                </p>
                <p className="col-start-3 col-span-10 mt-1 text-[11px] uppercase tracking-[0.18em] text-gold-deep">
                  {p.area}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Desktop — orbital constellation */}
      <div className="hidden lg:block relative aspect-square max-w-[720px] mx-auto">
        {/* Slowly rotating gold dashed orbit */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="0.2"
            strokeDasharray="0.8 1.4"
            opacity="0.55"
          />
        </svg>
        {/* Static inner ring for depth */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r="26"
            fill="none"
            stroke="hsl(var(--primary) / 0.12)"
            strokeWidth="0.15"
          />
        </svg>

        {/* Center monogram */}
        {/* Center monogram */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-deep font-semibold">
            Lo Studio
          </p>
          <img
            src={monogramCircle}
            alt="Studio Legale Accarino"
            className="mt-3 mx-auto w-20 h-20"
          />
          <span aria-hidden className="block mx-auto mt-3 h-px w-10 bg-gold" />
          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Salerno · 1975
          </p>
        </div>

        {/* Partner nodes around the orbit */}
        {partners.map((p, i) => {
          // start at top (-90°), distribute clockwise
          const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
          const radiusPct = 42; // % of container
          const left = 50 + radiusPct * Math.cos(angle);
          const top = 50 + radiusPct * Math.sin(angle);
          return (
            <Reveal key={p.name} delay={i * 100} variant="fade" className="absolute" style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}>
              <div className="group">
                <div className="relative flex flex-col items-center text-center w-44">
                  <span
                    aria-hidden
                    className="block w-2.5 h-2.5 rotate-45 bg-gold transition-transform duration-500 group-hover:scale-150"
                  />
                  <span aria-hidden className="block mt-3 h-px w-8 bg-gold/50" />
                  <p className="mt-3 font-serif text-base text-primary leading-tight transition-colors duration-300 group-hover:text-gold-deep">
                    {p.name}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-gold-deep">
                    {p.area}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
