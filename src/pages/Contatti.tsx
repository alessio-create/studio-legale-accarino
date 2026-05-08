import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Timer, ShieldCheck, MessageSquare } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { Seo, orgJsonLd } from "@/components/site/Seo";
import { useToast } from "@/hooks/use-toast";

const sedi = [
  {
    city: "Salerno",
    address: "Via Roma, 41 — 84121 Salerno (SA)",
    phone: "+39 089 123 4567",
    email: "salerno@accarino.it",
    hours: "Lun–Ven · 9:00–18:30",
  },
  {
    city: "Cava de' Tirreni",
    address: "Corso Umberto I, 132 — 84013 Cava de' Tirreni (SA)",
    phone: "+39 089 765 4321",
    email: "cava@accarino.it",
    hours: "Lun–Ven · 9:00–17:00",
  },
];

const aree = [
  "Espropriazioni",
  "Appalti Pubblici",
  "Concorsi Pubblici",
  "Urbanistica ed Edilizia",
  "Corte dei Conti",
  "Altro / Non so",
];

export default function Contatti() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Richiesta ricevuta",
        description: "La contatteremo entro 48 ore lavorative.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <Layout>
      <Seo
        title="Contatti · Studio Legale a Salerno"
        description="Prenota una consulenza riservata. Ti rispondiamo entro 48 ore con un primo orientamento concreto su tempi, opzioni e costi. Sedi a Salerno e Cava de' Tirreni."
        path="/contatti"
        jsonLd={orgJsonLd}
      />
      {/* Editorial hero — minimal, focused on the headline and the lead */}
      <section className="relative bg-surface-container-low border-b hairline">
        <div className="editorial-container py-12 sm:py-20 lg:py-28">
          <div className="max-w-4xl">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                Contatti
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-5 sm:mt-8 serif-display text-display-2xl text-primary text-balance leading-[1.06]">
                Parliamo del tuo caso, in via riservata.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 sm:mt-8 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Compila il modulo: un avvocato dello Studio prenderà in carico la
                tua richiesta e ti contatterà personalmente per un primo
                orientamento. Tutte le informazioni trasmesse sono coperte da
                segreto professionale.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-background border-b hairline">
        <div className="editorial-container py-14 sm:py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <form onSubmit={onSubmit} className="space-y-8 sm:space-y-10">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                    Nome e Cognome *
                  </label>
                  <input required className="input-underline mt-3" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                    Telefono *
                  </label>
                  <input required type="tel" className="input-underline mt-3" placeholder="+39 ..." />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                  Email *
                </label>
                <input required type="email" className="input-underline mt-3" placeholder="nome@esempio.it" />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                  Area di interesse *
                </label>
                <select required className="input-underline mt-3 appearance-none cursor-pointer bg-transparent">
                  <option value="">Seleziona un'area</option>
                  {aree.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                  Descrivi brevemente la tua situazione *
                </label>
                <textarea
                  required
                  rows={5}
                  className="input-underline mt-3 resize-none"
                  placeholder="Tipo di atto ricevuto, ente coinvolto, eventuali termini in scadenza..."
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 accent-primary w-4 h-4" />
                <span>
                  Ho letto l'informativa privacy e acconsento al trattamento dei dati
                  per essere ricontattato dallo Studio.
                </span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 min-h-[52px] text-label-sm font-semibold uppercase tracking-[0.2em] shadow-inset-gold hover:bg-primary-glow transition-all disabled:opacity-60"
              >
                {submitting ? "Invio in corso..." : "Invia richiesta"}
                <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
              </button>
            </form>
          </div>

          {/* Sidebar offices */}
          <aside className="lg:col-span-5 order-1 lg:order-2 space-y-8 sm:space-y-12">
            <SectionHeader
              eyebrow="Le nostre sedi"
              title="Due sedi nella provincia di Salerno."
              intro="Sempre a disposizione su appuntamento, in centro a Salerno e a Cava de' Tirreni."
              compact
            />

            <div className="space-y-10">
              {sedi.map((s) => (
                <div key={s.city} className="border-l-2 border-gold pl-6 py-2">
                  <h3 className="font-serif text-2xl text-primary">{s.city}</h3>
                  <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold-deep mt-1 flex-shrink-0" />
                      <span>{s.address}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-gold-deep mt-1 flex-shrink-0" />
                      <a href={`tel:${s.phone.replace(/\s/g, "")}`} className="hover:text-primary">{s.phone}</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-gold-deep mt-1 flex-shrink-0" />
                      <a href={`mailto:${s.email}`} className="hover:text-primary">{s.email}</a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-gold-deep mt-1 flex-shrink-0" />
                      <span>{s.hours}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-primary text-primary-foreground p-8 relative">
              <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-gold" />
              <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-gold" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-4">Termini stretti?</p>
              <p className="font-serif text-xl text-background leading-snug">
                Per richieste con termini decadenziali in scadenza, chiama direttamente al numero della sede.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Closing reassurance band — fills the void below the form */}
      <section className="bg-surface-container-low border-b hairline">
        <div className="editorial-container py-14 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                  <span aria-hidden className="w-8 h-px bg-gold" />
                  Cosa succede dopo
                </p>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="mt-6 font-serif text-3xl lg:text-4xl text-primary leading-[1.1] text-balance">
                  Dalla tua richiesta al primo confronto, in tre passaggi.
                </h2>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                  Niente attese indefinite né risposte automatiche. Ogni
                  richiesta è letta personalmente da un partner dello Studio.
                </p>
              </Reveal>
            </div>

            <ol className="lg:col-span-7 border-t hairline">
              {[
                {
                  n: "01",
                  t: "Presa in carico",
                  d: "Un partner legge la richiesta entro 24 ore lavorative.",
                  i: MessageSquare,
                },
                {
                  n: "02",
                  t: "Primo riscontro",
                  d: "Ti contattiamo entro 48 ore per un primo orientamento.",
                  i: Timer,
                },
                {
                  n: "03",
                  t: "Consulenza riservata",
                  d: "Fissiamo un colloquio dedicato in sede o in video-call.",
                  i: ShieldCheck,
                },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 100}>
                  <li className="group grid grid-cols-12 gap-4 sm:gap-8 py-7 sm:py-8 items-baseline border-b hairline transition-colors duration-300 hover:bg-background -mx-4 px-4 lg:-mx-6 lg:px-6">
                    <span className="col-span-2 font-serif text-2xl sm:text-3xl text-gold-deep tabular-nums leading-none">
                      {s.n}
                    </span>
                    <div className="col-span-9 sm:col-span-8 flex flex-col">
                      <h3 className="font-serif text-lg sm:text-xl text-primary leading-snug transition-colors duration-300 group-hover:text-gold-deep">
                        {s.t}
                      </h3>
                      <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed text-pretty">
                        {s.d}
                      </p>
                    </div>
                    <span className="col-span-1 sm:col-span-2 flex justify-end pt-1">
                      <s.i
                        className="w-5 h-5 text-gold-deep transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </Layout>
  );
}
