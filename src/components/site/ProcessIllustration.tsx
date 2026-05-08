import { useInView } from "@/hooks/use-in-view";

/**
 * Method-section emblems: bespoke heraldic glyphs hand-drawn as
 * hairline SVG marks, centered inside a guilloché medallion with
 * gold corner brackets and a soft inner ring.
 *
 * Each glyph evokes a phase of the legal process:
 *   - analysis  → engraved compass rose
 *   - strategy  → architect square + plumb line
 *   - action    → scales of justice with serif beam
 *   - outcome   → laurel wreath with wax-seal star
 *
 * The marks are intentionally drawn from primitives (no off-the-shelf
 * icons) so the line weight, terminals, and proportions match the
 * editorial typography of the rest of the site.
 */
export type ProcessIllustrationVariant =
  | "compass"
  | "blueprint"
  | "scales"
  | "laurel";

const STROKE = 1.1;

const Glyph = ({ variant }: { variant: ProcessIllustrationVariant }) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: STROKE,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (variant) {
    case "compass":
      // Engraved compass rose — outer ring, cardinal ticks, four-point star.
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
          <g {...common}>
            <circle cx="32" cy="32" r="22" />
            <circle cx="32" cy="32" r="15" opacity="0.45" />
            {/* Cardinal ticks */}
            <path d="M32 6 V12 M32 52 V58 M6 32 H12 M52 32 H58" />
            {/* Four-point star */}
            <path d="M32 12 L36 32 L32 52 L28 32 Z" fill="currentColor" fillOpacity="0.12" />
            <path d="M12 32 L32 28 L52 32 L32 36 Z" />
            <circle cx="32" cy="32" r="1.6" fill="currentColor" />
            {/* Diagonal hairlines */}
            <path d="M18 18 L24 24 M46 46 L40 40 M46 18 L40 24 M18 46 L24 40" opacity="0.35" />
          </g>
        </svg>
      );

    case "blueprint":
      // Architect's set square + plumb line — strategy & drafting.
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
          <g {...common}>
            {/* Set square (right triangle) */}
            <path d="M14 14 H50 L14 50 Z" />
            {/* Inner triangle (cut-out feel) */}
            <path d="M20 20 H40 L20 40 Z" opacity="0.4" />
            {/* Plumb line */}
            <path d="M32 6 V20" />
            <circle cx="32" cy="24" r="2.2" fill="currentColor" />
            {/* Tick marks along hypotenuse */}
            <path d="M22 42 L24 44 M28 36 L30 38 M34 30 L36 32" opacity="0.55" />
          </g>
        </svg>
      );

    case "scales":
      // Bilancia — central column, serif crossbeam, two pans on chains.
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
          <g {...common}>
            {/* Base + column */}
            <path d="M22 56 H42 M32 56 V18" />
            <path d="M28 56 H36" />
            {/* Crown finial */}
            <circle cx="32" cy="14" r="2.2" fill="currentColor" />
            {/* Crossbeam with serif terminals */}
            <path d="M12 20 H52" />
            <path d="M12 17 V23 M52 17 V23" />
            {/* Chains */}
            <path d="M16 20 L12 32 M16 20 L20 32" opacity="0.6" />
            <path d="M48 20 L44 32 M48 20 L52 32" opacity="0.6" />
            {/* Pans (shallow arcs) */}
            <path d="M8 32 Q16 40 24 32" />
            <path d="M40 32 Q48 40 56 32" />
          </g>
        </svg>
      );

    case "laurel":
      // Laurel wreath cradling a wax-seal star — outcome / honors.
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
          <g {...common}>
            {/* Left branch */}
            <path d="M16 50 Q8 32 18 14" />
            <path d="M14 42 Q10 40 8 36" />
            <path d="M14 34 Q10 32 8 28" />
            <path d="M15 26 Q11 24 10 20" />
            <path d="M17 20 Q14 17 14 13" />
            {/* Right branch */}
            <path d="M48 50 Q56 32 46 14" />
            <path d="M50 42 Q54 40 56 36" />
            <path d="M50 34 Q54 32 56 28" />
            <path d="M49 26 Q53 24 54 20" />
            <path d="M47 20 Q50 17 50 13" />
            {/* Tie ribbon */}
            <path d="M28 52 Q32 48 36 52" />
            {/* Wax-seal medallion */}
            <circle cx="32" cy="30" r="9" />
            {/* Star inside seal */}
            <path
              d="M32 24 L33.5 28.5 L38 28.5 L34.3 31.2 L35.7 35.5 L32 32.9 L28.3 35.5 L29.7 31.2 L26 28.5 L30.5 28.5 Z"
              fill="currentColor"
              fillOpacity="0.18"
            />
          </g>
        </svg>
      );
  }
};

export function ProcessIllustration({
  variant,
  index,
}: {
  variant: ProcessIllustrationVariant;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const baseDelay = index * 120;

  return (
    <div
      ref={ref}
      className="relative w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center"
      aria-hidden
    >
      {/* Outer hairline square — the engraved cartouche */}
      <span
        className="absolute inset-0 border hairline transition-colors duration-500"
        style={{
          borderColor: inView
            ? "hsl(var(--primary) / 0.16)"
            : "hsl(var(--primary) / 0.06)",
        }}
      />

      {/* Inner double-rule frame for the engraved feel */}
      <span
        className="absolute inset-[6px] border transition-opacity duration-700"
        style={{
          borderColor: "hsl(var(--gold) / 0.22)",
          opacity: inView ? 1 : 0,
          transitionDelay: `${baseDelay + 120}ms`,
        }}
      />

      {/* Soft gold medallion ring behind the glyph */}
      <span
        className="absolute w-[68%] h-[68%] rounded-full transition-all duration-700"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--gold) / 0.10) 0%, hsl(var(--gold) / 0.0) 70%)",
          opacity: inView ? 1 : 0,
          transitionDelay: `${baseDelay + 80}ms`,
        }}
      />

      {/* Gold corner brackets */}
      {[
        "top-0 left-0 border-t border-l",
        "top-0 right-0 border-t border-r",
        "bottom-0 left-0 border-b border-l",
        "bottom-0 right-0 border-b border-r",
      ].map((pos, i) => (
        <span
          key={pos}
          className={`absolute w-3.5 h-3.5 border-gold transition-all duration-700 ${pos}`}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.6)",
            transitionDelay: `${baseDelay + i * 90}ms`,
          }}
        />
      ))}

      {/* Centered hand-drawn glyph */}
      <div
        className="relative w-12 h-12 lg:w-14 lg:h-14 text-gold-deep transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(6px)",
          transitionDelay: `${baseDelay + 220}ms`,
        }}
      >
        <Glyph variant={variant} />
      </div>
    </div>
  );
}

export const PROCESS_VARIANTS: ProcessIllustrationVariant[] = [
  "compass",
  "blueprint",
  "scales",
  "laurel",
];
