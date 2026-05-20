import { Link } from "react-router-dom";
import monogram from "@/assets/monogram-inverted.png";
import monogramInverted from "@/assets/monogram.png";

/**
 * Wordmark placeholder for Studio Legale Accarino.
 * Clean sans-serif lockup inspired by editorial law-firm sites.
 * Easy to swap with a real SVG logo later.
 */
export const Logo = ({ inverted = false }: { inverted?: boolean }) => {
  const nameColor = inverted ? "text-background" : "text-primary";
  const subColor = inverted ? "text-background/65" : "text-muted-foreground";

  return (
    <Link
      to="/"
      className="group flex items-center gap-3 select-none"
      aria-label="Studio Legale Accarino — Home"
    >
      <img
        src={inverted ? monogramInverted : monogram}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[18px] sm:text-[20px] font-medium tracking-[-0.015em] transition-colors ${nameColor}`}
        >
          Studio Legale Accarino
        </span>
        <span
          className={`mt-1.5 text-[11px] font-normal tracking-[-0.005em] transition-colors ${subColor}`}
        >
          Avvocati — Salerno
        </span>
      </span>
    </Link>
  );
};
