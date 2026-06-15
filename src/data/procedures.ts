/**
 * Procedure registry — single source of truth for every "Cosa facciamo per voi"
 * sub-page. One entry → one editorial page rendered by ProcedurePage.tsx.
 *
 * Design principles:
 *  • Slugs are short, keyword-rich and live at the root for SEO
 *    (e.g. /opposizione-stima-esproprio).
 *  • Each entry carries the full content needed by the template, so adding a
 *    new procedure means adding a new object — no new component to write.
 *  • Hero / side images are picked from the assets already in the project
 *    so we don't generate dozens of new images.
 */

import practiceEspropriazioni from "@/assets/practice-espropriazioni.jpg";
import practiceUrbanistica from "@/assets/practice-urbanistica.jpg";
import practiceAppalti from "@/assets/practice-appalti.jpg";
import practiceConcorsi from "@/assets/practice-concorsi.jpg";
import office from "@/assets/office.jpg";
import lawBooks from "@/assets/law-books.jpg";
import heroCourthouse from "@/assets/hero-courthouse.jpg";
import heroColumns from "@/assets/hero-columns.jpg";

export type Audience = "Per gli Enti" | "Per i Privati";

export interface ProcedureSection {
  /** URL-safe id, used as section anchor and TOC label key. */
  id: string;
  /** Section title shown above the body. */
  title: string;
  /** Two-three short paragraphs of editorial body copy. */
  paragraphs: string[];
  /** Side image — alternates left/right based on index. */
  image: string;
  /** Optional bullet list rendered under the body. */
  highlights?: string[];
}

export interface Procedure {
  slug: string;
  title: string;
  /** Short label shown above the title (e.g. "Procedura · Per gli Enti"). */
  audience: Audience;
  /** Practice family this procedure belongs to. */
  practiceArea:
    | "Espropriazioni"
    | "Urbanistica ed Edilizia"
    | "Appalti Pubblici"
    | "Attività della Pubblica Amministrazione"
    | "Diritto amministrativo";
  /** Hero image (top of the page). */
  heroImage: string;
  /** SEO meta description (140-160 chars). */
  metaDescription: string;
  /** Lead paragraph under the hero title. */
  lead: string;
  /** Estimated reading time in minutes. */
  readingTime: number;
  /** Key normative references shown in the meta rail. */
  normativa: string[];
  /** Body sections — at least 2, ideally 3. */
  sections: ProcedureSection[];
  /** FAQ block — 3-4 items. */
  faq: { q: string; a: string }[];
}

/* ─────────────────────────── DATA ─────────────────────────── */

export const procedures: Procedure[] = [
  /* ─────────────  PER GLI ENTI  ───────────── */
  {
    slug: "pareri-legittimita-atti-amministrativi",
    title: "Pareri di legittimità su atti amministrativi",
    audience: "Per gli Enti",
    practiceArea: "Diritto amministrativo",
    heroImage: lawBooks,
    metaDescription:
      "Pareri pro-veritate e di legittimità su atti amministrativi: prevenzione del contenzioso e supporto decisionale per Comuni, Enti e PA in Campania.",
    lead: "Una valutazione tecnica preventiva è il primo presidio contro il contenzioso. Lo Studio assiste Pubbliche Amministrazioni, dirigenti e organi politici nella redazione di pareri di legittimità su delibere, determinazioni e provvedimenti complessi.",
    readingTime: 6,
    normativa: ["L. 241/1990", "D.Lgs. 267/2000", "Cod. proc. amm."],
    sections: [
      {
        id: "quando-richiederlo",
        title: "Quando richiedere un parere",
        paragraphs: [
          "Il parere di legittimità è raccomandato ogni volta che l'atto amministrativo presenta margini interpretativi non risolti, profili discrezionali rilevanti o impatti economico-finanziari significativi.",
          "Si tratta di uno strumento di tutela tanto dell'Ente quanto dei singoli funzionari, che attraverso il parere documentano il percorso istruttorio seguito nell'adozione dell'atto.",
        ],
        image: office,
        highlights: [
          "Atti con impatto finanziario superiore a soglie significative",
          "Procedimenti con orientamenti giurisprudenziali divergenti",
          "Provvedimenti che incidono su diritti soggettivi consolidati",
        ],
      },
      {
        id: "metodologia",
        title: "La nostra metodologia",
        paragraphs: [
          "Ogni parere viene redatto da un avvocato senior, motivato in fatto e in diritto, e accompagnato da rassegna giurisprudenziale aggiornata. La struttura segue un format coerente: ricostruzione dei fatti, individuazione del quadro normativo, analisi della giurisprudenza, conclusioni operative.",
          "Il documento finale viene consegnato in forma idonea ad essere allegato all'istruttoria del provvedimento, garantendo all'Ente la massima trasparenza nei confronti degli organi di controllo.",
        ],
        image: heroCourthouse,
      },
      {
        id: "tempi-modalita",
        title: "Tempi e modalità",
        paragraphs: [
          "I pareri standard vengono consegnati entro 7-10 giorni lavorativi. Per situazioni d'urgenza è possibile attivare un canale dedicato con tempi ridotti a 48-72 ore.",
          "Lo Studio offre anche convenzioni annuali a forfait per Enti che richiedano un volume continuativo di pareri, garantendo continuità di interlocuzione e tariffa agevolata.",
        ],
        image: practiceUrbanistica,
      },
    ],
    faq: [
      { q: "Il parere ha valore vincolante?", a: "No, il parere pro-veritate è un atto consultivo. Tuttavia documenta la diligenza del decisore pubblico ed è regolarmente valorizzato dalla Corte dei Conti in sede di responsabilità erariale." },
      { q: "In quali tempi viene rilasciato?", a: "I pareri ordinari sono rilasciati entro 7-10 giorni. Per le urgenze è attivo un canale prioritario con consegna in 48-72 ore." },
      { q: "È possibile una convenzione annuale?", a: "Sì, lo Studio propone convenzioni a forfait calibrate sul volume previsto, con tariffa per parere ridotta del 25-40% rispetto alla singola consulenza." },
    ],
  },

  {
    slug: "difesa-giudizio-tar",
    title: "Difesa in giudizio davanti al TAR",
    audience: "Per gli Enti",
    practiceArea: "Diritto amministrativo",
    heroImage: heroCourthouse,
    metaDescription:
      "Difesa di Comuni, Province e Enti pubblici davanti al TAR: ricorsi avversi, controdeduzioni, motivi aggiunti e contenzioso davanti al Consiglio di Stato.",
    lead: "Lo Studio assiste le Pubbliche Amministrazioni in tutte le fasi del giudizio amministrativo, dalla notifica del ricorso alla decisione di merito, fino all'eventuale appello al Consiglio di Stato.",
    readingTime: 7,
    normativa: ["D.Lgs. 104/2010 (c.p.a.)", "L. 241/1990", "Cost. art. 113"],
    sections: [
      {
        id: "ricorsi-avversi",
        title: "Ricorsi avversi e cautelare",
        paragraphs: [
          "Il TAR è chiamato a pronunciarsi entro tempi rapidissimi sulle istanze cautelari. La difesa dell'Ente in sede cautelare richiede una preparazione immediata e una piena padronanza del fascicolo.",
          "Lo Studio struttura la difesa puntando alla dimostrazione del corretto esercizio della discrezionalità amministrativa e della coerenza dell'iter procedimentale seguito.",
        ],
        image: practiceAppalti,
        highlights: [
          "Camera di consiglio entro 30 giorni dalla notifica",
          "Coordinamento con uffici tecnici e responsabili del procedimento",
          "Predisposizione di documentazione probatoria mirata",
        ],
      },
      {
        id: "merito-appello",
        title: "Merito e appello al Consiglio di Stato",
        paragraphs: [
          "Il giudizio di merito consente di approfondire ogni profilo del provvedimento impugnato. Lo Studio cura la redazione di memorie articolate, l'eventuale produzione documentale integrativa e l'assistenza in udienza pubblica.",
          "In caso di soccombenza in primo grado, valutiamo con l'Ente l'opportunità dell'appello al Consiglio di Stato sulla base di un'analisi prognostica fondata sulla giurisprudenza più recente.",
        ],
        image: heroColumns,
      },
    ],
    faq: [
      { q: "Quanto tempo abbiamo per costituirci?", a: "L'Ente deve costituirsi entro 60 giorni dalla notifica del ricorso, ma per la cautelare è necessario depositare memoria entro 2 giorni liberi prima della camera di consiglio." },
      { q: "Possiamo proporre appello incidentale?", a: "Sì, l'appello incidentale può essere proposto entro 30 giorni dalla notifica dell'appello principale, oppure 60 giorni dalla pubblicazione della sentenza." },
      { q: "Quanto costa la difesa di un Ente?", a: "La parcella è regolata dai parametri ministeriali (DM 55/2014). Lo Studio propone preventivi forfettari per giudizio o convenzioni annuali per Enti con contenzioso continuativo." },
    ],
  },

  {
    slug: "procedimenti-espropriativi-ablatori",
    title: "Procedimenti espropriativi e ablatori",
    audience: "Per gli Enti",
    practiceArea: "Espropriazioni",
    heroImage: practiceEspropriazioni,
    metaDescription:
      "Assistenza agli Enti nelle procedure espropriative: dichiarazione di pubblica utilità, indennità, occupazioni d'urgenza, contenzioso in Corte d'Appello.",
    lead: "Assistiamo Enti espropriatori e concessionari in tutte le fasi della procedura ablativa: dalla dichiarazione di pubblica utilità alla determinazione delle indennità, fino all'eventuale contenzioso in Corte d'Appello.",
    readingTime: 8,
    normativa: ["DPR 327/2001 (T.U. Espropri)", "L. 2359/1865", "L. 865/1971"],
    sections: [
      {
        id: "fase-procedimentale",
        title: "Fase procedimentale",
        paragraphs: [
          "La corretta gestione del procedimento espropriativo è la migliore tutela contro il contenzioso successivo. Lo Studio supporta l'Ente nella predisposizione degli atti vincolanti, nelle comunicazioni di avvio e nell'iter di approvazione del progetto.",
          "Particolare attenzione viene riservata alla fase di partecipazione del privato espropriando, che rappresenta uno snodo critico dal punto di vista del rispetto del contraddittorio.",
        ],
        image: office,
        highlights: [
          "Vincolo preordinato all'esproprio",
          "Dichiarazione di pubblica utilità",
          "Decreto di esproprio e immissione in possesso",
        ],
      },
      {
        id: "indennita",
        title: "Determinazione delle indennità",
        paragraphs: [
          "La determinazione delle indennità di esproprio e di occupazione richiede competenze tecnico-estimative. Lo Studio collabora con tecnici di fiducia per garantire valutazioni accurate e difendibili in giudizio.",
          "L'obiettivo è offerte indennitarie congrue che minimizzino il rischio di opposizioni alla stima e dei costi aggiuntivi connessi al giudizio in Corte d'Appello.",
        ],
        image: practiceEspropriazioni,
      },
      {
        id: "contenzioso",
        title: "Contenzioso e tutela",
        paragraphs: [
          "In caso di opposizione alla stima, lo Studio difende l'Ente davanti alla Corte d'Appello competente, coordinando la difesa tecnica con la consulenza estimativa di parte.",
          "Gestiamo anche il contenzioso davanti al TAR per le impugnative dei singoli atti del procedimento (vincoli, dichiarazione di p.u., decreto di esproprio).",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "Quali sono i termini per il decreto di esproprio?", a: "Il decreto deve essere emanato entro il termine di efficacia della dichiarazione di pubblica utilità, di norma 5 anni prorogabili. Decorso tale termine, occorre rinnovare la procedura." },
      { q: "L'occupazione d'urgenza è sempre legittima?", a: "No. Richiede una specifica motivazione sull'urgenza e sull'indifferibilità dell'opera. Un'occupazione non motivata espone l'Ente a richieste risarcitorie significative." },
      { q: "Cosa succede se l'opera non viene realizzata?", a: "Il privato può chiedere la retrocessione totale o parziale del bene, oppure il risarcimento per occupazione illegittima se i termini sono ormai decorsi." },
    ],
  },

  {
    slug: "gare-appalto-procedure-affidamento",
    title: "Gare d'appalto e procedure di affidamento",
    audience: "Per gli Enti",
    practiceArea: "Appalti Pubblici",
    heroImage: practiceAppalti,
    metaDescription:
      "Consulenza alle Stazioni Appaltanti: redazione bandi, valutazione offerte, verifiche anomalia, esclusioni e gestione del contenzioso TAR sugli appalti pubblici.",
    lead: "Affianchiamo Stazioni Appaltanti e RUP in tutte le fasi della procedura di affidamento, dalla strutturazione della gara alla gestione delle eventuali contestazioni in sede di aggiudicazione.",
    readingTime: 7,
    normativa: ["D.Lgs. 36/2023 (Codice Appalti)", "Linee guida ANAC", "D.Lgs. 50/2016 (per gare ante 2023)"],
    sections: [
      {
        id: "redazione-bandi",
        title: "Redazione di bandi e disciplinari",
        paragraphs: [
          "Un bando ben strutturato è la prima difesa contro il contenzioso. Lo Studio assiste la Stazione Appaltante nella scelta della procedura più adatta, nella definizione dei requisiti di partecipazione e nei criteri di valutazione delle offerte.",
          "Particolare attenzione è dedicata alla coerenza tra disciplinare di gara, capitolato tecnico e schema di contratto, per evitare contraddizioni che generano incertezza interpretativa.",
        ],
        image: lawBooks,
      },
      {
        id: "valutazione-offerte",
        title: "Valutazione delle offerte e anomalia",
        paragraphs: [
          "Affianchiamo le commissioni di gara nella fase di valutazione, con particolare riguardo alle verifiche di congruità delle offerte sospette di anomalia. Il sub-procedimento di verifica deve essere condotto nel pieno rispetto del contraddittorio.",
          "Curiamo la motivazione del provvedimento finale, snodo cruciale in caso di successiva impugnazione al TAR.",
        ],
        image: practiceAppalti,
        highlights: [
          "Commissioni di gara e sedute riservate",
          "Soccorso istruttorio e regolarizzazioni",
          "Verifica di anomalia ex art. 110 D.Lgs. 36/2023",
        ],
      },
      {
        id: "contenzioso",
        title: "Contenzioso TAR sugli appalti",
        paragraphs: [
          "Il rito speciale appalti prevede tempi accelerati. Lo Studio è strutturato per garantire una risposta immediata alla notifica di ricorsi cautelari, con costituzione e memoria depositata entro i due giorni liberi prima dell'udienza.",
          "L'esperienza maturata su entrambi i lati — operatori economici e Stazioni Appaltanti — consente una visione strategica completa del contenzioso.",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "Si applica il vecchio o il nuovo Codice?", a: "Per le procedure indette dopo il 1° luglio 2023 si applica il D.Lgs. 36/2023. Le procedure precedenti restano regolate dal D.Lgs. 50/2016." },
      { q: "Quanto dura il rito appalti?", a: "Il rito speciale prevede l'udienza cautelare entro 30 giorni dalla notifica e la sentenza di merito entro 9 mesi. L'eventuale appello al CdS è ancora più rapido." },
      { q: "Possiamo annullare in autotutela?", a: "Sì, l'annullamento d'ufficio è possibile in presenza di vizi di legittimità, ma deve essere motivato anche in relazione all'interesse pubblico attuale e ai legittimi affidamenti." },
    ],
  },

  {
    slug: "contenzioso-esecutivo-varianti-contrattuali",
    title: "Contenzioso esecutivo e varianti contrattuali",
    audience: "Per gli Enti",
    practiceArea: "Appalti Pubblici",
    heroImage: heroColumns,
    metaDescription:
      "Assistenza in fase esecutiva degli appalti pubblici: varianti, riserve, sospensioni, risoluzione contrattuale e contenzioso davanti al giudice ordinario.",
    lead: "L'esecuzione del contratto è la fase in cui si concentra la maggior parte del contenzioso reale. Lo Studio assiste la Stazione Appaltante nella gestione di varianti, riserve, sospensioni e nelle ipotesi di risoluzione.",
    readingTime: 6,
    normativa: ["D.Lgs. 36/2023", "C.c. artt. 1655 ss.", "Linee guida ANAC esecuzione"],
    sections: [
      {
        id: "varianti",
        title: "Varianti in corso d'opera",
        paragraphs: [
          "Le varianti contrattuali sono un terreno particolarmente sensibile sotto il profilo della responsabilità erariale. Lo Studio supporta il RUP nella valutazione dell'ammissibilità della variante e nella corretta documentazione delle ragioni che la giustificano.",
          "Curiamo la redazione degli atti di approvazione, con particolare attenzione alla motivazione e al rispetto delle soglie quantitative previste dal Codice.",
        ],
        image: office,
      },
      {
        id: "riserve",
        title: "Gestione delle riserve",
        paragraphs: [
          "Le riserve dell'appaltatore vanno gestite con tempestività e rigore documentale. Lo Studio assiste l'Ente nella valutazione del fondamento delle riserve, nell'eventuale negoziazione di accordi bonari e nella difesa giudiziale.",
          "Una gestione preventiva delle riserve riduce significativamente l'esposizione finanziaria dell'Ente in sede di collaudo finale.",
        ],
        image: practiceAppalti,
        highlights: [
          "Iscrizione tempestiva e quantificazione",
          "Accordo bonario ex art. 210 D.Lgs. 36/2023",
          "Contenzioso davanti al giudice ordinario",
        ],
      },
    ],
    faq: [
      { q: "Quando è ammessa una variante?", a: "Le varianti sono ammesse nei casi tassativi previsti dall'art. 120 del nuovo Codice. Fuori da questi casi, occorre indire una nuova procedura di gara." },
      { q: "Cos'è l'accordo bonario?", a: "È uno strumento di definizione delle riserve quando le stesse superano determinate soglie del valore contrattuale. Coinvolge un esperto e un percorso strutturato." },
      { q: "Possiamo risolvere il contratto?", a: "Sì, in presenza di grave inadempimento, ritardo significativo o cause sopravvenute. La risoluzione richiede una motivazione puntuale per evitare contestazioni risarcitorie." },
    ],
  },

  {
    slug: "procedimenti-disciplinari-responsabilita-erariale",
    title: "Procedimenti disciplinari e responsabilità erariale",
    audience: "Per gli Enti",
    practiceArea: "Diritto amministrativo",
    heroImage: lawBooks,
    metaDescription:
      "Assistenza in materia disciplinare e davanti alla Corte dei Conti: procedimenti contro dipendenti pubblici, dirigenti e amministratori per responsabilità erariale.",
    lead: "Lo Studio assiste sia le Amministrazioni nella conduzione dei procedimenti disciplinari sia i singoli dipendenti e amministratori chiamati a rispondere davanti alla Corte dei Conti.",
    readingTime: 7,
    normativa: ["D.Lgs. 165/2001", "L. 20/1994", "C.C.N.L. comparto Funzioni Locali"],
    sections: [
      {
        id: "procedimento-disciplinare",
        title: "Il procedimento disciplinare",
        paragraphs: [
          "La corretta gestione del procedimento disciplinare richiede il rispetto di termini perentori e il pieno riconoscimento del diritto di difesa. Lo Studio assiste l'Ufficio Procedimenti Disciplinari (UPD) nella gestione dei singoli casi.",
          "Curiamo la formulazione della contestazione, l'audizione, l'eventuale acquisizione di prove e la motivazione del provvedimento finale.",
        ],
        image: office,
      },
      {
        id: "responsabilita-erariale",
        title: "Responsabilità erariale",
        paragraphs: [
          "Il giudizio davanti alla Corte dei Conti per responsabilità erariale richiede una difesa tecnica specializzata. Lo Studio assiste dirigenti, funzionari e amministratori dal momento della notifica dell'invito a dedurre.",
          "L'analisi dei profili soggettivi (dolo o colpa grave) e oggettivi (nesso causale, danno) è cruciale per impostare una difesa efficace.",
        ],
        image: heroCourthouse,
        highlights: [
          "Invito a dedurre e memoria difensiva",
          "Analisi del nesso causale e del danno",
          "Definizioni agevolate ex art. 1 L. 20/1994",
        ],
      },
    ],
    faq: [
      { q: "Quanto tempo dura il procedimento disciplinare?", a: "I termini sono perentori e variano in base alla gravità: 30 giorni per le sanzioni minori, 120 giorni per le maggiori. La violazione dei termini comporta la decadenza dall'azione." },
      { q: "Cosa significa 'colpa grave'?", a: "È la negligenza, imprudenza o imperizia di particolare intensità, tale da escludere la normale diligenza dell'agente pubblico medio. È requisito per la responsabilità erariale." },
      { q: "Posso essere assicurato per responsabilità erariale?", a: "Sì, esistono polizze specifiche. Tuttavia il dolo e la responsabilità per fatti commessi nelle funzioni di organo politico spesso sono esclusi dalla copertura." },
    ],
  },

  {
    slug: "concorsi-pubblici-selezioni-personale",
    title: "Concorsi pubblici e selezioni del personale",
    audience: "Per gli Enti",
    practiceArea: "Attività della Pubblica Amministrazione",
    heroImage: practiceConcorsi,
    metaDescription:
      "Consulenza agli Enti per concorsi pubblici e selezioni: bandi, prove, graduatorie, gestione del contenzioso TAR e impugnazioni delle commissioni.",
    lead: "Affianchiamo gli Enti nell'organizzazione di concorsi pubblici e procedure di selezione del personale, dalla redazione del bando alla gestione dell'eventuale contenzioso sulla graduatoria.",
    readingTime: 6,
    normativa: ["DPR 487/1994", "D.Lgs. 165/2001", "DL 44/2023 (concorsi PA)"],
    sections: [
      {
        id: "redazione-bando",
        title: "Redazione del bando",
        paragraphs: [
          "Il bando di concorso è il documento più strategico dell'intera procedura. Lo Studio assiste l'Ente nella definizione dei requisiti, dei titoli valutabili e delle prove, in coerenza con il fabbisogno organizzativo.",
          "Una particolare attenzione è dedicata ai criteri di valutazione delle prove e dei titoli, principale fonte di contenzioso successivo.",
        ],
        image: lawBooks,
      },
      {
        id: "commissioni",
        title: "Commissioni e svolgimento delle prove",
        paragraphs: [
          "Lo Studio supporta la commissione esaminatrice nella redazione dei verbali, nella definizione dei criteri di valutazione e nella gestione di situazioni critiche (incompatibilità, contestazioni, irregolarità).",
          "Una documentazione rigorosa della procedura è la migliore difesa contro impugnative successive.",
        ],
        image: practiceConcorsi,
        highlights: [
          "Verbali delle sedute della commissione",
          "Criteri di valutazione predefiniti",
          "Gestione di contestazioni in sede d'esame",
        ],
      },
    ],
    faq: [
      { q: "Quanto dura la validità di una graduatoria?", a: "La validità ordinaria è di 2 anni dall'approvazione, ma sono frequenti le proroghe normative. È sempre opportuno verificare le ultime disposizioni." },
      { q: "Possiamo modificare il bando dopo la pubblicazione?", a: "Modifiche sostanziali richiedono ripubblicazione e riapertura dei termini. Modifiche meramente correttive possono essere apportate con avviso integrativo." },
      { q: "Come gestire un ricorso contro la graduatoria?", a: "Lo Studio assiste l'Ente fin dalla notifica, predisponendo le controdeduzioni nei termini ristretti del rito amministrativo." },
    ],
  },

  {
    slug: "provvedimenti-urbanistici-pianificazione",
    title: "Provvedimenti urbanistici e pianificazione",
    audience: "Per gli Enti",
    practiceArea: "Urbanistica ed Edilizia",
    heroImage: practiceUrbanistica,
    metaDescription:
      "Assistenza ai Comuni per PUC, varianti urbanistiche, vincoli e contenzioso davanti al TAR su strumenti urbanistici e singoli provvedimenti edilizi.",
    lead: "Supportiamo i Comuni nell'adozione e approvazione degli strumenti urbanistici generali e attuativi, nella gestione delle osservazioni e nel contenzioso contro varianti e singoli provvedimenti.",
    readingTime: 7,
    normativa: ["L. 1150/1942", "L.R. Campania 16/2004", "DPR 380/2001"],
    sections: [
      {
        id: "puc-varianti",
        title: "PUC e varianti urbanistiche",
        paragraphs: [
          "Lo Studio assiste il Comune nell'iter di formazione del PUC, dalle fasi propedeutiche fino all'approvazione definitiva, gestendo il dialogo con la Regione e con le altre Amministrazioni coinvolte (VAS, VINCA, etc.).",
          "Particolare cura è dedicata alla gestione delle osservazioni, snodo cruciale per la legittimità dell'approvazione finale.",
        ],
        image: office,
      },
      {
        id: "contenzioso",
        title: "Contenzioso urbanistico",
        paragraphs: [
          "Difendiamo l'Ente nelle impugnative al TAR contro strumenti urbanistici e singoli provvedimenti edilizi, valorizzando la discrezionalità tecnica e politica dell'Amministrazione.",
          "L'esperienza nel settore consente una visione strategica del contenzioso, anche in chiave preventiva.",
        ],
        image: practiceUrbanistica,
        highlights: [
          "Impugnativa di PUC e varianti",
          "Diniego di permessi e SCIA",
          "Ordini di demolizione",
        ],
      },
    ],
    faq: [
      { q: "Chi può impugnare un PUC?", a: "Possono impugnare i soggetti titolari di interesse qualificato, tipicamente proprietari di aree direttamente incise dalle previsioni del Piano." },
      { q: "Quali sono i termini per impugnare il PUC?", a: "60 giorni dalla pubblicazione dell'avviso di approvazione sul BURC. Per i terzi non destinatari diretti, il termine può decorrere dalla piena conoscenza." },
      { q: "La Regione può modificare il PUC adottato?", a: "Sì, in sede di approvazione la Regione può apportare modifiche d'ufficio, che richiedono però adeguata motivazione e contraddittorio con il Comune." },
    ],
  },

  {
    slug: "recupero-crediti-azioni-rivalsa",
    title: "Recupero crediti e azioni di rivalsa",
    audience: "Per gli Enti",
    practiceArea: "Diritto amministrativo",
    heroImage: lawBooks,
    metaDescription:
      "Recupero crediti per Enti pubblici: ingiunzione fiscale, ruolo, esecuzione forzata, azioni di rivalsa contro responsabili e terzi obbligati.",
    lead: "Assistiamo gli Enti pubblici nel recupero coattivo di crediti tributari ed extra-tributari, dall'attivazione della procedura più adeguata alla gestione delle opposizioni.",
    readingTime: 6,
    normativa: ["RD 639/1910", "DPR 602/1973", "L. 689/1981"],
    sections: [
      {
        id: "scelta-strumento",
        title: "La scelta dello strumento",
        paragraphs: [
          "La scelta dello strumento di recupero (ingiunzione fiscale, ruolo, decreto ingiuntivo) dipende dalla natura del credito, dall'entità e dal grado di certezza del titolo.",
          "Lo Studio supporta l'Ente nella definizione della strategia più efficace, contemperando rapidità e robustezza del titolo esecutivo.",
        ],
        image: office,
      },
      {
        id: "azioni-rivalsa",
        title: "Azioni di rivalsa",
        paragraphs: [
          "Quando l'Ente è chiamato a rispondere per fatti riconducibili a propri dipendenti o terzi, è possibile attivare azioni di rivalsa per recuperare le somme erogate.",
          "L'azione richiede un'analisi accurata dei profili di responsabilità e una corretta documentazione del danno subito dall'Ente.",
        ],
        image: heroCourthouse,
        highlights: [
          "Rivalsa verso dipendenti per colpa grave",
          "Azioni verso terzi obbligati solidali",
          "Surrogazione assicurativa",
        ],
      },
    ],
    faq: [
      { q: "Quando usare l'ingiunzione fiscale?", a: "L'ingiunzione fiscale ex RD 639/1910 è lo strumento principe per i crediti dell'Ente in materia tributaria e patrimoniale, con efficacia di titolo esecutivo." },
      { q: "L'opposizione sospende l'esecuzione?", a: "L'opposizione non sospende automaticamente. Occorre che il giudice accordi la sospensione su istanza del debitore, valutati i requisiti del fumus e del periculum." },
      { q: "I termini di prescrizione sono quelli ordinari?", a: "Dipende dal credito: 5 anni per i tributi locali, 10 anni per i crediti contrattuali, 5 anni per i canoni periodici." },
    ],
  },

  {
    slug: "formazione-personale-compliance",
    title: "Formazione del personale e compliance",
    audience: "Per gli Enti",
    practiceArea: "Diritto amministrativo",
    heroImage: office,
    metaDescription:
      "Formazione specialistica per dipendenti pubblici e supporto compliance: anticorruzione, trasparenza, codice appalti, procedimento amministrativo.",
    lead: "Lo Studio organizza percorsi di formazione tecnica e attività di supporto compliance per Enti che vogliano prevenire il contenzioso e rafforzare la qualità dell'azione amministrativa.",
    readingTime: 5,
    normativa: ["L. 190/2012 (Anticorruzione)", "D.Lgs. 33/2013 (Trasparenza)", "L. 241/1990"],
    sections: [
      {
        id: "formazione",
        title: "Percorsi di formazione",
        paragraphs: [
          "Progettiamo percorsi formativi su misura, concentrati sulle aree di maggiore esposizione al contenzioso: appalti, urbanistica, espropri, procedimento amministrativo.",
          "I corsi vengono erogati in modalità frontale o webinar, con materiali didattici aggiornati e casi pratici tratti dalla giurisprudenza recente.",
        ],
        image: lawBooks,
      },
      {
        id: "compliance",
        title: "Supporto compliance",
        paragraphs: [
          "Affianchiamo il Responsabile della Prevenzione della Corruzione e della Trasparenza nella redazione e aggiornamento dei piani triennali, nella mappatura dei rischi e nelle attività di monitoraggio.",
          "Curiamo anche l'analisi degli obblighi di pubblicazione e la gestione delle istanze di accesso civico generalizzato.",
        ],
        image: office,
        highlights: [
          "PTPCT — Piano Triennale di Prevenzione",
          "Mappatura dei rischi corruttivi",
          "Accesso civico generalizzato (FOIA)",
        ],
      },
    ],
    faq: [
      { q: "I corsi sono accreditati?", a: "Sì, lo Studio è accreditato come ente formatore per la PA e i corsi consentono l'acquisizione dei crediti formativi previsti dai contratti collettivi di comparto." },
      { q: "È possibile una convenzione annuale?", a: "Sì, proponiamo convenzioni annuali per Enti che richiedono un piano formativo strutturato, con tariffa agevolata e materiali esclusivi." },
      { q: "Possiamo coinvolgere più Enti?", a: "Sì, organizziamo regolarmente corsi inter-ente che consentono la condivisione di esperienze e l'ottimizzazione dei costi." },
    ],
  },

  /* ─────────────  PER LE PERSONE  ───────────── */
  {
    slug: "opposizione-stima-esproprio",
    title: "Opposizione alla stima dell'indennità di esproprio",
    audience: "Per i Privati",
    practiceArea: "Espropriazioni",
    heroImage: practiceEspropriazioni,
    metaDescription:
      "Opposizione alla stima esproprio: ricorso in Corte d'Appello per ottenere un'indennità congrua. Termini, procedura, CTU e onorari. Studio Salerno.",
    lead: "Quando l'indennità offerta dall'Ente non corrisponde al valore reale del bene espropriato, è possibile opporsi alla stima e ottenere il riconoscimento dell'importo corretto davanti alla Corte d'Appello.",
    readingTime: 8,
    normativa: ["DPR 327/2001 art. 54", "L. 865/1971", "Cost. art. 42"],
    sections: [
      {
        id: "quando-opporsi",
        title: "Quando conviene opporsi",
        paragraphs: [
          "L'opposizione conviene ogni volta che esiste una significativa differenza tra l'offerta dell'Ente e il reale valore di mercato del bene espropriato. Una perizia di parte preliminare consente di valutare con precisione la convenienza del giudizio.",
          "L'esperienza dello Studio mostra che, nella maggioranza dei casi seguiti, l'opposizione conduce a un significativo aumento dell'indennità, che ripaga ampiamente i costi del giudizio.",
        ],
        image: practiceEspropriazioni,
        highlights: [
          "Differenze superiori al 20-30% rendono l'opposizione conveniente",
          "Indennità di occupazione spesso sottostimate",
          "Possibilità di richiedere maggior valore per terreni edificabili",
        ],
      },
      {
        id: "termini-procedura",
        title: "Termini e procedura",
        paragraphs: [
          "L'opposizione si propone con ricorso in Corte d'Appello entro 30 giorni dalla notifica del decreto di esproprio o della determinazione dell'indennità. Il termine è perentorio e non prorogabile.",
          "Il giudizio si svolge davanti a un collegio specializzato, con CTU obbligatoria sull'estimo del bene. La fase istruttoria dura mediamente 12-18 mesi.",
        ],
        image: heroCourthouse,
      },
      {
        id: "ctu",
        title: "Il ruolo della CTU",
        paragraphs: [
          "La consulenza tecnica d'ufficio è il fulcro del giudizio di opposizione. Lo Studio collabora con consulenti tecnici di parte di comprovata esperienza per garantire una valutazione tecnica solida e ben argomentata.",
          "La perizia di parte non si limita alla mera valutazione economica, ma offre alla CTU elementi di confronto sui valori OMI, sulle compravendite recenti e sulle peculiarità del bene.",
        ],
        image: office,
      },
    ],
    faq: [
      { q: "Quali sono i termini per opporsi?", a: "30 giorni dalla notifica del decreto di esproprio o della determinazione dell'indennità. Il termine è perentorio: una volta decorso, l'indennità diventa definitiva." },
      { q: "Quanto costa l'opposizione?", a: "Le spese principali sono il contributo unificato (proporzionale al valore della causa), l'onorario del legale e quello del CTP. In caso di vittoria, le spese di soccombenza ricadono sull'Ente." },
      { q: "Quanto dura il giudizio?", a: "In media 12-18 mesi per la sentenza di primo grado. L'eventuale appello in Cassazione richiede ulteriori 18-24 mesi." },
    ],
  },

  {
    slug: "occupazioni-illegittime-urgenza",
    title: "Occupazioni illegittime e d'urgenza",
    audience: "Per i Privati",
    practiceArea: "Espropriazioni",
    heroImage: practiceEspropriazioni,
    metaDescription:
      "Occupazione d'urgenza scaduta o illegittima: difesa dei proprietari, risarcimento del danno, restituzione del bene o acquisizione sanante.",
    lead: "L'occupazione del bene da parte della PA che si protrae oltre i termini di legge costituisce un'occupazione illegittima, che apre al proprietario diritti risarcitori e restitutori significativi.",
    readingTime: 7,
    normativa: ["DPR 327/2001 artt. 22-bis, 42-bis", "Cedu art. 1 prot. 1", "Cost. art. 42"],
    sections: [
      {
        id: "quando-illegittima",
        title: "Quando l'occupazione è illegittima",
        paragraphs: [
          "L'occupazione diventa illegittima nel momento in cui scadono i termini per emanare il decreto di esproprio o per restituire il bene al proprietario. La sola permanenza materiale dell'opera pubblica non sana il vizio.",
          "La giurisprudenza CEDU e nazionale è particolarmente rigorosa nel condannare le occupazioni acquisitive prive di legittimo titolo.",
        ],
        image: practiceEspropriazioni,
      },
      {
        id: "tutele",
        title: "Le tutele del proprietario",
        paragraphs: [
          "Il proprietario ha diritto alla restituzione del bene in pristino o, in alternativa, all'attivazione del procedimento di acquisizione sanante ex art. 42-bis DPR 327/2001 con corresponsione del valore venale.",
          "In ogni caso, è dovuto il risarcimento del danno per l'illegittima occupazione, calcolato con interessi e rivalutazione.",
        ],
        image: heroCourthouse,
        highlights: [
          "Restituzione del bene in pristino",
          "Acquisizione sanante con valore venale + 10%",
          "Risarcimento danno da occupazione",
        ],
      },
    ],
    faq: [
      { q: "Posso ottenere la restituzione del bene?", a: "Sì, è il rimedio principale. La PA può evitarla attivando l'acquisizione sanante ex art. 42-bis, ma deve corrispondere il valore venale aggiornato + 10%." },
      { q: "Si applica la prescrizione?", a: "Sì, l'azione risarcitoria si prescrive in 5 anni dal momento in cui il proprietario ha avuto piena consapevolezza dell'illegittimità. L'azione restitutoria è imprescrittibile." },
      { q: "Cos'è l'acquisizione sanante?", a: "È il provvedimento con cui la PA acquisisce al patrimonio il bene illegittimamente occupato, corrispondendo al proprietario il valore venale maggiorato del 10% a titolo di indennizzo." },
    ],
  },

  {
    slug: "retrocessione-beni-espropriati",
    title: "Retrocessione totale o parziale dei beni",
    audience: "Per i Privati",
    practiceArea: "Espropriazioni",
    heroImage: practiceEspropriazioni,
    metaDescription:
      "Retrocessione di beni espropriati: quando l'opera non viene realizzata, il proprietario può chiedere la restituzione del bene corrispondendo l'indennità.",
    lead: "Quando l'opera pubblica per la quale era stato espropriato il bene non viene realizzata, oppure è realizzata solo in parte, il proprietario può chiedere la retrocessione totale o parziale.",
    readingTime: 6,
    normativa: ["DPR 327/2001 artt. 46-48", "Codice civile art. 950"],
    sections: [
      {
        id: "presupposti",
        title: "Presupposti della retrocessione",
        paragraphs: [
          "La retrocessione totale spetta quando l'opera non sia stata iniziata nei termini di efficacia della dichiarazione di pubblica utilità (di norma 10 anni dal decreto di esproprio).",
          "La retrocessione parziale spetta quando l'opera è stata realizzata solo in parte e residuano porzioni di terreno non utilizzate per la finalità pubblica.",
        ],
        image: practiceEspropriazioni,
        highlights: [
          "Mancata realizzazione dell'opera entro 10 anni",
          "Realizzazione parziale con porzioni inutilizzate",
          "Mutamento di destinazione del bene",
        ],
      },
      {
        id: "procedura",
        title: "Procedura e indennità",
        paragraphs: [
          "Il proprietario presenta istanza all'Ente espropriante. In caso di silenzio o di rifiuto, è possibile adire il giudice ordinario per ottenere la retrocessione coattiva.",
          "Il prezzo della retrocessione è di norma pari all'indennità a suo tempo percepita, eventualmente rivalutata.",
        ],
        image: office,
      },
    ],
    faq: [
      { q: "Quanto pago per riprendermi il bene?", a: "Il prezzo è di norma pari all'indennità a suo tempo percepita. La giurisprudenza più recente tende a riconoscere meccanismi di rivalutazione." },
      { q: "Posso chiedere la retrocessione anche se ho percepito l'indennità?", a: "Sì, l'aver percepito l'indennità non preclude il diritto alla retrocessione. È un diritto autonomo che sorge in caso di mancata realizzazione dell'opera." },
      { q: "C'è un termine per agire?", a: "L'azione si prescrive in 10 anni dal verificarsi dei presupposti (mancata realizzazione o realizzazione parziale)." },
    ],
  },

  {
    slug: "permessi-costruire-scia-dia",
    title: "Permessi a costruire, SCIA e DIA",
    audience: "Per i Privati",
    practiceArea: "Urbanistica ed Edilizia",
    heroImage: practiceUrbanistica,
    metaDescription:
      "Assistenza per permesso di costruire, SCIA, DIA e CILA: dalla presentazione dell'istanza all'impugnazione di dinieghi e prescrizioni illegittime.",
    lead: "Lo Studio assiste privati e imprese in tutte le fasi del procedimento edilizio, dalla scelta del titolo abilitativo più adatto fino alla difesa contro dinieghi e prescrizioni illegittime.",
    readingTime: 7,
    normativa: ["DPR 380/2001", "L. 241/1990", "L.R. Campania 16/2004"],
    sections: [
      {
        id: "scelta-titolo",
        title: "Scelta del titolo abilitativo",
        paragraphs: [
          "La scelta tra permesso di costruire, SCIA o CILA dipende dalla tipologia di intervento. Una scelta errata espone al rischio di sanzioni e demolizione, anche per opere astrattamente assentibili.",
          "Lo Studio offre consulenza preventiva al progettista, in collaborazione con tecnici di fiducia, per individuare il percorso autorizzativo più rapido e sicuro.",
        ],
        image: practiceUrbanistica,
      },
      {
        id: "diniego-prescrizioni",
        title: "Dinieghi e prescrizioni",
        paragraphs: [
          "Il diniego di permesso o le prescrizioni illegittime in SCIA possono essere impugnati al TAR entro 60 giorni. Il giudizio cautelare consente in molti casi di sbloccare l'iter in tempi rapidi.",
          "Curiamo l'analisi tecnica preliminare in collaborazione con i progettisti, per individuare i vizi rilevanti del provvedimento.",
        ],
        image: heroCourthouse,
        highlights: [
          "Ricorso TAR entro 60 giorni",
          "Sospensiva cautelare con esame in 30-45 giorni",
          "Possibilità di silenzio-assenso",
        ],
      },
    ],
    faq: [
      { q: "Quanto tempo ha il Comune per rispondere?", a: "Per il permesso di costruire: 60 giorni dall'istanza, prorogabili a 90. Decorso tale termine, in molti casi si forma il silenzio-assenso." },
      { q: "Posso iniziare i lavori con la SCIA?", a: "Sì, la SCIA consente l'avvio immediato dei lavori. Tuttavia il Comune ha 30 giorni per verifiche e può inibire i lavori in caso di carenze." },
      { q: "Cosa fare se il Comune impone prescrizioni?", a: "Le prescrizioni illegittime possono essere impugnate al TAR. È spesso utile un'interlocuzione tecnica preliminare per cercare una soluzione concordata." },
    ],
  },

  {
    slug: "vincoli-paesaggistici-soprintendenze",
    title: "Vincoli paesaggistici e Soprintendenze",
    audience: "Per i Privati",
    practiceArea: "Urbanistica ed Edilizia",
    heroImage: heroColumns,
    metaDescription:
      "Autorizzazioni paesaggistiche e ricorsi contro pareri Soprintendenza: difesa dei proprietari nelle aree vincolate ex D.Lgs. 42/2004.",
    lead: "I vincoli paesaggistici e le competenze delle Soprintendenze rappresentano un terreno particolarmente complesso. Lo Studio assiste i proprietari nelle istanze e nei ricorsi avverso provvedimenti negativi.",
    readingTime: 7,
    normativa: ["D.Lgs. 42/2004 (Codice BB.CC.)", "DPR 31/2017", "L. 241/1990"],
    sections: [
      {
        id: "autorizzazione-paesaggistica",
        title: "L'autorizzazione paesaggistica",
        paragraphs: [
          "Ogni intervento in area vincolata richiede preventiva autorizzazione paesaggistica. Il procedimento coinvolge Comune e Soprintendenza, che esprime parere vincolante.",
          "Per gli interventi minori è possibile l'autorizzazione semplificata ex DPR 31/2017, con tempi e adempimenti ridotti.",
        ],
        image: practiceUrbanistica,
      },
      {
        id: "ricorsi",
        title: "Ricorsi contro pareri negativi",
        paragraphs: [
          "Il parere negativo della Soprintendenza, sia in sede di rilascio dell'autorizzazione che in sede di compatibilità paesaggistica, è impugnabile al TAR competente.",
          "L'analisi della motivazione del parere è cruciale: la Soprintendenza deve motivare puntualmente i profili di incompatibilità, non potendo limitarsi a formule generiche.",
        ],
        image: heroCourthouse,
        highlights: [
          "Termini di 60 giorni per impugnazione",
          "Perizia paesaggistica di parte",
          "Compatibilità paesaggistica postuma",
        ],
      },
    ],
    faq: [
      { q: "Posso impugnare il parere Soprintendenza?", a: "Sì, il parere negativo è impugnabile al TAR entro 60 giorni dalla notifica del provvedimento finale che lo recepisce." },
      { q: "Cos'è la compatibilità paesaggistica postuma?", a: "È un procedimento di sanatoria per opere realizzate senza autorizzazione paesaggistica, ammissibile solo per interventi minori che non abbiano determinato creazione di volumi o aumento di superficie utile." },
      { q: "Quanto dura il procedimento?", a: "60 giorni per l'autorizzazione semplificata, 105 giorni per quella ordinaria. In caso di silenzio della Soprintendenza, il Comune può procedere autonomamente." },
    ],
  },

  {
    slug: "abusi-edilizi-sanatoria",
    title: "Abusi edilizi e procedure di sanatoria",
    audience: "Per i Privati",
    practiceArea: "Urbanistica ed Edilizia",
    heroImage: practiceUrbanistica,
    metaDescription:
      "Sanatoria edilizia, accertamento di conformità e impugnazione ordini di demolizione. Difesa per abusi edilizi davanti al TAR e in sede penale.",
    lead: "Gli abusi edilizi, anche minori, espongono il proprietario a sanzioni significative. Lo Studio assiste nella valutazione delle possibilità di sanatoria e nell'impugnazione dei provvedimenti repressivi.",
    readingTime: 8,
    normativa: ["DPR 380/2001", "L. 47/1985", "L. 326/2003"],
    sections: [
      {
        id: "valutazione-preliminare",
        title: "Valutazione preliminare",
        paragraphs: [
          "Prima di qualsiasi azione è essenziale una valutazione tecnico-giuridica che individui la natura dell'abuso (sostanziale o formale), le possibilità di sanatoria e i rischi in caso di inerzia.",
          "Lo Studio collabora con tecnici di fiducia per ricostruire lo stato legittimo dell'immobile e individuare la strategia ottimale.",
        ],
        image: office,
      },
      {
        id: "sanatoria",
        title: "Procedure di sanatoria",
        paragraphs: [
          "L'accertamento di conformità ex art. 36 DPR 380/2001 consente di sanare gli abusi conformi alla disciplina urbanistica vigente sia al momento della realizzazione che a quello della richiesta. È lo strumento ordinario di sanatoria.",
          "Per gli abusi non sanabili in via ordinaria, occorre verificare l'eventuale applicabilità del condono edilizio per opere realizzate entro le date di legge.",
        ],
        image: practiceUrbanistica,
        highlights: [
          "Doppia conformità urbanistica",
          "Oblazione edilizia",
          "Sanatoria paesaggistica",
        ],
      },
      {
        id: "demolizione",
        title: "Ordini di demolizione",
        paragraphs: [
          "L'ordine di demolizione è impugnabile al TAR entro 60 giorni. Il giudizio cautelare consente di sospendere l'esecuzione fino alla decisione di merito.",
          "È fondamentale verificare la sussistenza dei presupposti, la corretta motivazione e la possibilità di sanatoria contestuale all'impugnazione.",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "Tutti gli abusi sono sanabili?", a: "No. La sanatoria ordinaria richiede la doppia conformità urbanistica. Gli abusi non sanabili devono essere demoliti, salvo l'applicabilità di condoni speciali." },
      { q: "Quali sono i tempi del procedimento?", a: "L'istanza di sanatoria ex art. 36 DPR 380/2001 deve essere decisa entro 60 giorni. Decorsi i quali si forma silenzio-rigetto, impugnabile al TAR." },
      { q: "Cosa rischio se non demolisco?", a: "L'inottemperanza comporta l'acquisizione gratuita del bene al patrimonio del Comune, oltre a sanzioni amministrative. È sempre opportuno valutare alternative legali." },
    ],
  },

  {
    slug: "ricorsi-esclusioni-gara-appalto",
    title: "Ricorsi su esclusioni in gara d'appalto",
    audience: "Per i Privati",
    practiceArea: "Appalti Pubblici",
    heroImage: practiceAppalti,
    metaDescription:
      "Esclusione da gara d'appalto pubblica? Ricorso TAR con sospensiva cautelare per ottenere riammissione e tutela della posizione competitiva.",
    lead: "L'esclusione da una procedura di gara è un evento che può compromettere significativamente la competitività dell'impresa. Una difesa tempestiva e tecnicamente solida è essenziale.",
    readingTime: 7,
    normativa: ["D.Lgs. 36/2023 (Codice Appalti)", "D.Lgs. 104/2010 (c.p.a.)", "Direttive UE appalti"],
    sections: [
      {
        id: "analisi-esclusione",
        title: "Analisi dell'esclusione",
        paragraphs: [
          "Ogni esclusione richiede un'analisi tecnica approfondita: la valutazione dei requisiti, della corretta motivazione e dell'eventuale violazione del soccorso istruttorio.",
          "Lo Studio assicura una risposta entro 24-48 ore dalla notifica del provvedimento, per consentire il rispetto dei termini stretti del rito appalti.",
        ],
        image: practiceAppalti,
        highlights: [
          "Verifica della motivazione dell'esclusione",
          "Analisi del soccorso istruttorio",
          "Vizi formali vs. sostanziali",
        ],
      },
      {
        id: "ricorso-cautelare",
        title: "Ricorso e cautelare",
        paragraphs: [
          "Il ricorso al TAR va depositato entro 30 giorni. Contestualmente è opportuno proporre istanza cautelare per ottenere la sospensione dell'aggiudicazione e la riammissione in gara.",
          "L'esame cautelare avviene in tempi rapidissimi: di norma la camera di consiglio è fissata entro 30-45 giorni dalla notifica.",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "Posso continuare a partecipare ad altre gare?", a: "Sì. Il ricorso non comporta alcuna sanzione interdittiva. Anzi, dimostrare di tutelare attivamente i propri diritti è un elemento di forza commerciale." },
      { q: "Quanto costa il ricorso?", a: "Il contributo unificato per il rito appalti è elevato e proporzionato al valore della gara. A questo si aggiungono onorari legali, generalmente recuperabili in caso di vittoria." },
      { q: "Quanto dura il giudizio?", a: "Il rito speciale appalti prevede tempi accelerati: cautelare entro 30 giorni, sentenza di merito entro 9 mesi." },
    ],
  },

  {
    slug: "sospensiva-cautelare-art-55-cpa",
    title: "Sospensive cautelari ex art. 55 c.p.a.",
    audience: "Per i Privati",
    practiceArea: "Diritto amministrativo",
    heroImage: heroCourthouse,
    metaDescription:
      "Tutela cautelare nel processo amministrativo: sospensione di provvedimenti illegittimi davanti al TAR. Fumus, periculum, esame in 30-60 giorni.",
    lead: "La tutela cautelare ex art. 55 c.p.a. consente di sospendere l'esecuzione di un provvedimento amministrativo illegittimo in attesa della decisione di merito, evitando danni gravi e irreparabili.",
    readingTime: 6,
    normativa: ["D.Lgs. 104/2010 artt. 55-62", "Cost. art. 24"],
    sections: [
      {
        id: "presupposti",
        title: "Presupposti della cautelare",
        paragraphs: [
          "La sospensione richiede la sussistenza di due presupposti: il fumus boni iuris (probabilità di accoglimento del ricorso) e il periculum in mora (rischio di danno grave e irreparabile).",
          "Una valutazione preventiva di entrambi i presupposti consente di calibrare l'istanza in modo da massimizzare le possibilità di accoglimento.",
        ],
        image: practiceAppalti,
        highlights: [
          "Fumus boni iuris — probabilità di accoglimento",
          "Periculum in mora — danno grave e irreparabile",
          "Bilanciamento degli interessi",
        ],
      },
      {
        id: "procedura",
        title: "Procedura e tempi",
        paragraphs: [
          "L'istanza si propone con il ricorso o con atto separato. La camera di consiglio è fissata entro 30 giorni e la decisione viene assunta sentite le parti.",
          "L'eventuale ordinanza cautelare è impugnabile al Consiglio di Stato entro 30 giorni. La decisione in appello arriva di norma in 45-60 giorni.",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "In quali casi si concede la cautelare?", a: "Quando coesistono fumus e periculum. La giurisprudenza è particolarmente sensibile in materia di gare, edilizia e provvedimenti che incidono su diritti fondamentali." },
      { q: "L'ordinanza è impugnabile?", a: "Sì, davanti al Consiglio di Stato entro 30 giorni dalla notifica. L'appello cautelare consente una revisione completa della decisione." },
      { q: "Cosa accade dopo la cautelare?", a: "Il giudizio prosegue per il merito. La cautelare ha effetti fino alla sentenza di primo grado, che ne determina la conferma o la revoca." },
    ],
  },

  {
    slug: "impugnazione-graduatorie-prove-concorsuali",
    title: "Impugnazione graduatorie e prove concorsuali",
    audience: "Per i Privati",
    practiceArea: "Attività della Pubblica Amministrazione",
    heroImage: practiceConcorsi,
    metaDescription:
      "Esclusione da concorso pubblico o errata valutazione? Ricorso TAR contro graduatorie, prove e criteri di valutazione. Termini e procedura.",
    lead: "L'esclusione da un concorso o l'errata valutazione delle prove possono essere oggetto di impugnazione al TAR. Una verifica tempestiva consente di tutelare la propria posizione.",
    readingTime: 7,
    normativa: ["DPR 487/1994", "D.Lgs. 165/2001", "D.Lgs. 104/2010"],
    sections: [
      {
        id: "vizi-impugnabili",
        title: "Vizi impugnabili",
        paragraphs: [
          "I vizi impugnabili sono molteplici: violazione delle regole sulla composizione della commissione, errata applicazione dei criteri di valutazione, errori nella correzione delle prove, illegittimità dei requisiti di partecipazione.",
          "Una verifica documentale completa, anche tramite accesso agli atti, è il primo passo per individuare i profili rilevanti.",
        ],
        image: practiceConcorsi,
        highlights: [
          "Composizione commissione e incompatibilità",
          "Criteri di valutazione applicati uniformemente",
          "Correzione delle prove e griglie",
        ],
      },
      {
        id: "termini",
        title: "Termini di impugnazione",
        paragraphs: [
          "Il termine ordinario è di 60 giorni dalla pubblicazione della graduatoria. Per atti endo-procedimentali (esclusione, mancato superamento di prova), il termine decorre dalla comunicazione individuale.",
          "Il rispetto rigoroso dei termini è essenziale: una valutazione preliminare entro 7-10 giorni dalla notifica consente di organizzare la difesa per tempo.",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "Posso accedere agli atti del concorso?", a: "Sì, hai diritto all'accesso ex art. 22 L. 241/1990 per la documentazione che ti riguarda direttamente. È spesso essenziale per fondare il ricorso." },
      { q: "Posso impugnare un singolo voto?", a: "La valutazione delle prove è espressione di discrezionalità tecnica, sindacabile solo per manifesta irragionevolezza, errore di fatto o violazione dei criteri prefissati." },
      { q: "Quanto dura il giudizio?", a: "Mediamente 12-18 mesi per la sentenza di primo grado. È spesso possibile ottenere la sospensiva cautelare per partecipare a fasi successive in pendenza del giudizio." },
    ],
  },

  {
    slug: "ricorsi-collettivi-pubblico-impiego",
    title: "Ricorsi collettivi nel pubblico impiego",
    audience: "Per i Privati",
    practiceArea: "Attività della Pubblica Amministrazione",
    heroImage: practiceConcorsi,
    metaDescription:
      "Ricorsi collettivi nel pubblico impiego: tutela di gruppi di candidati o dipendenti contro graduatorie, mobilità, assunzioni e procedure selettive.",
    lead: "Quando un provvedimento incide negativamente su una pluralità di candidati o dipendenti, il ricorso collettivo consente una tutela più efficace e meno onerosa per i singoli.",
    readingTime: 6,
    normativa: ["D.Lgs. 104/2010 art. 39", "D.Lgs. 165/2001"],
    sections: [
      {
        id: "vantaggi",
        title: "Vantaggi del ricorso collettivo",
        paragraphs: [
          "Il ricorso collettivo consente di ripartire i costi del giudizio tra più ricorrenti e di rafforzare l'impatto del ricorso davanti al giudice.",
          "L'eventuale accoglimento del ricorso produce effetti per tutti i ricorrenti, evitando i rischi di soluzioni difformi che caratterizzano i ricorsi individuali paralleli.",
        ],
        image: practiceConcorsi,
        highlights: [
          "Riduzione dei costi pro-capite",
          "Maggiore impatto giudiziale",
          "Uniformità della decisione",
        ],
      },
      {
        id: "organizzazione",
        title: "Organizzazione del gruppo",
        paragraphs: [
          "Lo Studio cura tutte le fasi organizzative: raccolta delle adesioni, predisposizione delle deleghe, coordinamento delle posizioni individuali, comunicazione dell'esito.",
          "Una gestione professionale del gruppo è essenziale per evitare frizioni e garantire la massima efficacia del ricorso.",
        ],
        image: office,
      },
    ],
    faq: [
      { q: "Quanti ricorrenti servono?", a: "Anche 5-10 ricorrenti possono già beneficiare del ricorso collettivo. I vantaggi crescono con il numero, ma è importante che le posizioni siano omogenee." },
      { q: "Come si ripartiscono i costi?", a: "Pro-quota tra i ricorrenti, secondo accordo. Lo Studio propone schemi trasparenti, con preventivo dettagliato all'avvio." },
      { q: "Tutti vincono o tutti perdono?", a: "Di norma sì, perché il provvedimento impugnato è unico. Eventuali profili individuali vengono trattati separatamente nelle conclusioni." },
    ],
  },

  {
    slug: "diniego-accesso-atti",
    title: "Diniego di accesso agli atti",
    audience: "Per i Privati",
    practiceArea: "Diritto amministrativo",
    heroImage: lawBooks,
    metaDescription:
      "Diniego di accesso agli atti amministrativi: ricorso TAR ex art. 116 c.p.a. per ottenere documenti negati. Accesso documentale, civico e generalizzato.",
    lead: "Il diritto di accesso agli atti è uno strumento fondamentale di tutela. Lo Studio assiste cittadini, imprese e professionisti nelle istanze e nei ricorsi avverso dinieghi illegittimi.",
    readingTime: 6,
    normativa: ["L. 241/1990 artt. 22-28", "D.Lgs. 33/2013", "D.Lgs. 104/2010 art. 116"],
    sections: [
      {
        id: "tipologie-accesso",
        title: "Le tipologie di accesso",
        paragraphs: [
          "L'ordinamento riconosce tre forme di accesso: documentale (L. 241/1990), per chi ha interesse diretto e qualificato; civico semplice, sui dati oggetto di pubblicazione obbligatoria; generalizzato (FOIA), aperto a chiunque su qualsiasi atto.",
          "La scelta dello strumento corretto è essenziale per il successo dell'istanza. Lo Studio analizza la posizione del richiedente e individua il regime più favorevole.",
        ],
        image: office,
        highlights: [
          "Accesso documentale L. 241/1990",
          "Accesso civico semplice e FOIA",
          "Limiti e controinteressati",
        ],
      },
      {
        id: "ricorso-tar",
        title: "Ricorso al TAR",
        paragraphs: [
          "Il diniego (espresso o tacito) è impugnabile al TAR con rito accelerato ex art. 116 c.p.a. Il giudizio si conclude in tempi rapidi, con sentenza che ordina l'esibizione degli atti.",
          "L'eventuale diniego anche dopo la sentenza espone l'Ente a responsabilità ulteriori e possibili azioni di danno.",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "Quali sono i termini?", a: "L'Ente ha 30 giorni per rispondere. Il silenzio equivale a rigetto. Il ricorso al TAR va proposto entro 30 giorni dal diniego espresso o dal silenzio." },
      { q: "L'accesso può essere negato?", a: "Sì, in casi tassativi: tutela della riservatezza, sicurezza nazionale, segreti commerciali. Il diniego deve essere puntualmente motivato." },
      { q: "Quanto costa il ricorso?", a: "Il rito ex art. 116 c.p.a. ha contributo unificato ridotto e tempi accelerati. È un giudizio relativamente economico e rapido." },
    ],
  },

  {
    slug: "sanzioni-amministrative-ricorsi-gerarchici",
    title: "Sanzioni amministrative e ricorsi gerarchici",
    audience: "Per i Privati",
    practiceArea: "Diritto amministrativo",
    heroImage: lawBooks,
    metaDescription:
      "Difesa contro sanzioni amministrative: opposizione, ricorsi gerarchici e giurisdizionali. Tutela in materia tributaria, edilizia e di polizia locale.",
    lead: "Le sanzioni amministrative possono incidere significativamente sull'attività di privati e imprese. Una difesa tempestiva e mirata è essenziale per evitare conseguenze pregiudizievoli.",
    readingTime: 6,
    normativa: ["L. 689/1981", "D.Lgs. 472/1997 (sanzioni tributarie)", "DPR 380/2001"],
    sections: [
      {
        id: "strumenti-difesa",
        title: "Strumenti di difesa",
        paragraphs: [
          "L'ordinamento offre molteplici strumenti: opposizione amministrativa, ricorsi gerarchici, ricorsi giurisdizionali. La scelta dello strumento dipende dalla natura della sanzione e dalla strategia difensiva complessiva.",
          "Lo Studio valuta caso per caso il percorso più efficace, considerando anche le possibilità di definizione agevolata previste dalla normativa di settore.",
        ],
        image: office,
        highlights: [
          "Scritti difensivi entro 30 giorni",
          "Pagamento in misura ridotta",
          "Definizioni agevolate e adesioni",
        ],
      },
      {
        id: "ricorso-giudice",
        title: "Ricorso al giudice",
        paragraphs: [
          "Il ricorso al giudice (di pace, tribunale ordinario o TAR a seconda della materia) consente una valutazione completa della legittimità della sanzione.",
          "I termini sono perentori e variano in funzione della tipologia di sanzione: 30 giorni per le opposizioni ex L. 689/1981, 60 giorni per i ricorsi al TAR.",
        ],
        image: heroCourthouse,
      },
    ],
    faq: [
      { q: "Conviene pagare in misura ridotta?", a: "Dipende. Per sanzioni di modesta entità e con elevata probabilità di soccombenza, il pagamento ridotto può essere preferibile. Lo Studio offre una valutazione costi-benefici preventiva." },
      { q: "Quale giudice è competente?", a: "Dipende dalla materia: giudice di pace per sanzioni minori, tribunale ordinario per le maggiori, TAR per quelle che presuppongono valutazioni discrezionali della PA." },
      { q: "Cosa rischio se non pago?", a: "Iscrizione a ruolo, esecuzione forzata, fermi amministrativi e interdittive variabili in funzione della tipologia di sanzione. È sempre opportuna una valutazione legale tempestiva." },
    ],
  },
];

/* ─────────────────────────── HELPERS ─────────────────────────── */

/** Lookup a procedure by its slug — returns undefined if not found. */
export function getProcedure(slug: string | undefined): Procedure | undefined {
  if (!slug) return undefined;
  return procedures.find((p) => p.slug === slug);
}

/** Get other procedures from the same audience (for related/cross-link UIs). */
export function getRelatedProcedures(current: Procedure, limit = 3): Procedure[] {
  return procedures
    .filter((p) => p.slug !== current.slug && p.audience === current.audience)
    .slice(0, limit);
}

/** Map of original "Per gli Enti" / "Per i Privati" item titles → slug.
 *  Used by Index.tsx to turn the procedure list into <Link>s without
 *  refactoring its data shape. */
export const procedureTitleToSlug: Record<string, string> = procedures.reduce(
  (acc, p) => {
    acc[p.title] = p.slug;
    return acc;
  },
  {} as Record<string, string>,
);

/** Groups procedures by audience → practice area, preserving original order.
 *  Used by the procedures index page and the sidebar navigation to render a
 *  consistent two-level taxonomy across the site. */
export type GroupedProcedures = Array<{
  audience: Audience;
  groups: Array<{
    practiceArea: Procedure["practiceArea"];
    items: Procedure[];
  }>;
}>;

export function getGroupedProcedures(): GroupedProcedures {
  const audiences: Audience[] = ["Per gli Enti", "Per i Privati"];
  return audiences.map((audience) => {
    const inAudience = procedures.filter((p) => p.audience === audience);
    const areaOrder: Procedure["practiceArea"][] = [];
    const byArea = new Map<Procedure["practiceArea"], Procedure[]>();
    for (const p of inAudience) {
      if (!byArea.has(p.practiceArea)) {
        byArea.set(p.practiceArea, []);
        areaOrder.push(p.practiceArea);
      }
      byArea.get(p.practiceArea)!.push(p);
    }
    return {
      audience,
      groups: areaOrder.map((practiceArea) => ({
        practiceArea,
        items: byArea.get(practiceArea)!,
      })),
    };
  });
}