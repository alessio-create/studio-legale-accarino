import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** When true, renders the title at the slightly smaller display-lg scale. */
  compact?: boolean;
}

/**
 * Canonical in-page section header — matches the homepage
 * "Cosa facciamo per voi" composition exactly: a gold rule + uppercase
 * tracked eyebrow, then a serif-display title, then a muted lead paragraph.
 * Used everywhere inside long-form pages so all section starts share the
 * same micro-typography.
 */
export const SectionHeader = ({
  eyebrow,
  title,
  intro,
  align = "left",
  compact = false,
}: Props) => {
  const titleSize = compact ? "text-display-lg" : "text-display-xl";
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold ${align === "center" ? "justify-center" : ""}`}
        >
          <span aria-hidden className="w-8 h-px bg-gold" />
          <span>{eyebrow}</span>
        </p>
      )}
      <h2
        className={`mt-6 serif-display ${titleSize} text-primary text-balance leading-[1.05]`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg text-muted-foreground leading-relaxed text-pretty ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
};
