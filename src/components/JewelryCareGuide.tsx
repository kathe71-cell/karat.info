import React from 'react';
import { ShieldCheck, Check, AlertTriangle, Sparkles, ChevronRight } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const JewelryCareGuide: React.FC = () => {
  return (
    <section id="schmuckpflege" className="my-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Schmuckpflege &amp; Werterhalt
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Fachgerechte Reinigung von Gold-, Diamant- und Edelsteinschmuck ohne Materialverlust
            </p>
          </div>

          <a
            href={getAmazonAffiliateUrl('Ultraschallreiniger Schmuck Edelstahl')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-colors flex items-center gap-1.5 min-h-[44px] shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ultraschallreiniger auf Amazon*</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Ultraschall-Verträglichkeit Matrix */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span>Ultraschallbad-Eignung nach Edelsteinart</span>
            </h3>
            <p className="text-xs text-slate-600">
              Ultraschallwellen erzeugen mikroskopische Kavitationsbläschen. Bei porösen oder geölten Steinen führt dies zu Rissen und Trübungen.
            </p>

            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-emerald-950 block">Geeignet für Ultraschall:</strong>
                  <span className="text-emerald-800">
                    Diamanten/Brillanten (ungefüllt), Saphire, Rubine, massives 585/750 Gelbgold, Platin 950.
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-rose-950 block">NIEMALS in den Ultraschall:</strong>
                  <span className="text-rose-800">
                    Smaragde (oft geölt), Zuchtperlen, Perlmutt, Opale, Türkise, Korallen, Lapislazuli, Tansanite und Schmuck mit geklebten Steinen.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Richtige Heimpflege */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4">
            <h3 className="font-bold text-amber-950 text-sm">
              Die goldene 3-Schritte-Reinigung für zuhause
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex gap-3 items-start">
                <span className="font-black text-amber-900 bg-amber-200 px-2 py-0.5 rounded text-xs">1</span>
                <div>
                  <strong className="text-slate-900 block">Lauwarmes Seifenwasser:</strong>
                  Ein mildes Geschirrspülmittel ohne rückfettende Balsame in warmes Wasser geben und den Schmuck ca. 10 Minuten einweichen lassen.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="font-black text-amber-900 bg-amber-200 px-2 py-0.5 rounded text-xs">2</span>
                <div>
                  <strong className="text-slate-900 block">Weiche Baby-Zahnbürste:</strong>
                  Mit kreisenden Bewegungen die Rückseite der Diamantfassung und die Zwischenräume sanft abbürsten, um Kosmetik- und Seifenfilme zu lösen.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="font-black text-amber-900 bg-amber-200 px-2 py-0.5 rounded text-xs">3</span>
                <div>
                  <strong className="text-slate-900 block">Klarspülen &amp; Poliertuch:</strong>
                  Gründlich unter fließendem Wasser (Achtung: Abfluss verschließen!) abspülen und mit einem speziellen Schmuck-Poliertuch trocknen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
