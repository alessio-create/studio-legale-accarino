import { Scale } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PracticePageTemplate } from "@/components/site/PracticePageTemplate";
import { Seo, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/site/Seo";
import office from "@/assets/urbanistica-edilizia.jpg";

export default function UrbanisticaEdilizia() {
  const faq = [
    { q: "Posso impugnare il permesso di costruire del mio vicino?", a: "Sì, in qualità di soggetto interessato hai 60 giorni dalla piena conoscenza per impugnare al TAR il permesso di un terzo che ti arrechi pregiudizio." },
    { q: "Cosa fare in caso di ordine di demolizione?", a: "L'ordine di demolizione può essere impugnato entro 60 giorni. È fondamentale verificare la sussistenza dei presupposti, la corretta motivazione e la possibilità di sanatoria." },
    { q: "Quali sono i tempi di un ricorso urbanistico?", a: "Per il merito si attendono in media 12–24 mesi. È spesso possibile chiedere la sospensione cautelare del provvedimento impugnato, decisa entro 30–60 giorni." },
    { q: "Lavorate con tecnici di fiducia?", a: "Sì, lo Studio collabora con architetti, ingegneri e geometri di comprovata esperienza per le valutazioni tecniche necessarie alla strategia processuale." },
  ];
  return (
    <Layout>
      <Seo
        title="Avvocato Urbanistica Salerno · Permessi e Sanatorie"
        includeBrand={false}
        description="Permessi a costruire, varianti, vincoli, abusi: assistenza completa nei rapporti con Comuni, Soprintendenze e Regione in Campania. Risposta in 48h."
        path="/urbanistica-edilizia"
        jsonLd={[
          serviceJsonLd({
            name: "Urbanistica ed Edilizia",
            description: "Permessi a costruire, varianti urbanistiche, vincoli paesaggistici, abusi edilizi e sanatorie. Contenzioso TAR e Consiglio di Stato.",
            path: "/urbanistica-edilizia",
          }),
          faqJsonLd(faq),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Aree di pratica", path: "/procedure" },
            { name: "Urbanistica ed Edilizia", path: "/urbanistica-edilizia" },
          ]),
        ]}
      />
      <PracticePageTemplate
        number="04"
        eyebrow="Area di pratica"
        title="Urbanistica ed Edilizia"
        lead="Permessi a costruire, varianti, vincoli, abusi: assistenza completa nei rapporti con Comuni, Soprintendenze e Regione in materia urbanistico-edilizia."
        heroImage={office}
        icon={Scale}
        intro={
          <>
            La materia urbanistico-edilizia è il punto d'incontro tra interessi privati,
            disciplina pubblica e tutela del territorio. Gestire correttamente questo
            equilibrio richiede esperienza tecnica e processuale.
            <span className="block mt-6 text-base font-sans not-italic text-muted-foreground">
              Assistiamo proprietari, costruttori e tecnici in tutte le fasi:
              dalla consulenza preventiva sui titoli abilitativi al contenzioso davanti
              al TAR e al Consiglio di Stato.
            </span>
          </>
        }
        whoFor={[
          "Proprietari di immobili e aree edificabili",
          "Imprese di costruzione e sviluppatori immobiliari",
          "Professionisti tecnici (architetti, geometri, ingegneri) e i loro clienti",
          "Acquirenti di immobili con problematiche urbanistiche",
        ]}
        services={[
          { title: "Permessi a costruire e SCIA", description: "Assistenza nella richiesta, impugnazione di dinieghi, contestazione di prescrizioni illegittime." },
          { title: "Varianti urbanistiche e PUC", description: "Osservazioni ai piani urbanistici, ricorsi contro varianti pregiudizievoli." },
          { title: "Vincoli paesaggistici e culturali", description: "Procedimenti di autorizzazione, ricorsi contro dinieghi della Soprintendenza." },
          { title: "Sanatorie e condono", description: "Assistenza nelle procedure di sanatoria edilizia e contenzioso su ordini di demolizione." },
        ]}
        process={[
          { num: "I", title: "Due diligence", description: "Verifica dello stato urbanistico e dei titoli pregressi." },
          { num: "II", title: "Strategia", description: "Definizione del percorso amministrativo o contenzioso ottimale." },
          { num: "III", title: "Procedimento", description: "Predisposizione delle istanze o degli atti processuali." },
          { num: "IV", title: "Esecuzione", description: "Monitoraggio dell'esecuzione e gestione di eventuali ricorsi successivi." },
        ]}
        stats={[
          { value: "PUC", label: "Pianificazione" },
          { value: "TAR", label: "Contenzioso" },
          { value: "Soprintendenza", label: "Vincoli" },
          { value: "Sanatorie", label: "Procedure" },
        ]}
        faq={faq}
        outcomes={[
          { value: "Sanatoria", label: "Recupero edilizio", caseType: "Abuso minore" },
          { value: "Annullamento", label: "Diniego permesso", caseType: "Costruzione residenz." },
          { value: "Sospensione", label: "Ordine demolizione", caseType: "Tutela cautelare" },
          { value: "Var. urbanistica", label: "Cambio destinazione", caseType: "Area produttiva" },
        ]}
        signatureQuote={{
          quote:
            "Tra il diritto di costruire e il dovere di tutelare il territorio c'è uno spazio tecnico stretto: in quello spazio si vince o si perde una causa urbanistica.",
          attribution: "Studio Legale Accarino",
        }}
      />
    </Layout>
  );
}
