import { ReactNode, useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { useInView } from "@/hooks/use-in-view";

/**
 * Editorial "Il contesto / A chi ci rivolgiamo" section with:
 *  - subtle parallax on the intro column (translates against scroll)
 *  - staggered reveal of the bullet list
 *  - animated gold rule that draws on the aside
 *  - per-bullet check-in micro animation with a hairline that extends on hover
 * Respects prefers-reduced-motion via useInView.
 */
export function PracticeIntroSection({
  intro,
  whoFor,
}: {
  intro: ReactNode;
  whoFor: string[];
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const { ref: asideRef, inView: asideInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (below) → 0 (centered) → 1 (above)
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / vh;
      const clamped = Math.max(-1, Math.min(1, progress));
      setOffset(clamped * 28); // px
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative editorial-container py-20 lg:py-28 grid lg:grid-cols-12 gap-16"
    >
      <div
        className="lg:col-span-7 will-change-transform"
        style={{ transform: `translate3d(0, ${-offset * 0.6}px, 0)` }}
      >
        <SectionHeader
          eyebrow="Il contesto"
          title="Una materia di confine, dove conta la strategia."
          compact
        />
        <Reveal delay={120}>
          <div className="mt-8 max-w-2xl">
            <div className="font-serif text-[1.35rem] lg:text-[1.5rem] leading-[1.55] text-primary text-pretty">
              {intro}
            </div>
          </div>
        </Reveal>
      </div>

      <aside
        ref={asideRef}
        className="lg:col-span-5 will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.4}px, 0)` }}
      >
        <div className="relative pl-8 py-2">
          {/* Animated gold rule that draws top-down on enter */}
          <span
            aria-hidden
            className="absolute left-0 top-0 w-[2px] bg-gold origin-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{
              height: "100%",
              transform: asideInView ? "scaleY(1)" : "scaleY(0)",
            }}
          />
          <Reveal delay={80}>
            <p className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-5">
              <span aria-hidden className="h-px w-6 bg-gold/60" />
              A chi ci rivolgiamo
            </p>
            <h3 className="sr-only">A chi ci rivolgiamo</h3>
          </Reveal>
          <ul className="space-y-3.5">
            {whoFor.map((w, i) => (
              <Reveal key={w} delay={180 + i * 110}>
                <li className="group flex items-start gap-3 text-[15px] text-muted-foreground">
                  <span
                    aria-hidden
                    className="mt-1.5 flex-shrink-0 inline-flex items-center justify-center w-4 h-4 rounded-full bg-gold/0 transition-all duration-300 group-hover:bg-gold/15"
                  >
                    <Check
                      className="w-4 h-4 text-gold-deep transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                  </span>
                  <span className="relative leading-relaxed">
                    {w}
                    <span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-px bg-gold/60 w-0 transition-[width] duration-500 ease-out group-hover:w-12"
                    />
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}