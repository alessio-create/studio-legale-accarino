import { Eyebrow } from "./Eyebrow";

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ eyebrow, title, intro, align = "left" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="mt-6 serif-display text-display-xl text-balance">{title}</h2>
    {intro && (
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty max-w-2xl">
        {intro}
      </p>
    )}
  </div>
);
