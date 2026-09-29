import React from 'react';
import { Sparkles, Layers, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const StyleGuide: React.FC = () => {
  return (
    <section id="styling" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Styling-Guide: Layering, Stacking &amp; Kombinationen
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Praktische Styling-Tipps zum Kombinieren verschiedener Kettenlängen, Ohrringen und Metalltönen
            </p>
          </div>

          <a
            href={getAmazonAffiliateUrl('Layering Kette Set Damen Gold')}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 transition-colors min-h-[44px] shadow-sm"
          >
            <span>Ähnliche Angebote auf Amazon suchen *</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* 1. Ketten-Layering */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                Stil-Tipp 1
              </span>
              <h3 className="font-extrabold text-slate-900 text-base mt-2">
                Ketten-Layering (Necklace Stacking)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Kombinieren Sie unterschiedliche Längen und Kettenglieder, um Tiefe zu erzeugen und Verheddern zu reduzieren:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mt-3">
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">1.</span>
                  <span><strong>38 – 40 cm:</strong> Halsnaher Choker oder feine Perlenkette</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">2.</span>
                  <span><strong>45 cm:</strong> Glatte Schlangenkette oder Paperclip-Gliederkette</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">3.</span>
                  <span><strong>50 – 60 cm:</strong> Kette mit Medaillon, Münze oder Steinanhänger</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
              Tipp: Mehrfach-Verschlussadapter erleichtern das Anlegen mehrerer Ketten.
            </div>
          </div>

          {/* 2. Ear-Party Look */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                Stil-Tipp 2
              </span>
              <h3 className="font-extrabold text-slate-900 text-base mt-2">
                Die harmonische „Ear-Party“
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Vom unteren Ohrläppchen nach oben hin zu feineren Elementen übergehen:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mt-3">
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">1.</span>
                  <span><strong>Erstes Ohrloch:</strong> Größere Creole oder Hänger als Fokus</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">2.</span>
                  <span><strong>Zweites Loch:</strong> Kleine Huggie-Creole oder dezenter Stecker</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">3.</span>
                  <span><strong>Ohrmuschel / Knorpel:</strong> Knorpelklemme (Ear Cuff) ohne Piercing</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
              Ear Cuffs lassen sich flexibel anlegen, ohne dass ein neues Ohrloch nötig ist.
            </div>
          </div>

          {/* 3. Mixed Metals & Bicolor */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-950 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                Stil-Tipp 3
              </span>
              <h3 className="font-extrabold text-slate-900 text-base mt-2">
                Metalle mischen (Mixed Metals)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Die alte Regel „Gold und Silber niemals mischen“ gilt modisch längst als überholt:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mt-3">
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">&bull;</span>
                  <span><strong>Verbindungsstück wählen:</strong> Ein Bicolor-Ring oder eine zweifarbige Armbanduhr verbindet Gold und Silber harmonisch.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">&bull;</span>
                  <span><strong>Proportionen beachten:</strong> 70 % einer Leitfarbe mit 30 % Kontrastmetall sorgt für visuelle Balance.</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
              Ein gezielter Metallmix wirkt lebendiger und flexibler zur Garderobe.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
