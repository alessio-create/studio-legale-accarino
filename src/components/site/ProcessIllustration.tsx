import { useInView } from "@/hooks/use-in-view";

/**
 * Premium line-art illustrations for the 4 process steps.
 * Each SVG is drawn on-scroll via stroke-dashoffset.
 *
 * Variants:
 *  - "compass"  : analysis / inquadramento
 *  - "blueprint": strategy / strategia
 *  - "scales"   : action / azione legale
 *  - "trophy"   : outcome / esito
 */
export type ProcessIllustrationVariant =
  | "compass"
  | "blueprint"
  | "scales"
  | "trophy";

const STROKE = "hsl(var(--gold))";

export function ProcessIllustration({
  variant,
  index,
}: {
  variant: ProcessIllustrationVariant;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const baseDelay = index * 120;

  const common = {
    fill: "none" as const,
    stroke: STROKE,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const draw = (delay = 0) =>
    (inView
      ? {
          className: "animate-draw-line",
          style: { animationDelay: `${baseDelay + delay}ms` },
        }
      : {
          style: {
            strokeDasharray: 240,
            strokeDashoffset: 240,
          } as React.CSSProperties,
        }) as { className?: string; style?: React.CSSProperties };

  return (
    <div
      ref={ref}
      className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center"
      aria-hidden
    >
      {/* Soft gold halo */}
      <span
        className="absolute inset-0 rounded-full bg-gold/10 blur-xl animate-pulse-soft"
        style={{ animationDelay: `${baseDelay}ms` }}
      />
      <svg
        viewBox="0 0 64 64"
        className="relative w-full h-full"
        {...common}
      >
        {variant === "compass" && (
          <>
            <circle cx="32" cy="32" r="22" {...common} {...draw(0)} />
            <circle cx="32" cy="32" r="14" {...common} {...draw(160)} />
            <path d="M32 14 L36 32 L32 50 L28 32 Z" {...common} {...draw(320)} />
            <circle cx="32" cy="32" r="2" fill={STROKE} stroke="none" />
          </>
        )}
        {variant === "blueprint" && (
          <>
            <rect x="10" y="10" width="44" height="44" {...common} {...draw(0)} />
            <path d="M10 26 H54" {...common} {...draw(160)} />
            <path d="M26 10 V54" {...common} {...draw(220)} />
            <path d="M40 26 V54" {...common} {...draw(280)} />
            <path d="M26 40 H40" {...common} {...draw(340)} />
            <circle cx="40" cy="40" r="2" fill={STROKE} stroke="none" />
          </>
        )}
        {variant === "scales" && (
          <>
            <path d="M32 12 V52" {...common} {...draw(0)} />
            <path d="M14 22 H50" {...common} {...draw(120)} />
            <path d="M14 22 L8 36 H20 Z" {...common} {...draw(240)} />
            <path d="M50 22 L44 36 H56 Z" {...common} {...draw(320)} />
            <path d="M24 52 H40" {...common} {...draw(420)} />
          </>
        )}
        {variant === "trophy" && (
          <>
            <path
              d="M22 14 H42 V28 C42 36 38 40 32 40 C26 40 22 36 22 28 Z"
              {...common}
              {...draw(0)}
            />
            <path d="M22 18 H14 C14 26 18 30 24 30" {...common} {...draw(180)} />
            <path d="M42 18 H50 C50 26 46 30 40 30" {...common} {...draw(240)} />
            <path d="M28 40 V46 H36 V40" {...common} {...draw(360)} />
            <path d="M22 50 H42" {...common} {...draw(440)} />
          </>
        )}
      </svg>
    </div>
  );
}

export const PROCESS_VARIANTS: ProcessIllustrationVariant[] = [
  "compass",
  "blueprint",
  "scales",
  "trophy",
];
