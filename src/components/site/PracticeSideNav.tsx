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
  /** Called after a side-nav anchor is activated (post-scroll). */
  onActivate?: (id: string) => void;
};

/**
 * Vertical, sticky in-page navigation for jumping between practice families
 * and procedure subsections. Highlights the active anchor via scroll-spy.
 * Hidden on small screens — the page content already lists the same items.
 */
export function PracticeSideNav({ items, eyebrow = "In questa sezione", className, onActivate }: Props) {
  const allIds = items.flatMap((i) => [i.id, ...(i.children?.map((c) => c.id) ?? [])]);
  // Tighter band so the active label flips as the family header reaches the
  // upper third of the viewport — feels more responsive while scrolling.
  const active = useActiveSection(allIds, "-20% 0px -65% 0px");

  const handleJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96; // navbar offset
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    onActivate?.(id);
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
      <ul className="relative space-y-1 border-l hairline">
        {items.map((item) => {
          const isActive =
            active === item.id ||
            (item.children?.some((c) => c.id === active) ?? false);
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleJump(e, item.id)}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative flex items-baseline gap-3 pl-5 pr-3 py-3 -ml-px transition-colors duration-300",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {/* Animated active indicator — slides into place via scaleY */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-1 bottom-1 w-[2px] origin-top transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none",
                    isActive ? "bg-gold scale-y-100" : "bg-gold/0 scale-y-0 group-hover:bg-gold/40 group-hover:scale-y-100"
                  )}
                />
                {/* Subtle wash behind the active item */}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-0 -z-0 transition-opacity duration-500",
                    isActive ? "bg-gold/[0.06] opacity-100" : "opacity-0"
                  )}
                />
                {item.kicker && (
                  <span
                    className={cn(
                      "relative text-[10px] tabular-nums tracking-[0.18em] flex-shrink-0 transition-colors duration-300",
                      isActive ? "text-gold-deep font-semibold" : "text-muted-foreground/70"
                    )}
                  >
                    {item.kicker}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-1 left-0 right-0 h-px bg-gold-deep origin-left transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </span>
                )}
                <span
                  className={cn(
                    "relative font-serif text-[15px] leading-snug transition-colors duration-300",
                    isActive && "text-primary"
                  )}
                >
                  {item.label}
                </span>
              </a>
              {item.children && (
                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none",
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="ml-5 mt-1 mb-2 space-y-0.5 border-l hairline">
                      {item.children.map((child) => {
                        const childActive = active === child.id;
                        return (
                          <li key={child.id}>
                            <a
                              href={`#${child.id}`}
                              onClick={(e) => handleJump(e, child.id)}
                              aria-current={childActive ? "true" : undefined}
                              className={cn(
                                "block pl-4 pr-2 py-1.5 -ml-px border-l-2 text-xs transition-colors duration-300",
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
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}