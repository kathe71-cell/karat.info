import React from 'react';
import { Sparkles, Layers, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const StyleGuide: React.FC = () => {
  return (
    <section id="styling" className="my-12">
      <div className="bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 rounded-3xl border border-amber-300 p-5 sm:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-amber-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-500 text-slate-950">
                <Sparkles className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Styling-Guide: Layering, Stacking &amp; Ear-Parties
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Profitipps für harmonische Schmuckkombinationen im Alltag, Büro und zu feierlichen Anlässen
            </p>
          </div>

          <a
            href={getAmazonAffiliateUrl('Layering Kette Set Damen Gold')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold flex items-center gap-1.5 transition-colors min-h-[44px]"
          >
            <span>Layering-Sets auf Amazon*</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* 1. Ketten-Layering */}
          <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                Trend-Regel Nr. 1
              </span>
              <h3 className="font-extrabold text-slate-900 text-base mt-2">
                Ketten-Layering (Necklace Stacking)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Kombinieren Sie immer <strong>drei verschiedene Längen und Texturen</strong>, um Verknoten zu vermeiden:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mt-3">
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">1.</span>
                  <span><strong>38-40 cm:</strong> Enger Choker oder feine Perlenkette</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">2.</span>
                  <span><strong>45 cm:</strong> Glatte Schlangenkette oder Paperclip-Kette</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">3.</span>
                  <span><strong>50-55 cm:</strong> Kette mit markantem Medaillon oder Münzanhänger</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              Tipp: Nutzen Sie einen <em>Multi-Ketten-Verschluss</em> gegen Verknoten.
            </div>
          </div>

          {/* 2. Ear-Party Look */}
          <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                Ohrenschmuck
              </span>
              <h3 className="font-extrabold text-slate-900 text-base mt-2">
                Die perfekte „Ear-Party“
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Vom Ohrläppchen nach oben hin immer feiner und kleiner werden:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mt-3">
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">1.</span>
                  <span><strong>Unteres Loch:</strong> Hauptakteur (z. B. 15 mm Scharnier-Creole oder Chandelier)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">2.</span>
                  <span><strong>Zweites Loch:</strong> Kleine Huggie-Creole mit winzigem Zirkonia</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">3.</span>
                  <span><strong>Knorpel/Helix:</strong> Klemmen Sie schmerzfrei einen <em>Ear Cuff</em> an</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              Kein Stechen nötig: Ear Cuffs halten durch sanfte Spannung an der Knorpelfalte.
            </div>
          </div>

          {/* 3. Mixed Metals & Bicolor */}
          <div className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-sm space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                Moderne Ästhetik
              </span>
              <h3 className="font-extrabold text-slate-900 text-base mt-2">
                Gold &amp; Silber mixen (Bicolor)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Die alte Regel „Gold und Silber niemals mischen“ ist längst überholt. So gelingt der Look modern:
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mt-3">
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">&bull;</span>
                  <span>Wählen Sie ein <strong>Brücken-Schmuckstück</strong>, das bereits beide Töne vereint.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">&bull;</span>
                  <span>Am Handgelenk: Eine silberne Armbanduhr mit einem goldenen Armreif kombinieren.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="font-mono font-bold text-amber-900">&bull;</span>
                  <span>Halten Sie die Formen einheitlich (z.B. alles minimalistisch oder alles chunky).</span>
                </li>
              </ul>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              Sorgt für einen lässigen, modernen Touch ohne formelle Strenge.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
