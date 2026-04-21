import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem { q: string; a: string }

export const FAQ = ({ items }: { items: FAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y hairline border-y hairline">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className={`relative transition-colors ${isOpen ? "bg-surface-container-low" : ""}`}
          >
            {isOpen && <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold" />}
            <button
              className="w-full flex items-center justify-between gap-6 py-7 px-6 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg md:text-xl text-primary leading-snug">{it.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-gold-deep flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-8 text-muted-foreground leading-relaxed max-w-3xl">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
