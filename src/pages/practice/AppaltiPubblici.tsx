import { Building2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PracticePageTemplate } from "@/components/site/PracticePageTemplate";
import office from "@/assets/office.jpg";

export default function AppaltiPubblici() {
  return (
    <Layout>
      <PracticePageTemplate
        number="02"
        eyebrow="Area di pratica"
        title="Appalti Pubblici e Contenzioso Gare"
        lead="Esclusa o non aggiudicataria di una gara? Difendiamo le imprese nei ricorsi al TAR per esclusioni illegittime, vizi procedurali e violazioni del Codice degli Appalti."
        heroImage={office}
        icon={Building2}
        intro={
          <>
            Lo Studio assiste imprese edili, impiantistiche e di servizi in tutto il
            ciclo dell'appalto pubblico — dall'analisi preventiva del bando fino al
            contenzioso TAR e Consiglio di Stato.
            <span className="block mt-6 text-base font-sans not-italic text-muted-foreground">
              L'esperienza maturata su entrambi i lati — assistendo sia le PA appaltanti
              sia gli operatori economici — consente una visione strategica completa che
              fa la differenza nel contenzioso.
            </span>
          </>
        }
        whoFor={[
          "PMI edili e impiantistiche con fatturato €1M–€20M",
          "Imprese di servizi che partecipano a gare pubbliche",
          "Consorzi e ATI in fase di pre-qualifica o post-aggiudicazione",
          "Stazioni appaltanti per consulenza ex-ante",
        ]}
        services={[
          { title: "Ricorsi TAR su esclusioni", description: "Impugnazione dei provvedimenti di esclusione per vizi formali, sostanziali o discrezionali." },
          { title: "Sospensiva cautelare", description: "Istanza di sospensione dell'aggiudicazione con esame in tempi rapidissimi (30–45 giorni)." },
          { title: "Verifica anomalia offerte", description: "Difesa nel sub-procedimento di verifica di congruità dell'offerta presunta anomala." },
          { title: "Contenzioso esecutivo", description: "Varianti, riserve, recesso, risoluzione e contenzioso in fase di esecuzione contrattuale." },
        ]}
        process={[
          { num: "I", title: "Esame del bando e degli atti", description: "Analisi documentale completa entro 48 ore dalla comunicazione." },
          { num: "II", title: "Strategia processuale", description: "Individuazione dei vizi rilevabili e linea cautelare." },
          { num: "III", title: "Ricorso e udienza cautelare", description: "Deposito ricorso entro 30 giorni e camera di consiglio cautelare." },
          { num: "IV", title: "Merito e CdS", description: "Udienza di merito e valutazione di appello in caso di soccombenza." },
        ]}
        stats={[
          { value: "30gg", label: "Termini ricorso" },
          { value: "TAR · CdS", label: "Tutte le sedi" },
          { value: "PMI", label: "Focus B2B" },
          { value: "Retainer", label: "Disponibile" },
        ]}
        faq={[
          { q: "Posso continuare a partecipare ad altre gare mentre ricorro?", a: "Sì. Il ricorso non comporta alcuna sanzione interdittiva. Anzi, dimostrare di tutelare attivamente i propri diritti è un elemento di forza commerciale." },
          { q: "Quanto dura un giudizio TAR per appalti?", a: "Il rito speciale appalti prevede tempi accelerati: cautelare entro 30 giorni, sentenza di merito entro 9 mesi. L'eventuale appello al Consiglio di Stato è ancora più rapido." },
          { q: "Il TAR può annullare la gara già aggiudicata?", a: "Sì. In presenza di vizi rilevanti il TAR può disporre l'annullamento dell'aggiudicazione, l'aggiudicazione al ricorrente o, in casi più gravi, l'annullamento dell'intera gara con nuova procedura." },
          { q: "Offrite assistenza preventiva sui bandi?", a: "Sì. Per imprese clienti in retainer offriamo l'analisi preventiva dei bandi più rilevanti, l'assistenza nella predisposizione dell'offerta e il monitoraggio costante del contenzioso del settore." },
        ]}
      />
    </Layout>
  );
}
