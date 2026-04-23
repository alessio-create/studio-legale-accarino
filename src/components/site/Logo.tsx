import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.svg";
import logoFullInverted from "@/assets/logo-full-inverted.svg";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link
    to="/"
    className="relative flex items-center gap-3 group"
    aria-label="Studio Legale Accarino — Home"
  >
    {/* Both logos stacked; cross-fade based on `inverted` prop */}
    <span className="relative block h-10 w-[44px]">
      <img
        src={logoFullInverted}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-10 w-auto transition-opacity duration-500 ease-out ${
          inverted ? "opacity-100" : "opacity-0"
        }`}
        width={119}
        height={91}
      />
      <img
        src={logoFull}
        alt="Studio Legale Accarino"
        className={`absolute inset-0 h-10 w-auto transition-opacity duration-500 ease-out ${
          inverted ? "opacity-0" : "opacity-100"
        }`}
        width={119}
        height={91}
      />
    </span>
  </Link>
);
