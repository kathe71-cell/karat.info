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

          {/* Desktop Links mit symmetrischer Ausrichtung & einheitlichen Abständen */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2.5 flex-1 px-2">
            <a
              href="/katalog"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/katalog');
              }}
              className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-amber-800 hover:bg-amber-50/80 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Kollektionen</span>
            </a>
            <a
              href="/materialkunde"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/materialkunde');
              }}
              className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-amber-800 hover:bg-amber-50/80 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Layers className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Materialkunde</span>
            </a>
            <a
              href="/styling"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/styling');
              }}
              className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-amber-800 hover:bg-amber-50/80 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Styling</span>
            </a>
            <a
              href="/geschenke"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/geschenke');
              }}
              className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-amber-800 hover:bg-amber-50/80 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Gift className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Geschenke</span>
            </a>
            <a
              href="/ringgroessen"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/ringgroessen');
              }}
              className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-amber-800 hover:bg-amber-50/80 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Ruler className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Ringgrößen</span>
            </a>
            <a
              href="/schmuckpflege"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/schmuckpflege');
              }}
              className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-amber-800 hover:bg-amber-50/80 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Pflege</span>
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href="/katalog"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/katalog');
              }}
              className="px-4 py-2 text-xs font-extrabold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-all flex items-center gap-1.5 min-h-[40px] cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Alle Kollektionen*</span>
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
