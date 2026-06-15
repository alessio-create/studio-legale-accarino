import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const KNOWLEDGE_BASE = `
# Studio Legale Accarino — Knowledge Base

## Identità
- Nome: Studio Legale Accarino
- Fondato nel 1975
- Specializzato in diritto amministrativo
- Sito: https://studiolegaleaccarino.it

## Sedi
- Salerno: C.so Vittorio Emanuele 58, 84121 Salerno (SA)
- Cava de' Tirreni: Via G. Accarino 5, 84013 Cava de' Tirreni (SA)

## Contatti
- Telefono: +39 089 343140
- Email: studio@accarino.it
- Pagina contatti: /contatti
- Tempo di risposta: primo riscontro qualificato entro 48 ore lavorative

## Aree di specializzazione
1. Espropriazioni (/espropriazioni)
   - Opposizione alla stima dell'indennità
   - Occupazioni illegittime / acquisitive
   - Retrocessione dei beni
   - Risarcimento danni da occupazione senza titolo

2. Appalti pubblici (/appalti-pubblici)
   - Ricorsi al TAR su esclusioni e aggiudicazioni
   - Sospensive cautelari
   - Contenzioso su gare, anomalia dell'offerta, soccorso istruttorio

3. Attività della Pubblica Amministrazione (/concorsi-pubblici)
   - Impugnazione graduatorie di concorsi pubblici
   - Ricorsi collettivi
   - Pubblico impiego

4. Urbanistica ed edilizia (/urbanistica-edilizia)
   - Permessi a costruire e silenzio-assenso
   - Vincoli urbanistici e paesaggistici
   - Abusi edilizi e sanatorie

## Fori
- TAR Campania (sedi di Salerno e Napoli)
- Consiglio di Stato
- Corte d'Appello di Salerno

## Pagine principali
- Home (/)
- Lo Studio (/chi-siamo) — storia, professionisti, sedi
- Contatti (/contatti) — richiesta consulenza e recapiti
- Blog (/blog) — approfondimenti, sentenze commentate, guide pratiche
- Indice Procedure (/procedure) — mappa completa delle procedure

## Articoli del blog
- Indennità di esproprio per aree edificabili 2025 (/blog/indennita-esproprio-aree-edificabili-2025)
- Soccorso istruttorio nel nuovo Codice Appalti (/blog/soccorso-istruttorio-appalti-codice-2023)
- Ricorso contro la graduatoria di un concorso pubblico (/blog/ricorso-graduatoria-concorso-pubblico)
- Permesso di costruire e silenzio-assenso (/blog/permesso-costruire-silenzio-assenso)
- Occupazione senza titolo della P.A. (/blog/occupazione-acquisitiva-risarcimento)
- Anomalia dell'offerta negli appalti pubblici (/blog/anomalia-offerta-appalti-pubblici)
`;

const SYSTEM_PROMPT = `Sei l'Assistente virtuale dello Studio Legale Accarino, uno studio italiano di diritto amministrativo con sede a Salerno e Cava de' Tirreni, fondato nel 1975.

Il tuo compito è rispondere in modo cortese, professionale e conciso (massimo 4-5 frasi) alle domande dei visitatori del sito, basandoti ESCLUSIVAMENTE sulle informazioni contenute nella Knowledge Base qui sotto.

Linee guida:
- Rispondi sempre in italiano, con un tono formale ma accogliente, coerente con uno studio legale di tradizione.
- Se la domanda riguarda un'area di specializzazione, una procedura, una sede, un orario o un'informazione presente nella Knowledge Base, rispondi sinteticamente e — quando utile — indica la pagina del sito di riferimento (es. "Trovi maggiori dettagli nella sezione Appalti Pubblici").
- Se l'utente chiede di parlare con un avvocato, di fissare un appuntamento, di ottenere una consulenza, un preventivo, una valutazione del caso, oppure chiede dove o come contattare lo Studio, invita SEMPRE a usare la pagina Contatti con questo messaggio: "Per una risposta puntuale al tuo caso ti invitiamo a contattarci direttamente: un avvocato del team ti risponderà al più presto. Puoi farlo dalla pagina Contatti."
- Non fornire mai pareri legali specifici sul caso concreto dell'utente: spiega in termini generali e rimanda alla pagina Contatti.
- Se non conosci la risposta o l'informazione non è nella Knowledge Base, dillo onestamente e rimanda alla pagina Contatti.
- Non inventare numeri di telefono, email, nomi di professionisti, indirizzi, orari o tariffe.

--- KNOWLEDGE BASE ---
${KNOWLEDGE_BASE}
--- FINE KNOWLEDGE BASE ---`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "messages array required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI gateway error", response.status, errText);
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Troppe richieste, riprova tra poco." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servizio momentaneamente non disponibile." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      return new Response(JSON.stringify({ error: "AI request failed" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const reply: string = data?.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("chat-assistant error", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});