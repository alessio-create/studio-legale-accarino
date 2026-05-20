import { Helmet } from "react-helmet-async";

/**
 * Site-wide constants used by every page.
 * `SITE_URL` should match the production domain once published.
 * Until then, canonical URLs are still emitted as relative-aware values.
 */
const SITE_NAME = "Studio Legale Accarino";
const SITE_URL = "https://studiolegaleaccarino.it";
const DEFAULT_OG = `${SITE_URL}/og-default.jpg`; // [PLACEHOLDER] caricare immagine OG reale 1200x630

export type JsonLd = Record<string, unknown>;

export interface SeoProps {
  /** Page title — keep under 60 chars; "| Studio Legale Accarino" is appended automatically unless includeBrand=false. */
  title: string;
  /** Meta description — 140-160 chars, concrete promise, includes geo when relevant. */
  description: string;
  /** Path of the current page (e.g. "/espropriazioni"). Used for canonical + og:url. */
  path: string;
  /** Optional OG image override — should be 1200x630 absolute URL. */
  image?: string;
  /** Append "| Studio Legale Accarino" to title (default true). */
  includeBrand?: boolean;
  /** og:type — defaults to "website"; use "article" on blog posts. */
  type?: "website" | "article";
  /** Optional JSON-LD payload(s) injected as <script type="application/ld+json">. */
  jsonLd?: JsonLd | JsonLd[];
  /** Set to true on placeholder/thin pages we don't want indexed. */
  noIndex?: boolean;
}

export function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG,
  includeBrand = true,
  type = "website",
  jsonLd,
  noIndex = false,
}: SeoProps) {
  const fullTitle = includeBrand ? `${title} | ${SITE_NAME}` : title;
  const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,follow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
}

/**
 * Reusable JSON-LD builders so each page can declare structured data
 * without repeating boilerplate.
 */
export const orgJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#legalservice`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_OG,
  description:
    "Studio Legale Accarino, Salerno e Cava de' Tirreni. Diritto amministrativo dal 1975: espropriazioni, appalti pubblici, concorsi, urbanistica.",
  foundingDate: "1975",
  areaServed: ["Salerno", "Campania", "Italia"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "C.so Vittorio Emanuele 58",
      addressLocality: "Salerno",
      postalCode: "84121",
      addressRegion: "SA",
      addressCountry: "IT",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Via G. Accarino 5",
      addressLocality: "Cava de' Tirreni",
      postalCode: "84013",
      addressRegion: "SA",
      addressCountry: "IT",
    },
  ],
  telephone: "+39 089 343140",
  email: "studioassociato@accarino.it",
  priceRange: "€€",
  sameAs: [],
};

/** Sitewide WebSite identity — emitted once via index.html. */
export const websiteJsonLd: JsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "it-IT",
  publisher: { "@id": `${SITE_URL}/#legalservice` },
};

/** BreadcrumbList JSON-LD — strong signal for Google + AI extractors. */
export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path.startsWith("/") ? it.path : `/${it.path}`}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: args.name,
    description: args.description,
    provider: { "@type": "LegalService", name: SITE_NAME, url: SITE_URL },
    areaServed: ["Salerno", "Campania", "Italia"],
    url: `${SITE_URL}${args.path}`,
  };
}