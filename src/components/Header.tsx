import React, { useState } from 'react';
import { Gem, Sparkles, Layers, Gift, ShieldCheck, HelpCircle, Menu, X, Ruler } from 'lucide-react';

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
            <span>Das Fachportal für Schmuck, Echtschmuck, Modeschmuck &amp; Accessoires</span>
          </div>
          <div className="text-[11px] text-slate-400">
            <span>* Werbelinks / Amazon-Partner &bull; Store-ID: esstri-21 &bull; Tag: karat.info-21</span>
          </div>
        </div>
      </div>

      {/* Hauptnavigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Gem className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-950">karat<span className="text-amber-600">.info</span></span>
                <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300">MAGAZIN</span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Schmuck &bull; Modeschmuck &bull; Accessoires</p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#katalog"
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Katalog &amp; Kollektionen*
            </a>
            <a
              href="#materialkunde"
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-amber-600" />
              Materialkunde
            </a>
            <a
              href="#styling"
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Styling &amp; Layering
            </a>
            <a
              href="#geschenke"
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Gift className="w-4 h-4 text-amber-600" />
              Geschenk-Finder*
            </a>
            <a
              href="#ringgroessen"
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Ruler className="w-4 h-4 text-amber-600" />
              Ringgrößen
            </a>
            <a
              href="#schmuckpflege"
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Schmuckpflege
            </a>
            <a
              href="#faq"
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-slate-400" />
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#katalog"
              className="px-4 py-2 text-xs font-extrabold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-all flex items-center gap-1.5 min-h-[40px]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Alle Artikel entdecken*</span>
            </a>
          </div>

          {/* Mobile Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 min-h-[48px] min-w-[48px] flex items-center justify-center"
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
          <a
            href="#katalog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            Schmuck- &amp; Accessoires-Katalog*
          </a>
          <a
            href="#materialkunde"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Layers className="w-5 h-5 text-amber-600" />
            Materialkunde (Gold, Silber, Edelstahl)
          </a>
          <a
            href="#styling"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            Styling &amp; Layering-Guide
          </a>
          <a
            href="#geschenke"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Gift className="w-5 h-5 text-amber-600" />
            Geschenk-Finder*
          </a>
          <a
            href="#ringgroessen"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Ruler className="w-5 h-5 text-amber-600" />
            Ringgrößen-Tabelle
          </a>
          <a
            href="#schmuckpflege"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            Schmuckpflege &amp; Ultraschall
          </a>
          <div className="pt-3 border-t border-slate-200 flex gap-2">
            <button
              onClick={() => { onOpenLegal('impressum'); setMobileMenuOpen(false); }}
              className="text-xs text-slate-500 hover:text-slate-900 underline py-2 min-h-[48px]"
            >
              Impressum (§ 5 DDG)
            </button>
            <span className="text-slate-300 py-2">&bull;</span>
            <button
              onClick={() => { onOpenLegal('datenschutz'); setMobileMenuOpen(false); }}
              className="text-xs text-slate-500 hover:text-slate-900 underline py-2 min-h-[48px]"
            >
              Datenschutz
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
