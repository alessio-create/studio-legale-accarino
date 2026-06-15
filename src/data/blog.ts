import blogIndennitaEsproprio from "@/assets/blog-indennita-esproprio.jpg";
import blogSoccorsoIstruttorio from "@/assets/blog-soccorso-istruttorio.jpg";
import blogRicorsoGraduatoria from "@/assets/blog-ricorso-graduatoria.jpg";
import blogPermessoCostruire from "@/assets/blog-permesso-costruire.jpg";
import blogOccupazioneAcquisitiva from "@/assets/blog-occupazione-acquisitiva.jpg";
import blogAnomaliaOfferta from "@/assets/blog-anomalia-offerta.jpg";

export interface BlogArticleEvidence {
  label: string;
  value: string;
}

export interface BlogArticleSection {
  heading: string;
  body: string[];
}

export interface BlogArticle {
  slug: string;
  category: string;
  title: string;
  /** Optional shorter title used as <title> tag (kept under 60 chars). */
  seoTitle?: string;
  excerpt: string;
  image: string;
  date: string;
  readingTime: string;
  author: string;
  bullets: string[];
  sections: BlogArticleSection[];
  evidence: BlogArticleEvidence[];
  sources: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "indennita-esproprio-aree-edificabili-2025",
    category: "Espropriazioni",
    title: "Indennità di esproprio per aree edificabili: i criteri aggiornati al 2025",
    seoTitle: "Indennità esproprio aree edificabili 2025 · Accarino",
    excerpt:
      "Una guida operativa al valore venale di mercato, alla riduzione del 25% per finalità di riforma economico-sociale e ai più recenti orientamenti della Corte di Cassazione.",
    image: blogIndennitaEsproprio,
    date: "12 Marzo 2026",
    readingTime: "9 min",
    author: "Avv. Francesco Accarino",
    bullets: [
      "L'indennità per aree edificabili coincide con il valore venale di mercato (art. 37 D.P.R. 327/2001).",
      "La riduzione del 25% per finalità di riforma economico-sociale resta circoscritta a casi tassativi.",
      "Cassazione 2024 chiarisce il rapporto tra edificabilità di fatto e di diritto ai fini della stima.",
      "Il termine per l'opposizione alla stima è di trenta giorni dalla notifica del decreto definitivo.",
    ],
    sections: [
      {
        heading: "Il quadro normativo",
        body: [
          "L'art. 37 del Testo Unico Espropri (D.P.R. 327/2001) stabilisce che l'indennità di esproprio per le aree edificabili è determinata sulla base del valore venale del bene. La giurisprudenza costituzionale (sent. n. 348/2007 e n. 181/2011) ha definitivamente sancito l'illegittimità dei criteri di calcolo dimezzato che avevano caratterizzato la legislazione precedente.",
          "Il valore venale rappresenta il prezzo che il bene avrebbe avuto in una libera contrattazione di mercato al momento del decreto di esproprio. Il riferimento è dunque oggettivo, ancorato a parametri economici reali e non a tabelle amministrative.",
        ],
      },
      {
        heading: "La distinzione fra edificabilità di fatto e di diritto",
        body: [
          "La giurisprudenza distingue da tempo l'edificabilità legale, derivante dalla destinazione urbanistica, da quella di fatto, valutata sulla base dello stato dei luoghi e delle infrastrutture esistenti. Cassazione, sez. I, 14 febbraio 2024 n. 4029, ribadisce che entrambe concorrono a determinare il valore di mercato.",
          "Per le aree poste in zona agricola ma con caratteristiche oggettive di edificabilità (vicinanza al centro abitato, urbanizzazione, accessibilità) la stima deve dunque tener conto del concreto potenziale di sviluppo immobiliare.",
        ],
      },
      {
        heading: "La riduzione del 25% e i suoi limiti",
        body: [
          "Il comma 2 dell'art. 37 prevede una riduzione del 25% dell'indennità quando l'esproprio è disposto per finalità di riforma economico-sociale. Si tratta di un'ipotesi tassativa che non può essere applicata in via analogica a interventi infrastrutturali ordinari.",
          "La Corte costituzionale (sent. n. 187/2014) ha confermato la legittimità della riduzione, ma solo se accompagnata da una motivazione puntuale dell'amministrazione che richiami specificamente la finalità di riforma economico-sociale dell'opera.",
        ],
      },
      {
        heading: "Termini e strategie di opposizione",
        body: [
          "Il proprietario espropriato dispone di trenta giorni dalla notifica per proporre opposizione alla stima davanti alla Corte d'Appello territorialmente competente. È un termine perentorio: il suo decorso preclude qualsiasi successiva contestazione del valore.",
          "Nella prassi conviene affiancare la perizia di parte ad una consulenza tecnica d'ufficio fin dalle prime fasi, per consolidare elementi oggettivi (comparabili, valori OMI, transazioni recenti) che saranno determinanti in sede giudiziale.",
        ],
      },
    ],
    evidence: [
      { label: "Norma di riferimento", value: "Art. 37 D.P.R. 327/2001" },
      { label: "Sentenze chiave", value: "Cass. 4029/2024 · Cost. 348/2007" },
      { label: "Termine opposizione", value: "30 giorni dalla notifica" },
      { label: "Riduzione massima", value: "25% (casi tassativi)" },
      { label: "Foro competente", value: "Corte d'Appello" },
    ],
    sources: [
      "D.P.R. 8 giugno 2001, n. 327 — Testo Unico Espropriazioni",
      "Corte costituzionale, sentenze nn. 348/2007, 181/2011, 187/2014",
      "Cassazione, sez. I civile, 14 febbraio 2024 n. 4029",
    ],
  },
  {
    slug: "soccorso-istruttorio-appalti-codice-2023",
    category: "Appalti Pubblici",
    title: "Soccorso istruttorio nel nuovo Codice Appalti: cosa è davvero sanabile",
    seoTitle: "Soccorso istruttorio Codice Appalti 2023 · Accarino",
    excerpt:
      "Il D.Lgs. 36/2023 ridefinisce l'istituto del soccorso istruttorio: i confini fra integrazione formale, sostanziale e i casi di esclusione automatica.",
    image: blogSoccorsoIstruttorio,
    date: "28 Febbraio 2026",
    readingTime: "7 min",
    author: "Avv. Paolo Accarino",
    bullets: [
      "L'art. 101 del Codice (D.Lgs. 36/2023) distingue tre tipologie di soccorso istruttorio.",
      "La carenza dell'offerta tecnica o economica resta non sanabile.",
      "Il termine massimo concesso dalla stazione appaltante è di dieci giorni.",
      "L'omissione del soccorso costituisce vizio autonomo del provvedimento di esclusione.",
    ],
    sections: [
      {
        heading: "La nuova architettura dell'art. 101",
        body: [
          "Il D.Lgs. 36/2023 ha riscritto l'istituto del soccorso istruttorio, distinguendo nettamente tre fattispecie: il soccorso integrativo (per incompletezza della documentazione amministrativa), il soccorso istruttorio in senso stretto (per chiarimenti su elementi già presenti) e il soccorso correttivo (per refusi materiali).",
          "La distinzione è sostanziale: solo le prime due figure consentono al concorrente di evitare l'esclusione, mentre il soccorso correttivo opera anche d'ufficio e non richiede una specifica richiesta della stazione appaltante.",
        ],
      },
      {
        heading: "Il limite invalicabile dell'offerta",
        body: [
          "L'offerta tecnica e l'offerta economica restano sottratte al soccorso istruttorio: la giurisprudenza è costante nel ritenere che ogni intervento postumo su questi elementi violi la par condicio e alteri il confronto competitivo.",
          "Cons. Stato, sez. V, 11 gennaio 2024 n. 423 ha ribadito che l'omessa indicazione degli oneri di sicurezza aziendali non è sanabile quando gli stessi non risultino enucleabili dal contesto dell'offerta.",
        ],
      },
    ],
    evidence: [
      { label: "Norma", value: "Art. 101 D.Lgs. 36/2023" },
      { label: "Termine", value: "Massimo 10 giorni" },
      { label: "Sentenza chiave", value: "Cons. Stato 423/2024" },
      { label: "Non sanabile", value: "Offerta tecnica ed economica" },
    ],
    sources: [
      "D.Lgs. 31 marzo 2023 n. 36 — Codice dei Contratti Pubblici",
      "Consiglio di Stato, sez. V, 11 gennaio 2024 n. 423",
    ],
  },
  {
    slug: "ricorso-graduatoria-concorso-pubblico",
    category: "Attività della Pubblica Amministrazione",
    title: "Ricorso contro la graduatoria di un concorso pubblico: termini e strategia",
    seoTitle: "Ricorso graduatoria concorso pubblico · Accarino",
    excerpt:
      "Sessanta giorni per impugnare, una preparazione documentale che inizia molto prima. Le tappe concrete per costruire un ricorso efficace.",
    image: blogRicorsoGraduatoria,
    date: "14 Febbraio 2026",
    readingTime: "6 min",
    author: "Avv. Paolo Accarino",
    bullets: [
      "Il termine di 60 giorni decorre dalla pubblicazione della graduatoria.",
      "L'istanza di accesso agli atti va depositata entro pochi giorni dalla pubblicazione.",
      "I vizi tipici riguardano composizione della commissione, criteri di valutazione e prove.",
      "La sospensiva cautelare è strumento essenziale prima dell'assunzione dei vincitori.",
    ],
    sections: [
      {
        heading: "I tempi reali del contenzioso",
        body: [
          "I sessanta giorni per il ricorso al TAR sembrano molti, ma vanno gestiti come un percorso a tappe. La prima è l'accesso documentale: senza i verbali di commissione e gli elaborati comparativi, qualsiasi censura resta apodittica.",
          "L'istanza di accesso va presentata immediatamente, idealmente entro la prima settimana dalla pubblicazione della graduatoria. La stazione concedente ha trenta giorni per riscontrarla, e quei giorni vanno scomputati dal tempo utile per il ricorso.",
        ],
      },
      {
        heading: "I vizi più ricorrenti",
        body: [
          "Tre famiglie di vizi ricorrono nei concorsi pubblici: l'irregolare composizione della commissione (assenza di requisiti di anzianità o specializzazione), l'omessa predeterminazione dei criteri di valutazione e i vizi delle prove (correzione anonima, tracce non aderenti al bando).",
        ],
      },
    ],
    evidence: [
      { label: "Termine ricorso", value: "60 giorni" },
      { label: "Foro", value: "TAR territoriale" },
      { label: "Strumenti", value: "Accesso · Sospensiva · Merito" },
      { label: "Prima azione", value: "Accesso entro 7 giorni" },
    ],
    sources: [
      "D.Lgs. 165/2001 — Norme generali sul lavoro pubblico",
      "Codice del processo amministrativo (D.Lgs. 104/2010)",
    ],
  },
  {
    slug: "permesso-costruire-silenzio-assenso",
    category: "Urbanistica",
    title: "Permesso di costruire e silenzio-assenso: quando vale e quando no",
    seoTitle: "Permesso di costruire e silenzio-assenso · Accarino",
    excerpt:
      "L'art. 20 del Testo Unico Edilizia regola il silenzio-assenso, ma vincoli paesaggistici e tutele speciali ne escludono l'operatività in molti casi pratici.",
    image: blogPermessoCostruire,
    date: "30 Gennaio 2026",
    readingTime: "5 min",
    author: "Avv. Francesco Accarino",
    bullets: [
      "Il silenzio-assenso opera decorsi 60 giorni dalla domanda completa (art. 20 TUE).",
      "I vincoli paesaggistici, ambientali e culturali escludono il meccanismo.",
      "Il termine si interrompe con la richiesta di integrazioni documentali.",
      "La verifica del titolo formato per silenzio richiede una diffida ad attestare.",
    ],
    sections: [
      {
        heading: "Il meccanismo dell'art. 20",
        body: [
          "Il silenzio-assenso sul permesso di costruire è disciplinato dall'art. 20, comma 8, del D.P.R. 380/2001. Decorsi sessanta giorni dalla presentazione della domanda completa senza un provvedimento espresso, il titolo si intende formato.",
          "La completezza della domanda è il presupposto essenziale: una pratica carente non fa decorrere il termine, e l'amministrazione può sempre richiedere integrazioni.",
        ],
      },
    ],
    evidence: [
      { label: "Norma", value: "Art. 20 D.P.R. 380/2001" },
      { label: "Termine", value: "60 giorni" },
      { label: "Esclusioni", value: "Vincoli paesaggistici, ambientali, culturali" },
    ],
    sources: ["D.P.R. 6 giugno 2001 n. 380 — Testo Unico Edilizia"],
  },
  {
    slug: "occupazione-acquisitiva-risarcimento",
    category: "Espropriazioni",
    title: "Occupazione senza titolo della P.A.: come ottenere il risarcimento",
    seoTitle: "Occupazione senza titolo P.A. e risarcimento · Accarino",
    excerpt:
      "Dall'art. 42-bis del T.U. Espropri alla giurisprudenza CEDU, il percorso per recuperare il valore del bene illegittimamente acquisito.",
    image: blogOccupazioneAcquisitiva,
    date: "10 Gennaio 2026",
    readingTime: "8 min",
    author: "Avv. Francesco Accarino",
    bullets: [
      "L'art. 42-bis consente l'acquisizione sanante a seguito di indennizzo integrale.",
      "La CEDU (Scordino c. Italia) ha imposto il risarcimento del valore venale pieno.",
      "L'azione si prescrive in cinque anni dalla scadenza dell'occupazione legittima.",
      "L'indennizzo include il valore del bene maggiorato del 10% a titolo di danno morale.",
    ],
    sections: [
      {
        heading: "Dall'occupazione acquisitiva all'art. 42-bis",
        body: [
          "Per decenni la giurisprudenza italiana ha ammesso la cosiddetta occupazione acquisitiva: la P.A., trasformando irreversibilmente il fondo, ne acquistava la proprietà a titolo originario. La Corte EDU ha più volte censurato questo meccanismo (Scordino c. Italia, 2006).",
          "Il legislatore ha risposto con l'art. 42-bis del T.U. Espropri, che oggi consente all'amministrazione di acquisire formalmente il bene previo pagamento di un indennizzo integrale, comprensivo del valore venale e di una maggiorazione del 10% a titolo di danno non patrimoniale.",
        ],
      },
    ],
    evidence: [
      { label: "Norma", value: "Art. 42-bis D.P.R. 327/2001" },
      { label: "Maggiorazione", value: "+10% per danno morale" },
      { label: "Prescrizione", value: "5 anni" },
      { label: "Riferimento CEDU", value: "Scordino c. Italia, 2006" },
    ],
    sources: [
      "D.P.R. 327/2001, art. 42-bis",
      "CEDU, Grande Camera, Scordino c. Italia, 29 marzo 2006",
    ],
  },
  {
    slug: "anomalia-offerta-appalti-pubblici",
    category: "Appalti Pubblici",
    title: "Anomalia dell'offerta: il sindacato del giudice amministrativo",
    seoTitle: "Anomalia dell'offerta negli appalti pubblici · Accarino",
    excerpt:
      "I confini del controllo giurisdizionale sulla valutazione di anomalia nelle gare d'appalto, fra discrezionalità tecnica e vizi macroscopici.",
    image: blogAnomaliaOfferta,
    date: "18 Dicembre 2026",
    readingTime: "7 min",
    author: "Avv. Paolo Accarino",
    bullets: [
      "Il giudizio di anomalia è espressione di discrezionalità tecnica.",
      "Il sindacato è limitato a vizi di manifesta illogicità o travisamento dei fatti.",
      "Le giustificazioni vanno valutate nel loro complesso, non in modo atomistico.",
      "L'offerta gravemente incongrua va esclusa anche oltre la soglia di anomalia.",
    ],
    sections: [
      {
        heading: "Discrezionalità tecnica e limiti del sindacato",
        body: [
          "La valutazione di anomalia dell'offerta costituisce esercizio di discrezionalità tecnica della stazione appaltante. Il giudice amministrativo non può sostituirsi alla P.A. nel merito della valutazione, ma controlla la logicità, la completezza e la coerenza dell'istruttoria.",
        ],
      },
    ],
    evidence: [
      { label: "Norma", value: "Art. 110 D.Lgs. 36/2023" },
      { label: "Sindacato", value: "Manifesta illogicità · Travisamento" },
      { label: "Approccio", value: "Valutazione complessiva" },
    ],
    sources: [
      "D.Lgs. 36/2023, art. 110",
      "Cons. Stato, Adunanza Plenaria, sentenze sull'anomalia",
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  blogArticles.find((a) => a.slug === slug);

export const getRelatedArticles = (slug: string, limit = 3) =>
  blogArticles.filter((a) => a.slug !== slug).slice(0, limit);
