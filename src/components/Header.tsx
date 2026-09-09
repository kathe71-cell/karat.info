import React, { useState } from 'react';
import { Gem, Sparkles, Layers, Gift, ShieldCheck, HelpCircle, Menu, X, Ruler } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

interface HeaderProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLegal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      {/* Transparenz- & Affiliate-Leiste */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Schmuck-Kollektionen, Trends &amp; stilvolle Accessoires</span>
          </div>
          <div className="text-[11px] text-slate-400">
            <span>* Unabhängige Auswahl mit Partnerlinks (*) &bull; Transparente Materialangaben</span>
          </div>
        </div>
      </div>

      {/* Hauptnavigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (window.location.hash) {
                window.history.replaceState(null, '', window.location.pathname + window.location.search);
              }
            }}
            className="flex items-center group py-2 shrink-0 cursor-pointer"
            aria-label="Karat Startseite"
          >
            <img 
              src="/logo.png" 
              alt="Karat" 
              className="h-12 sm:h-16 md:h-18 w-auto object-contain rounded-xl group-hover:scale-105 transition-transform" 
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              type="button"
              onClick={() => scrollToSection('katalog')}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Katalog &amp; Kollektionen*
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('materialkunde')}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-amber-600" />
              Materialkunde
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('styling')}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Styling &amp; Layering
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('geschenke')}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-amber-600" />
              Geschenk-Finder*
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('ringgroessen')}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Ruler className="w-4 h-4 text-amber-600" />
              Ringgrößen
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('schmuckpflege')}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Schmuckpflege
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('faq')}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              FAQ
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToSection('katalog')}
              className="px-4 py-2 text-xs font-extrabold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-all flex items-center gap-1.5 min-h-[40px] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Alle Artikel entdecken*</span>
            </button>
          </div>

          {/* Mobile Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <button
            type="button"
            onClick={() => { scrollToSection('katalog'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            Schmuck- &amp; Accessoires-Katalog*
          </button>
          <button
            type="button"
            onClick={() => { scrollToSection('materialkunde'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Layers className="w-5 h-5 text-amber-600" />
            Materialkunde (Gold, Silber, Edelstahl)
          </button>
          <button
            type="button"
            onClick={() => { scrollToSection('styling'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            Styling &amp; Layering-Guide
          </button>
          <button
            type="button"
            onClick={() => { scrollToSection('geschenke'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Gift className="w-5 h-5 text-amber-600" />
            Geschenk-Finder*
          </button>
          <button
            type="button"
            onClick={() => { scrollToSection('ringgroessen'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Ruler className="w-5 h-5 text-amber-600" />
            Ringgrößen-Tabelle
          </button>
          <button
            type="button"
            onClick={() => { scrollToSection('schmuckpflege'); setMobileMenuOpen(false); }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            Schmuckpflege &amp; Ultraschall
          </button>
          <div className="pt-3 border-t border-slate-200 flex gap-2">
            <button
              onClick={() => { onOpenLegal('impressum'); setMobileMenuOpen(false); }}
              className="text-xs text-slate-500 hover:text-slate-900 underline py-2 min-h-[48px] cursor-pointer"
            >
              Impressum (§ 5 DDG)
            </button>
            <span className="text-slate-300 py-2">&bull;</span>
            <button
              onClick={() => { onOpenLegal('datenschutz'); setMobileMenuOpen(false); }}
              className="text-xs text-slate-500 hover:text-slate-900 underline py-2 min-h-[48px] cursor-pointer"
            >
              Datenschutz
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
