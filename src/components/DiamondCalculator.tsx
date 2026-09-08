import React, { useState } from 'react';
import { Gem, ArrowRightLeft, Sparkles, ShieldCheck } from 'lucide-react';

export const DiamondCalculator: React.FC = () => {
  const [carat, setCarat] = useState<number>(1.00);

  // Exakte metrische Umrechnungen nach 4. CGPM (1907) und DIN EN ISO 18323
  const grams = carat * 0.2;
  const milligrams = carat * 200;
  const points = Math.round(carat * 100);
  const grains = (carat * 4).toFixed(2);

  // Geschätzter Brillant-Durchmesser bei idealem Schliff (Tolkowsky Proportionen)
  // Formel: D ≈ 6.5 * (ct)^(1/3)
  const estimatedDiameterMm = (6.5 * Math.cbrt(carat)).toFixed(2);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
            <Gem className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Diamant- &amp; Edelstein-Karat Umrechner
            </h3>
            <p className="text-xs text-slate-500">
              Metrisches Karat (ct), Milligramm, Punkte und Brillant-Durchmesser (DIN EN ISO 18323)
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Eingabebereich Links (7 Spalten) */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Karat-Gewicht (ct)
              </label>
              <span className="text-xs font-mono font-extrabold text-amber-900">{carat.toFixed(2)} ct</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={carat}
                onChange={(e) => setCarat(Math.max(0.01, parseFloat(e.target.value) || 0))}
                className="w-32 px-3 py-2.5 rounded-xl border border-slate-300 text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex flex-wrap gap-1.5">
                {[0.10, 0.25, 0.50, 0.75, 1.00, 1.50, 2.00].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setCarat(preset)}
                    type="button"
                    className={`px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                      carat === preset
                        ? 'bg-amber-500 text-slate-950 border-amber-600'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    }`}
                  >
                    {preset.toFixed(2)} ct
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Schieberegler */}
          <div>
            <input
              type="range"
              min="0.05"
              max="3.00"
              step="0.05"
              value={carat}
              onChange={(e) => setCarat(parseFloat(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
              <span>0,05 ct (Halbkaräter)</span>
              <span>1,00 ct (Solitär)</span>
              <span>3,00 ct (Großkaräter)</span>
            </div>
          </div>

          {/* 4C Informations-Leiste */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs">
            <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Die 4C der Diamanten-Wertermittlung (CIBJO &amp; GIA Standard):
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-600 mt-2">
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">1. Carat</span>
                Gewicht ({carat.toFixed(2)} ct)
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">2. Clarity</span>
                Reinheit (IF, VVS, VS, SI)
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">3. Color</span>
                Farbe (D bis Z Hochfein)
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">4. Cut</span>
                Schliff (Exzellent / Ideal)
              </div>
            </div>
          </div>
        </div>

        {/* Ergebnisbereich Rechts (5 Spalten) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between shadow-xl">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              Exakte Masseinheiten
            </div>
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
              {carat.toFixed(2)} ct <span className="text-slate-400 text-lg font-normal">(= {milligrams.toFixed(1)} mg)</span>
            </div>

            <div className="space-y-2.5 py-3 border-y border-slate-800 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Gramm (g):</span>
                <span className="text-white font-mono font-bold">{grams.toFixed(3)} g</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Milligramm (mg):</span>
                <span className="text-white font-mono font-bold">{milligrams.toFixed(1)} mg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Punkte (Points / 1/100 ct):</span>
                <span className="text-white font-mono font-bold">{points} Punkte</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Karat-Grän (Pearl Grain):</span>
                <span className="text-slate-300 font-mono">{grains} Grains</span>
              </div>
            </div>

            {/* Brillant-Durchmesser Schätzung */}
            <div className="mt-4 p-3.5 rounded-xl bg-slate-800/90 border border-slate-700">
              <div className="text-[11px] text-amber-400 font-bold mb-1 flex items-center justify-between">
                <span>Brillant-Durchmesser (Ideal Cut):</span>
                <span className="text-white font-mono font-extrabold text-sm">~{estimatedDiameterMm} mm</span>
              </div>
              {/* Visuelle Skala */}
              <div className="mt-2 flex items-center justify-center py-2 bg-slate-900/60 rounded-lg">
                <div
                  className="rounded-full border-2 border-amber-400 bg-amber-400/20 shadow-inner flex items-center justify-center text-[9px] text-amber-200 font-mono transition-all duration-300"
                  style={{
                    width: `${Math.min(90, Math.max(16, parseFloat(estimatedDiameterMm) * 9))}px`,
                    height: `${Math.min(90, Math.max(16, parseFloat(estimatedDiameterMm) * 9))}px`,
                  }}
                >
                  {estimatedDiameterMm} mm
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800">
            <a
              href="#schmuck"
              className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Diamantschmuck mit {carat.toFixed(2)} ct entdecken*</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
