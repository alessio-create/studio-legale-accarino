import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.svg";
import logoFullInverted from "@/assets/logo-full-inverted.svg";
import logoMonogram from "@/assets/logo-monogram.svg";
import logoMonogramInverted from "@/assets/logo-monogram-inverted.svg";

/**
 * Brand mark for navigation.
 * - Mobile: monogram only (square, ~48px) for compact presence.
 * - Desktop: full lockup (monogram + wordmark) at a larger size for more brand weight.
 * - Cross-fades between standard and inverted variants based on `inverted`.
 */
export const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link
    to="/"
    className="relative flex items-center gap-3 group"
    aria-label="Studio Legale Accarino — Home"
  >
    {/* Mobile: monogram (45x45) — more brand presence at small sizes than a tiny lockup */}
    <span className="relative block h-11 w-11 lg:hidden">
      <img
        src={logoMonogramInverted}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-11 w-11 transition-opacity duration-500 ease-out ${
          inverted ? "opacity-100" : "opacity-0"
        }`}
        width={45}
        height={45}
      />
      <img
        src={logoMonogram}
        alt="Studio Legale Accarino"
        className={`absolute inset-0 h-11 w-11 transition-opacity duration-500 ease-out ${
          inverted ? "opacity-0" : "opacity-100"
        }`}
        width={45}
        height={45}
      />
    </span>

    {/* Desktop: full lockup, enlarged from h-10 to h-14 for more weight */}
    <span className="relative hidden lg:block h-14 w-[64px]">
      <img
        src={logoFullInverted}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-14 w-auto transition-opacity duration-500 ease-out ${
          inverted ? "opacity-100" : "opacity-0"
        }`}
        width={119}
        height={91}
      />
      <img
        src={logoFull}
        alt="Studio Legale Accarino"
        className={`absolute inset-0 h-14 w-auto transition-opacity duration-500 ease-out ${
          inverted ? "opacity-0" : "opacity-100"
        }`}
        width={119}
        height={91}
      />
    </span>
  </Link>
);
