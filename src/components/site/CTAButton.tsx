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
 * Editorial CTA — engraved gold corner brackets that reveal on hover,
 * a sliding gold underline beneath the label, and a shifted arrow.
 * The whole button feels stamped rather than digital.
 */
export const CTAButton = ({
  to,
  children,
  variant = "primary",
  className = "",
}: Props) => {
  const base =
    "group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-label-sm font-semibold uppercase tracking-[0.16em] overflow-hidden transition-colors duration-500";

  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:text-gold shadow-inset-gold",
    gold:
      "bg-gold text-primary hover:bg-gold-deep hover:text-primary-foreground",
    ghost:
      "border border-primary/25 text-primary hover:text-gold-deep hover:border-gold",
  }[variant];

  // Bracket / underline tones tuned per variant.
  const accent =
    variant === "gold"
      ? "border-primary/40 group-hover:border-primary"
      : "border-gold/0 group-hover:border-gold";
  const underline =
    variant === "gold" ? "bg-primary" : "bg-gold";

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {/* Corner brackets — engraved feel on hover */}
      <span
        aria-hidden
        className={`pointer-events-none absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l ${accent} transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r ${accent} transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l ${accent} transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r ${accent} transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0`}
      />

      {/* Label */}
      <span className="relative z-10 inline-flex items-center gap-3">
        <span className="relative">
          {children}
          {/* Sliding gold underline */}
          <span
            aria-hidden
            className={`absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${underline}`}
          />
        </span>
        <ArrowRight
          className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5"
          strokeWidth={1.75}
        />
      </span>
    </Link>
  );
};
