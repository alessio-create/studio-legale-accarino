import { Link } from "react-router-dom";

/**
 * Editorial wordmark placeholder for Studio Legale Accarino.
 * Pure type-only lockup: monogram tile + serif name + uppercase tagline.
 * Easy to swap with a real SVG logo later.
 */
export const Logo = ({ inverted = false }: { inverted?: boolean }) => {
  const nameColor = inverted ? "text-background" : "text-primary";
  const tagColor = inverted ? "text-background/70" : "text-muted-foreground";
  const tileBorder = inverted
    ? "border-background/30 text-background"
    : "border-primary/20 text-primary";

  return (
    <Link
      to="/"
      className="group flex items-center gap-3 select-none"
      aria-label="Studio Legale Accarino — Home"
    >
      <span
        aria-hidden="true"
        className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 border transition-colors ${tileBorder}`}
      >
        <span className="font-serif text-xl sm:text-[22px] leading-none -mt-0.5">
          A
        </span>
        <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-3 h-px bg-gold" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[16px] sm:text-[18px] tracking-[-0.01em] transition-colors ${nameColor}`}
        >
          Studio Legale <span className="italic">Accarino</span>
        </span>
        <span
          className={`mt-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.28em] transition-colors ${tagColor}`}
        >
          Salerno · Est. 1974
        </span>
      </span>
    </Link>
  );
};
