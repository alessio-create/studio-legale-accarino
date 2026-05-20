import { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";

interface Props {
  sections: { id: string; title: string }[];
}

/**
 * Sticky table of contents for mobile / tablet (hidden at lg+ where the
 * sidebar TOC takes over). Collapsible — the active section title is
 * always visible as a "current chapter" indicator while scrolling.
 */
export const MobileTOC = ({ sections }: Props) => {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  if (sections.length === 0) return null;

  const activeIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === active),
  );
  const activeSection = sections[activeIndex];

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    event.stopPropagation();
    setOpen(false);

    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight =
      document.querySelector<HTMLElement>("header")?.getBoundingClientRect().height ?? 0;
    const procedureBarHeight =
      document.querySelector<HTMLElement>("[data-procedure-trigger-bar]")?.getBoundingClientRect().height ?? 0;
    const mobileTocHeight =
      document.querySelector<HTMLElement>("[data-mobile-procedure-toc]")?.getBoundingClientRect().height ?? 0;
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight - procedureBarHeight - mobileTocHeight - 20;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, options?: { duration?: number }) => void } }).__lenis;

    window.history.pushState(null, "", `#${id}`);
    if (lenis) lenis.scrollTo(top, { duration: 1.05 });
    else window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div data-mobile-procedure-toc className="lg:hidden sticky top-20 z-30 -mx-4 sm:-mx-6 mb-8 bg-background/95 backdrop-blur-md border-y hairline">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-toc-list"
        className="flex items-center gap-3 w-full px-4 sm:px-6 py-3 text-left"
      >
        <List className="w-4 h-4 text-gold-deep flex-shrink-0" strokeWidth={1.75} />
        <span className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold tabular-nums">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(sections.length).padStart(2, "0")}
        </span>
        <span aria-hidden className="h-3 w-px bg-border" />
        <span className="font-serif text-sm text-primary truncate flex-1">
          {activeSection?.title ?? "Indice"}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.75}
        />
      </button>

      {open && (
        <ol
          id="mobile-toc-list"
          className="px-4 sm:px-6 pb-4 pt-1 space-y-3 border-t hairline animate-mega-in origin-top"
        >
          {sections.map((s, i) => {
            const isActive = s.id === active;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(event) => scrollToSection(event, s.id)}
                  className={`flex items-start gap-3 text-sm leading-snug transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`mt-2 h-px flex-shrink-0 transition-all ${
                      isActive ? "w-6 bg-gold" : "w-3 bg-primary/20"
                    }`}
                  />
                  <span className="font-serif">
                    <span className="tabular-nums text-[10px] uppercase tracking-[0.22em] text-gold-deep block mb-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};