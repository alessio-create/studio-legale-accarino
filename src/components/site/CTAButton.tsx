import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "gold";
  className?: string;
}

export const CTAButton = ({ to, children, variant = "primary", className = "" }: Props) => {
  const base =
    "group inline-flex items-center justify-center gap-3 px-8 py-4 text-label-sm font-semibold uppercase tracking-[0.16em] transition-all";
  const styles = {
    primary:
      "bg-primary text-primary-foreground shadow-inset-gold hover:bg-primary-glow",
    gold:
      "bg-gold text-primary hover:bg-gold-deep hover:text-primary-foreground",
    ghost:
      "border border-primary/30 text-primary hover:border-gold hover:text-gold-deep",
  }[variant];
  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
};
