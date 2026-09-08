import React, { useState } from 'react';
import { Gem, Calculator, Sparkles, ShieldCheck, HelpCircle, Menu, X, BookOpen, Ruler } from 'lucide-react';

interface HeaderProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLegal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      {/* Offizielle Transparenz- & Affiliate-Leiste */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Unabhängiges Referenzportal für Karat, Feingehalte &amp; Echtschmuck</span>
          </div>
          <div className="text-[11px] text-slate-400">
            <span>* Werbelinks / Amazon-Partner &bull; Geprüft nach FeinGehG &amp; DIN EN ISO</span>
          </div>
        </div>
      </div>

      {/* Hauptnavigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Markenname */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Gem className="w-5 h-5 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">karat<span className="text-amber-600">.info</span></span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">FEINGEHALT</span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">Gold &bull; Diamanten &bull; Echtschmuck</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#rechner"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-amber-600" />
              Karat-Rechner
            </a>
            <a
              href="#schmuck"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              Schmuck-Kollektionen*
            </a>
            <a
              href="#punzierung"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              Punzierungstabelle
            </a>
            <a
              href="#ringgroessen"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Ruler className="w-4 h-4 text-amber-600" />
              Ringgrößen
            </a>
            <a
              href="#schmuckpflege"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Schmuckpflege
            </a>
            <a
              href="#faq"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-700 hover:bg-amber-50/70 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              Ratgeber &amp; FAQ
            </a>
          </nav>

          {/* Call-to-Action / Embed Link */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#embed"
              className="px-3.5 py-2 text-xs font-bold rounded-lg border border-slate-300 text-slate-700 hover:border-amber-500 hover:text-amber-700 bg-slate-50 transition-colors"
            >
              &lt;/&gt; Rechner einbinden
            </a>
            <a
              href="#schmuck"
              className="px-4 py-2 text-xs font-extrabold rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm transition-all"
            >
              Echtschmuck-Finder*
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Navigation öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menü Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <a
            href="#rechner"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Calculator className="w-5 h-5 text-amber-600" />
            Karat- &amp; Feingold-Rechner
          </a>
          <a
            href="#schmuck"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
            Schmuck-Kollektionen &amp; Ringe*
          </a>
          <a
            href="#punzierung"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <BookOpen className="w-5 h-5 text-amber-600" />
            Punzierungstabelle (333 bis 999)
          </a>
          <a
            href="#ringgroessen"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <Ruler className="w-5 h-5 text-amber-600" />
            Ringgrößen-Tabelle
          </a>
          <a
            href="#schmuckpflege"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            Schmuckpflege &amp; Ultraschall
          </a>
          <a
            href="#embed"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold text-slate-800 hover:bg-amber-50 min-h-[48px]"
          >
            <span className="font-mono text-xs text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">&lt;/&gt;</span>
            Kostenloses Rechner-Widget
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
