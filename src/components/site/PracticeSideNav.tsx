import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export type SideNavItem = {
  id: string;
  label: string;
  /** Short kicker number, e.g. "01" */
  kicker?: string;
  /** Optional nested anchors (procedures inside a family). */
  children?: SideNavItem[];
};

type Props = {
  items: SideNavItem[];
  /** Eyebrow label rendered above the list. */
  eyebrow?: string;
  className?: string;
};

/**
 * Vertical, sticky in-page navigation for jumping between practice families
 * and procedure subsections. Highlights the active anchor via scroll-spy.
 * Hidden on small screens — the page content already lists the same items.
 */
export function PracticeSideNav({ items, eyebrow = "In questa sezione", className }: Props) {
  const allIds = items.flatMap((i) => [i.id, ...(i.children?.map((c) => c.id) ?? [])]);
  const active = useActiveSection(allIds);

  const handleJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96; // navbar offset
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      aria-label="Indice delle aree di pratica"
      className={cn(
        "hidden lg:block sticky top-28 self-start",
        className
      )}
    >
      <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-semibold mb-6">
        {eyebrow}
      </p>
      <ul className="space-y-1 border-l hairline">
        {items.map((item) => {
          const isActive =
            active === item.id ||
            (item.children?.some((c) => c.id === active) ?? false);
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleJump(e, item.id)}
                className={cn(
                  "group relative flex items-baseline gap-3 pl-5 pr-3 py-2.5 -ml-px border-l-2 transition-colors",
                  isActive
                    ? "border-gold text-primary"
                    : "border-transparent text-muted-foreground hover:text-primary hover:border-gold/40"
                )}
              >
                {item.kicker && (
                  <span
                    className={cn(
                      "text-[10px] tabular-nums tracking-[0.18em] flex-shrink-0 transition-colors",
                      isActive ? "text-gold-deep" : "text-muted-foreground/70"
                    )}
                  >
                    {item.kicker}
                  </span>
                )}
                <span
                  className={cn(
                    "font-serif text-[15px] leading-snug",
                    isActive && "text-primary"
                  )}
                >
                  {item.label}
                </span>
              </a>
              {item.children && isActive && (
                <ul className="ml-5 mt-1 mb-2 space-y-0.5 border-l hairline">
                  {item.children.map((child) => {
                    const childActive = active === child.id;
                    return (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          onClick={(e) => handleJump(e, child.id)}
                          className={cn(
                            "block pl-4 pr-2 py-1.5 -ml-px border-l-2 text-xs transition-colors",
                            childActive
                              ? "border-gold-deep text-primary"
                              : "border-transparent text-muted-foreground hover:text-primary hover:border-gold/40"
                          )}
                        >
                          {child.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}