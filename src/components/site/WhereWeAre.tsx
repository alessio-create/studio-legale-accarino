import { Clock, MapPin, Car, Train, Accessibility, Phone } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * "Dove siamo" — physical-presence proof block for the homepage.
 *
 * Per il brief content.proofOverHypeMustInclude: indirizzo completo, mappa,
 * orari, parcheggio, mezzi pubblici, accessibilità.
 *
 * Tutti i dati operativi qui sotto sono [PLACEHOLDER]: vanno sostituiti con
 * informazioni reali e verificabili prima del go-live. Mai inventare numeri,
 * orari o indicazioni: una promessa fisica sbagliata distrugge la fiducia
 * più di quanto la generi.
 */

const sedi = [
  {
    city: "Salerno",
    address: "C.so Vittorio Emanuele 58 · 84121 Salerno (SA)",
    phone: "+39 089 343140",
    hours: "Mar–Gio · 15:00–18:00 · su appuntamento",
    parking: "[PLACEHOLDER es. parcheggio convenzionato a 80m, sosta libera in Via …]",
    transit: "[PLACEHOLDER es. Stazione Salerno a 10 min a piedi · bus 1, 4, 9]",
    a11y: "[PLACEHOLDER conferma accessibilità: ingresso a livello strada / ascensore / bagno accessibile]",
    // Maps embed: usare una URL "https://www.google.com/maps/embed?..." reale.
    mapEmbed: "", // vuoto = mostriamo placeholder visivo invece dell'iframe
  },
  {
    city: "Cava de' Tirreni",
    address: "Via G. Accarino, 5 · 84013 Cava de' Tirreni (SA)",
    phone: "+39 089 343140",
    hours: "Lun–Ven · 10:00–17:00 · su appuntamento",
    parking: "[PLACEHOLDER es. parcheggio Trezza a 5 min]",
    transit: "[PLACEHOLDER es. Stazione Cava de' Tirreni a 7 min a piedi]",
    a11y: "[PLACEHOLDER]",
    mapEmbed: "",
  },
];

export function WhereWeAre() {
  return (
    <section
      id="dove-siamo"
      className="section-y bg-background border-t hairline scroll-mt-24"
    >
      <div className="editorial-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-10 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Dove siamo</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 sm:mt-6 serif-display text-display-xl text-balance leading-[1.08]">
                Due sedi in provincia di Salerno,{" "}
                <span className="italic text-gold-deep">
                  porta a porta con i tribunali.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="lg:col-span-7 lg:pt-4">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Riceviamo su appuntamento. Prima di venire, ti diciamo cosa
              portare e quanto durerà il colloquio: niente attese inutili e
              niente sorprese sui costi.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-primary/10 border hairline">
          {sedi.map((s) => (
            <article
              key={s.city}
              className="bg-background p-6 sm:p-8 lg:p-12 flex flex-col"
            >
              {/* Map (or placeholder when not yet provided) */}
              <div className="aspect-[16/9] bg-surface-container-low border hairline overflow-hidden mb-8 relative">
                {s.mapEmbed ? (
                  <iframe
                    src={s.mapEmbed}
                    title={`Mappa sede ${s.city}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <MapPin
                      className="w-6 h-6 text-gold-deep mb-3"
                      strokeWidth={1.5}
                    />
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      [PLACEHOLDER mappa Google]
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground/80 max-w-xs leading-relaxed">
                      Inserire l'embed Maps reale per la sede di {s.city}.
                    </p>
                  </div>
                )}
              </div>

              <header>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                  Sede di
                </p>
                <h3 className="mt-2 font-serif text-3xl text-primary">
                  {s.city}
                </h3>
              </header>

              <dl className="mt-8 space-y-5 text-[15px] text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-4">
                  <dt aria-hidden>
                    <MapPin
                      className="w-4 h-4 text-gold-deep mt-1"
                      strokeWidth={1.5}
                    />
                  </dt>
                  <dd className="font-serif text-primary text-base">
                    {s.address}
                  </dd>
                </div>
                <div className="flex items-start gap-4">
                  <dt aria-hidden>
                    <Phone
                      className="w-4 h-4 text-gold-deep mt-1"
                      strokeWidth={1.5}
                    />
                  </dt>
                  <dd>
                    <a
                      href={`tel:${s.phone.replace(/[^+0-9]/g, "")}`}
                      className="hover:text-primary transition-colors"
                    >
                      {s.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex items-start gap-4">
                  <dt aria-hidden>
                    <Clock
                      className="w-4 h-4 text-gold-deep mt-1"
                      strokeWidth={1.5}
                    />
                  </dt>
                  <dd>{s.hours}</dd>
                </div>
              </dl>

              {/* Practical directions */}
              <ul className="mt-8 pt-8 border-t hairline space-y-4 text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-4">
                  <Car
                    className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-1">
                      Parcheggio
                    </span>
                    {s.parking}
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Train
                    className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-1">
                      Mezzi pubblici
                    </span>
                    {s.transit}
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Accessibility
                    className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-primary font-semibold mb-1">
                      Accessibilità
                    </span>
                    {s.a11y}
                  </div>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}