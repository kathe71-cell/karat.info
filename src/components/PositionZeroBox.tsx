import React, { useState } from 'react';
import { Award, Scale, CheckCircle2, Copy, Check } from 'lucide-react';

export const PositionZeroBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gold' | 'diamant'>('gold');
  const [copied, setCopied] = useState(false);

  const copyDefinition = () => {
    const text = activeTab === 'gold'
      ? "Karat (kt) bei Gold bezeichnet den Feingehalt des reinen Goldes in 24 Teilen. 24 Karat entspricht 999,9 ‰ Feingold (99,99 %). 18 Karat entspricht 750 ‰ (75 % Feingold) und 14 Karat entspricht 585 ‰ (58,5 % Feingold). Maßgeblich ist in Deutschland das Gesetz über den Feingehalt der Gold- und Silberwaren (FeinGehG)."
      : "Karat (ct) bei Diamanten und Edelsteinen ist eine gesetzliche Masseneinheit: 1 metrisches Karat (1 ct) entspricht exakt 0,2 Gramm (200 Milligramm bzw. 100 Punkten). Definiert auf der 4. Generalkonferenz für Maß und Gewicht (CGPM 1907) und international genormt nach DIN EN ISO 18323.";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative my-8">
      <div className="bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 rounded-2xl border-2 border-amber-400/80 p-5 sm:p-7 shadow-lg shadow-amber-500/5">
        {/* Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-200/70">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-sm">
              <Award className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-950">
              Offizielle Position-0 Definition &bull; Zitierfähige Fachexpertise
            </span>
          </div>

          <button
            onClick={copyDefinition}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 px-3 py-1.5 rounded-lg transition-colors min-h-[36px]"
            title="Definition in Zwischenablage kopieren"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-800" />
                <span>Definition kopieren</span>
              </>
            )}
          </button>
        </div>

        {/* Tab-Umschalter: Gold (kt) vs. Diamant (ct) */}
        <div className="flex rounded-xl bg-slate-100 p-1 mb-5 max-w-md">
          <button
            onClick={() => setActiveTab('gold')}
            className={`flex-1 py-2 text-xs sm:text-sm font-extrabold rounded-lg transition-all min-h-[44px] flex items-center justify-center gap-1.5 ${
              activeTab === 'gold'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="font-mono text-base font-black">kt</span>
            <span>Gold &amp; Schmuck (Feingehalt)</span>
          </button>
          <button
            onClick={() => setActiveTab('diamant')}
            className={`flex-1 py-2 text-xs sm:text-sm font-extrabold rounded-lg transition-all min-h-[44px] flex items-center justify-center gap-1.5 ${
              activeTab === 'diamant'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="font-mono text-base font-black">ct</span>
            <span>Diamanten &amp; Edelsteine (Gewicht)</span>
          </button>
        </div>

        {/* Google Featured Snippet Text */}
        {activeTab === 'gold' ? (
          <div className="space-y-4">
            <blockquote className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed bg-white/80 p-4 rounded-xl border border-amber-200">
              <strong>Karat (kt) bei Gold</strong> bezeichnet den <strong>Feingehalt des reinen Goldes in 24 Teilen</strong>. 
              <strong> 24 Karat</strong> entspricht reinem Feingold (<strong>999,9 ‰</strong>). 
              <strong> 18 Karat</strong> entspricht <strong>750 ‰</strong> (75 % Feingold) und 
              <strong> 14 Karat</strong> entspricht <strong>585 ‰</strong> (58,5 % Feingold). 
              Maßgeblich für die Stempelung von Schmuck in Deutschland ist das <strong>Gesetz über den Feingehalt der Gold- und Silberwaren (FeinGehG)</strong>.
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
              <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Formel Feingoldanteil:</div>
                  <div className="font-mono text-amber-900 mt-0.5">m(Feingold) = Gesamtgewicht × (kt / 24)</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Gesetzliche Stempelung:</div>
                  <div className="text-slate-600 mt-0.5">Angabe in Tausendsteln (§ 5 FeinGehG)</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Schmuck-Standard in DE:</div>
                  <div className="text-slate-600 mt-0.5">585er (14 kt) und 750er (18 kt) Echtgold</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <blockquote className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed bg-white/80 p-4 rounded-xl border border-amber-200">
              <strong>Karat (ct) bei Diamanten und Edelsteinen</strong> ist eine <strong>gesetzliche Masseneinheit</strong>: 
              <strong> 1 metrisches Karat (1 ct) entspricht exakt 0,2 Gramm (200 Milligramm bzw. 100 Punkten)</strong>. 
              Festgelegt wurde diese Definition auf der <strong>4. Generalkonferenz für Maß und Gewicht (CGPM 1907)</strong> und ist heute international nach <strong>DIN EN ISO 18323</strong> sowie dem <strong>CIBJO Diamond Blue Book</strong> verbindlich normiert.
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
              <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                <Scale className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Exakte Umrechnung:</div>
                  <div className="font-mono text-amber-900 mt-0.5">1 ct = 0,200 g = 200 mg = 100 Punkte</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                <Scale className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">1,00 ct Brillant:</div>
                  <div className="text-slate-600 mt-0.5">ca. 6,5 mm Durchmesser (Tolkowsky-Schliff)</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-slate-200 flex items-start gap-2">
                <Scale className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Die 4C der CIBJO:</div>
                  <div className="text-slate-600 mt-0.5">Carat (Gewicht), Clarity, Color, Cut</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
