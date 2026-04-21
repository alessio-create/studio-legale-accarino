import { Link } from "react-router-dom";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => (
  <Link to="/" className="flex items-center gap-3 group" aria-label="Studio Legale Accarino — Home">
    <span className="relative flex items-center justify-center w-10 h-10 border border-gold/70">
      <span
        className={`font-serif text-lg font-semibold ${inverted ? "text-background" : "text-primary"}`}
      >
        A
      </span>
      <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-gold" />
      <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-gold" />
    </span>
    <span className="flex flex-col leading-none">
      <span
        className={`font-serif text-base font-semibold tracking-tight ${
          inverted ? "text-background" : "text-primary"
        }`}
      >
        Studio Accarino
      </span>
      <span
        className={`font-sans text-[10px] tracking-[0.2em] uppercase mt-1 ${
          inverted ? "text-background/60" : "text-muted-foreground"
        }`}
      >
        Avvocati · dal 1974
      </span>
    </span>
  </Link>
);
