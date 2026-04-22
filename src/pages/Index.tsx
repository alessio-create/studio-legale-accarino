import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Award, Building2, ChevronLeft, ChevronRight, Gavel,
  Landmark, Quote, Scale, ShieldCheck, Star, Users,
} from "lucide-react";
import heroColumns from "@/assets/hero-columns.jpg";
import salernoImg from "@/assets/salerno.jpg";
import lawBooks from "@/assets/law-books.jpg";
import office from "@/assets/office.jpg";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";

/**
 * Practice areas grouped Pitta-style: each "family" lists its sub-services.
 */
const practiceFamilies = [
  {
    family: "Diritto del Territorio",
    href: "/espropriazioni",
    icon: Landmark,
    blurb:
      "Difesa dei proprietari di fronte al potere espropriativo e al governo del territorio.",
    items: [
      { label: "Opposizione alla stima dell'indennità", to: "/espropriazioni" },
      { label: "Occupazioni illegittime e d'urgenza", to: "/espropriazioni" },
      { label: "Permessi a costruire e SCIA", to: "/urbanistica-edilizia" },
      { label: "Varianti urbanistiche e PUC", to: "/urbanistica-edilizia" },
      { label: "Abusi edilizi e sanatorie", to: "/urbanistica-edilizia" },
      { label: "Vincoli e Soprintendenze", to: "/urbanistica-edilizia" },
    ],
  },
  {
    family: "Imprese e Pubblica Amministrazione",
    href: "/appalti-pubblici",
    icon: Building2,
    blurb:
      "Tutela degli operatori economici e dei candidati nei rapporti con la PA.",
    items: [
      { label: "Ricorsi TAR su esclusioni", to: "/appalti-pubblici" },
      { label: "Sospensive cautelari", to: "/appalti-pubblici" },
      { label: "Verifica anomalia offerte", to: "/appalti-pubblici" },
      { label: "Contenzioso esecutivo e varianti", to: "/appalti-pubblici" },
      { label: "Impugnazione graduatorie concorsi", to: "/concorsi-pubblici" },
      { label: "Ricorsi collettivi pubblico impiego", to: "/concorsi-pubblici" },
    ],
  },
];

const results = [
  { value: "+€1,2M", label: "Indennità ottenuta", caseType: "Espropriazione PA" },
  { value: "Annullamento", label: "Aggiudicazione illegittima", caseType: "Appalto Pubblico" },
  { value: "Reintegro", label: "Candidata esclusa", caseType: "Concorso Pubblico" },
  { value: "Sanatoria", label: "Recupero edilizio", caseType: "Urbanistica" },
];

const testimonials = [
  {
    quote:
      "Lo Studio ha gestito la nostra opposizione alla stima con rigore eccezionale. La perizia dei tecnici di parte e la strategia processuale ci hanno permesso di triplicare l'indennità inizialmente offerta. Comunicazione costante e tempi certi.",
    author: "G. Romano",
    role: "Proprietaria, Provincia di Salerno",
    date: "03/2026",
  },
  {
    quote:
      "Esclusi da una gara da 4 milioni per un vizio formale. In meno di 30 giorni il TAR ha sospeso l'aggiudicazione e l'appalto è stato riaffidato. Esperienza, riservatezza e nessuna improvvisazione: esattamente ciò che serve nei contenziosi pubblici.",
    author: "M. De Luca",
    role: "Amministratore PMI Edile",
    date: "01/2026",
  },
  {
    quote:
      "Mi sono rivolta allo Studio dopo l'esclusione da un concorso pubblico. Hanno costruito un ricorso collettivo con altri 14 candidati: graduatoria annullata e nuova prova ammessa. Approccio umano e tecnicamente impeccabile.",
    author: "F. Esposito",
    role: "Funzionario PA",
    date: "11/2025",
  },
];

const credentials = [
  "Regione Campania",
  "Comune di Salerno",
  "ASL Salerno",
  "Consorzio ASI",
  "Autostrade Meridionali",
  "Ordine Avvocati Salerno",
];

export default function Index() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = testimonials[activeTestimonial];
  const nextTestimonial = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-primary text-primary-foreground">
        <img
          src={heroColumns}
          alt="Colonne neoclassiche di un palazzo di giustizia"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/85 via-primary/55 to-primary" />
        <div className="absolute inset-0 bg-noise opacity-40" />

        {/* Top meta line */}
        <div className="absolute top-28 left-0 right-0">
          <div className="editorial-container flex items-center justify-between">
            <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.22em] text-background/80">
              <span className="w-8 h-px bg-gold" />
              <span>Studio Legale Accarino · Salerno</span>
            </div>
            <span className="hidden md:inline text-[11px] uppercase tracking-[0.22em] text-background/60">
              Diritto Amministrativo · Est. 1974
            </span>
          </div>
        </div>

        <div className="relative z-10 editorial-container pb-24 lg:pb-32">
          <div className="max-w-5xl">
            <p className="font-serif italic text-gold text-2xl mb-8 animate-fade-up">
              Cinquant'anni al servizio della giustizia amministrativa.
            </p>
            <h1 className="serif-display text-[clamp(2.75rem,7vw,6rem)] text-background text-balance leading-[1.02] animate-fade-up">
              La forza della tradizione,<br />
              <span className="italic font-normal">la precisione</span> del diritto moderno.
            </h1>
            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-8 animate-fade-up">
              <CTAButton to="/contatti" variant="gold">Prenota una consulenza</CTAButton>
              <div className="flex items-center gap-4 text-sm text-background/80">
                <span className="font-serif italic text-gold text-3xl">50+</span>
                <span className="uppercase tracking-[0.18em] text-[11px] leading-snug">
                  Anni di esperienza<br />in diritto amministrativo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom credential strip */}
        <div className="absolute bottom-0 inset-x-0 border-t border-background/15 bg-primary-deep/60 backdrop-blur-sm">
          <div className="editorial-container py-5 flex items-center gap-8 overflow-x-auto">
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold flex-shrink-0">
              Hanno scelto lo Studio
            </span>
            <div className="flex items-center gap-10 text-[12px] tracking-[0.14em] uppercase text-background/60 whitespace-nowrap">
              {credentials.map((c) => (
                <span key={c} className="flex items-center gap-3">
                  <span className="w-1 h-1 bg-gold/60" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO MANIFESTO */}
      <section className="section-y border-b hairline">
        <div className="editorial-container grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Eyebrow>Lo Studio</Eyebrow>
            <h2 className="mt-6 serif-display text-display-xl text-balance">
              Diritto Amministrativo a Salerno dal 1974.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="font-serif text-2xl text-primary leading-relaxed text-pretty">
              Fondato dall'Avv. Francesco Accarino, lo Studio è punto di riferimento nel
              Sud Italia per la difesa di privati, imprese e Pubbliche Amministrazioni
              nei conflitti con il potere pubblico.
            </p>
            <p>
              Due sedi — Salerno e Cava de' Tirreni — un team di avvocati specializzati
              e una rete di partner di caratura nazionale, dal diritto europeo al
              contenzioso bancario. Una struttura concepita per assistere il cliente
              dal primo atto fino alla Cassazione e al Consiglio di Stato.
            </p>
            <div className="pt-8 grid grid-cols-3 gap-8 border-t hairline">
              {[
                { v: "1974", l: "Fondazione" },
                { v: "9", l: "Professionisti" },
                { v: "2", l: "Sedi operative" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl text-primary">{s.v}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="section-y bg-surface-container-low">
        <div className="editorial-container">
          <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
            <div className="max-w-2xl">
              <Eyebrow>Aree di pratica</Eyebrow>
              <h2 className="mt-6 serif-display text-display-xl text-balance">
                Quattro verticali, una sola promessa: precisione.
              </h2>
            </div>
            <Link
              to="/contatti"
              className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors font-semibold"
            >
              Tutte le aree <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {practices.map((p) => (
              <PracticeCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY / IMAGE BREAK */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[400px] lg:h-[640px]">
            <img
              src={lawBooks}
              alt="Volumi legali rilegati in pelle nello studio"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1600}
              height={1100}
            />
          </div>
          <div className="bg-primary text-primary-foreground p-12 lg:p-20 flex flex-col justify-center">
            <Eyebrow>
              <span className="text-gold">Heritage</span>
            </Eyebrow>
            <h2 className="mt-8 serif-display text-display-xl text-background text-balance">
              Una eredità di <span className="italic text-gold">cinquant'anni</span> al servizio del diritto pubblico.
            </h2>
            <p className="mt-8 text-lg text-background/75 leading-relaxed max-w-xl">
              Dalle prime cause in materia espropriativa degli anni '70 fino al
              contenzioso PNRR di oggi: lo Studio ha attraversato cinque decenni di
              evoluzione del diritto amministrativo italiano, costruendo una casistica
              che oggi rappresenta un patrimonio unico al servizio dei propri clienti.
            </p>
            <div className="mt-12 flex flex-wrap gap-10">
              {[
                { i: Award, t: "Cassazionisti", s: "Patrocinio innanzi alle Magistrature Superiori" },
                { i: Gavel, t: "TAR · CdS · Corte dei Conti", s: "Esperienza diretta in tutte le giurisdizioni" },
                { i: ShieldCheck, t: "EEAT", s: "Pubblicazioni e docenze accademiche" },
              ].map(({ i: Icon, t, s }) => (
                <div key={t} className="flex items-start gap-4 max-w-[220px]">
                  <Icon className="w-5 h-5 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="font-serif text-base text-background">{t}</p>
                    <p className="text-xs text-background/60 mt-1 leading-relaxed">{s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-y">
        <div className="editorial-container">
          <div className="max-w-3xl mb-16">
            <Eyebrow>Il metodo</Eyebrow>
            <h2 className="mt-6 serif-display text-display-xl">
              Un approccio strutturato, dall'analisi alla decisione.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border hairline">
            {[
              { n: "I", t: "Analisi preliminare", d: "Studio della documentazione e valutazione di fondatezza entro 48 ore." },
              { n: "II", t: "Strategia processuale", d: "Definizione della linea difensiva e individuazione dei vizi rilevabili." },
              { n: "III", t: "Atti e contenzioso", d: "Predisposizione del ricorso, istanza cautelare e udienze." },
              { n: "IV", t: "Decisione e impugnazioni", d: "Esame della sentenza, valutazione di appello al Consiglio di Stato." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-10 lg:p-12">
                <p className="font-serif italic text-5xl text-gold/40">{s.n}</p>
                <h3 className="mt-8 font-serif text-xl text-primary">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERRITORIO */}
      <section className="section-y bg-surface-container-low border-y hairline">
        <div className="editorial-container grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="gold-corner p-3">
              <img
                src={salernoImg}
                alt="Veduta della costa di Salerno"
                className="w-full h-[460px] object-cover"
                loading="lazy"
                width={1600}
                height={1000}
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <Eyebrow>Il territorio</Eyebrow>
            <h2 className="mt-6 serif-display text-display-xl text-balance">
              Profondamente radicati a Salerno e in Campania.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Conoscere il territorio significa conoscere le Pubbliche Amministrazioni
              che vi operano, i Tribunali davanti ai quali si discute, i tempi reali del
              contenzioso. Una competenza locale che trasforma la conoscenza in vantaggio
              processuale.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "TAR Salerno",
                "TAR Campania (Napoli)",
                "Consiglio di Stato",
                "Corte dei Conti — Sez. Campania",
                "Tribunale Sup. Acque Pubbliche",
                "Cassazione",
              ].map((c) => (
                <li key={c} className="flex items-center gap-3 text-primary">
                  <span className="w-1.5 h-1.5 bg-gold" />
                  <span className="font-serif">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="editorial-container grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>Domande frequenti</Eyebrow>
            <h2 className="mt-6 serif-display text-display-lg">
              Le risposte alle domande più comuni.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Trasparenza su procedure, tempi e costi. Per quesiti specifici,
              prenota una consulenza riservata.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQ
              items={[
                {
                  q: "In quanto tempo posso ottenere una prima valutazione del mio caso?",
                  a: "La prima analisi documentale viene completata entro 48 ore dalla ricezione dei materiali. La consulenza orientativa di 15 minuti è gratuita e prevede una sintesi delle probabilità di successo, dei tempi e dei costi.",
                },
                {
                  q: "Quanto costa un ricorso al TAR?",
                  a: "I costi variano in funzione della materia e della complessità: per il contenzioso amministrativo standard si parte da €3.000–€5.000 per il primo grado. In sede di consulenza forniamo un preventivo scritto, dettagliato e non vincolante.",
                },
                {
                  q: "Quali sono i termini per impugnare un atto della Pubblica Amministrazione?",
                  a: "Il termine ordinario è di 60 giorni dalla notifica o piena conoscenza dell'atto. In materia di appalti pubblici è di 30 giorni. Per le procedure espropriative valgono termini specifici. È fondamentale agire tempestivamente per non incorrere in decadenza.",
                },
                {
                  q: "Lo Studio assiste anche imprese fuori dalla Campania?",
                  a: "Sì. Lo Studio patrocina davanti a tutte le Magistrature italiane: Consiglio di Stato, Cassazione, TSAP. Per il contenzioso davanti ai TAR fuori regione operiamo in associazione con corrispondenti locali.",
                },
                {
                  q: "Posso impugnare un atto se sono già scaduti i 60 giorni?",
                  a: "In casi specifici è possibile attivare strumenti straordinari (ricorso straordinario al Capo dello Stato, autotutela amministrativa). Una valutazione preliminare individua le strade ancora percorribili.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="editorial-container relative grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>
              <span className="text-gold">Iniziamo</span>
            </Eyebrow>
            <h2 className="mt-6 serif-display text-display-xl text-background text-balance">
              Una consulenza riservata per il tuo caso, entro 48 ore.
            </h2>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <CTAButton to="/contatti" variant="gold">Prenota la consulenza</CTAButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
