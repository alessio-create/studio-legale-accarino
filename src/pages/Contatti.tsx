import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Lock, Timer, ShieldCheck, MessageSquare } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
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
      {/* Editorial hero — full composition with key reassurances */}
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(60% 80% at 0% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                <span>Contatti</span>
                <span aria-hidden className="w-3 h-px bg-gold/50" />
                <span className="text-primary/70">Risposta in 48h</span>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 serif-display text-display-2xl text-primary text-balance leading-[1.04]">
                Una consulenza riservata, entro 48 ore.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                Compila il modulo: un avvocato dello Studio prenderà in carico la
                tua richiesta e ti contatterà personalmente per un primo
                orientamento. Tutte le informazioni trasmesse sono coperte da
                segreto professionale.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
                {[
                  { i: Lock, t: "Segreto professionale" },
                  { i: Timer, t: "Risposta in 48 ore" },
                  { i: ShieldCheck, t: "Primo orientamento gratuito" },
                ].map(({ i: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                    <Icon className="w-4 h-4 text-gold-deep" strokeWidth={1.75} />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-primary/10 border hairline">
              {[
                { v: 48, suffix: "h", l: "Tempo di risposta" },
                { v: 50, suffix: "+", l: "Anni di esperienza" },
                { v: 2, suffix: "", l: "Sedi operative" },
                { v: 100, suffix: "%", l: "Riservatezza" },
              ].map((s) => (
                <div key={s.l} className="bg-background p-6">
                  <CountUp
                    to={s.v}
                    suffix={s.suffix}
                    className="font-serif text-3xl text-primary tabular-nums"
                  />
                  <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background border-b hairline">
        <div className="editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-8">
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
                className="w-full group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 text-label-sm font-semibold uppercase tracking-[0.2em] shadow-inset-gold hover:bg-primary-glow transition-all disabled:opacity-60"
              >
                {submitting ? "Invio in corso..." : "Invia richiesta"}
                <span className="w-6 h-px bg-gold group-hover:w-10 transition-all" />
              </button>
            </form>
          </div>

          {/* Sidebar offices */}
          <aside className="lg:col-span-5 order-1 lg:order-2 space-y-12">
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
      <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(55% 70% at 100% 0%, hsl(var(--gold)) 0%, transparent 60%)",
          }}
        />
        <div className="relative editorial-container py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
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

            <ol className="lg:col-span-7 grid sm:grid-cols-3 gap-px bg-primary/10 border hairline">
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
                  <li className="group bg-background p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl text-gold-deep tabular-nums">
                        {s.n}
                      </span>
                      <s.i
                        className="w-5 h-5 text-gold-deep transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span aria-hidden className="block mt-4 h-px w-8 bg-gold/60" />
                    <h3 className="mt-5 font-serif text-lg text-primary leading-snug">
                      {s.t}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {s.d}
                    </p>
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
