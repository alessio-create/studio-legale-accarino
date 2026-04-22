import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/espropriazioni", label: "Espropriazioni" },
  { to: "/appalti-pubblici", label: "Appalti Pubblici" },
  { to: "/concorsi-pubblici", label: "Concorsi Pubblici" },
  { to: "/urbanistica-edilizia", label: "Urbanistica ed Edilizia" },
];

const mainLinks = [
  { to: "/chi-siamo", label: "Chi Sono" },
  { to: "/blog", label: "Blog" },
  { to: "/contatti", label: "Contatti" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/92 backdrop-blur-md border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="editorial-container">
        <div className="flex items-center justify-between h-20">
          <Logo />

          <nav className="hidden lg:flex items-center gap-9">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link inline-flex items-center gap-1.5"
                data-active={services.some((s) => s.to === pathname) ? "true" : undefined}
                onClick={() => setServicesOpen((s) => !s)}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Servizi
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="min-w-[260px] bg-background border hairline shadow-lg animate-fade-up">
                    <ul className="py-2">
                      {services.map((s) => (
                        <li key={s.to}>
                          <Link
                            to={s.to}
                            className="block px-5 py-3 text-sm text-foreground hover:bg-muted hover:text-gold transition-colors"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {mainLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
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

      {open && (
        <div className="lg:hidden bg-background border-t hairline animate-fade-up">
          <div className="editorial-container py-6 flex flex-col gap-5">
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
