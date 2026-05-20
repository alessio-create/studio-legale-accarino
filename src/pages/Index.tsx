import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Building2, Calendar, Landmark, Scale, Users,
} from "lucide-react";
import heroCourthouse from "@/assets/hero-courthouse.jpg";
import practiceEspropriazioni from "@/assets/practice-espropriazioni.jpg";
import practiceUrbanistica from "@/assets/practice-urbanistica.jpg";
import practiceAppalti from "@/assets/practice-appalti.jpg";
import practiceConcorsi from "@/assets/practice-concorsi.jpg";
import francescoPhoto from "@/assets/team-francesco-accarino.png";
import paoloPhoto from "@/assets/team-paolo-accarino.png";
import danielePhoto from "@/assets/team-daniele-accarino.png";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CTAButton } from "@/components/site/CTAButton";
import ResultCard, { type ResultDetail } from "@/components/site/ResultCard";
import { PracticeCard } from "@/components/site/PracticeCard";
import { CaseStudyCard, type CaseStudy } from "@/components/site/CaseStudyCard";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { MaximTicker } from "@/components/site/MaximTicker";
import { WhereWeAre } from "@/components/site/WhereWeAre";
import { Seo, orgJsonLd, faqJsonLd } from "@/components/site/Seo";
import { procedureTitleToSlug } from "@/data/procedures";

/* ─────────────────────────── DATA ─────────────────────────── */

/** FEATURES — four core specializations (one card per practice page). */
const specializations = [
  {
    number: "01",
    title: "Espropriazioni",
    description:
      "Difesa dei proprietari nelle procedure ablative: opposizione alla stima, occupazioni illegittime, retrocessione dei beni.",
    icon: Landmark,
    href: "/espropriazioni",
    topics: ["Indennità di esproprio", "Occupazioni d'urgenza", "Retrocessione"],
    image: practiceEspropriazioni,
    imageAlt: "Strumento di rilievo topografico su mappa catastale al tramonto",
  },
  {
    number: "02",
    title: "Urbanistica ed Edilizia",
    description:
      "Permessi a costruire, varianti, vincoli paesaggistici, abusi edilizi e procedimenti di sanatoria.",
    icon: Scale,
    href: "/urbanistica-edilizia",
    topics: ["Permessi e SCIA", "Vincoli e Soprintendenze", "Sanatorie"],
    image: practiceUrbanistica,
    imageAlt: "Dettaglio architettonico di palazzo classico italiano in luce dorata",
  },
  {
    number: "03",
    title: "Appalti Pubblici",
    description:
      "Contenzioso davanti al TAR e al Consiglio di Stato: esclusioni, sospensive cautelari, anomalia delle offerte.",
    icon: Building2,
    href: "/appalti-pubblici",
    topics: ["Ricorsi TAR", "Sospensive cautelari", "Esecuzione del contratto"],
    image: practiceAppalti,
    imageAlt: "Ingresso di edificio istituzionale con colonne in pietra",
  },
  {
    number: "04",
    title: "Attività della Pubblica Amministrazione",
    description:
      "Consulenza e difesa di Enti e Amministrazioni: pareri di legittimità, procedimenti amministrativi, contenzioso e compliance.",
    icon: Users,
    href: "/concorsi-pubblici",
    topics: ["Pareri di legittimità", "Procedimenti amministrativi", "Formazione e compliance"],
    image: practiceConcorsi,
    imageAlt: "Aula d'esame classica con file di banchi in legno e luce naturale",
  },
];

/** WHAT WE CAN DO FOR YOU — procedures grouped by audience. */
const procedureGroups = [
  {
    audience: "Per gli Enti",
    intro:
      "Assistenza alle Pubbliche Amministrazioni e alle stazioni appaltanti nella prevenzione e gestione del contenzioso.",
    items: [
      "Difesa in giudizio davanti al TAR e al Consiglio di Stato",
      "Consulenza sull'attività amministrativa",
      "Procedimenti espropriativi e ablatori",
      "Provvedimenti urbanistici e pianificazione",
      "Gare d'appalto e procedure di affidamento",
      "Corte dei Conti e responsabilità erariale",
      "Concorsi pubblici e selezioni del personale",
      "Formazione del personale e compliance",
    ],
  },
  {
    audience: "Per le Persone",
    intro:
      "Tutela di privati cittadini, professionisti e imprese nei rapporti conflittuali con la Pubblica Amministrazione.",
    items: [
      "Espropriazioni pubbliche, opposizione a stima, occupazioni, retrocessione",
      "Edilizia, ordinanze di demolizione e procedure di sanatoria",
      "Permessi a costruire, SCIA e DIA",
      "Vincoli di beni culturali e paesaggistici",
      "Ricorsi contro atti delle Pubbliche amministrazioni",
      "Ricorsi per gare d'appalto",
      "Ricorsi nel pubblico impiego",
      "Ricorsi contro sanzioni amministrative per l'accesso agli atti",
    ],
  },
];

/** TEAM — three named professionals (placeholder portraits). */
const team = [
  {
    name: "Francesco Accarino",
    role: "Founding Partner",
    focus: "Diritto amministrativo, espropriazioni, contenzioso.",
    photo: francescoPhoto,
  },
  {
    name: "Paolo Accarino",
    role: "Senior Partner",
    focus: "Diritto amministrativo, appalti pubblici, urbanistica.",
    photo: paoloPhoto,
  },
  {
    name: "Daniele Accarino",
    role: "Partner",
    focus: "Diritto amministrativo, concorsi pubblici, sanità.",
    photo: danielePhoto,
  },
];

/** EVIDENCES — anonymised representative outcomes. */
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

/** CASE STUDIES — three editorial long-form anonymised proceedings. */
const caseStudies: CaseStudy[] = [
  {
    year: "2024",
    area: "Espropriazioni · Cilento",
    title: "Indennità triplicata per terreno agricolo a vocazione edificatoria",
    outcome: "+€1,2M sull'offerta iniziale",
    excerpt:
      "Famiglia proprietaria di terreno agricolo soggetto a procedura espropriativa per opera viaria pubblica, con indennità inizialmente liquidata a valore agricolo.",
    image: practiceEspropriazioni,
    detail: {
      metric: { value: "+€1,2M", label: "Recupero rispetto alla prima stima" },
      challenge:
        "L'Ente espropriante aveva quantificato l'indennità sulla base del valore agricolo del fondo, ignorando la vocazione edificatoria emergente dal PUC vigente e dalla destinazione urbanistica delle aree limitrofe.",
      strategy:
        "Opposizione alla stima davanti alla Corte d'Appello competente, con CTU di parte e perizia tecnica giurata che ha ricostruito il valore di mercato sulla base di comparabili omogenei. Coordinamento con tributarista per gli aspetti fiscali.",
      result:
        "Indennità rideterminata in sede giudiziale con un incremento di oltre €1,2M rispetto alla prima offerta. Riconoscimento integrale degli interessi e delle spese di lite.",
    },
  },
  {
    year: "2023",
    area: "Appalti Pubblici · Campania",
    title: "Sospensiva monocratica e annullamento di gara da €4M",
    outcome: "Aggiudicazione riaffidata al ricorrente",
    excerpt:
      "PMI esclusa per presunto vizio formale dell'offerta tecnica in una procedura aperta per servizi alla Pubblica Amministrazione del valore di circa €4M.",
    image: practiceAppalti,
    detail: {
      metric: { value: "28 giorni", label: "Dal ricorso alla sospensiva" },
      challenge:
        "Esclusione comunicata a ridosso dell'aggiudicazione provvisoria, con motivazione fondata su un asserito difetto di sottoscrizione di un allegato tecnico. Tempi tecnici di reazione strettissimi.",
      strategy:
        "Ricorso TAR con istanza cautelare ex art. 55 c.p.a. e contestuale richiesta di misure monocratiche. Memoria centrata sul principio di tassatività delle cause di esclusione e sull'eccesso di potere per disparità di trattamento.",
      result:
        "Sospensiva monocratica concessa in 28 giorni, confermata in sede collegiale. Sentenza di merito favorevole entro 7 mesi: aggiudicazione annullata e gara riaffidata al ricorrente.",
    },
  },
  {
    year: "2024",
    area: "Urbanistica · Costiera",
    title: "Sanatoria edilizia in zona soggetta a vincolo paesaggistico",
    outcome: "Demolizione revocata, immobile sanato",
    excerpt:
      "Immobile residenziale in area sottoposta a vincolo paesaggistico, oggetto di ordinanza di demolizione a seguito di difformità rilevate dall'Ufficio Tecnico comunale.",
    image: practiceUrbanistica,
    detail: {
      metric: { value: "14 mesi", label: "Dall'istanza alla sanatoria definitiva" },
      challenge:
        "Procedimento sanzionatorio già in stadio avanzato, parere preliminare negativo della Soprintendenza e termini di demolizione spontanea in scadenza. Coesistenza di profili amministrativi e penali.",
      strategy:
        "Istanza di accertamento di conformità ex art. 36 D.P.R. 380/2001, accompagnata da relazione paesaggistica integrativa. Ricorso TAR avverso il diniego comunale e il parere della Soprintendenza, con richiesta di sospensiva.",
      result:
        "Diniego e parere negativo annullati in sede giurisdizionale. Rilascio del titolo in sanatoria, revoca dell'ordinanza di demolizione e archiviazione del procedimento sanzionatorio.",
    },
  },
];

/** Hero stats kept as part of the hero introduction. */
const heroStats = [
  { to: 50, suffix: "+", thousands: false, label: "Anni di esperienza", caption: "Dal 1974 al servizio del diritto pubblico" },
  { to: 4, suffix: "", pad: 2, label: "Aree di specializzazione", caption: "Espropri · Urbanistica · Appalti · Concorsi" },
  { to: 1700, suffix: "+", thousands: true, label: "Cause patrocinate", caption: "TAR, Consiglio di Stato, Cassazione" },
  { to: 9, suffix: "", label: "Professionisti dedicati", caption: "Team multidisciplinare su due sedi" },
];

/** BLOG — three featured articles linking to /blog. */
const featuredArticles = [
  {
    category: "Espropriazioni",
    date: "12 Marzo 2026",
    readTime: "6 min",
    title: "Indennità di esproprio: come contestare la stima dell'Agenzia delle Entrate.",
    excerpt:
      "Una guida operativa ai criteri di valutazione e agli strumenti di opposizione davanti alla Corte d'Appello.",
  },
  {
    category: "Appalti Pubblici",
    date: "28 Febbraio 2026",
    readTime: "4 min",
    title: "Rito appalti: i 30 giorni che decidono la sorte di una gara.",
    excerpt:
      "Termini, sospensiva cautelare e strategie processuali nel contenzioso accelerato davanti al TAR.",
  },
  {
    category: "Urbanistica",
    date: "14 Febbraio 2026",
    readTime: "5 min",
    title: "Sanatorie edilizie in zone vincolate: cosa cambia con la riforma.",
    excerpt:
      "L'accertamento di conformità e il parere della Soprintendenza alla luce della giurisprudenza più recente.",
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

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function Index() {
  return (
    <Layout>
      <Seo
        title="Studio Legale a Salerno · Diritto Amministrativo dal 1974"
        description="Espropriazioni, appalti, concorsi, urbanistica a Salerno. Ti rispondiamo entro 48 ore con un primo orientamento gratuito su tempi, opzioni e costi."
        path="/"
        jsonLd={[
          orgJsonLd,
          faqJsonLd([
            {
              q: "Quanto tempo ho per impugnare un atto della Pubblica Amministrazione?",
              a: "Il termine ordinario è di 60 giorni dalla notifica o piena conoscenza dell'atto. Per il rito appalti il termine si riduce a 30 giorni.",
            },
            {
              q: "Quanto costa una consulenza preliminare?",
              a: "Il primo contatto e l'inquadramento del caso sono gratuiti. La consulenza scritta viene preventivata in modo trasparente.",
            },
            {
              q: "Quali sono i tempi medi di risposta?",
              a: "Per le richieste urgenti garantiamo un primo riscontro qualificato entro 48 ore lavorative.",
            },
          ]),
        ]}
      />

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative min-h-[80vh] sm:min-h-[92vh] flex items-end overflow-hidden bg-primary-deep text-primary-foreground">
        <img
          src={heroCourthouse}
          alt="Interno di un palazzo di giustizia neoclassico illuminato da luce dorata"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/70 to-primary-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/40 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-20" />

        <div className="relative z-10 editorial-container pt-28 pb-28 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
          <div className="max-w-4xl">
            <p className="eyebrow !text-gold mb-5 sm:mb-8 animate-fade-up">
              <span className="text-background/80">Studio Legale · Salerno &amp; Cava de&apos; Tirreni</span>
            </p>
            <h1 className="serif-display text-[clamp(2.25rem,6.5vw,5.5rem)] text-background text-balance leading-[1.06] animate-fade-up">
              Tuteliamo i tuoi diritti con <span className="text-gold">competenza</span>.
            </h1>
            <div className="mt-8 sm:mt-12 flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 animate-fade-up">
              <CTAButton to="/contatti" variant="gold">Parla con un avvocato</CTAButton>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-serif text-gold text-2xl sm:text-3xl">50+</span>
                <span className="uppercase tracking-[0.18em] text-[11px] leading-snug text-background/70">
                  Anni di esperienza<br />in diritto amministrativo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom credential ticker, part of the hero */}
        <div className="absolute bottom-0 inset-x-0 border-t border-background/10 bg-primary-deep/80 backdrop-blur-md z-10">
          <div className="editorial-container py-4 sm:py-5 flex items-center gap-4 sm:gap-8">
            <span className="hidden sm:inline-flex text-[10px] uppercase tracking-[0.22em] text-gold font-semibold flex-shrink-0">
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

      {/* ───── HERO STATS — premium editorial band ───── */}
      <section className="relative bg-background border-b hairline overflow-hidden">
        {/* Subtle gold ambient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-14 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold-deep font-semibold">
              <span aria-hidden className="w-6 h-px bg-gold" />
              Lo Studio in cifre
              <span aria-hidden className="w-6 h-px bg-gold" />
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-14 lg:gap-y-0 gap-x-6 sm:gap-x-8">
            {heroStats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="group relative flex flex-col items-center text-center px-2 lg:px-6"
              >
                <p
                  className="font-serif text-gold-deep leading-none tracking-tight tabular-nums transition-transform duration-500 group-hover:-translate-y-0.5"
                  style={{ fontSize: "clamp(2.25rem, 5.2vw, 4.75rem)" }}
                >
                  <CountUp
                    to={s.to}
                    suffix={s.suffix}
                    pad={s.pad}
                    thousands={s.thousands}
                  />
                </p>
                <span
                  aria-hidden
                  className="mt-4 sm:mt-5 w-8 sm:w-10 h-px bg-gold/60 transition-all duration-500 group-hover:w-16 group-hover:bg-gold"
                />
                <p className="mt-4 sm:mt-5 font-serif text-base sm:text-lg text-primary leading-snug">
                  {s.label}
                </p>
                <p className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground leading-relaxed max-w-[18ch]">
                  {s.caption}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───── LO STUDIO — team & reviews unified into one authoritative band ───── */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        {/* Subtle gold ambient wash spanning the entire band */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 0%, hsl(var(--gold)) 0%, transparent 65%)",
          }}
        />

        <div className="relative editorial-container py-14 sm:py-20 lg:py-28">
          {/* — Single authoritative header — */}
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16 lg:mb-24">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                Lo Studio
                <span aria-hidden className="w-8 h-px bg-gold" />
              </span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 sm:mt-8 serif-display text-display-xl text-balance text-primary leading-[1.08]">
                I volti che firmano ogni pratica,{" "}
                <span className="italic">le voci che ce ne danno conto</span>.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Ogni mandato è seguito personalmente da uno dei professionisti
                dello Studio. La fiducia non si racconta: si misura nel tempo e
                nelle parole di chi ci ha scelto.
              </p>
            </Reveal>
            <Reveal variant="hairline" delay={380} className="mx-auto mt-8 sm:mt-10 w-px h-10 sm:h-14 bg-gold/40">
              <span className="sr-only">divider</span>
            </Reveal>
          </div>

          {/* — Team grid — primary visual anchor — */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            {team.map((m, i) => (
              <Reveal
                key={m.name}
                delay={400 + i * 180}
                className="group flex flex-col"
              >
                {/* Portrait */}
                <div className="relative aspect-[3/4] bg-primary text-primary-foreground overflow-hidden">
                  <img
                    src={m.photo}
                    alt={`Ritratto di ${m.name}`}
                    className="absolute inset-0 w-full h-full object-cover object-[center_15%] grayscale transition-all duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/40"
                  />
                </div>

                <div className="pt-6 sm:pt-7">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-gold-deep font-semibold">
                    {m.role}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-primary leading-tight transition-colors duration-500 group-hover:text-gold-deep">
                    {m.name}
                  </h3>
                  <span
                    aria-hidden
                    className="block mt-5 w-10 h-px bg-gold/60 transition-all duration-500 group-hover:w-20 group-hover:bg-gold"
                  />
                  <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                    {m.focus}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ───────────────── TICKER ───────────────── */}
      <MaximTicker />

      {/* ───────────────── FEATURES ───────────────── */}
      <section className="section-y bg-surface-container-low">
        <div className="editorial-container">
          <div className="flex items-end justify-between flex-wrap gap-6 sm:gap-8 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Specializzazioni</Eyebrow>
              <h2 className="mt-5 sm:mt-6 serif-display text-display-xl text-balance">
                Quattro aree di specializzazione, una sola promessa di precisione.
              </h2>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
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
            {specializations.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 120}
                className="bg-background"
              >
                <PracticeCard {...s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── WHAT WE CAN DO FOR YOU ───────────── */}
      <section className="relative border-y hairline bg-[hsl(var(--primary)/0.04)]">
        {/* Soft navy tint + gold ambient wash to anchor the section in brand */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--primary) / 0.06) 0%, hsl(var(--primary) / 0.02) 60%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            background:
              "radial-gradient(60% 50% at 90% 0%, hsl(var(--gold)) 0%, transparent 70%)",
          }}
        />
        <div className="relative editorial-container py-14 sm:py-20 lg:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 sm:gap-8 mb-10 sm:mb-16 lg:mb-20">
            <div className="max-w-3xl">
              <Eyebrow>Cosa facciamo per voi</Eyebrow>
              <h2 className="mt-5 sm:mt-6 serif-display text-display-xl text-balance">
                Le procedure che gestiamo, divise per chi ne ha bisogno.
              </h2>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Una mappa operativa dei servizi: dalla consulenza preventiva al
                contenzioso davanti alle Magistrature Superiori, distinta tra Pubbliche
                Amministrazioni e soggetti privati.
              </p>
            </div>
            <Link
              to="/procedure"
              className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors font-semibold"
            >
              Indice completo
              <ArrowRight className="w-4 h-4 text-gold-deep" />
            </Link>
          </div>

          {procedureGroups.map((group, gi) => (
            <div
              key={group.audience}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 ${gi > 0 ? "mt-14 sm:mt-24 lg:mt-32" : ""}`}
            >
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <span aria-hidden className="block w-8 h-px bg-gold mb-6" />
                  <p className="text-[13px] sm:text-sm uppercase tracking-[0.24em] text-primary font-semibold">
                    {group.audience}
                  </p>
                  <p className="mt-4 sm:mt-6 text-base sm:text-[17px] text-muted-foreground leading-relaxed max-w-[300px]">
                    {group.intro}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-9">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {group.items.map((item, idx) => (
                    <li
                      key={item}
                      className="group border-t hairline first:border-t-0 md:[&:nth-child(2)]:border-t-0"
                    >
                      {procedureTitleToSlug[item] ? (
                        <Link
                          to={`/${procedureTitleToSlug[item]}`}
                          className="flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6 min-h-[56px]"
                        >
                          <span className="font-serif text-base sm:text-lg text-primary leading-snug text-pretty pr-2 sm:pr-4 group-hover:text-gold-deep transition-colors">
                            {item}
                          </span>
                          <span className="flex items-center gap-3 pt-1 flex-shrink-0">
                            <ArrowUpRight className="w-4 h-4 text-gold-deep opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            <span className="text-[11px] tabular-nums tracking-[0.18em] text-muted-foreground">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                          </span>
                        </Link>
                      ) : (
                        <div className="flex items-start justify-between gap-4 sm:gap-6 py-5 sm:py-6">
                          <span className="font-serif text-base sm:text-lg text-primary leading-snug text-pretty pr-2 sm:pr-4">
                            {item}
                          </span>
                          <span className="text-[11px] tabular-nums tracking-[0.18em] text-muted-foreground pt-1 flex-shrink-0">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── EVIDENCES ───────────────── */}
      {/* ───────────────── CASE STUDIES ───────────────── */}
      <section className="section-y bg-surface-container-low border-b hairline">
        <div className="editorial-container">
          <div className="flex items-end justify-between flex-wrap gap-6 sm:gap-8 mb-10 sm:mb-14 lg:mb-16">
            <div className="max-w-2xl">
              <Eyebrow>Casi studio</Eyebrow>
              <h2 className="mt-5 sm:mt-6 serif-display text-display-xl text-balance">
                Tre fascicoli, tre vittorie raccontate dall'interno.
              </h2>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Selezione editoriale di mandati conclusi negli ultimi due anni.
                Apri ogni caso per leggere sfida, strategia e risultato — con dati
                anonimizzati nel rispetto del segreto professionale.
              </p>
            </div>
            <span className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
              <span aria-hidden className="w-8 h-px bg-gold" />
              Tocca una scheda per aprirla
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10 border hairline">
            {caseStudies.map((c, i) => (
              <CaseStudyCard key={c.title} caseStudy={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── BLOG ───────────────── */}
      <section className="section-y bg-background">
        <div className="editorial-container">
          <div className="flex items-end justify-between flex-wrap gap-6 sm:gap-8 mb-10 sm:mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Dal nostro blog</Eyebrow>
              <h2 className="mt-5 sm:mt-6 serif-display text-display-xl text-balance">
                Approfondimenti, sentenze, novità normative.
              </h2>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Una selezione di letture firmate dai professionisti dello Studio
                per restare aggiornati sull'evoluzione del diritto amministrativo.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary hover:text-gold-deep transition-colors font-semibold"
            >
              Tutti gli articoli <ArrowRight className="w-4 h-4 text-gold-deep" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10 border hairline">
            {featuredArticles.map((a) => (
              <Link
                key={a.title}
                to="/blog"
                className="group bg-background p-7 sm:p-10 lg:p-12 flex flex-col hover:bg-surface-container-low transition-colors"
              >
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                    {a.category}
                  </span>
                  <span className="flex items-center gap-2 text-[11px] text-muted-foreground tabular-nums">
                    <Calendar className="w-3 h-3" strokeWidth={1.5} />
                    {a.date}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-primary leading-snug text-balance group-hover:text-gold-deep transition-colors">
                  {a.title}
                </h3>
                <p className="mt-4 sm:mt-5 text-sm text-muted-foreground leading-relaxed flex-1">
                  {a.excerpt}
                </p>

                <div className="mt-8 sm:mt-10 pt-6 border-t hairline flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {a.readTime} di lettura
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-gold-deep group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/blog"
            className="md:hidden mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-primary font-semibold"
          >
            Tutti gli articoli <ArrowRight className="w-4 h-4 text-gold-deep" />
          </Link>
        </div>
      </section>

      {/* ───────────────── WHERE WE ARE ───────────────── */}
      <WhereWeAre />
    </Layout>
  );
}
