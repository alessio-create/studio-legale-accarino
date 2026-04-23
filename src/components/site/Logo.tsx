import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.svg";
import logoFullInverted from "@/assets/logo-full-inverted.svg";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link
    to="/"
    className="flex items-center gap-3 group"
    aria-label="Studio Legale Accarino — Home"
  >
    <img
      src={inverted ? logoFullInverted : logoFull}
      alt="Studio Legale Accarino"
      className="h-10 w-auto"
      width={119}
      height={91}
    />
  </Link>
);
