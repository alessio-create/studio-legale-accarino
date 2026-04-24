import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Pre-footer CTA band */}
    <div className="border-b border-background/10">
      <div className="editorial-container py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold font-semibold mb-4">
            Una consulenza riservata, entro 48 ore
          </p>
          <h3 className="serif-display text-3xl lg:text-4xl text-background text-balance">
            Hai un caso urgente?{" "}
            <span className="text-gold">Parliamone.</span>
          </h3>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            to="/contatti"
            className="group inline-flex items-center gap-3 bg-gold text-primary px-7 py-4 text-label-sm font-semibold uppercase tracking-[0.16em] hover:bg-gold-deep hover:text-primary-foreground transition-all"
          >
            Prenota Consulenza
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>

    <div className="editorial-container pt-16 lg:pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo inverted />
          <p className="mt-6 text-sm text-background/70 leading-relaxed max-w-xs">
            Studio legale specializzato in diritto amministrativo. Difesa di privati,
            imprese e Pubbliche Amministrazioni dal 1974.
          </p>
          <div className="mt-8 space-y-3">
            <a
              href="tel:+390891234567"
              className="flex items-center gap-3 text-sm text-background hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={2} />
              +39 089 123 4567
            </a>
            <a
              href="mailto:info@accarino.it"
              className="flex items-center gap-3 text-sm text-background hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={2} />
              info@accarino.it
            </a>
            <div className="flex items-center gap-3 text-sm text-background/70">
              <Clock className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={2} />
              Lun–Ven · 9:00–18:30
            </div>
          </div>
          <div className="mt-8 h-px bg-gold/30" />
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-gold">
            Iscritto Ordine Avvocati di Salerno
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">
            Aree di pratica
          </h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li>
              <Link to="/espropriazioni" className="hover:text-gold transition-colors inline-flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gold/50 group-hover:bg-gold transition-colors" />
                Espropriazioni
              </Link>
            </li>
            <li>
              <Link to="/appalti-pubblici" className="hover:text-gold transition-colors inline-flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gold/50 group-hover:bg-gold transition-colors" />
                Appalti Pubblici
              </Link>
            </li>
            <li>
              <Link to="/concorsi-pubblici" className="hover:text-gold transition-colors inline-flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gold/50 group-hover:bg-gold transition-colors" />
                Concorsi Pubblici
              </Link>
            </li>
            <li>
              <Link to="/urbanistica-edilizia" className="hover:text-gold transition-colors inline-flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gold/50 group-hover:bg-gold transition-colors" />
                Urbanistica ed Edilizia
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">Studio</h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li><Link to="/chi-siamo" className="hover:text-gold transition-colors">Chi Sono</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><Link to="/contatti" className="hover:text-gold transition-colors">Contatti</Link></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">Sedi</h4>
          <ul className="space-y-5 text-sm text-background/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-background font-serif text-base">Salerno</p>
                <p className="text-background/60 text-xs mt-1 leading-relaxed">
                  Via Roma, 41<br />84121 Salerno (SA)
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" strokeWidth={1.75} />
              <div>
                <p className="text-background font-serif text-base">Cava de' Tirreni</p>
                <p className="text-background/60 text-xs mt-1 leading-relaxed">
                  Corso Umberto I, 132<br />84013 Cava de' Tirreni (SA)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-xs text-background/50">
          © {new Date().getFullYear()} Studio Legale Accarino · P.IVA 01234567890
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-background/50">
          Salerno · Cava de' Tirreni · Roma
        </p>
      </div>
    </div>
  </footer>
);
