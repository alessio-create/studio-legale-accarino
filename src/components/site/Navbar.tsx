import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Scale, Building2, GraduationCap, Hammer } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  {
    to: "/espropriazioni",
    label: "Espropriazioni",
    desc: "Difesa di proprietari contro decreti di esproprio e occupazioni illegittime.",
    icon: Scale,
  },
  {
    to: "/appalti-pubblici",
    label: "Appalti Pubblici",
    desc: "Ricorsi al TAR, esclusioni e contenzioso gare per imprese.",
    icon: Building2,
  },
  {
    to: "/concorsi-pubblici",
    label: "Concorsi Pubblici",
    desc: "Impugnazione di graduatorie, esclusioni e procedure concorsuali.",
    icon: GraduationCap,
  },
  {
    to: "/urbanistica-edilizia",
    label: "Urbanistica ed Edilizia",
    desc: "Permessi di costruire, condoni, varianti e contenzioso edilizio.",
    icon: Hammer,
  },
];

const mainLinks = [
  { to: "/chi-siamo", label: "Chi Sono" },
  { to: "/blog", label: "Blog" },
  { to: "/contatti", label: "Contatti" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { pathname } = useLocation();

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

  const servicesActive = services.some((s) => pathname === s.to);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="editorial-container">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-9">
            <button
              type="button"
              onMouseEnter={() => setMegaOpen(true)}
              onClick={() => setMegaOpen((s) => !s)}
              className="nav-link inline-flex items-center gap-1.5"
              data-active={servicesActive ? "true" : undefined}
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              Servizi
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  megaOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mainLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onMouseEnter={() => setMegaOpen(false)}
                className={({ isActive }) => "nav-link"}
                data-active={pathname === l.to ? "true" : undefined}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contatti"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-label-sm font-semibold uppercase tracking-[0.16em] shadow-inset-gold hover:bg-primary-glow transition-all"
            >
              Consulenza
              <span className="w-4 h-px bg-gold transition-all group-hover:w-6" />
            </Link>
          </div>

          <button
            aria-label="Menu"
            className="lg:hidden text-primary"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu — desktop */}
      <div
        className={`hidden lg:block absolute inset-x-0 top-full overflow-hidden transition-all duration-500 ${
          megaOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        onMouseEnter={() => setMegaOpen(true)}
      >
        <div className="bg-background border-y hairline shadow-elegant">
          <div className="editorial-container py-12">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-3 border-r hairline pr-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold">
                  Aree di pratica
                </p>
                <h3 className="font-serif text-2xl text-primary mt-4 leading-tight">
                  Diritto Amministrativo
                </h3>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Oltre 50 anni di esperienza nella tutela di privati, imprese
                  e Pubbliche Amministrazioni.
                </p>
                <Link
                  to="/contatti"
                  className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary font-semibold border-b border-gold pb-1 hover:text-gold transition-colors"
                >
                  Prenota consulenza
                  <span className="w-3 h-px bg-gold" />
                </Link>
              </div>

              <div className="col-span-9 grid grid-cols-2 gap-x-8 gap-y-2">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="group flex gap-5 p-5 border border-transparent hover:border-gold/40 hover:bg-accent/40 transition-all"
                    >
                      <span className="shrink-0 w-11 h-11 flex items-center justify-center border hairline text-gold group-hover:border-gold transition-colors">
                        <Icon className="w-5 h-5" strokeWidth={1.25} />
                      </span>
                      <span className="flex-1">
                        <span className="block font-serif text-lg text-primary group-hover:text-gold-deep transition-colors">
                          {s.label}
                        </span>
                        <span className="block text-sm text-muted-foreground mt-1.5 leading-relaxed">
                          {s.desc}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t hairline animate-fade-up">
          <div className="editorial-container py-6 flex flex-col gap-5">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((s) => !s)}
              className="nav-link inline-flex items-center justify-between w-full"
              aria-expanded={mobileServicesOpen}
            >
              <span>Servizi</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l hairline">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors py-1"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

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
