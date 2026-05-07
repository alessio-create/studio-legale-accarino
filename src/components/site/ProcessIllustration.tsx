import { Compass, Ruler, Scale, Award, type LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

/**
 * Method-section glyphs: a single Lucide line icon centered inside a
 * hairline editorial frame with animated gold corner brackets.
 *
 * Variants map to the four method phases: analysis · strategy · action · outcome.
 */
export type ProcessIllustrationVariant =
  | "compass"
  | "blueprint"
  | "scales"
  | "trophy";

const ICONS: Record<ProcessIllustrationVariant, LucideIcon> = {
  compass: Compass,
  blueprint: Ruler,
  scales: Scale,
  trophy: Award,
};

export function ProcessIllustration({
  variant,
  index,
}: {
  variant: ProcessIllustrationVariant;
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Icon = ICONS[variant];
  const baseDelay = index * 120;

  return (
    <div
      ref={ref}
      className="relative w-20 h-20 lg:w-[88px] lg:h-[88px] flex items-center justify-center"
      aria-hidden
    >
      {/* Soft gold halo */}
      <span
        className="absolute inset-0 rounded-full bg-gold/10 blur-xl animate-pulse-soft"
        style={{ animationDelay: `${baseDelay}ms` }}
      />

      {/* Hairline square frame */}
      <span
        className="absolute inset-0 border hairline transition-colors duration-500"
        style={{
          borderColor: inView
            ? "hsl(var(--primary) / 0.18)"
            : "hsl(var(--primary) / 0.08)",
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
          className={`absolute w-3 h-3 border-gold transition-all duration-700 ${pos}`}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "scale(1)" : "scale(0.6)",
            transitionDelay: `${baseDelay + i * 90}ms`,
          }}
        />
      ))}

      {/* Centered glyph */}
      <Icon
        className="relative text-gold-deep transition-all duration-700"
        strokeWidth={1.25}
        size={32}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(6px)",
          transitionDelay: `${baseDelay + 200}ms`,
        }}
      />
    </div>
  );
}

export const PROCESS_VARIANTS: ProcessIllustrationVariant[] = [
  "compass",
  "blueprint",
  "scales",
  "trophy",
];
