import { Award, BookOpen, Building, Scale } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { ValuesTicker } from "@/components/site/ValuesTicker";
import { FeatureTicker } from "@/components/site/FeatureTicker";
import { Seo, orgJsonLd } from "@/components/site/Seo";
import office from "@/assets/office.jpg";

const team = [
  {
    name: "[Nome Cognome]",
    role: "[Ruolo / Founding Partner]",
    focus: "[Aree di specializzazione]",
    initials: "—",
  },
  {
    name: "[Nome Cognome]",
    role: "[Ruolo / Senior Partner]",
    focus: "[Aree di specializzazione]",
    initials: "—",
  },
  {
    name: "[Nome Cognome]",
    role: "[Ruolo / Of Counsel]",
    focus: "[Aree di specializzazione]",
    initials: "—",
  },
  {
    name: "[Nome Cognome]",
    role: "[Ruolo / Associate]",
    focus: "[Aree di specializzazione]",
    initials: "—",
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
  { year: "1974", title: "Fondazione", text: "L'Avv. Francesco Accarino apre lo Studio a Salerno con vocazione amministrativista." },
  { year: "1989", title: "Patrocinio in Cassazione", text: "Abilitazione alle giurisdizioni superiori e primi grandi contenziosi espropriativi." },
  { year: "2003", title: "Seconda generazione", text: "Si consolida la struttura partner con l'ingresso dell'Avv. Paolo Accarino." },
  { year: "2014", title: "Sede di Cava de' Tirreni", text: "Apertura della seconda sede operativa per servire l'agro nocerino-sarnese." },
  { year: "2024", title: "Cinquant'anni", text: "Una rete consolidata, oltre 600 mandati amministrativi seguiti." },
];

export default function ChiSiamo() {
  return (
    <Layout>
      <Seo
        title="Chi Siamo · Studio Legale a Salerno dal 1974"
        description="Studio Legale Accarino: cinquant'anni di diritto amministrativo a Salerno. Due sedi, nove professionisti, una rete di partner di caratura nazionale."
        path="/chi-siamo"
        jsonLd={orgJsonLd}
      />
      {/* Editorial hero — image first on mobile, side-by-side on desktop */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-14 sm:py-20 lg:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                <span>Lo Studio</span>
                <span aria-hidden className="w-3 h-px bg-gold/50" />
                <span className="text-primary/70">Dal 1974</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 sm:mt-8 serif-display text-[2rem] sm:text-5xl lg:text-display-2xl text-primary text-balance leading-[1.05]">
                Cinquant'anni al servizio del diritto amministrativo.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 sm:mt-8 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Fondato a Salerno nel 1974, lo Studio Legale Accarino è oggi uno
                dei riferimenti nel Sud Italia per il contenzioso amministrativo.
                Una storia di continuità professionale, costruita su tre
                principi: rigore tecnico, riservatezza, risultato.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-primary/10 border hairline">
                {[
                  { v: 50, suffix: "+", l: "Anni di attività" },
                  { v: 9, suffix: "", l: "Professionisti" },
                  { v: 2, suffix: "", l: "Sedi operative" },
                  { v: 600, suffix: "+", l: "Mandati seguiti" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-5 sm:p-6">
                    <CountUp
                      to={s.v}
                      suffix={s.suffix}
                      className="font-serif text-2xl sm:text-3xl text-primary tabular-nums"
                    />
                    <p className="mt-2 sm:mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
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
                  Salerno · Cava de' Tirreni
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

          {/* Credentials — properly boxed, gold corner accents, numbered */}
          <div className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border hairline">
            {[
              { i: Scale, t: "Magistrature Superiori", d: "Cassazione, Consiglio di Stato, Corte dei Conti" },
              { i: Award, t: "Cassazionisti", d: "Patrocinio davanti alle giurisdizioni superiori" },
              { i: BookOpen, t: "Pubblicazioni", d: "Articoli e contributi su riviste specializzate" },
              { i: Building, t: "Enti istituzionali", d: "Esperienza per Regione, Comuni, ASL, ASI" },
            ].map(({ i: Icon, t, d }, idx) => (
              <Reveal key={t} delay={idx * 80}>
                <div className="group relative bg-background p-7 sm:p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xl text-gold-deep tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="w-5 h-5 text-gold-deep transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span aria-hidden className="block mt-4 h-px w-8 bg-gold/60" />
                  <p className="mt-5 font-serif text-base sm:text-lg text-primary leading-snug">
                    {t}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Feature ticker — divides heritage from team */}
      <FeatureTicker />

      {/* Team — placeholder cards (no portraits yet) */}
      <section className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Il team"
                title="Avvocati. Specialisti. Persone."
                intro="Una squadra ristretta di professionisti dedicati: ogni mandato è seguito personalmente da un partner di riferimento."
              />
            </div>
            <Reveal delay={150} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-px bg-primary/10 border hairline lg:ml-auto lg:max-w-sm">
                {[
                  { v: 4, l: "Partner" },
                  { v: 5, l: "Collaboratori" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-5 sm:p-6 text-center">
                    <CountUp
                      to={s.v}
                      className="font-serif text-2xl sm:text-3xl text-primary tabular-nums"
                    />
                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <article className="group bg-background border hairline overflow-hidden transition-all duration-500 hover:shadow-[0_24px_60px_-30px_hsl(217_50%_12%/0.25)]">
                  {/* Placeholder portrait — monogram on tonal blueprint */}
                  <div className="relative aspect-[4/5] bg-primary text-primary-foreground overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        background:
                          "radial-gradient(60% 80% at 50% 30%, hsl(var(--gold)/0.35) 0%, transparent 60%)",
                      }}
                    />
                    <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gold" />
                    <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gold" />
                    <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gold" />
                    <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gold" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-6xl sm:text-7xl text-gold tabular-nums leading-none transition-transform duration-700 group-hover:scale-110">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.28em] text-gold/85">
                      [Foto]
                    </span>
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
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Network"
                title="Una rete di partner di caratura nazionale."
              />
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-[15px] sm:text-lg text-muted-foreground leading-relaxed self-end">
              Per le materie più specialistiche e i contenziosi più complessi, lo Studio
              opera in collaborazione con accademici e professionisti di primo piano,
              garantendo al cliente competenze trasversali in ogni ambito del diritto.
            </p>
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-deep font-semibold">
            Lo Studio
          </p>
          <p className="mt-3 font-serif text-5xl text-primary leading-none">
            A
          </p>
          <span aria-hidden className="block mx-auto mt-3 h-px w-10 bg-gold" />
          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Salerno · 1974
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
            <Reveal key={p.name} delay={i * 100}>
              <div
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
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
