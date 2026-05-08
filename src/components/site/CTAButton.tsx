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
 * Editorial CTA — solid premium fill (matches navbar CTA), with two
 * cinematic effects on hover:
 *   1. A diagonal gold shimmer sweeps across the surface.
 *   2. The arrow glides forward, leaves the button, and a fresh arrow
 *      slides in from the left — a continuous "forward motion" cue.
 * No outlines, no underlines, no corner ornaments.
 */
export const CTAButton = ({
  to,
  children,
  variant = "primary",
  className = "",
}: Props) => {
  const base =
    "group relative isolate inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] overflow-hidden transition-colors duration-500";

  const styles = {
    primary:
      "bg-primary text-primary-foreground shadow-inset-gold hover:bg-primary-glow",
    gold:
      "bg-gold text-primary hover:bg-gold-deep hover:text-primary-foreground",
    ghost:
      "bg-transparent text-primary border border-primary/25 hover:border-primary",
  }[variant];

  // Shimmer color tuned to variant.
  const shimmer =
    variant === "gold"
      ? "bg-[linear-gradient(115deg,transparent_30%,hsl(var(--primary)/0.18)_50%,transparent_70%)]"
      : "bg-[linear-gradient(115deg,transparent_30%,hsl(var(--gold)/0.35)_50%,transparent_70%)]";

  const arrowColor =
    variant === "primary"
      ? "text-gold"
      : variant === "gold"
      ? "text-primary"
      : "text-gold-deep";

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {/* Diagonal shimmer sweep */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out ${shimmer}`}
      />

      {/* Label */}
      <span className="relative z-10">{children}</span>

      {/* Twin arrows — first glides out to the right, second slides in from the left */}
      <span className="relative z-10 inline-flex items-center justify-center w-4 h-4 overflow-hidden">
        <ArrowRight
          className={`absolute w-4 h-4 ${arrowColor} transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:opacity-0`}
          strokeWidth={2.25}
        />
        <ArrowRight
          className={`absolute w-4 h-4 ${arrowColor} -translate-x-6 opacity-0 transition-all duration-500 ease-out delay-100 group-hover:translate-x-0 group-hover:opacity-100`}
          strokeWidth={2.25}
        />
      </span>
    </Link>
  );
};
