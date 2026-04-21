import { Award, BookOpen, Building, Scale } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CTAButton } from "@/components/site/CTAButton";
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
      {/* Hero */}
      <section className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Eyebrow>Lo Studio</Eyebrow>
            <h1 className="mt-6 serif-display text-display-2xl text-balance">
              Cinquant'anni al servizio del<br />
              <span className="italic">diritto amministrativo</span>.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Fondato a Salerno nel 1974, lo Studio Legale Accarino è oggi uno dei
              riferimenti nel Sud Italia per il contenzioso amministrativo. Una storia
              di continuità professionale, costruita su tre principi: rigore tecnico,
              riservatezza, risultato.
            </p>
          </div>
          <aside className="lg:col-span-5">
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
          </aside>
        </div>
      </section>

      {/* Heritage block */}
      <section className="section-y">
        <div className="editorial-container grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
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
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <Eyebrow>La nostra storia</Eyebrow>
            <h2 className="mt-6 serif-display text-display-xl text-balance">
              Una continuità professionale rara nel panorama italiano.
            </h2>
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
      <section className="section-y bg-surface-container-low border-y hairline">
        <div className="editorial-container">
          <div className="max-w-3xl mb-16">
            <Eyebrow>Il team</Eyebrow>
            <h2 className="mt-6 serif-display text-display-xl">
              Avvocati. Specialisti. Persone.
            </h2>
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
      <section className="section-y">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <Eyebrow>Network</Eyebrow>
              <h2 className="mt-6 serif-display text-display-xl">
                Una rete di partner di caratura nazionale.
              </h2>
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
      <section className="bg-primary text-primary-foreground py-24 relative">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="editorial-container relative text-center max-w-3xl mx-auto">
          <Eyebrow>
            <span className="text-gold">Iniziamo a lavorare insieme</span>
          </Eyebrow>
          <h2 className="mt-6 serif-display text-display-xl text-background text-balance">
            La tua questione merita un'attenzione dedicata.
          </h2>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/contatti" variant="gold">Prenota una consulenza</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
