import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";

const TITOLARE = "Studio Legale Accarino";
const EMAIL = "studioassociato@accarino.it";
const DOMAIN = "accarino.it";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Seo
        title="Privacy Policy"
        description={`Informativa privacy di ${DOMAIN}: tipologie di dati raccolti, finalità, base giuridica, diritti dell'Utente e modalità di esercizio.`}
        path="/privacy-policy"
      />
      <PageHero
        eyebrow="Informativa"
        eyebrowSuffix="GDPR · Reg. UE 2016/679"
        title={<>Privacy <span className="italic text-gold-deep">Policy</span></>}
        lead={`Privacy Policy di ${DOMAIN}. Questo Sito Web raccoglie alcuni Dati Personali dei propri Utenti.`}
      />

      <section className="editorial-container py-14 lg:py-20">
        <article className="max-w-3xl mx-auto prose-legal">
          <p className="text-sm text-muted-foreground">
            Questo documento può essere stampato utilizzando il comando di stampa
            presente nelle impostazioni di qualsiasi browser.
          </p>

          <h2>Titolare del Trattamento dei Dati</h2>
          <p>{TITOLARE}</p>
          <p>
            <strong>Indirizzo email del Titolare:</strong>{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>

          <h2>Tipologie di Dati raccolti</h2>
          <p>
            Fra i Dati Personali raccolti da questo Sito Web, in modo autonomo o
            tramite terze parti, ci sono: Strumento di Tracciamento; Dati di
            utilizzo; email; nome; cognome; data di nascita; numero di telefono.
          </p>
          <p>
            Dettagli completi su ciascuna tipologia di dati raccolti sono forniti
            nelle sezioni dedicate di questa privacy policy o mediante specifici
            testi informativi visualizzati prima della raccolta dei dati stessi.
          </p>
          <p>
            I Dati Personali possono essere liberamente forniti dall'Utente o, nel
            caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di
            questo Sito Web.
          </p>
          <p>
            Se non diversamente specificato, tutti i Dati richiesti da questo Sito
            Web sono obbligatori. Se l'Utente rifiuta di comunicarli, potrebbe
            essere impossibile per questo Sito Web fornire il Servizio. Nei casi
            in cui questo Sito Web indichi alcuni Dati come facoltativi, gli
            Utenti sono liberi di astenersi dal comunicare tali Dati, senza che
            ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla
            sua operatività. Gli Utenti che dovessero avere dubbi su quali Dati
            siano obbligatori, sono incoraggiati a contattare il Titolare.
          </p>
          <p>
            L'eventuale utilizzo di Cookie – o di altri strumenti di tracciamento
            – da parte di questo Sito Web o dei titolari dei servizi terzi
            utilizzati da questo Sito Web, ove non diversamente precisato, ha la
            finalità di fornire il Servizio richiesto dall'Utente, oltre alle
            ulteriori finalità descritte nel presente documento e nella Cookie
            Policy, se disponibile.
          </p>
          <p>
            L'Utente si assume la responsabilità dei Dati Personali di terzi
            ottenuti, pubblicati o condivisi mediante questo Sito Web e
            garantisce di avere il diritto di comunicarli o diffonderli,
            liberando il Titolare da qualsiasi responsabilità verso terzi.
          </p>

          <h2>Modalità e luogo del trattamento dei Dati raccolti</h2>
          <h3>Modalità di trattamento</h3>
          <p>
            Il Titolare adotta le opportune misure di sicurezza volte ad impedire
            l'accesso, la divulgazione, la modifica o la distruzione non
            autorizzate dei Dati Personali.
          </p>
          <p>
            Il trattamento viene effettuato mediante strumenti informatici e/o
            telematici, con modalità organizzative e con logiche strettamente
            correlate alle finalità indicate. Oltre al Titolare, in alcuni casi,
            potrebbero avere accesso ai Dati altri soggetti coinvolti
            nell'organizzazione di questo Sito Web (personale amministrativo,
            commerciale, marketing, legali, amministratori di sistema) ovvero
            soggetti esterni (come fornitori di servizi tecnici terzi, corrieri
            postali, hosting provider, società informatiche, agenzie di
            comunicazione) nominati anche, se necessario, Responsabili del
            Trattamento da parte del Titolare. L'elenco aggiornato dei
            Responsabili potrà sempre essere richiesto al Titolare del
            Trattamento.
          </p>

          <h3>Base giuridica del trattamento</h3>
          <p>
            Il Titolare tratta Dati Personali relativi all'Utente in caso sussista
            una delle seguenti condizioni:
          </p>
          <ul>
            <li>
              l'Utente ha prestato il consenso per una o più finalità specifiche;
            </li>
            <li>
              il trattamento è necessario all'esecuzione di un contratto con
              l'Utente e/o all'esecuzione di misure precontrattuali;
            </li>
            <li>
              il trattamento è necessario per adempiere un obbligo legale al quale
              è soggetto il Titolare;
            </li>
            <li>
              il trattamento è necessario per l'esecuzione di un compito di
              interesse pubblico o per l'esercizio di pubblici poteri di cui è
              investito il Titolare;
            </li>
            <li>
              il trattamento è necessario per il perseguimento del legittimo
              interesse del Titolare o di terzi.
            </li>
          </ul>
          <p>
            È comunque sempre possibile richiedere al Titolare di chiarire la
            concreta base giuridica di ciascun trattamento.
          </p>

          <h3>Luogo</h3>
          <p>
            I Dati sono trattati presso le sedi operative del Titolare ed in ogni
            altro luogo in cui le parti coinvolte nel trattamento siano
            localizzate. Per ulteriori informazioni, contatta il Titolare.
          </p>
          <p>
            I Dati Personali dell'Utente potrebbero essere trasferiti in un paese
            diverso da quello in cui l'Utente si trova. L'Utente ha diritto a
            ottenere informazioni in merito alla base giuridica del trasferimento
            di Dati al di fuori dell'Unione Europea o ad un'organizzazione
            internazionale di diritto internazionale pubblico o costituita da due
            o più paesi, nonché in merito alle misure di sicurezza adottate dal
            Titolare per proteggere i Dati.
          </p>

          <h3>Periodo di conservazione</h3>
          <p>
            I Dati sono trattati e conservati per il tempo richiesto dalle
            finalità per le quali sono stati raccolti. Pertanto:
          </p>
          <ul>
            <li>
              I Dati Personali raccolti per scopi collegati all'esecuzione di un
              contratto tra il Titolare e l'Utente saranno trattenuti sino a
              quando sia completata l'esecuzione di tale contratto.
            </li>
            <li>
              I Dati Personali raccolti per finalità riconducibili all'interesse
              legittimo del Titolare saranno trattenuti sino al soddisfacimento
              di tale interesse.
            </li>
          </ul>
          <p>
            Quando il trattamento è basato sul consenso dell'Utente, il Titolare
            può conservare i Dati Personali più a lungo sino a quando detto
            consenso non venga revocato. Inoltre, il Titolare potrebbe essere
            obbligato a conservare i Dati Personali per un periodo più lungo in
            ottemperanza ad un obbligo di legge o per ordine di un'autorità. Al
            termine del periodo di conservazione i Dati Personali saranno
            cancellati.
          </p>

          <h2>Finalità del Trattamento dei Dati raccolti</h2>
          <p>
            I Dati dell'Utente sono raccolti per consentire al Titolare di fornire
            il Servizio, adempiere agli obblighi di legge, rispondere a richieste
            o azioni esecutive, tutelare i propri diritti ed interessi, individuare
            eventuali attività dolose o fraudolente, nonché per le seguenti
            finalità: Statistica, Gestione contatti e invio di messaggi, Gestione
            dei tag e Visualizzazione di contenuti da piattaforme esterne.
          </p>

          <h2>Dettagli sul trattamento dei Dati Personali</h2>

          <h3>Gestione contatti e invio di messaggi</h3>
          <p>
            Questo tipo di servizi consente di gestire un database di contatti
            email, contatti telefonici o contatti di qualunque altro tipo,
            utilizzati per comunicare con l'Utente. Questi servizi potrebbero
            inoltre consentire di raccogliere dati relativi alla data e all'ora di
            visualizzazione dei messaggi da parte dell'Utente.
          </p>

          <h3>Gestione dei tag</h3>
          <p>
            <strong>Google Tag Manager (Google Ireland Limited)</strong> — servizio
            di gestione dei tag. Dati Personali trattati: Dati di utilizzo;
            Strumento di Tracciamento. Luogo del trattamento: Irlanda –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </p>

          <h3>Statistica</h3>
          <p>
            <strong>Google Analytics (Google Ireland Limited)</strong> — servizio
            di analisi web. Google utilizza i Dati Personali raccolti allo scopo
            di tracciare ed esaminare l'utilizzo di questo Sito Web, compilare
            report e condividerli con gli altri servizi sviluppati da Google. Dati
            Personali trattati: Dati di utilizzo; Strumento di Tracciamento. Luogo
            del trattamento: Irlanda –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> –{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noreferrer">Opt Out</a>.
          </p>
          <p>
            <strong>Google Analytics con IP anonimizzato</strong> — questa
            integrazione di Google Analytics rende anonimo l'indirizzo IP
            dell'Utente abbreviandolo entro i confini degli stati membri
            dell'Unione Europea o in altri Paesi aderenti all'accordo sullo Spazio
            Economico Europeo.
          </p>

          <h3>Visualizzazione di contenuti da piattaforme esterne</h3>
          <p>
            <strong>Google Fonts (Google Ireland Limited)</strong> — servizio di
            visualizzazione di stili di carattere. Dati Personali trattati: Dati
            di utilizzo; Strumento di Tracciamento. Luogo del trattamento:
            Irlanda –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </p>
          <p>
            <strong>Font Awesome (Fonticons, Inc.)</strong> — servizio di
            visualizzazione di stili di carattere. Dati Personali trattati: Dati
            di utilizzo; Strumento di Tracciamento. Luogo del trattamento: Stati
            Uniti –{" "}
            <a href="https://fontawesome.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </p>

          <h2>Diritti dell'Utente</h2>
          <p>
            Gli Utenti possono esercitare determinati diritti con riferimento ai
            Dati trattati dal Titolare. In particolare, l'Utente ha il diritto di:
          </p>
          <ul>
            <li><strong>revocare il consenso</strong> in ogni momento.</li>
            <li><strong>opporsi al trattamento</strong> quando esso avviene su una base giuridica diversa dal consenso.</li>
            <li><strong>accedere ai propri Dati</strong> e riceverne copia.</li>
            <li><strong>verificare e chiedere la rettificazione</strong>.</li>
            <li><strong>ottenere la limitazione</strong> del trattamento.</li>
            <li><strong>ottenere la cancellazione</strong> dei propri Dati Personali.</li>
            <li><strong>ricevere o trasferire</strong> i propri Dati ad altro titolare (portabilità).</li>
            <li><strong>proporre reclamo</strong> all'autorità di controllo competente.</li>
          </ul>

          <h3>Come esercitare i diritti</h3>
          <p>
            Per esercitare i diritti, gli Utenti possono indirizzare una richiesta
            agli estremi di contatto del Titolare. Le richieste sono evase nel
            più breve tempo possibile, in ogni caso entro un mese.
          </p>

          <h2>Cookie Policy</h2>
          <p>
            Questo Sito Web fa utilizzo di Strumenti di Tracciamento. Per saperne
            di più, l'Utente può consultare la{" "}
            <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>

          <h2>Ulteriori informazioni sul trattamento</h2>
          <h3>Difesa in giudizio</h3>
          <p>
            I Dati Personali dell'Utente possono essere utilizzati da parte del
            Titolare in giudizio o nelle fasi preparatorie alla sua eventuale
            instaurazione per la difesa da abusi nell'utilizzo di questo Sito Web
            o dei Servizi connessi.
          </p>
          <h3>Log di sistema e manutenzione</h3>
          <p>
            Per necessità legate al funzionamento ed alla manutenzione, questo
            Sito Web e gli eventuali servizi terzi da essa utilizzati potrebbero
            raccogliere log di sistema, ossia file che registrano le interazioni
            e che possono contenere anche Dati Personali, quali l'indirizzo IP
            dell'Utente.
          </p>
          <h3>Risposta alle richieste "Do Not Track"</h3>
          <p>Questo Sito Web non supporta le richieste "Do Not Track".</p>
          <h3>Modifiche a questa privacy policy</h3>
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla presente
            privacy policy in qualunque momento notificandolo agli Utenti su
            questa pagina. Si prega dunque di consultare con frequenza questa
            pagina, facendo riferimento alla data di ultima modifica indicata in
            fondo.
          </p>

          <p className="text-xs text-muted-foreground mt-10">
            La presente informativa privacy è redatta sulla base di molteplici
            ordinamenti legislativi, inclusi gli artt. 13 e 14 del Regolamento
            (UE) 2016/679.
          </p>
        </article>
      </section>
    </Layout>
  );
}