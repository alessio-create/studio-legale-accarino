import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Landmark, Building2, Users, Scale, ArrowUpRight, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { LiveReviewsTicker } from "./LiveReviewsTicker";

const serviceGroups = [
  {
    heading: "Diritto del Territorio",
    items: [
      {
        to: "/espropriazioni",
        label: "Espropriazioni",
        desc: "Indennità, opposizione alla stima, occupazioni illegittime.",
        icon: Landmark,
      },
      {
        to: "/urbanistica-edilizia",
        label: "Urbanistica ed Edilizia",
        desc: "Permessi a costruire, varianti, vincoli, abusi e sanatorie.",
        icon: Scale,
      },
    ],
  },
  {
    heading: "Imprese e Pubblica Amministrazione",
    items: [
      {
        to: "/appalti-pubblici",
        label: "Appalti Pubblici",
        desc: "Ricorsi TAR, sospensive cautelari, contenzioso esecutivo.",
        icon: Building2,
        featured: true,
      },
      {
        to: "/concorsi-pubblici",
        label: "Concorsi Pubblici",
        desc: "Ricorsi individuali e collettivi, impugnazione graduatorie.",
        icon: Users,
      },
    ],
  },
];

const allServiceRoutes = serviceGroups.flatMap((g) => g.items.map((i) => i.to));

const mainLinks = [
  { to: "/chi-siamo", label: "Lo Studio" },
  { to: "/blog", label: "Blog" },
  { to: "/contatti", label: "Contatti" },
];

const PHONE_DISPLAY = "+39 089 123 4567";
const PHONE_HREF = "tel:+390891234567";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { pathname } = useLocation();

  // Homepage hero is now dark — overlay nav with light text at the top of "/".
  const overDarkHero = pathname === "/" && !scrolled;
  const transparentTop = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        transparentTop
          ? "bg-transparent border-b border-transparent"
          : "bg-background/95 backdrop-blur-md border-b hairline shadow-[0_1px_0_0_hsl(var(--primary)/0.04)]"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      {/* Top utility bar */}
      <div className={`hidden lg:block border-b transition-colors ${overDarkHero ? "border-background/15" : "border-primary/10"}`}>
        <div className="editorial-container flex items-center justify-between h-9 text-[10px] uppercase tracking-[0.24em]">
          <div className={`flex items-center gap-6 min-w-0 ${overDarkHero ? "text-background/70" : "text-muted-foreground"}`}>
            <span className="flex items-center gap-2.5 flex-shrink-0">
              <span className="w-1 h-1 bg-gold" />
              Diritto Amministrativo
            </span>
            <span className="hidden xl:inline flex-shrink-0">Sedi · Salerno &amp; Cava de&apos; Tirreni</span>
            {/* Live reviews ticker — quietly placed in the utility bar */}
            <span aria-hidden className={`hidden xl:inline-block h-3 w-px ${overDarkHero ? "bg-background/20" : "bg-border"}`} />
            <LiveReviewsTicker
              variant="compact"
              className={`hidden xl:flex min-w-0 max-w-[40ch] ${overDarkHero ? "text-background/80" : ""}`}
            />
          </div>
          <a
            href={PHONE_HREF}
            className={`flex items-center gap-2.5 font-semibold transition-colors ${
              overDarkHero ? "text-background hover:text-gold" : "text-primary hover:text-gold-deep"
            }`}
          >
            <Phone className="w-3 h-3 text-gold" strokeWidth={2.5} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="editorial-container">
        <div className="flex items-center justify-between h-20 lg:h-[88px]">
          <Logo inverted={overDarkHero} />

          <nav className="hidden lg:flex items-center gap-6">
            <button
              className={`nav-link inline-flex items-center gap-1.5 ${overDarkHero ? "!text-background hover:!text-gold" : ""}`}
              data-active={allServiceRoutes.includes(pathname) ? "true" : undefined}
              onClick={() => setMegaOpen((s) => !s)}
              onMouseEnter={() => setMegaOpen(true)}
              aria-haspopup="true"
              aria-expanded={megaOpen}
            >
              Specializzazioni
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
            </button>
            {mainLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={() => `nav-link ${overDarkHero ? "!text-background hover:!text-gold" : ""}`}
                data-active={pathname === l.to ? "true" : undefined}
                onMouseEnter={() => setMegaOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contatti"
              className={`group inline-flex items-center gap-2.5 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all ${
                overDarkHero
                  ? "bg-gold text-primary hover:bg-background hover:text-primary"
                  : "bg-primary text-primary-foreground hover:bg-primary-glow shadow-inset-gold"
              }`}
            >
              Consulenza
              <ArrowRight
                className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 ${
                  overDarkHero ? "text-primary" : "text-gold"
                }`}
                strokeWidth={2.25}
              />
            </Link>
          </div>

          <button
            aria-label="Menu"
            className={`lg:hidden ${overDarkHero ? "text-background" : "text-primary"}`}
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      {megaOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-background border-t hairline shadow-[0_24px_60px_-30px_hsl(217_50%_12%/0.25)] animate-mega-in origin-top overflow-hidden"
          onMouseEnter={() => setMegaOpen(true)}
        >
          {/* Subtle gold ambient wash — adds depth without heaviness */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              background:
                "radial-gradient(60% 80% at 100% 0%, hsl(var(--gold)) 0%, transparent 60%)",
            }}
          />
          {/* Animated gold rule under the header */}
          <span
            aria-hidden
            className="absolute top-0 left-0 right-0 h-px bg-gradient-gold-line opacity-70"
          />

          <div className="relative editorial-container py-12">
            <div className="grid grid-cols-12 gap-10">
              <div
                className="col-span-3 animate-mega-item-in"
                style={{ animationDelay: "60ms" }}
              >
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-gold-deep font-semibold">
                  <span aria-hidden className="w-8 h-px bg-gold" />
                  Specializzazioni
                </p>
                <h3 className="mt-6 font-serif text-2xl text-primary leading-snug text-balance">
                  Quattro aree di specializzazione, una sola promessa di precisione.
                </h3>
                <Link
                  to="/contatti"
                  className="mt-6 group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary font-semibold hover:text-gold-deep transition-colors"
                >
                  Prenota consulenza
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Animated gold underline reveal */}
                <span
                  aria-hidden
                  className="block mt-8 h-px w-12 bg-gold/70"
                  style={{
                    animation:
                      "ticker-progress 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s both",
                    transformOrigin: "left",
                  }}
                />
              </div>

              <div className="col-span-9 grid grid-cols-2 gap-x-10 gap-y-8">
                {serviceGroups.map((group, gi) => (
                  <div
                    key={group.heading}
                    className="animate-mega-item-in"
                    style={{ animationDelay: `${120 + gi * 80}ms` }}
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-5">
                      {group.heading}
                    </p>
                    <ul className="space-y-0">
                      {group.items.map((item, ii) => {
                        const Icon = item.icon;
                        return (
                          <li
                            key={item.to}
                            className="animate-mega-item-in"
                            style={{
                              animationDelay: `${180 + gi * 80 + ii * 60}ms`,
                            }}
                          >
                            <Link
                              to={item.to}
                              className={`group relative block px-4 py-3 -mx-4 transition-all duration-300 ${
                                item.featured
                                  ? "bg-gold-soft/40 hover:bg-gold-soft"
                                  : "hover:bg-surface-container-low"
                              }`}
                            >
                              {/* gold rail that reveals on hover */}
                              <span
                                aria-hidden
                                className="absolute left-0 top-2 bottom-2 w-px bg-gold scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500"
                              />
                              <div className="flex items-start gap-4">
                                <Icon
                                  className="w-5 h-5 text-gold-deep mt-0.5 flex-shrink-0 transition-transform duration-500 group-hover:rotate-[-4deg] group-hover:scale-110"
                                  strokeWidth={1.5}
                                />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-serif text-lg text-primary group-hover:text-gold-deep transition-colors">
                                      {item.label}
                                    </span>
                                    {item.featured && (
                                      <span className="text-[9px] uppercase tracking-[0.2em] bg-gold text-primary px-2 py-0.5 font-semibold">
                                        Focus
                                      </span>
                                    )}
                                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-deep ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                  </div>
                                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="lg:hidden bg-background border-t hairline animate-mega-in origin-top max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="editorial-container py-6 flex flex-col gap-5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 py-3 text-primary border-b hairline"
            >
              <Phone className="w-4 h-4 text-gold" strokeWidth={2.5} />
              <span className="font-serif text-lg">{PHONE_DISPLAY}</span>
            </a>

            <div>
              <button
                className="nav-link inline-flex items-center gap-1.5 w-full"
                onClick={() => setMobileServicesOpen((s) => !s)}
                aria-expanded={mobileServicesOpen}
              >
                Specializzazioni
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-4 ml-1 border-l hairline pl-5 space-y-6">
                  {serviceGroups.map((group) => (
                    <div key={group.heading}>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-gold-deep font-semibold mb-3">
                        {group.heading}
                      </p>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.to}>
                            <Link to={item.to} className="block">
                              <span className="font-serif text-base text-primary">{item.label}</span>
                              <span className="block text-xs text-muted-foreground mt-0.5">
                                {item.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.map((l) => (
              <Link key={l.to} to={l.to} className="nav-link">
                {l.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 text-label-sm uppercase tracking-[0.16em] shadow-inset-gold"
            >
              Prenota Consulenza
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
