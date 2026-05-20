import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-accarino-full.png";
import logoFullInverted from "@/assets/logo-accarino-full-inverted.png";

/**
 * Wordmark placeholder for Studio Legale Accarino.
 * Clean sans-serif lockup inspired by editorial law-firm sites.
 * Easy to swap with a real SVG logo later.
 */
export const Logo = ({ inverted = false }: { inverted?: boolean }) => {
  return (
    <Link
      to="/"
      className="group flex items-center select-none"
      aria-label="Studio Legale Accarino — Home"
    >
      <img
        src={inverted ? logoFullInverted : logoFull}
        alt="Studio Legale Accarino"
        className="h-10 sm:h-11 w-auto flex-shrink-0"
      />
    </Link>
  );
};
