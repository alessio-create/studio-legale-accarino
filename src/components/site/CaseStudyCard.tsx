import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "./Reveal";

export type CaseStudy = {
  /** Year of the proceeding (anonymised). */
  year: string;
  /** Practice area chip — e.g. "Espropriazioni". */
  area: string;
  /** Editorial title shown on the card. */
  title: string;
  /** One-line punchy outcome label (gold). */
  outcome: string;
  /** Short caption beneath the title (anonymised summary). */
  excerpt: string;
  /** Cover image. */
  image: string;
  /** Detailed narrative for the dialog. */
  detail: {
    challenge: string;
    strategy: string;
    result: string;
    metric: { value: string; label: string };
  };
};

/**
 * Editorial case-study card — image-led, opens a long-form anonymised
 * narrative in a dialog. Designed to sit at homepage / practice level
 * to reinforce credibility beyond raw numbers.
 */
export const CaseStudyCard = ({
  caseStudy,
  index,
}: {
  caseStudy: CaseStudy;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Reveal delay={index * 110} className="bg-background h-full">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex flex-col h-full text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-label={`Apri caso studio: ${caseStudy.title}`}
        >
          {/* Cover */}
          <div className="relative overflow-hidden">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              loading="lazy"
              width={1024}
              height={640}
              className="w-full h-56 lg:h-64 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 45%, hsl(var(--primary) / 0.55) 100%)",
              }}
            />
            {/* Year tab */}
            <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold tabular-nums">
              <span aria-hidden className="w-3 h-px bg-gold" />
              {caseStudy.year}
            </span>
            {/* Area chip */}
            <span className="absolute bottom-5 left-5 right-5 text-[10px] uppercase tracking-[0.22em] text-background/95 font-semibold">
              {caseStudy.area}
            </span>
            {/* Gold hairline accent */}
            <span
              aria-hidden
              className="absolute left-0 right-0 bottom-0 h-px bg-gold/40 transition-colors duration-500 group-hover:bg-gold"
            />
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-8 lg:p-10">
            <p className="font-serif text-xl lg:text-2xl text-primary leading-snug text-balance group-hover:text-gold-deep transition-colors">
              {caseStudy.title}
            </p>
            <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed flex-1">
              {caseStudy.excerpt}
            </p>

            <div className="mt-8 pt-6 border-t hairline flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-1">
                  Esito
                </p>
                <p className="font-serif text-base text-primary leading-tight">
                  {caseStudy.outcome}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold flex-shrink-0">
                Apri
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-gold-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </span>
            </div>
          </div>
        </button>
      </Reveal>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-primary text-primary-foreground border-gold/30 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                {caseStudy.area}
              </span>
              <span aria-hidden className="w-1 h-1 rounded-full bg-gold/60" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-background/60 tabular-nums">
                {caseStudy.year}
              </span>
            </div>
            <DialogTitle className="font-serif text-2xl lg:text-3xl text-gold leading-tight text-left">
              {caseStudy.title}
            </DialogTitle>
            <DialogDescription className="text-background/70 font-serif pt-2 text-left">
              {caseStudy.excerpt}
            </DialogDescription>
          </DialogHeader>

          {/* Headline metric */}
          <div className="mt-6 border-y border-background/15 py-6 text-center">
            <p className="font-serif text-4xl lg:text-5xl text-gold leading-none">
              {caseStudy.detail.metric.value}
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-background/60">
              {caseStudy.detail.metric.label}
            </p>
          </div>

          {/* Narrative blocks */}
          <dl className="mt-6 space-y-6 text-sm">
            <NarrativeBlock label="La sfida" body={caseStudy.detail.challenge} />
            <NarrativeBlock label="La strategia" body={caseStudy.detail.strategy} />
            <NarrativeBlock label="Il risultato" body={caseStudy.detail.result} highlight />
          </dl>

          <p className="mt-8 text-[10px] italic text-background/40 border-t border-background/10 pt-4">
            Caso anonimizzato. Esempio illustrativo, non garanzia di risultato.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

function NarrativeBlock({
  label,
  body,
  highlight,
}: {
  label: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <dt className="text-[10px] uppercase tracking-[0.22em] text-gold/80 col-span-1">
        {label}
      </dt>
      <dd
        className={`col-span-3 leading-relaxed ${
          highlight ? "text-gold font-serif text-base" : "text-background/85"
        }`}
      >
        {body}
      </dd>
    </div>
  );
}
