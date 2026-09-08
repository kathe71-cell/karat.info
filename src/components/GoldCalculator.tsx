import React, { useState, useId } from 'react';
import { Calculator, Sparkles, TrendingUp, Info, ChevronRight, RefreshCw } from 'lucide-react';

interface GoldPreset {
  karat: number;
  promille: number;
  label: string;
  sub: string;
  popular?: boolean;
}

const GOLD_PRESETS: GoldPreset[] = [
  { karat: 8, promille: 333, label: '333er (8 kt)', sub: '33,3 % Feingold' },
  { karat: 9, promille: 375, label: '375er (9 kt)', sub: '37,5 % Feingold (UK)' },
  { karat: 14, promille: 585, label: '585er (14 kt)', sub: '58,5 % Schmuck-Standard', popular: true },
  { karat: 18, promille: 750, label: '750er (18 kt)', sub: '75,0 % Luxus-Standard', popular: true },
  { karat: 21.6, promille: 900, label: '900er (21,6 kt)', sub: '90,0 % Münzgold' },
  { karat: 22, promille: 916, label: '916er (22 kt)', sub: '91,6 % z. B. Krugerrand' },
  { karat: 24, promille: 999.9, label: '999er (24 kt)', sub: '99,99 % Reines Feingold' },
];

export const GoldCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(10);
  const [selectedPromille, setSelectedPromille] = useState<number>(585);
  const [goldPricePerGram, setGoldPricePerGram] = useState<number>(78.50);
  const [dealerDeduction, setDealerDeduction] = useState<number>(10); // 10 % Ankaufsmarge
  const [showPriceEdit, setShowPriceEdit] = useState<boolean>(false);

  // Formeln nach FeinGehG
  const pureGoldWeight = (weight * selectedPromille) / 1000;
  const alloyWeight = Math.max(0, weight - pureGoldWeight);
  const rawMaterialValue = pureGoldWeight * goldPricePerGram;
  const payoutValue = rawMaterialValue * (1 - dealerDeduction / 100);
  const karatValue = ((selectedPromille / 1000) * 24).toFixed(1);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
              <Calculator className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Gold-Karat &amp; Schmuckwert-Rechner
              </h3>
              <p className="text-xs text-slate-500">
                Ermittelt Feingehalt, Reingewicht und aktuellen Materialwert nach FeinGehG
              </p>
            </div>
          </div>
        </div>

        {/* Spot-Preis Schnellanzeige */}
        <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span className="text-slate-600">Spotkurs:</span>
          <strong className="text-slate-900 font-bold">{goldPricePerGram.toFixed(2)} €/g</strong>
          <button
            onClick={() => setShowPriceEdit(!showPriceEdit)}
            className="text-[11px] text-amber-800 hover:text-amber-950 font-bold underline ml-1"
          >
            {showPriceEdit ? 'Schließen' : 'Anpassen'}
          </button>
        </div>
      </div>

      {showPriceEdit && (
        <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs flex flex-wrap items-center gap-3">
          <span className="font-bold text-amber-950">Feingold-Spotpreis anpassen:</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number"
              step="0.50"
              value={goldPricePerGram}
              onChange={(e) => setGoldPricePerGram(Math.max(1, parseFloat(e.target.value) || 0))}
              className="w-24 px-2 py-1 bg-white border border-amber-300 rounded font-bold text-slate-900"
            />
            <span className="text-slate-700">€ pro Gramm (999 Feingold)</span>
          </div>
          <button
            onClick={() => { setGoldPricePerGram(78.50); setShowPriceEdit(false); }}
            className="text-xs text-amber-800 underline font-semibold ml-auto"
          >
            Standard (78,50 €)
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Eingabebereich Links (7 Spalten) */}
        <div className="lg:col-span-7 space-y-5">
          {/* 1. Gesamtgewicht in Gramm */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Schmuck-Gesamtgewicht (Gramm)
              </label>
              <span className="text-xs font-mono font-bold text-slate-900">{weight} g</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0.1"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(Math.max(0.01, parseFloat(e.target.value) || 0))}
                className="w-32 px-3 py-2.5 rounded-xl border border-slate-300 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex flex-wrap gap-1.5">
                {[3.5, 8.5, 14, 25, 50].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setWeight(preset)}
                    type="button"
                    className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                      weight === preset
                        ? 'bg-amber-500 text-slate-950 border-amber-600'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    }`}
                  >
                    {preset} g
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Feingehalt / Punzierung */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Feingehalt / Punzen-Stempel
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {GOLD_PRESETS.map((preset) => {
                const isSelected = selectedPromille === preset.promille;
                return (
                  <button
                    key={preset.promille}
                    onClick={() => setSelectedPromille(preset.promille)}
                    type="button"
                    className={`p-2.5 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-500/20 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {preset.popular && (
                      <span className="absolute -top-2 right-2 text-[9px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded">
                        Beliebt
                      </span>
                    )}
                    <div className="font-extrabold text-sm text-slate-900">{preset.label}</div>
                    <div className="text-[11px] text-slate-500">{preset.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Schmelz- und Händlerabschlag */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                3. Händler- / Schmelzabzug
                <span className="text-[10px] text-slate-400 font-normal">(beim Goldankauf)</span>
              </label>
              <span className="text-xs font-bold text-slate-900">{dealerDeduction} % Abzug</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { val: 0, label: '0 %', sub: 'Reiner Börsenwert' },
                { val: 5, label: '5 %', sub: 'Barren/Münzen' },
                { val: 10, label: '10 %', sub: 'Fairer Juwelier' },
                { val: 15, label: '15 %', sub: 'Schrott-/Altgold' },
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setDealerDeduction(item.val)}
                  type="button"
                  className={`py-1.5 px-2 rounded-lg border text-center text-xs font-bold transition-all ${
                    dealerDeduction === item.val
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div>{item.label}</div>
                  <div className="text-[9px] opacity-75 font-normal">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ergebnisbereich Rechts (5 Spalten) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between shadow-xl">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              Berechneter Feingehalt
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
              {karatValue} Karat <span className="text-slate-400 text-lg font-normal">({selectedPromille} ‰)</span>
            </div>

            <div className="space-y-3 py-3 border-y border-slate-800 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Reines Feingoldgewicht:</span>
                <span className="text-white font-mono font-bold text-sm">
                  {pureGoldWeight.toFixed(2)} g
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Legierungszusätze (Kupfer/Silber):</span>
                <span className="text-slate-300 font-mono">
                  {alloyWeight.toFixed(2)} g
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Theoretischer Materialwert (100 %):</span>
                <span className="text-slate-300 font-mono font-bold">
                  {rawMaterialValue.toFixed(2)} €
                </span>
              </div>
            </div>

            {/* Auszahlungsbetrag Groß */}
            <div className="mt-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-[11px] text-slate-400 font-semibold mb-0.5">
                Realistischer Schätz-/Ankaufswert ({100 - dealerDeduction} %):
              </div>
              <div className="text-3xl font-black text-amber-400">
                {payoutValue.toFixed(2)} €
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                * Modellrechnung. Die tatsächliche Vergütung hängt vom Zustand, Steinen und Ankaufspartner ab.
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800 space-y-2">
            <a
              href="#schmuck"
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Passenden {selectedPromille}er Echtschmuck ansehen*</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
