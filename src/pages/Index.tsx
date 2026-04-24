import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Building2, ChevronDown, ChevronLeft, ChevronRight,
  Landmark, Quote, ShieldCheck, Star, Scale, Users, Phone, Mail, Clock, Lock,
  BookOpen, CheckCircle2, ExternalLink,
} from "lucide-react";
import heroCourthouse from "@/assets/hero-courthouse.jpg";
import office from "@/assets/office.jpg";
import { Layout } from "@/components/site/Layout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import ResultCard, { type ResultDetail } from "@/components/site/ResultCard";
import { Reveal } from "@/components/site/Reveal";
import { Seo, orgJsonLd, faqJsonLd } from "@/components/site/Seo";

/**
 * Unified practice areas: 4 cards with expandable detail listing the
 * concrete procedures handled in each area. Replaces the previous
 * separate "Cosa facciamo per voi" + "Aree di pratica" sections.
 */
const practiceAreas = [
  {
    number: "01",
    title: "Espropriazioni",
    icon: Landmark,
    href: "/espropriazioni",
    summary:
      "Difesa dei proprietari nelle procedure ablative: opposizione alla stima, occupazioni illegittime, retrocessione dei beni.",
    procedures: [
      "Opposizione alla stima dell'indennità",
      "Occupazioni illegittime e d'urgenza",
      "Retrocessione totale o parziale dei beni",
      "Risarcimento per occupazione acquisitiva",
    ],
  },
  {
    number: "02",
    title: "Urbanistica ed Edilizia",
    icon: Scale,
    href: "/urbanistica-edilizia",
    summary:
      "Permessi a costruire, varianti, vincoli paesaggistici, abusi edilizi e procedimenti di sanatoria.",
    procedures: [
      "Permessi a costruire, SCIA e DIA",
      "Vincoli paesaggistici e Soprintendenze",
      "Abusi edilizi e procedure di sanatoria",
      "Varianti urbanistiche e PUC",
    ],
  },
  {
    number: "03",
    title: "Appalti Pubblici",
    icon: Building2,
    href: "/appalti-pubblici",
    summary:
      "Contenzioso davanti al TAR e al Consiglio di Stato: esclusioni, sospensive cautelari, anomalia delle offerte.",
    procedures: [
      "Ricorsi TAR su esclusioni",
      "Sospensive cautelari ex art. 55 c.p.a.",
      "Verifica anomalia offerte",
      "Contenzioso esecutivo e varianti",
    ],
  },
  {
    number: "04",
    title: "Concorsi Pubblici",
    icon: Users,
    href: "/concorsi-pubblici",
    summary:
      "Tutela dei candidati nelle selezioni pubbliche: impugnazione di graduatorie, prove e criteri di valutazione.",
    procedures: [
      "Impugnazione graduatorie",
      "Ricorsi collettivi pubblico impiego",
      "Contestazione prove e valutazioni",
      "Diniego di accesso agli atti",
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

  // Expanded practice card (one open at a time, first open by default)
  const [openPractice, setOpenPractice] = useState<number | null>(0);

  // E-book lead magnet form (UI-only — submit disabled, no backend yet)
  const [ebookEmail, setEbookEmail] = useState("");
  const [ebookSubmitted, setEbookSubmitted] = useState(false);
  const handleEbookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // [PLACEHOLDER] Da collegare a Lovable Cloud (tabella leads + invio PDF).
    if (!ebookEmail.includes("@")) return;
    setEbookSubmitted(true);
  };

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
              a: "Il termine ordinario è di 60 giorni dalla notifica o piena conoscenza dell'atto. Per il rito appalti il termine si riduce a 30 giorni. In casi specifici è ancora possibile attivare il ricorso straordinario al Capo dello Stato (120 giorni) o sollecitare un intervento in autotutela.",
            },
            {
              q: "Quanto costa una consulenza preliminare?",
              a: "Il primo contatto e l'inquadramento del caso sono gratuiti. La consulenza scritta o lo studio degli atti viene preventivata in modo trasparente prima di qualsiasi attivazione: nessun costo nascosto, nessun obbligo di prosecuzione.",
            },
            {
              q: "Quali sono i tempi medi di risposta?",
              a: "Per le richieste urgenti garantiamo un primo riscontro qualificato entro 48 ore lavorative. Per casi non urgenti, la presa in carico avviene tipicamente entro 3-5 giorni.",
            },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-stretch overflow-hidden bg-primary-deep text-primary-foreground">
        <img
          src={heroCourthouse}
          alt="Interno di un palazzo di giustizia neoclassico illuminato da luce dorata"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/75 to-primary-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/55 to-primary-deep/15" />
        <div className="absolute inset-0 bg-noise opacity-20" />

        {/* Decorative oversized year — editorial backdrop, mirrors the manifesto section */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-24 lg:bottom-28 right-[-2vw] hidden md:block serif-display text-background/[0.05] leading-none select-none tabular-nums tracking-tight"
          style={{ fontSize: "clamp(14rem, 28vw, 32rem)" }}
        >
          1974
        </div>

        <div className="relative z-10 editorial-container w-full pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col justify-end">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            {/* Left rail — editorial meta */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-start gap-4 pb-2">
              <span aria-hidden className="block w-px h-24 bg-gold/60" />
              <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.32em] text-background/50 font-semibold">
                Est. 1974
              </span>
            </div>

            {/* Main editorial block */}
            <div className="lg:col-span-11 max-w-[60rem]">
              <div className="flex items-center gap-4 mb-8 animate-fade-up">
                <span aria-hidden className="block w-10 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-gold font-semibold">
                  Studio Legale Accarino · Salerno
                </span>
              </div>
              <h1 className="serif-display text-[clamp(2.5rem,5.2vw,4.75rem)] text-background text-balance leading-[1.04] tracking-[-0.015em] animate-fade-up">
                Tuteliamo i tuoi diritti con{" "}
                <span className="text-gold">competenza</span>.
              </h1>
              <p className="mt-10 text-base lg:text-lg text-background/75 leading-[1.65] max-w-xl animate-fade-up text-pretty">
                Diritto amministrativo dal 1974: espropriazioni, appalti, urbanistica e
                concorsi pubblici. Ti rispondiamo entro 48 ore con un primo orientamento
                su tempi, opzioni e costi.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-x-10 gap-y-6 animate-fade-up">
                <CTAButton to="/contatti" variant="gold">Prenota una consulenza</CTAButton>
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-background/80 hover:text-gold transition-colors font-semibold"
                >
                  Oppure scrivici
                  <ArrowRight className="w-4 h-4 text-gold" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* bottom credential strip */}
        <div className="absolute bottom-0 inset-x-0 border-t border-background/10 bg-primary-deep/80 backdrop-blur-md z-10">
          <div className="editorial-container py-5 flex items-center gap-8">
            <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold flex-shrink-0 hidden sm:inline">
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
        <div className="editorial-container relative py-16 lg:py-20">
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

      {/* LO STUDIO — manifesto */}
      <section className="section-y border-b hairline relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-8 right-0 lg:right-[4%] serif-display text-primary/[0.04] leading-none select-none hidden md:block"
          style={{ fontSize: "clamp(12rem, 22vw, 24rem)" }}
        >
          1974
        </div>

        <div className="editorial-container grid lg:grid-cols-12 gap-12 lg:gap-20 relative">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Lo Studio</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 serif-display text-display-xl text-balance leading-[1.05]">
                  Diritto amministrativo a Salerno dal 1974.
                </h2>
              </Reveal>
              <Reveal delay={160} variant="hairline">
                <div className="mt-10 h-px w-24 bg-gold" />
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  Cinquant'anni di diritto pubblico
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <Reveal delay={120}>
              <p className="font-serif text-2xl text-primary leading-relaxed text-pretty drop-cap">
                Fondato dall'Avv. Francesco Accarino, lo Studio è punto di riferimento
                nel Sud Italia per la difesa di privati, imprese e Pubbliche
                Amministrazioni nei conflitti con il potere pubblico.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <blockquote className="relative pl-6 border-l-2 border-gold py-2 my-4">
                <p className="font-serif text-xl text-primary/90 leading-snug text-balance">
                  «Difendere il cittadino davanti alla Pubblica Amministrazione
                  è un mestiere di tecnica, pazienza e coraggio.»
                </p>
                <footer className="mt-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Avv. Francesco Accarino — Fondatore
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={260}>
              <p>
                Due sedi — Salerno e Cava de' Tirreni — un team di avvocati
                specializzati e una rete di partner di caratura nazionale, dal diritto
                europeo al contenzioso bancario. Una struttura concepita per
                assistere il cliente dal primo atto fino alla Cassazione e al
                Consiglio di Stato.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AREE DI PRATICA — unified cards with expandable detail */}
      <section id="aree-di-pratica" className="section-y bg-surface-container-low scroll-mt-24">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-20">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Aree di pratica</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 serif-display text-display-xl text-balance leading-[1.05]">
                  Quattro aree di specializzazione, una sola promessa di precisione.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140} className="lg:col-span-7 lg:pt-4">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Lo Studio concentra mezzo secolo di esperienza in quattro ambiti del
                diritto amministrativo. Apri un'area per vedere le procedure che
                gestiamo concretamente — oppure vai alla pagina dedicata.
              </p>
              <Link
                to="/contatti"
                className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-primary hover:text-gold-deep transition-colors font-semibold border-b hairline pb-2"
              >
                Parla con un avvocato
                <ArrowRight className="w-4 h-4 text-gold-deep" />
              </Link>
            </Reveal>
          </div>

          {/* Practice cards with expandable procedures */}
          <div className="border hairline divide-y hairline bg-background">
            {practiceAreas.map((area, i) => {
              const Icon = area.icon;
              const isOpen = openPractice === i;
              return (
                <article key={area.title}>
                  <button
                    type="button"
                    onClick={() => setOpenPractice(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className={`w-full text-left p-6 sm:p-8 lg:p-10 transition-colors ${
                      isOpen ? "bg-surface-container-low" : "hover:bg-surface-container-low/50"
                    }`}
                  >
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span
                        className={`hidden sm:inline-flex w-12 h-12 lg:w-14 lg:h-14 border hairline items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen ? "bg-primary border-primary" : "bg-background"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 lg:w-6 lg:h-6 transition-colors ${
                            isOpen ? "text-gold" : "text-gold-deep"
                          }`}
                          strokeWidth={1.25}
                        />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[11px] tracking-[0.22em] uppercase text-gold-deep font-semibold tabular-nums">
                            {area.number}
                          </span>
                          <span className="w-6 h-px bg-gold/60" aria-hidden />
                        </div>
                        <h3 className="font-serif text-2xl lg:text-3xl text-primary leading-tight">
                          {area.title}
                        </h3>
                        <p className="mt-3 text-[15px] lg:text-base text-muted-foreground leading-relaxed max-w-2xl">
                          {area.summary}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gold-deep flex-shrink-0 mt-2 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 lg:px-10 pb-8 lg:pb-10 sm:pl-[calc(2rem+3rem+1.25rem)] lg:pl-[calc(2.5rem+3.5rem+2rem)]">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-5">
                          Procedure che gestiamo
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-8">
                          {area.procedures.map((p) => (
                            <li key={p} className="flex items-start gap-3 text-[15px] text-primary font-serif leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-gold-deep mt-1 flex-shrink-0" strokeWidth={1.5} />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={area.href}
                          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-primary hover:text-gold-deep transition-colors font-semibold border-b hairline pb-2"
                        >
                          Approfondisci l'area
                          <ArrowUpRight className="w-4 h-4 text-gold-deep" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPALTI SIGNATURE BAND — "Esclusi da una gara: 30 giorni per ribaltarla" */}
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
                <span className="text-gold">Hai 30 giorni</span> per ribaltarla.
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

      {/* E-BOOK LEAD MAGNET — replaces the Metodo section */}
      <section className="section-y bg-background border-b hairline">
        <div className="editorial-container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual: stylized e-book cover */}
            <Reveal className="lg:col-span-5">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div aria-hidden className="absolute -inset-6 bg-gold/[0.06] -z-10" />
                <div className="relative aspect-[3/4] bg-primary-deep text-background p-8 lg:p-10 shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.4)] flex flex-col">
                  <div className="absolute inset-0 bg-noise opacity-25" />
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gold" />
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
                      Guida pratica · 2026
                    </p>
                    <div className="mt-6 w-12 h-px bg-gold" />
                  </div>
                  <h3 className="relative mt-10 serif-display text-3xl lg:text-4xl text-background leading-[1.05] text-balance">
                    Esclusi da una gara: 30 giorni per ribaltarla.
                  </h3>
                  <p className="relative mt-6 text-sm text-background/70 leading-relaxed">
                    La guida operativa al rito appalti per PMI e operatori economici.
                  </p>
                  <div className="relative mt-auto pt-10">
                    <div className="flex items-center justify-between pt-6 border-t border-gold/20">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                        Studio Accarino
                      </p>
                      <BookOpen className="w-5 h-5 text-gold" strokeWidth={1.25} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120} className="lg:col-span-7">
              <Eyebrow>E-book gratuito</Eyebrow>
              <h2 className="mt-6 serif-display text-display-lg text-balance leading-[1.08]">
                La guida pratica per ribaltare un'esclusione in 30 giorni.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Termini, atti, vizi rilevabili e tempi reali del rito appalti — in un
                unico PDF di 24 pagine, scritto dagli avvocati dello Studio per chi
                deve decidere in fretta.
              </p>

              <ul className="mt-8 space-y-3 max-w-xl">
                {[
                  "I 30 giorni: cosa fare nelle prime 72 ore",
                  "I 6 vizi formali più frequenti nelle esclusioni",
                  "Sospensiva cautelare: quando ha senso chiederla",
                  "Costi tipici e probabilità di esito",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] text-primary font-serif leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-gold-deep mt-1 flex-shrink-0" strokeWidth={1.5} />
                    {p}
                  </li>
                ))}
              </ul>

              {/* Form (UI only — backend not yet connected) */}
              <form onSubmit={handleEbookSubmit} className="mt-10 max-w-xl">
                {ebookSubmitted ? (
                  <div className="flex items-start gap-4 p-6 border hairline bg-surface-container-low">
                    <CheckCircle2 className="w-5 h-5 text-gold-deep mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-serif text-lg text-primary">Grazie. Riceverai l'e-book a breve.</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        [PLACEHOLDER] L'invio email non è ancora collegato. Da attivare con
                        Lovable Cloud (tabella leads + edge function).
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <label htmlFor="ebook-email" className="block text-[11px] uppercase tracking-[0.22em] text-primary font-semibold mb-3">
                      Inserisci la tua email
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        id="ebook-email"
                        type="email"
                        required
                        value={ebookEmail}
                        onChange={(e) => setEbookEmail(e.target.value)}
                        placeholder="nome@studio.it"
                        className="flex-1 bg-background border hairline px-4 py-4 text-[15px] font-serif text-primary placeholder:text-muted-foreground/70 placeholder:font-sans placeholder:text-sm focus:outline-none focus:border-gold-deep transition-colors min-h-[52px]"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary text-primary-foreground text-label-sm uppercase tracking-[0.16em] font-semibold hover:bg-primary-deep transition-colors min-h-[52px]"
                      >
                        Scarica l'e-book
                        <ArrowRight className="w-4 h-4 text-gold" />
                      </button>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                      Useremo la tua email solo per inviarti l'e-book e — al massimo una volta
                      al mese — un aggiornamento normativo. Niente spam, disiscrizione con un click.
                    </p>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — with Google badge */}
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

              {/* Google reviews badge */}
              <a
                href="[PLACEHOLDER_GOOGLE_BUSINESS_PROFILE_URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 group inline-flex items-stretch border hairline bg-background hover:border-gold-deep transition-colors"
              >
                <div className="flex items-center gap-3 px-4 py-3 border-r hairline">
                  {/* Google "G" logo (inline SVG, brand colors) */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">
                      Recensioni su
                    </p>
                    <p className="font-serif text-sm text-primary">Google</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums hidden sm:inline">
                    Profilo verificato
                  </span>
                  <ExternalLink
                    className="w-3.5 h-3.5 text-gold-deep group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    strokeWidth={1.5}
                  />
                </div>
              </a>
              <p className="mt-3 text-[11px] text-muted-foreground/70 leading-relaxed">
                [PLACEHOLDER] Sostituire con il link reale al Google Business Profile.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="relative bg-background border hairline p-8 sm:p-10 lg:p-14 min-h-[340px] flex flex-col">
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
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 hidden lg:block serif-display text-[18rem] leading-none text-background/[0.04] select-none"
        >
          1974
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />

        <div className="relative editorial-container py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>
                  <span className="text-gold">Iniziamo</span>
                </Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-8 serif-display text-display-xl text-background text-balance leading-[1.05]">
                  Una consulenza riservata per il tuo caso, entro 48 ore.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 text-lg text-background/70 leading-relaxed max-w-xl">
                  Raccontaci la tua situazione: un avvocato dello Studio leggerà gli atti,
                  individuerà i termini ancora utili e ti proporrà la strategia più efficace —
                  con un preventivo trasparente, prima di qualsiasi impegno.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <ul className="mt-12 grid sm:grid-cols-3 gap-px bg-background/10 border-y border-background/10">
                  {[
                    { i: Clock, t: "Risposta in 48h", s: "Anche nei weekend per urgenze" },
                    { i: Lock, t: "Riservatezza totale", s: "Segreto professionale" },
                    { i: ShieldCheck, t: "Preventivo chiaro", s: "Nessun costo nascosto" },
                  ].map(({ i: Icon, t, s }) => (
                    <li key={t} className="bg-primary p-6">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                      <p className="mt-4 font-serif text-base text-background">{t}</p>
                      <p className="mt-1 text-xs text-background/60 leading-relaxed">{s}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-background/10">
              <Reveal delay={120}>
                <div className="flex items-center gap-3">
                  <span aria-hidden className="block w-8 h-px bg-gold" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
                    Contattaci ora
                  </span>
                </div>

                <div className="mt-8 space-y-6">
                  <CTAButton to="/contatti" variant="gold">
                    Prenota la consulenza
                  </CTAButton>
                  <p className="text-xs text-background/50 leading-relaxed max-w-xs">
                    Compila il modulo riservato: ti ricontattiamo entro 24 ore lavorative
                    con un primo riscontro qualificato.
                  </p>
                </div>

                <div className="mt-12 pt-10 border-t border-background/10 space-y-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-background/50 font-semibold">
                    Oppure scrivici direttamente
                  </p>
                  <a
                    href="tel:[PLACEHOLDER]"
                    className="group flex items-start gap-4 -m-2 p-2 transition-colors hover:bg-background/5"
                  >
                    <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <p className="font-serif text-lg text-background group-hover:text-gold transition-colors">
                        [PLACEHOLDER] +39 ___ _______
                      </p>
                      <p className="text-xs text-background/55 mt-1">Lun–Ven · 9:00 – 19:00</p>
                    </div>
                  </a>
                  <a
                    href="mailto:[PLACEHOLDER]"
                    className="group flex items-start gap-4 -m-2 p-2 transition-colors hover:bg-background/5"
                  >
                    <Mail className="w-4 h-4 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div className="min-w-0">
                      <p className="font-serif text-lg text-background group-hover:text-gold transition-colors break-all">
                        [PLACEHOLDER] studio@dominio.it
                      </p>
                      <p className="text-xs text-background/55 mt-1">Risposta entro 48 ore</p>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={200}>
            <div className="mt-20 pt-8 border-t border-background/10 flex flex-wrap items-center justify-between gap-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-background/50 font-semibold">
                Salerno · Cava de' Tirreni — Patrocinio in tutta Italia
              </p>
              <p className="text-[11px] tracking-[0.18em] text-background/40 tabular-nums">
                Dal 1974 · Cassazionisti · TAR · Consiglio di Stato
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
