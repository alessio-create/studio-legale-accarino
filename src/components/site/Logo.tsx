import { Link } from "react-router-dom";
import logoHorizontal from "@/assets/logo-horizontal.svg";
import logoHorizontalInverted from "@/assets/logo-horizontal-inverted.svg";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link
    to="/"
    className="relative flex items-center gap-3 group"
    aria-label="Studio Legale Accarino — Home"
  >
    {/* Both horizontal logos stacked; cross-fade based on `inverted` prop */}
    <span className="relative block h-11 w-[195px] sm:h-12 sm:w-[210px]">
      <img
        src={logoHorizontalInverted}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-auto transition-opacity duration-500 ease-out ${
          inverted ? "opacity-100" : "opacity-0"
        }`}
        width={220}
        height={50}
      />
      <img
        src={logoHorizontal}
        alt="Studio Legale Accarino"
        className={`absolute inset-0 h-full w-auto transition-opacity duration-500 ease-out ${
          inverted ? "opacity-0" : "opacity-100"
        }`}
        width={220}
        height={50}
      />
    </span>
  </Link>
);
