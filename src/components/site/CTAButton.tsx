import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "gold";
  className?: string;
}

/**
 * Unified site CTA — same visual language and hover behaviour as the
 * navbar CTA: solid editorial fill, label in tracked uppercase, and a
 * single arrow that glides forward on hover. No shimmer, no corner
 * ornaments, no underlines — coherent across every page.
 */
export const CTAButton = ({
  to,
  children,
  variant = "primary",
  className = "",
}: Props) => {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300";

  const styles = {
    primary:
      "bg-primary text-primary-foreground shadow-inset-gold hover:bg-primary-glow",
    gold:
      "bg-gold text-primary hover:bg-gold-deep hover:text-primary-foreground",
    ghost:
      "bg-transparent text-primary border border-primary/25 hover:border-primary",
  }[variant];

  const arrowColor =
    variant === "primary"
      ? "text-gold"
      : variant === "gold"
      ? "text-primary"
      : "text-gold-deep";

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <ArrowRight
        className={`w-3.5 h-3.5 ${arrowColor} transition-transform duration-300 group-hover:translate-x-1`}
        strokeWidth={2.25}
      />
    </Link>
  );
};
