import { Link } from "react-router-dom";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface Props {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  href: string;
  topics?: string[];
  image?: string;
  imageAlt?: string;
}

export const PracticeCard = ({ number, title, description, href, topics, image, imageAlt }: Props) => (
  <Link to={href} className="practice-card group flex flex-col h-full">
    {image && (
      <div className="practice-card-media relative -mx-10 -mt-10 mb-8 overflow-hidden">
        <img
          src={image}
          alt={imageAlt ?? title}
          loading="lazy"
          width={1024}
          height={640}
          className="w-full h-44 lg:h-48 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        {/* Tonal wash to unify the image with the card surface */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.05) 45%, hsl(var(--card) / 0.0) 100%)",
          }}
        />
        {/* Bottom fade into the card */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--card) / 0) 0%, hsl(var(--card)) 100%)",
          }}
        />
        {/* Gold hairline accent */}
        <span
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-px bg-gold/40 transition-colors duration-500 group-hover:bg-gold"
        />
      </div>
    )}

    <div className="mb-10">
      <span className="text-[11px] tracking-[0.2em] uppercase text-gold-deep font-semibold">
        {number}
      </span>
    </div>

    <h3 className="font-serif text-2xl text-primary leading-tight mb-4">{title}</h3>
    <p className="text-muted-foreground text-[15px] leading-relaxed mb-8 flex-1">{description}</p>

    {topics && (
      <ul className="space-y-2 mb-8 border-t hairline pt-6">
        {topics.map((t) => (
          <li key={t} className="text-xs text-muted-foreground flex items-center gap-2">
            <span className="w-1 h-1 bg-gold" />
            {t}
          </li>
        ))}
      </ul>
    )}

    <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-primary font-semibold">
      Approfondisci
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-gold-deep" />
    </div>
  </Link>
);
