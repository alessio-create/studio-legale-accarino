import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Building2, Calendar, Landmark, Scale, Users,
} from "lucide-react";
import heroCourthouse from "@/assets/hero-courthouse.jpg";
import practiceEspropriazioni from "@/assets/practice-espropriazioni.jpg";
import practiceUrbanistica from "@/assets/practice-urbanistica.jpg";
import practiceAppalti from "@/assets/practice-appalti.jpg";
import practiceConcorsi from "@/assets/practice-concorsi.jpg";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CTAButton } from "@/components/site/CTAButton";
import ResultCard, { type ResultDetail } from "@/components/site/ResultCard";
import { PracticeCard } from "@/components/site/PracticeCard";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { MaximTicker } from "@/components/site/MaximTicker";
import { WhereWeAre } from "@/components/site/WhereWeAre";
import { Seo, orgJsonLd, faqJsonLd } from "@/components/site/Seo";

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
    title: "Concorsi Pubblici",
    description:
      "Tutela dei candidati nelle selezioni pubbliche: impugnazione di graduatorie, prove e criteri di valutazione.",
    icon: Users,
    href: "/concorsi-pubblici",
    topics: ["Graduatorie", "Ricorsi collettivi", "Prove e valutazioni"],
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
      "Pareri di legittimità su atti amministrativi",
      "Difesa in giudizio davanti al TAR",
      "Procedimenti espropriativi e ablatori",
      "Gare d'appalto e procedure di affidamento",
      "Contenzioso esecutivo e varianti contrattuali",
      "Procedimenti disciplinari e responsabilità erariale",
      "Concorsi pubblici e selezioni del personale",
      "Provvedimenti urbanistici e pianificazione",
      "Recupero crediti e azioni di rivalsa",
      "Formazione del personale e compliance",
    ],
  },
  {
    audience: "Per le Persone",
    intro:
      "Tutela di privati cittadini, professionisti e imprese nei rapporti conflittuali con la Pubblica Amministrazione.",
    items: [
      "Opposizione alla stima dell'indennità di esproprio",
      "Occupazioni illegittime e d'urgenza",
      "Retrocessione totale o parziale dei beni",
      "Permessi a costruire, SCIA e DIA",
      "Vincoli paesaggistici e Soprintendenze",
      "Abusi edilizi e procedure di sanatoria",
      "Ricorsi su esclusioni in gara d'appalto",
      "Sospensive cautelari ex art. 55 c.p.a.",
      "Impugnazione graduatorie e prove concorsuali",
      "Ricorsi collettivi nel pubblico impiego",
      "Diniego di accesso agli atti",
      "Sanzioni amministrative e ricorsi gerarchici",
    ],
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

/** Hero stats kept as part of the hero introduction. */
const heroStats = [
  { to: 50, suffix: "+", thousands: false, label: "Anni di esperienza", caption: "Dal 1974 al servizio del diritto pubblico" },
  { to: 4, suffix: "", pad: 2, label: "Aree di specializzazione", caption: "Espropri · Urbanistica · Appalti · Concorsi" },
  { to: 1200, suffix: "+", thousands: true, label: "Cause patrocinate", caption: "TAR, Consiglio di Stato, Cassazione" },
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
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-primary-deep text-primary-foreground">
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

        <div className="relative z-10 editorial-container pt-40 pb-24 lg:pt-48 lg:pb-32">
          <div className="max-w-4xl">
            <p className="eyebrow !text-gold mb-8 animate-fade-up">
              <span className="text-background/80">Studio Legale · Salerno &amp; Cava de&apos; Tirreni</span>
            </p>
            <h1 className="serif-display text-[clamp(2.75rem,6.5vw,5.5rem)] text-background text-balance leading-[1.04] animate-fade-up">
              Tuteliamo i tuoi diritti con <span className="text-gold">competenza</span>.
            </h1>
            <div className="mt-12 flex flex-col md:flex-row md:items-center gap-8 animate-fade-up">
              <CTAButton to="/contatti" variant="gold">Prenota una consulenza</CTAButton>
              <div className="flex items-center gap-4 text-sm">
                <span className="font-serif text-gold text-3xl">50+</span>
                <span className="uppercase tracking-[0.18em] text-[11px] leading-snug text-background/70">
                  Anni di esperienza<br />in diritto amministrativo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom credential ticker, part of the hero */}
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
        <div className="relative editorial-container py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-gold-deep font-semibold">
              <span aria-hidden className="w-6 h-px bg-gold" />
              Lo Studio in cifre
              <span aria-hidden className="w-6 h-px bg-gold" />
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0 gap-x-8">
            {heroStats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 90}
                className="group relative flex flex-col items-center text-center px-2 lg:px-6"
              >
                <p
                  className="font-serif text-gold-deep leading-none tracking-tight tabular-nums transition-transform duration-500 group-hover:-translate-y-0.5"
                  style={{ fontSize: "clamp(3rem, 5.2vw, 4.75rem)" }}
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
                  className="mt-5 w-10 h-px bg-gold/60 transition-all duration-500 group-hover:w-16 group-hover:bg-gold"
                />
                <p className="mt-5 font-serif text-lg text-primary leading-snug">
                  {s.label}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground leading-relaxed max-w-[18ch]">
                  {s.caption}
                </p>
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
      <section className="bg-background border-y hairline">
        <div className="editorial-container py-20 lg:py-28">
          <div className="max-w-3xl mb-16 lg:mb-20">
            <Eyebrow>Cosa facciamo per voi</Eyebrow>
            <h2 className="mt-6 serif-display text-display-xl text-balance">
              Le procedure che gestiamo, divise per chi ne ha bisogno.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Una mappa operativa dei servizi: dalla consulenza preventiva al
              contenzioso davanti alle Magistrature Superiori, distinta tra Pubbliche
              Amministrazioni e soggetti privati.
            </p>
          </div>

          {procedureGroups.map((group, gi) => (
            <div
              key={group.audience}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${gi > 0 ? "mt-24 lg:mt-32" : ""}`}
            >
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <span aria-hidden className="block w-8 h-px bg-gold mb-6" />
                  <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold">
                    {group.audience}
                  </p>
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-[260px]">
                    {group.intro}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-9">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                  {group.items.map((item, idx) => (
                    <li
                      key={item}
                      className="group flex items-start justify-between gap-6 py-6 border-t hairline first:border-t-0 md:[&:nth-child(2)]:border-t-0"
                    >
                      <span className="font-serif text-lg text-primary leading-snug text-pretty pr-4 group-hover:text-gold-deep transition-colors">
                        {item}
                      </span>
                      <span className="text-[11px] tabular-nums tracking-[0.18em] text-muted-foreground pt-1 flex-shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── EVIDENCES ───────────────── */}
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
            <span className="text-xs text-background/50 max-w-sm leading-relaxed">
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

      {/* ───────────────── BLOG ───────────────── */}
      <section className="section-y bg-background">
        <div className="editorial-container">
          <div className="flex items-end justify-between flex-wrap gap-8 mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Dal nostro blog</Eyebrow>
              <h2 className="mt-6 serif-display text-display-xl text-balance">
                Approfondimenti, sentenze, novità normative.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
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
                className="group bg-background p-10 lg:p-12 flex flex-col hover:bg-surface-container-low transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                    {a.category}
                  </span>
                  <span className="flex items-center gap-2 text-[11px] text-muted-foreground tabular-nums">
                    <Calendar className="w-3 h-3" strokeWidth={1.5} />
                    {a.date}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-primary leading-snug text-balance group-hover:text-gold-deep transition-colors">
                  {a.title}
                </h3>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed flex-1">
                  {a.excerpt}
                </p>

                <div className="mt-10 pt-6 border-t hairline flex items-center justify-between">
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
