import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { Link } from "react-router-dom";

const TITOLARE = "Studio Legale Accarino";
const EMAIL = "studioassociato@accarino.it";
const DOMAIN = "accarino.it";

export default function CookiePolicy() {
  return (
    <Layout>
      <Seo
        title="Cookie Policy"
        description={`Cookie Policy di ${DOMAIN}: Strumenti di Tracciamento utilizzati, finalità, gestione del consenso e modalità di opt-out.`}
        path="/cookie-policy"
      />
      <PageHero
        eyebrow="Informativa"
        eyebrowSuffix="Strumenti di Tracciamento"
        title={<>Cookie <span className="italic text-gold-deep">Policy</span></>}
        lead={`Cookie Policy di ${DOMAIN}. Informazioni sulle tecnologie che consentono a questo Sito Web di raggiungere gli scopi descritti di seguito.`}
      />

      <section className="editorial-container py-14 lg:py-20">
        <article className="max-w-3xl mx-auto prose-legal">
          <p>
            Tali tecnologie permettono al Titolare di raccogliere e salvare
            informazioni (per esempio tramite l'utilizzo di Cookie) o di
            utilizzare risorse (per esempio eseguendo uno script) sul
            dispositivo dell'Utente quando quest'ultimo interagisce con questo
            Sito Web.
          </p>
          <p>
            Per semplicità, in questo documento tali tecnologie sono
            sinteticamente definite "Strumenti di Tracciamento", salvo vi sia
            ragione di differenziare. Alcune delle finalità per le quali
            vengono impiegati Strumenti di Tracciamento potrebbero richiedere
            il consenso dell'Utente. Se viene prestato il consenso, esso può
            essere revocato liberamente in qualsiasi momento seguendo le
            istruzioni contenute in questo documento.
          </p>
          <p>
            Questo Sito Web utilizza Strumenti di Tracciamento gestiti
            direttamente dal Titolare (Strumenti di Tracciamento "di prima
            parte") e Strumenti di Tracciamento che abilitano servizi forniti
            da terzi ("di terza parte").
          </p>

          <h2>Attività strettamente necessarie al funzionamento</h2>
          <p>
            Questo Sito Web utilizza Cookie comunemente detti "tecnici" o altri
            Strumenti di Tracciamento analoghi per svolgere attività
            strettamente necessarie a garantire il funzionamento o la fornitura
            del Servizio.
          </p>

          <h3>Gestione dei tag</h3>
          <p>
            <strong>Google Tag Manager (Google Ireland Limited)</strong> —
            servizio di gestione dei tag. Dati Personali trattati: Dati di
            utilizzo e Strumento di Tracciamento. Luogo del trattamento: Irlanda
            –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </p>

          <h2>Altre attività che prevedono l'utilizzo di Strumenti di Tracciamento</h2>

          <h3>Miglioramento dell'esperienza · Visualizzazione di contenuti da piattaforme esterne</h3>
          <p>
            <strong>Google Fonts (Google Ireland Limited)</strong> — servizio di
            visualizzazione di stili di carattere. Dati Personali trattati: Dati
            di utilizzo e Strumento di Tracciamento. Luogo del trattamento:
            Irlanda –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </p>
          <p>
            <strong>Font Awesome (Fonticons, Inc.)</strong> — servizio di
            visualizzazione di stili di carattere. Dati Personali trattati: Dati
            di utilizzo e Strumento di Tracciamento. Luogo del trattamento:
            Stati Uniti –{" "}
            <a href="https://fontawesome.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.
          </p>

          <h3>Misurazione · Servizi di statistica anonimizzata</h3>
          <p>
            <strong>Google Analytics con IP anonimizzato (Google Ireland Limited)</strong>{" "}
            — servizio di analisi web. Questa integrazione rende anonimo
            l'indirizzo IP dell'Utente. Dati Personali trattati: Dati di utilizzo
            e Strumento di Tracciamento. Luogo del trattamento: Irlanda –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> –{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noreferrer">Opt Out</a>.
          </p>
          <p>Durata di archiviazione:</p>
          <ul>
            <li>AMP_TOKEN: 1 ora</li>
            <li>_ga: 2 anni</li>
            <li>_gac*: 3 mesi</li>
            <li>_gat: 1 minuto</li>
            <li>_gid: 1 giorno</li>
          </ul>

          <h3>Statistica</h3>
          <p>
            <strong>Google Analytics (Google Ireland Limited)</strong> — servizio
            di analisi web. Dati Personali trattati: Dati di utilizzo e
            Strumento di Tracciamento. Luogo del trattamento: Irlanda –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> –{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noreferrer">Opt Out</a>.
            Durata di archiviazione: fino a 12 mesi.
          </p>

          <h2>Come gestire le preferenze e prestare o revocare il consenso</h2>
          <p>
            Esistono vari modi per gestire le preferenze relative agli Strumenti
            di Tracciamento e per prestare o revocare il consenso, ove
            necessario. Gli Utenti possono gestire le preferenze direttamente
            tramite le impostazioni dei propri dispositivi – per esempio,
            possono impedire l'uso o l'archiviazione di Strumenti di
            Tracciamento.
          </p>
          <p>
            In aggiunta, ogni qualvolta l'utilizzo di Strumenti di Tracciamento
            dipenda da consenso, l'Utente può prestare o revocare tale consenso
            impostando le proprie preferenze all'interno dell'informativa sui
            cookie o aggiornando tali preferenze tramite il widget delle
            impostazioni di tracciamento, se presente.
          </p>

          <h3>Individuare le impostazioni relative agli Strumenti di Tracciamento</h3>
          <p>
            Gli Utenti possono trovare informazioni su come gestire i Cookie in
            alcuni dei browser più diffusi ai seguenti indirizzi:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647?hl=it&p=cpn_cookies" target="_blank" rel="noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/manage-cookies-and-website-data-sfri11471/" target="_blank" rel="noreferrer">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/help/4027947" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
            <li><a href="https://support.brave.com/hc/articles/360022806212-How-do-I-use-Shields-while-browsing" target="_blank" rel="noreferrer">Brave</a></li>
            <li><a href="https://help.opera.com/latest/web-preferences/#cookies" target="_blank" rel="noreferrer">Opera</a></li>
          </ul>

          <h3>Come disattivare la pubblicità basata sugli interessi</h3>
          <p>
            Gli Utenti possono avvalersi delle informazioni presenti su{" "}
            <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noreferrer">YourOnlineChoices</a> (EU),{" "}
            <a href="https://thenai.org/about-online-advertising/" target="_blank" rel="noreferrer">Network Advertising Initiative</a> (USA),{" "}
            <a href="https://www.aboutads.info/consumers/" target="_blank" rel="noreferrer">Digital Advertising Alliance</a> (USA),{" "}
            <a href="https://youradchoices.ca/understanding-online-advertising/" target="_blank" rel="noreferrer">DAAC</a> (Canada),{" "}
            <a href="http://www.ddai.info/optout" target="_blank" rel="noreferrer">DDAI</a> (Giappone) o altri servizi analoghi.
          </p>

          <h2>Conseguenze del rifiuto del consenso</h2>
          <p>
            Gli Utenti sono liberi di decidere se prestare o meno il consenso.
            Tuttavia, gli Strumenti di Tracciamento consentono a questo Sito Web
            di fornire una migliore esperienza e funzionalità avanzate. In
            assenza del consenso dell'Utente, il Titolare potrebbe non essere in
            grado di fornire le relative funzionalità.
          </p>

          <h2>Titolare del Trattamento dei Dati</h2>
          <p>{TITOLARE}</p>
          <p>
            <strong>Indirizzo email del Titolare:</strong>{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>

          <p className="text-sm text-muted-foreground mt-8">
            Per maggiori informazioni sul trattamento dei Dati Personali consulta
            la <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </article>
      </section>
    </Layout>
  );
}