import { Link } from "react-router-dom";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface Props {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  topics?: string[];
}

export const PracticeCard = ({ number, title, description, icon: Icon, href, topics }: Props) => (
  <Link to={href} className="practice-card group flex flex-col h-full">
    <div className="flex items-start justify-between mb-10">
      <span className="text-[11px] tracking-[0.2em] uppercase text-gold-deep font-semibold">
        {number}
      </span>
      <Icon className="w-7 h-7 text-gold-deep stroke-[1.25]" />
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
