import { Users } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PracticePageTemplate } from "@/components/site/PracticePageTemplate";
import { Seo, serviceJsonLd, faqJsonLd } from "@/components/site/Seo";
import lawBooks from "@/assets/concorsi-pubblici.jpg";

export default function ConcorsiPubblici() {
  const faq = [
    { q: "Quanto tempo ho per impugnare l'esclusione?", a: "Il termine ordinario è di 60 giorni dalla notifica del provvedimento o dalla pubblicazione della graduatoria. Per alcune procedure speciali il termine è ridotto. Agisci subito." },
    { q: "Conviene il ricorso collettivo?", a: "Quando più candidati sono stati esclusi dalla stessa procedura per i medesimi motivi, il ricorso collettivo riduce i costi individuali (€800–€1.500 a persona) e rafforza la posizione processuale." },
    { q: "Se perdo, devo pagare le spese della PA?", a: "In caso di soccombenza il giudice può condannare alle spese, ma per i ricorsi in materia concorsuale spesso si applica la compensazione. Una valutazione preliminare aiuta a stimare il rischio." },
    { q: "Si può davvero vincere contro la PA?", a: "Sì. Statisticamente i ricorsi su vizi sostanziali (violazione di legge, eccesso di potere) hanno percentuali di successo significative. Una valutazione preliminare seria stima la fondatezza del caso." },
  ];
  return (
    <Layout>
      <Seo
        title="Avvocato Concorsi Pubblici a Salerno · Ricorsi e Graduatorie"
        description="Escluso da un concorso o fuori dalla graduatoria utile? Studio a Salerno specializzato in ricorsi TAR su graduatorie, prove e bandi. Anche ricorsi collettivi."
        path="/concorsi-pubblici"
        jsonLd={[
          serviceJsonLd({
            name: "Concorsi Pubblici e Pubblico Impiego",
            description: "Tutela dei candidati nelle selezioni pubbliche: impugnazione di graduatorie, prove e criteri di valutazione, ricorsi collettivi.",
            path: "/concorsi-pubblici",
          }),
          faqJsonLd(faq),
        ]}
      />
      <PracticePageTemplate
        number="03"
        eyebrow="Area di pratica"
        title="Concorsi Pubblici e Pubblico Impiego"
        lead="Sei stato escluso da un concorso o collocato fuori dalla graduatoria utile? Tuteliamo i candidati nelle procedure concorsuali della Pubblica Amministrazione."
        heroImage={lawBooks}
        icon={Users}
        intro={
          <>
            Le procedure concorsuali della PA sono spesso caratterizzate da irregolarità —
            nei bandi, nelle commissioni, nella valutazione dei titoli. Riconoscere
            questi vizi richiede competenza specialistica e tempestività.
            <span className="block mt-6 text-base font-sans not-italic text-muted-foreground">
              Lo Studio offre anche la possibilità di ricorsi collettivi che riducono
              significativamente i costi individuali per i candidati esclusi dalla
              stessa procedura.
            </span>
          </>
        }
        whoFor={[
          "Candidati esclusi per vizi formali nei requisiti di partecipazione",
          "Personale sanitario (infermieri, OSS, medici) escluso da concorsi ASL",
          "Insegnanti e personale scolastico nelle procedure ATA, GPS, concorsi docenti",
          "Personale amministrativo della PA in concorsi e progressioni interne",
        ]}
        services={[
          { title: "Ricorso individuale", description: "Impugnazione del provvedimento di esclusione o della graduatoria con istanza cautelare." },
          { title: "Ricorso collettivo", description: "Tutela di gruppi di candidati esclusi dalla stessa procedura, con costi individuali ridotti." },
          { title: "Impugnazione del bando", description: "Contestazione delle clausole del bando immediatamente lesive." },
          { title: "Pubblico impiego", description: "Stabilizzazioni, inquadramenti, progressioni economiche e di carriera." },
        ]}
        process={[
          { num: "I", title: "Verifica termini", description: "Conferma del termine residuo per agire (30 o 60 giorni)." },
          { num: "II", title: "Analisi atti", description: "Esame del bando, dei verbali di commissione e della graduatoria." },
          { num: "III", title: "Deposito ricorso", description: "Predisposizione e deposito al TAR competente." },
          { num: "IV", title: "Cautelare e merito", description: "Camera di consiglio per la sospensione e successiva sentenza." },
        ]}
        stats={[
          { value: "60gg", label: "Termini ordinari" },
          { value: "Coll.", label: "Ricorsi collettivi" },
          { value: "ASL · MIUR", label: "Settori principali" },
          { value: "TAR Campania", label: "Sede principale" },
        ]}
        faq={faq}
        outcomes={[
          { value: "Reintegro", label: "Candidata in graduatoria", caseType: "Concorso ASL" },
          { value: "Annullato", label: "Bando illegittimo", caseType: "Concorso scuola" },
          { value: "15 ricorrenti", label: "Ricorso collettivo vinto", caseType: "Esclusioni in serie" },
          { value: "Riconv. graduatoria", label: "Nuova prova ammessa", caseType: "Vizio commissione" },
        ]}
        signatureQuote={{
          quote:
            "Un concorso pubblico è una promessa di trasparenza. Quando viene tradita, la difesa del singolo candidato è anche difesa dell'imparzialità della Pubblica Amministrazione.",
          attribution: "Studio Legale Accarino",
        }}
      />
    </Layout>
  );
}
