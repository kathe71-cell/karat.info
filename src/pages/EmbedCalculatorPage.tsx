import React, { useState } from 'react';
import { Gem, Calculator, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';

export default function EmbedCalculatorPage() {
  const [activeTab, setActiveTab] = useState<'gold' | 'diamant'>('gold');

  // Gold State
  const [weight, setWeight] = useState<number>(10);
  const [promille, setPromille] = useState<number>(585);
  const goldPrice = 78.50; // Spot

  const pureGold = (weight * promille) / 1000;
  const materialValue = pureGold * goldPrice;
  const payoutValue = materialValue * 0.90; // 10% Juwelierabzug

  // Diamant State
  const [carat, setCarat] = useState<number>(1.00);
  const diamondGrams = (carat * 0.2).toFixed(3);
  const diamondMg = (carat * 200).toFixed(1);
  const diamondDiameter = (6.5 * Math.cbrt(carat)).toFixed(2);

  return (
    <div className="min-h-screen bg-slate-50 p-3 sm:p-4 text-slate-900 font-sans antialiased flex flex-col justify-between">
      <div className="max-w-xl mx-auto w-full bg-white rounded-2xl border border-slate-200 shadow-lg p-4 sm:p-5">
        {/* Widget Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
              <Gem className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight text-slate-900">karat<span className="text-amber-600">.info</span></span>
              <span className="text-[10px] text-slate-500 block">Karat- &amp; Feingold-Rechner</span>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="flex rounded-lg bg-slate-100 p-0.5 text-xs font-bold">
            <button
              onClick={() => setActiveTab('gold')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'gold' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gold (kt)
            </button>
            <button
              onClick={() => setActiveTab('diamant')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'diamant' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Diamanten (ct)
            </button>
          </div>
        </div>

        {/* Content Gold */}
        {activeTab === 'gold' ? (
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                  Gewicht in Gramm:
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(0.1, parseFloat(e.target.value) || 0))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-900 focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-600 mb-1">
                  Feingehalt (Stempel):
                </label>
                <select
                  value={promille}
                  onChange={(e) => setPromille(parseInt(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-900 focus:ring-2 focus:ring-amber-500"
                >
                  <option value="333">333er (8 Karat)</option>
                  <option value="375">375er (9 Karat)</option>
                  <option value="585">585er (14 Karat) - Standard</option>
                  <option value="750">750er (18 Karat) - Luxus</option>
                  <option value="900">900er (21,6 Karat) - Münzgold</option>
                  <option value="916">916er (22 Karat)</option>
                  <option value="999">999er (24 Karat) - Feingold</option>
                </select>
              </div>
            </div>

            {/* Ergebnis-Box */}
            <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Reines Feingoldgewicht:</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{pureGold.toFixed(2)} g Feingold</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Theoretischer Materialwert (100%):</span>
                <span className="font-mono text-slate-200">{materialValue.toFixed(2)} €</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-300">Schätzwert Goldankauf:</span>
                <span className="text-2xl font-black text-amber-400 font-mono">{payoutValue.toFixed(2)} €</span>
              </div>
              <div className="text-[9px] text-slate-400 pt-0.5">
                * Modellrechnung basierend auf {goldPrice.toFixed(2)} €/g Feingold und 10 % Händlerabzug.
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold uppercase text-slate-600">
                  Karat-Gewicht (ct):
                </label>
                <span className="text-xs font-mono font-black text-amber-900">{carat.toFixed(2)} ct</span>
              </div>
              <input
                type="number"
                min="0.01"
                step="0.05"
                value={carat}
                onChange={(e) => setCarat(Math.max(0.01, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-bold text-slate-900 focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Ergebnis-Box Diamant */}
            <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-xs py-1">
                <div>
                  <span className="text-slate-400 block text-[10px]">Gewicht in Gramm:</span>
                  <strong className="text-white font-mono">{diamondGrams} g</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Milligramm:</span>
                  <strong className="text-white font-mono">{diamondMg} mg</strong>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-300">Brillant-Durchmesser (Ideal Cut):</span>
                <span className="text-xl font-black text-amber-400 font-mono">~{diamondDiameter} mm</span>
              </div>
              <div className="text-[9px] text-slate-400 pt-0.5">
                Normiert nach DIN EN ISO 18323 &bull; 1 ct = exakt 200 mg.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Attribution Backlink */}
      <footer className="mt-3 text-center text-xs text-slate-500">
        <a
          href="https://karat.info/"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-amber-800 hover:underline"
        >
          <span>Bereitgestellt von karat.info &bull; Das Fachportal für Feingehalt &amp; Echtschmuck</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </footer>
    </div>
  );
}
