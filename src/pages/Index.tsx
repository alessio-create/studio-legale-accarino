import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Award, Building2, ChevronLeft, ChevronRight, Gavel,
  Landmark, Quote, ShieldCheck, Star, Scale, Users,
} from "lucide-react";
import heroCourthouse from "@/assets/hero-courthouse.jpg";
import salernoImg from "@/assets/salerno.jpg";
import lawBooks from "@/assets/law-books.jpg";
import office from "@/assets/office.jpg";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import ResultCard, { type ResultDetail } from "@/components/site/ResultCard";
import { PracticeCard } from "@/components/site/PracticeCard";

/**
 * Four core specializations — one card per practice detail page.
 */
const specializations = [
  {
    number: "01",
    title: "Espropriazioni",
    description:
      "Difesa dei proprietari nelle procedure ablative: opposizione alla stima, occupazioni illegittime, retrocessione dei beni.",
    icon: Landmark,
    href: "/espropriazioni",
    topics: ["Indennità di esproprio", "Occupazioni d'urgenza", "Retrocessione"],
  },
  {
    number: "02",
    title: "Urbanistica ed Edilizia",
    description:
      "Permessi a costruire, varianti, vincoli paesaggistici, abusi edilizi e procedimenti di sanatoria.",
    icon: Scale,
    href: "/urbanistica-edilizia",
    topics: ["Permessi e SCIA", "Vincoli e Soprintendenze", "Sanatorie"],
  },
  {
    number: "03",
    title: "Appalti Pubblici",
    description:
      "Contenzioso davanti al TAR e al Consiglio di Stato: esclusioni, sospensive cautelari, anomalia delle offerte.",
    icon: Building2,
    href: "/appalti-pubblici",
    topics: ["Ricorsi TAR", "Sospensive cautelari", "Esecuzione del contratto"],
  },
  {
    number: "04",
    title: "Concorsi Pubblici",
    description:
      "Tutela dei candidati nelle selezioni pubbliche: impugnazione di graduatorie, prove e criteri di valutazione.",
    icon: Users,
    href: "/concorsi-pubblici",
    topics: ["Graduatorie", "Ricorsi collettivi", "Prove e valutazioni"],
  },
];

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

const results: ResultDetail[] = [
  {
    value: "+€1,2M",
    label: "Indennità ottenuta",
    caseType: "Espropriazione PA",
    detail: {
      title: "Opposizione alla stima rideterminata",
      summary:
        "Procedura espropriativa per opera pubblica con indennità inizialmente sottostimata.",
      procedure: "Ricorso Corte d'Appello con CTU di parte e perizia tecnica.",
      duration: "18 mesi dal deposito ricorso",
      outcome: "Indennità ricalcolata: +€1,2M rispetto alla prima offerta.",
    },
  },
  {
    value: "Annullato",
    label: "Aggiudicazione illegittima",
    caseType: "Appalto Pubblico",
    detail: {
      title: "Sospensiva e annullamento gara da €4M",
      summary:
        "Esclusione per vizio formale in gara d'appalto per servizi alla PA.",
      procedure: "Ricorso TAR con istanza cautelare ex art. 55 c.p.a.",
      duration: "28 giorni alla sospensiva, 7 mesi al merito",
      outcome: "Aggiudicazione annullata, gara riaffidata al ricorrente.",
    },
  },
  {
    value: "Reintegrata",
    label: "Candidata esclusa",
    caseType: "Concorso Pubblico",
    detail: {
      title: "Ricorso collettivo su graduatoria concorso PA",
      summary:
        "Concorso pubblico con criteri di valutazione applicati in modo non uniforme.",
      procedure: "Ricorso TAR collettivo (15 ricorrenti) con motivi aggiunti.",
      duration: "11 mesi alla sentenza",
      outcome: "Graduatoria annullata, prova ripetuta, candidata reintegrata.",
    },
  },
  {
    value: "Sanata",
    label: "Recupero edilizio",
    caseType: "Urbanistica",
    detail: {
      title: "Sanatoria edilizia con vincolo paesaggistico",
      summary:
        "Immobile in zona vincolata oggetto di ordinanza di demolizione.",
      procedure:
        "Istanza di accertamento di conformità + ricorso TAR su diniego e parere Soprintendenza.",
      duration: "14 mesi complessivi",
      outcome: "Diniego annullato, sanatoria rilasciata, demolizione revocata.",
    },
  },
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
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-primary-deep text-primary-foreground">
        <img
          src={heroCourthouse}
          alt="Interno di un palazzo di giustizia neoclassico illuminato da luce dorata"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* Cinematic gradient — keeps image readable while protecting text */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/70 to-primary-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-20" />

        <div className="relative z-10 editorial-container pt-40 pb-24 lg:pt-48 lg:pb-32">
          <div className="max-w-4xl">
            <p className="eyebrow !text-gold mb-8 animate-fade-up">
              <span className="text-background/80">Studio Legale Accarino · dal 1974</span>
            </p>
            <h1 className="serif-display text-[clamp(2.75rem,6.5vw,5.5rem)] text-background text-balance leading-[1.04] animate-fade-up">
              Diritto amministrativo con la <span className="italic font-normal text-gold">precisione</span> di mezzo secolo.
            </h1>
            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-8 animate-fade-up">
              <CTAButton to="/contatti" variant="gold">Prenota una consulenza</CTAButton>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-serif italic text-gold text-3xl">50+</span>
                <span className="uppercase tracking-[0.18em] text-[11px] leading-snug text-background/70">
                  Anni di esperienza<br />in diritto amministrativo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom credential strip */}
        <div className="absolute bottom-0 inset-x-0 border-t border-background/10 bg-primary-deep/80 backdrop-blur-md z-10">
          <div className="editorial-container py-5 flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold flex-shrink-0">
              Hanno scelto lo Studio
            </span>
            <div
              className="relative flex-1 overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              }}
            >
              <div className="flex w-max animate-ticker items-center gap-10 text-[12px] tracking-[0.14em] uppercase text-background/60 whitespace-nowrap">
                {[...credentials, ...credentials].map((c, i) => (
                  <span key={`${c}-${i}`} className="flex items-center gap-3 pr-10">
                    <span className="w-1 h-1 bg-gold" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS STRIP */}
      <section className="bg-primary text-primary-foreground border-y border-gold/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-25" />
        <div className="editorial-container relative py-14 lg:py-20">
          <div className="flex items-start justify-between flex-wrap gap-6 mb-12">
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
                Esiti rappresentativi
              </span>
            </div>
            <span className="text-xs italic text-background/50 max-w-sm leading-relaxed">
              Esempi illustrativi del tipo di esito ottenibile. Casi anonimizzati nel rispetto del segreto professionale.
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 divide-y lg:divide-y-0 lg:divide-x divide-background/10">
            {results.map((r, i) => (
              <ResultCard
                key={r.label + i}
                result={r}
                index={i}
                isFirst={i === 0}
              />
            ))}
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

      {/* PRACTICE AREAS — grouped families (Pitta-style) */}
      <section className="section-y bg-surface-container-low">
        {/* SPECIALIZZAZIONI — 4 core practice areas */}
        <div className="editorial-container mb-20 lg:mb-28">
          <div className="flex items-end justify-between flex-wrap gap-8 mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Specializzazioni</Eyebrow>
              <h2 className="mt-6 serif-display text-display-xl text-balance">
                Quattro aree di specializzazione, una sola promessa di precisione.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Lo Studio concentra mezzo secolo di esperienza in quattro ambiti
                del diritto amministrativo. Esplora ciascuna area per scoprire
                competenze, casistica e procedure.
              </p>
            </div>
            <Link
              to="/contatti"
              className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors font-semibold"
            >
              Parla con un avvocato <ArrowRight className="w-4 h-4 text-gold-deep" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border hairline">
            {specializations.map((s) => (
              <div key={s.title} className="bg-background">
                <PracticeCard {...s} />
              </div>
            ))}
          </div>
        </div>

        <div className="editorial-container">
          <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
            <div className="max-w-2xl">
              <Eyebrow>Aree di pratica</Eyebrow>
              <h2 className="mt-6 serif-display text-display-xl text-balance">
                Vi accompagniamo passo dopo passo, dall'analisi fino alla decisione.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Due grandi famiglie di competenze, otto specializzazioni operative.
                Scopri come possiamo difendere i tuoi diritti davanti alla Pubblica Amministrazione.
              </p>
            </div>
            <Link
              to="/contatti"
              className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors font-semibold"
            >
              Tutte le aree <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-px bg-primary/10 border hairline">
            {practiceFamilies.map((fam) => {
              const Icon = fam.icon;
              return (
                <div key={fam.family} className="bg-background p-10 lg:p-12 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 border hairline flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold-deep" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-serif text-2xl text-primary leading-tight">
                      {fam.family}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {fam.blurb}
                  </p>
                  <ul className="space-y-1 mb-8 flex-1">
                    {fam.items.map((item, idx) => (
                      <li key={item.label + idx}>
                        <Link
                          to={item.to}
                          className="group flex items-center justify-between gap-4 py-2.5 border-b border-primary/5 hover:border-gold/40 transition-colors"
                        >
                          <span className="text-sm font-serif text-primary">
                            {item.label}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={fam.href}
                    className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold hover:text-gold-deep transition-colors"
                  >
                    Approfondisci l'area
                    <ArrowRight className="w-4 h-4 text-gold-deep" />
                  </Link>
                </div>
              );
            })}
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

      {/* APPALTI SIGNATURE BAND */}
      <section className="relative bg-primary-deep text-primary-foreground overflow-hidden">
        <img
          src={office}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/95 to-primary-deep/70" />
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="relative editorial-container py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold/40">
                <span className="w-2 h-2 bg-gold animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                  Servizio di Punta · Appalti Pubblici
                </span>
              </div>
              <h2 className="mt-8 serif-display text-display-xl text-background text-balance leading-[1.05]">
                Esclusi da una gara?<br />
                <span className="italic text-gold">Hai 30 giorni</span> per ribaltarla.
              </h2>
              <p className="mt-8 text-lg text-background/75 leading-relaxed max-w-2xl">
                Quando una PMI viene esclusa o l'aggiudicazione di un appalto è viziata,
                il tempo è il primo avversario. Il rito speciale appalti prevede tempi
                accelerati: cautelare entro 30 giorni, sentenza di merito entro 9 mesi.
                Lo Studio offre risposta entro 48 ore e patrocinio davanti a TAR e
                Consiglio di Stato in tutta Italia.
              </p>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
                {[
                  { v: "30gg", l: "Termini di ricorso" },
                  { v: "48h", l: "Prima analisi" },
                  { v: "TAR · CdS", l: "Tutte le sedi" },
                ].map((s) => (
                  <div key={s.l} className="border-l border-gold/30 pl-4">
                    <p className="font-serif text-2xl text-gold leading-none">{s.v}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-background/60 leading-snug">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton to="/appalti-pubblici" variant="gold">
                  Servizio Appalti Pubblici
                </CTAButton>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-3 px-6 py-4 text-label-sm uppercase tracking-[0.16em] text-background border border-background/20 hover:border-gold hover:text-gold transition-colors"
                >
                  Consulenza urgente
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold/40 border-r-0 border-b-0" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-gold/40 border-l-0 border-t-0" />
                <div className="bg-primary p-10 border border-gold/30">
                  <Quote className="w-10 h-10 text-gold mb-6" strokeWidth={1.25} />
                  <p className="font-serif text-xl text-background leading-relaxed text-pretty">
                    "L'esperienza maturata su entrambi i lati del tavolo —
                    assistendo sia stazioni appaltanti sia operatori economici —
                    consente una visione strategica che fa la differenza nel contenzioso."
                  </p>
                  <div className="mt-8 pt-6 border-t border-gold/20">
                    <p className="text-sm text-gold font-semibold tracking-wide">
                      STUDIO LEGALE ACCARINO
                    </p>
                    <p className="text-xs text-background/60 mt-1">
                      Difesa imprese e PA dal 1974
                    </p>
                  </div>
                </div>
              </div>
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

      {/* TESTIMONIALS */}
      <section className="section-y bg-surface-container-low border-y hairline">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <Eyebrow>Voci dei clienti</Eyebrow>
              <h2 className="mt-6 serif-display text-display-lg text-balance">
                Cosa dicono di noi.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Testimonianze raccolte tra clienti privati, imprese e funzionari
                pubblici che si sono affidati allo Studio negli ultimi anni.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Valutazione media clienti
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative bg-background border hairline p-10 lg:p-14 min-h-[340px] flex flex-col">
                <Quote className="w-10 h-10 text-gold/40 absolute top-8 right-8" strokeWidth={1} />
                <p className="font-serif text-xl lg:text-2xl text-primary leading-relaxed text-pretty flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-10 pt-6 border-t hairline flex items-end justify-between flex-wrap gap-6">
                  <div>
                    <p className="font-serif text-lg text-primary">{t.author}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                      {t.role}
                    </p>
                    <p className="text-[11px] text-gold-deep mt-2 font-semibold">
                      {t.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {String(activeTestimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                    </span>
                    <div className="flex gap-2">
                      <button
                        aria-label="Testimonianza precedente"
                        onClick={prevTestimonial}
                        className="w-10 h-10 border hairline flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        aria-label="Testimonianza successiva"
                        onClick={nextTestimonial}
                        className="w-10 h-10 border hairline flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TERRITORIO */}
      <section className="section-y bg-background">
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
