import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="editorial-container pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <Logo inverted />
          <p className="mt-6 text-sm text-background/70 leading-relaxed max-w-xs">
            Studio legale specializzato in diritto amministrativo. Difesa di privati,
            imprese e Pubbliche Amministrazioni dal 1974.
          </p>
          <div className="mt-8 h-px bg-gold/30" />
          <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-gold">
            Iscritto Ordine Avvocati di Salerno
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">Aree di pratica</h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li><Link to="/espropriazioni" className="hover:text-gold transition-colors">Espropriazioni</Link></li>
            <li><Link to="/appalti-pubblici" className="hover:text-gold transition-colors">Appalti Pubblici</Link></li>
            <li><Link to="/concorsi-pubblici" className="hover:text-gold transition-colors">Concorsi Pubblici</Link></li>
            <li><Link to="/urbanistica-edilizia" className="hover:text-gold transition-colors">Urbanistica ed Edilizia</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">Studio</h4>
          <ul className="space-y-3 text-sm text-background/80">
            <li><Link to="/chi-siamo" className="hover:text-gold transition-colors">Chi Siamo</Link></li>
            <li><Link to="/contatti" className="hover:text-gold transition-colors">Contatti</Link></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6">Sedi</h4>
          <ul className="space-y-4 text-sm text-background/80">
            <li>
              <p className="text-background font-medium">Salerno</p>
              <p className="text-background/60 text-xs mt-1">Via Roma, 41</p>
            </li>
            <li>
              <p className="text-background font-medium">Cava de' Tirreni</p>
              <p className="text-background/60 text-xs mt-1">Corso Umberto I, 132</p>
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
