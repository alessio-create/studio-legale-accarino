import { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  /** Small uppercase, gold-deep, tracked label sitting above the title. */
  eyebrow: string;
  /** Optional second eyebrow segment shown after a hairline divider. */
  eyebrowSuffix?: string;
  /** Page title — rendered as the page H1 in serif-display. */
  title: ReactNode;
  /** Lead paragraph displayed under the title. */
  lead?: ReactNode;
  /** Right-aligned slot for stats grids, hero imagery or CTAs. */
  aside?: ReactNode;
  /** Optional inline children rendered under the lead (CTAs, meta, etc.). */
  children?: ReactNode;
}

/**
 * Canonical page hero — the same editorial composition the homepage uses for
 * its "Cosa facciamo per voi" band, promoted to a reusable primitive so every
 * inner page (ChiSiamo, Contatti, Blog, Practice, Procedure) shares the
 * identical micro-typography: gold rule + uppercase tracked eyebrow,
 * `serif-display` title, muted lead paragraph.
 *
 * Placement: it always sits at the top of the page on a
 * `bg-surface-container-low border-b hairline` band so the transition to the
 * next section feels consistent across the whole site.
 */
export const PageHero = ({
  eyebrow,
  eyebrowSuffix,
  title,
  lead,
  aside,
  children,
}: Props) => {
  return (
    <section className="relative bg-surface-container-low border-b hairline overflow-hidden">
      <div className="relative editorial-container pt-4 sm:pt-6 lg:pt-10 pb-12 sm:pb-16 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-end">
          <div className={aside ? "lg:col-span-7" : "lg:col-span-9 max-w-4xl"}>
            <Reveal>
              <p className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                <span aria-hidden className="w-8 h-px bg-gold" />
                <span>{eyebrow}</span>
                {eyebrowSuffix && (
                  <>
                    <span aria-hidden className="w-3 h-px bg-gold/50" />
                    <span className="text-primary/70">{eyebrowSuffix}</span>
                  </>
                )}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-5 sm:mt-8 serif-display text-display-2xl text-primary text-balance leading-[1.06]">
                {title}
              </h1>
            </Reveal>

            {lead && (
              <Reveal delay={220}>
                <p className="mt-5 sm:mt-8 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                  {lead}
                </p>
              </Reveal>
            )}

            {children && (
              <Reveal delay={300}>
                <div className="mt-7 sm:mt-10">{children}</div>
              </Reveal>
            )}
          </div>

          {aside && (
            <Reveal delay={200} className="lg:col-span-5">
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};