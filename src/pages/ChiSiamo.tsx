import { Award, BookOpen, Building, Scale } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { CTAButton } from "@/components/site/CTAButton";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
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

export default function ChiSiamo() {
  return (
    <Layout>
      <Seo
        title="Chi Siamo · Studio Legale a Salerno dal 1974"
        description="Studio Legale Accarino: cinquant'anni di diritto amministrativo a Salerno. Due sedi, nove professionisti, una rete di partner di caratura nazionale."
        path="/chi-siamo"
        jsonLd={orgJsonLd}
      />
      <PageHero
        eyebrow="Lo Studio"
        eyebrowSuffix="Dal 1974"
        title={
          <>
            Cinquant'anni al servizio del{" "}
            <span className="italic">diritto amministrativo</span>.
          </>
        }
        lead="Fondato a Salerno nel 1974, lo Studio Legale Accarino è oggi uno dei riferimenti nel Sud Italia per il contenzioso amministrativo. Una storia di continuità professionale, costruita su tre principi: rigore tecnico, riservatezza, risultato."
        aside={
          <div className="grid grid-cols-2 gap-px bg-primary/10 border hairline">
            {[
              { v: "1974", l: "Anno di fondazione" },
              { v: "9", l: "Professionisti" },
              { v: "2", l: "Sedi operative" },
              { v: "6", l: "Partner di rete" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-8">
                <p className="font-serif text-4xl text-primary">{s.v}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        }
      />

      {/* Heritage block */}
      <section className="bg-background border-b hairline">
        <div className="editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <div className="gold-corner p-3">
              <img
                src={office}
                alt="Interno dello Studio Legale Accarino"
                className="w-full h-[520px] object-cover grayscale-[15%]"
                loading="lazy"
                width={1600}
                height={1100}
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeader
              eyebrow="La nostra storia"
              title="Una continuità professionale rara nel panorama italiano."
            />
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Fondato dall'<span className="text-primary font-medium">Avv. Francesco Accarino</span>,
                lo Studio nasce con una vocazione precisa: assistere chi entra in
                conflitto con il potere pubblico — privati, imprese, enti locali — con
                competenza tecnica di altissimo profilo.
              </p>
              <p>
                Cinque decenni dopo, la stessa famiglia professionale prosegue
                l'attività con una struttura ampliata: due sedi (Salerno e Cava de'
                Tirreni), una rete di partner di caratura nazionale, e un'esperienza
                accumulata che spazia dai primi grandi contenziosi espropriativi degli
                anni '70 al contenzioso sui fondi PNRR di oggi.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {[
                { i: Scale, t: "Magistrature Superiori", d: "Cassazione, Consiglio di Stato, Corte dei Conti" },
                { i: Award, t: "Cassazionisti", d: "Patrocinio davanti alle giurisdizioni superiori" },
                { i: BookOpen, t: "Pubblicazioni", d: "Articoli e contributi su riviste specializzate" },
                { i: Building, t: "Enti istituzionali", d: "Esperienza per Regione, Comuni, ASL, ASI" },
              ].map(({ i: Icon, t, d }) => (
                <div key={t} className="flex items-start gap-4">
                  <Icon className="w-5 h-5 text-gold-deep mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-serif text-base text-primary">{t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-20 lg:py-28">
          <div className="mb-16 lg:mb-20">
            <SectionHeader
              eyebrow="Il team"
              title="Avvocati. Specialisti. Persone."
              intro="Una squadra ristretta di professionisti dedicati: ogni mandato è seguito personalmente da un partner di riferimento."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-background border hairline">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    width={900}
                    height={1100}
                  />
                </div>
                <div className="p-8">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold-deep font-semibold">
                    {m.role}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-primary">{m.name}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">{m.focus}</p>
                </div>
              </div>
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
            {partners.map((p) => (
              <div key={p.name} className="bg-background p-8">
                <p className="font-serif text-xl text-primary">{p.name}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-gold-deep">
                  {p.area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary text-primary-foreground border-y border-gold/30 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="relative editorial-container py-24 lg:py-32 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
              <span aria-hidden className="w-6 h-px bg-gold" />
              Iniziamo a lavorare insieme
              <span aria-hidden className="w-6 h-px bg-gold" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-8 serif-display text-display-xl text-background text-balance leading-[1.05]">
              La tua questione merita un'attenzione dedicata.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex justify-center">
              <CTAButton to="/contatti" variant="gold">
                Prenota una consulenza
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
