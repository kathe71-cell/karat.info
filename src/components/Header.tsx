import React, { useState } from 'react';
import { Gem, Sparkles, Layers, Gift, ShieldCheck, Menu, X, Ruler } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

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
              navigateTo('/');
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

          {/* Desktop Links mit echten SEO-URLs */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="/katalog"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/katalog');
              }}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Katalog &amp; Kollektionen*
            </a>
            <a
              href="/materialkunde"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/materialkunde');
              }}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-amber-600" />
              Materialkunde
            </a>
            <a
              href="/styling"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/styling');
              }}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Styling &amp; Layering
            </a>
            <a
              href="/geschenke"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/geschenke');
              }}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-amber-600" />
              Geschenk-Finder*
            </a>
            <a
              href="/ringgroessen"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/ringgroessen');
              }}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Ruler className="w-4 h-4 text-amber-600" />
              Ringgrößen
            </a>
            <a
              href="/schmuckpflege"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/schmuckpflege');
              }}
              className="px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Schmuckpflege
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="/katalog"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/katalog');
              }}
              className="px-4 py-2 text-xs font-extrabold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-all flex items-center gap-1.5 min-h-[40px] cursor-pointer"
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
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 min-h-[48px] min-w-[48px] flex items-center justify-center cursor-pointer"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer mit echten URLs */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <a
            href="/katalog"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/katalog');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            Schmuck- &amp; Accessoires-Katalog*
          </a>
          <a
            href="/materialkunde"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/materialkunde');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Layers className="w-5 h-5 text-amber-600" />
            Materialkunde (Gold, Silber, Edelstahl)
          </a>
          <a
            href="/styling"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/styling');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            Styling &amp; Layering-Guide
          </a>
          <a
            href="/geschenke"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/geschenke');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Gift className="w-5 h-5 text-amber-600" />
            Geschenk-Finder*
          </a>
          <a
            href="/ringgroessen"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/ringgroessen');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <Ruler className="w-5 h-5 text-amber-600" />
            Ringgrößen-Tabelle
          </a>
          <a
            href="/schmuckpflege"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/schmuckpflege');
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 min-h-[48px] text-left cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            Schmuckpflege &amp; Ultraschall
          </a>
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
