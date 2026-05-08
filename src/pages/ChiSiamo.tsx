import { Award, BookOpen, Building, Scale, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { ValuesTicker } from "@/components/site/ValuesTicker";
import { Seo, orgJsonLd } from "@/components/site/Seo";
import founder from "@/assets/founder.jpg";
import office from "@/assets/office.jpg";

const team = [
  { name: "Avv. Francesco Accarino", role: "Founding Partner", focus: "Espropriazioni · Urbanistica · TSAP", img: founder },
  { name: "Avv. Paolo Accarino", role: "Senior Partner", focus: "Concorsi Pubblici · Pubblico Impiego", img: founder },
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
      {/* Editorial hero — image left, headline + story right */}
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
          <Reveal className="lg:col-span-5">
            <div className="relative gold-corner p-3">
              <img
                src={office}
                alt="Interno dello Studio Legale Accarino a Salerno"
                className="w-full h-[480px] object-cover grayscale-[20%]"
                loading="eager"
                width={1200}
                height={1500}
              />
              <div className="absolute -bottom-px left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 flex items-center gap-3">
                <Building className="w-4 h-4 text-gold" />
                <span className="text-[11px] uppercase tracking-[0.2em]">
                  Salerno · Cava de' Tirreni
                </span>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                <span>Lo Studio</span>
                <span aria-hidden className="w-3 h-px bg-gold/50" />
                <span className="text-primary/70">Dal 1974</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 serif-display text-display-2xl text-primary text-balance leading-[1.04]">
                Cinquant'anni al servizio del diritto amministrativo.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Fondato a Salerno nel 1974, lo Studio Legale Accarino è oggi uno
                dei riferimenti nel Sud Italia per il contenzioso amministrativo.
                Una storia di continuità professionale, costruita su tre
                principi: rigore tecnico, riservatezza, risultato.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-primary/10 border hairline">
                {[
                  { v: 50, suffix: "+", l: "Anni di attività" },
                  { v: 9, suffix: "", l: "Professionisti" },
                  { v: 2, suffix: "", l: "Sedi operative" },
                  { v: 600, suffix: "+", l: "Mandati seguiti" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-6">
                    <CountUp
                      to={s.v}
                      suffix={s.suffix}
                      className="font-serif text-3xl text-primary tabular-nums"
                    />
                    <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values ticker — the firm's foundations */}
      <ValuesTicker />

      {/* Heritage block — story + credentials */}
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20 items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="La nostra storia"
                title="Una continuità professionale rara nel panorama italiano."
              />
            </div>
            <Reveal delay={150} className="lg:col-span-5">
              <p className="text-base text-muted-foreground leading-relaxed lg:text-right max-w-md lg:ml-auto">
                Cinque decenni di amministrativismo, dalle prime grandi
                espropriazioni degli anni '70 al contenzioso sui fondi PNRR di
                oggi. Stessa famiglia professionale, stessa metodologia.
              </p>
            </Reveal>
          </div>

          {/* Editorial timeline */}
          <ol className="relative border-l hairline ml-2 lg:ml-0">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 90}>
                <li className="group relative pl-8 lg:pl-12 pb-12 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-2 block w-2.5 h-2.5 rotate-45 bg-gold transition-transform duration-500 group-hover:scale-125"
                  />
                  <div className="grid lg:grid-cols-12 gap-6 items-baseline">
                    <p className="lg:col-span-2 font-serif text-3xl lg:text-4xl text-gold-deep tabular-nums leading-none">
                      {m.year}
                    </p>
                    <h3 className="lg:col-span-4 font-serif text-xl text-primary leading-snug">
                      {m.title}
                    </h3>
                    <p className="lg:col-span-6 text-[15px] text-muted-foreground leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Credentials grid */}
          <div className="mt-20 pt-12 border-t hairline grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { i: Scale, t: "Magistrature Superiori", d: "Cassazione, Consiglio di Stato, Corte dei Conti" },
              { i: Award, t: "Cassazionisti", d: "Patrocinio davanti alle giurisdizioni superiori" },
              { i: BookOpen, t: "Pubblicazioni", d: "Articoli e contributi su riviste specializzate" },
              { i: Building, t: "Enti istituzionali", d: "Esperienza per Regione, Comuni, ASL, ASI" },
            ].map(({ i: Icon, t, d }, idx) => (
              <Reveal key={t} delay={idx * 80}>
                <div className="group flex flex-col gap-4">
                  <Icon
                    className="w-6 h-6 text-gold-deep transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <p className="font-serif text-lg text-primary">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20 items-end">
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
                  <div key={s.l} className="bg-background p-6 text-center">
                    <CountUp
                      to={s.v}
                      className="font-serif text-3xl text-primary tabular-nums"
                    />
                    <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <article className="group bg-background border hairline overflow-hidden transition-all duration-500 hover:shadow-[0_24px_60px_-30px_hsl(217_50%_12%/0.25)]">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                      loading="lazy"
                      width={900}
                      height={1100}
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-px bg-gold w-0 transition-all duration-700 group-hover:w-full"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold-deep font-semibold">
                      {m.role}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-primary transition-colors duration-300 group-hover:text-gold-deep">
                      {m.name}
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground">{m.focus}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Network"
                title="Una rete di partner di caratura nazionale."
              />
            </div>
            <p className="lg:col-span-6 lg:col-start-7 text-lg text-muted-foreground leading-relaxed self-end">
              Per le materie più specialistiche e i contenziosi più complessi, lo Studio
              opera in collaborazione con accademici e professionisti di primo piano,
              garantendo al cliente competenze trasversali in ogni ambito del diritto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-primary/10 border hairline">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="group relative bg-background p-8 h-full transition-colors duration-300 hover:bg-surface-container-low">
                  <ArrowUpRight
                    className="absolute top-5 right-5 w-4 h-4 text-gold-deep opacity-0 -translate-x-1 translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                    strokeWidth={1.75}
                  />
                  <p className="font-serif text-xl text-primary transition-colors duration-300 group-hover:text-gold-deep">
                    {p.name}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-gold-deep">
                    {p.area}
                  </p>
                  <span
                    aria-hidden
                    className="absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
