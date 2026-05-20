import { Landmark } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PracticePageTemplate } from "@/components/site/PracticePageTemplate";
import { Seo, serviceJsonLd, faqJsonLd } from "@/components/site/Seo";
import lawBooks from "@/assets/espropriazioni.jpg";

export default function Espropriazioni() {
  const faq = [
    { q: "L'indennità offerta dall'ente è davvero congrua?", a: "Nella maggior parte dei casi le indennità inizialmente proposte risultano inferiori al valore di mercato. Una stima tecnica indipendente è il primo passo per valutare l'opportunità di un'opposizione." },
    { q: "Quanto tempo ho per opporsi?", a: "I termini variano in base all'atto: per l'opposizione alla stima sono 30 giorni dalla notifica del decreto; per il ricorso al TAR contro la dichiarazione di pubblica utilità 60 giorni. È essenziale non perdere questi termini." },
    { q: "Posso bloccare i lavori dell'ente espropriante?", a: "In presenza di gravi vizi è possibile chiedere al TAR la sospensione cautelare del decreto. La concessione richiede dimostrazione di danno grave e irreparabile e fumus boni iuris." },
    { q: "Quanto costa promuovere un'opposizione?", a: "Per l'opposizione alla stima i costi partono da €3.000–€5.000; per il contenzioso pieno (TAR + eventuale CdS) da €8.000–€15.000. Forniamo sempre un preventivo scritto in sede di consulenza." },
  ];
  return (
    <Layout>
      <Seo
        title="Avvocato Espropriazioni Salerno · Opposizione Stima"
        includeBrand={false}
        description="Hai ricevuto un decreto di esproprio o un'occupazione d'urgenza? Studio Legale a Salerno specializzato in opposizione alla stima e contenzioso TAR. Risposta in 48h."
        path="/espropriazioni"
        jsonLd={[
          serviceJsonLd({
            name: "Espropriazioni e Occupazioni Illegittime",
            description: "Difesa dei proprietari nelle procedure ablative, opposizione alla stima dell'indennità, occupazioni illegittime, contenzioso TAR e Consiglio di Stato.",
            path: "/espropriazioni",
          }),
          faqJsonLd(faq),
        ]}
      />
      <PracticePageTemplate
        number="01"
        eyebrow="Area di pratica"
        title="Espropriazioni e Occupazioni Illegittime"
        practiceArea="Espropriazioni"
        lead="Hai ricevuto un decreto di esproprio o un'occupazione d'urgenza? Da oltre 40 anni difendiamo i proprietari nelle controversie con la Pubblica Amministrazione."
        heroImage={lawBooks}
        icon={Landmark}
        intro={
          <>
            La materia espropriativa è una delle più complesse e tecniche del diritto
            amministrativo. Il proprietario si trova spesso solo davanti a procedure
            opache, indennità sottostimate e termini decadenziali stretti.
            <span className="block mt-6 text-base font-sans not-italic text-muted-foreground">
              Il nostro Studio ha maturato oltre quattro decenni di casistica diretta
              in questo settore, operando contro (e per) enti di primo piano: Regione
              Campania, Comuni salernitani, Consorzi ASI, Società Autostrade Meridionali.
            </span>
          </>
        }
        whoFor={[
          "Proprietari di terreni e immobili colpiti da decreti di esproprio",
          "Imprenditori agricoli con terreni nella piana del Sele e nell'agro nocerino-sarnese",
          "Famiglie con patrimoni immobiliari ereditati",
          "Imprese con insediamenti produttivi soggetti a occupazione",
        ]}
        services={[
          {
            title: "Opposizione alla stima dell'indennità",
            description:
              "Analisi della congruità dell'indennità offerta e ricorso alla Corte d'Appello competente per ottenere una valutazione equa.",
          },
          {
            title: "Occupazioni illegittime e d'urgenza",
            description:
              "Tutela contro occupazioni senza valido titolo, richiesta di restituzione del bene e risarcimento del danno.",
          },
          {
            title: "Contenzioso TAR e Consiglio di Stato",
            description:
              "Impugnazione dei decreti di esproprio, della dichiarazione di pubblica utilità e dei vizi procedurali.",
          },
          {
            title: "Tribunale Sup. Acque Pubbliche",
            description:
              "Assistenza specialistica per le controversie in materia di acque pubbliche e demanio idrico.",
          },
        ]}
        process={[
          { num: "I", title: "Analisi del decreto", description: "Verifica dei presupposti, dei termini e della legittimità dell'atto." },
          { num: "II", title: "Stima alternativa", description: "Valutazione tecnica indipendente del bene espropriato." },
          { num: "III", title: "Ricorso e cautelare", description: "Predisposizione degli atti e istanza di sospensione, ove rilevante." },
          { num: "IV", title: "Liquidazione", description: "Recupero dell'indennità o del risarcimento ottenuto." },
        ]}
        stats={[
          { value: "40+", label: "Anni di esperienza" },
          { value: "200+", label: "Pratiche gestite" },
          { value: "TSAP", label: "Patrocinio" },
          { value: "48h", label: "Prima valutazione" },
        ]}
        faq={faq}
        outcomes={[
          { value: "+€1,2M", label: "Indennità rivalutata", caseType: "Terreno agricolo" },
          { value: "Restituzione", label: "Bene + risarcimento", caseType: "Occupazione illegittima" },
          { value: "Annullato", label: "Decreto di esproprio", caseType: "Vizi procedurali" },
          { value: "+180%", label: "Aumento medio indennità", caseType: "Casi rappresentativi" },
        ]}
        signatureQuote={{
          quote:
            "L'indennità di esproprio non è un'offerta ma un diritto: deve riflettere il valore reale del bene, non quello che la Pubblica Amministrazione vuole pagare.",
          attribution: "Studio Legale Accarino",
        }}
      />
    </Layout>
  );
}
