import { Fragment, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { procedures } from "@/data/procedures";
import { blogArticles } from "@/data/blog";

/**
 * Static label map for fixed top-level routes. Slug-based routes
 * (procedure pages, blog articles) are resolved against their data
 * registries so the breadcrumb always shows the human title.
 */
const STATIC_LABELS: Record<string, string> = {
  "chi-siamo": "Lo Studio",
  contatti: "Contatti",
  blog: "Blog",
  procedure: "Procedure",
  espropriazioni: "Espropriazioni",
  "appalti-pubblici": "Appalti Pubblici",
  "concorsi-pubblici": "Concorsi Pubblici",
  "urbanistica-edilizia": "Urbanistica ed Edilizia",
};

const labelForSegment = (segment: string, fullPath: string): string => {
  if (STATIC_LABELS[segment]) return STATIC_LABELS[segment];
  // Procedure slug at the root (e.g. /pareri-legittimita-...)
  const proc = procedures.find((p) => p.slug === segment);
  if (proc) return proc.title;
  // Blog article: /blog/:slug
  if (fullPath.startsWith("/blog/")) {
    const article = blogArticles.find((a) => a.slug === segment);
    if (article) return article.title;
  }
  // Fallback: prettify the slug
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

/**
 * Sticky breadcrumb bar shown on every inner page (hidden on the
 * home route). Provides a one-click path back to the homepage and
 * each ancestor route, plus a non-interactive label for the current
 * page. JSON-LD-friendly markup (`nav` + `ol`) for accessibility.
 */
export const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const segments = useMemo(() => pathname.split("/").filter(Boolean), [pathname]);

  // Hide on the home page — there is nothing to navigate back to.
  if (segments.length === 0) return null;

  // Build [{ href, label }] including Home and synthetic /blog ancestor
  // for /blog/:slug so users can jump back to the blog index.
  const crumbs: { href: string; label: string }[] = [];
  let acc = "";
  segments.forEach((seg, i) => {
    acc += `/${seg}`;
    crumbs.push({ href: acc, label: labelForSegment(seg, pathname) });
  });

  const lastIndex = crumbs.length - 1;

  return (
    <nav aria-label="Breadcrumb" className="bg-surface-container-low">
      <ol className="editorial-container flex items-center gap-2 pt-8 sm:pt-10 pb-2 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium overflow-x-auto whitespace-nowrap">
        <li className="flex items-center gap-2 flex-shrink-0">
          <Link
            to="/"
            aria-label="Home"
            className="flex items-center gap-2 text-muted-foreground hover:text-gold-deep transition-colors"
          >
            <Home className="w-3.5 h-3.5" strokeWidth={1.75} />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {crumbs.map((c, i) => (
          <Fragment key={c.href}>
            <li aria-hidden className="flex-shrink-0 text-primary/30">
              <ChevronRight className="w-3 h-3" strokeWidth={2} />
            </li>
            <li className="flex-shrink min-w-0">
              {i === lastIndex ? (
                <span
                  aria-current="page"
                  className="text-gold-deep truncate inline-block max-w-[60vw] sm:max-w-none align-bottom"
                  title={c.label}
                >
                  {c.label}
                </span>
              ) : (
                <Link
                  to={c.href}
                  className="text-muted-foreground hover:text-gold-deep transition-colors truncate inline-block max-w-[40vw] sm:max-w-none align-bottom"
                  title={c.label}
                >
                  {c.label}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};
