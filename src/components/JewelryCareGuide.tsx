import React from 'react';
import { ShieldCheck, Check, AlertTriangle, Sparkles, ChevronRight, ExternalLink, HelpCircle, BookOpen } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const JewelryCareGuide: React.FC = () => {
  return (
    <section id="schmuckpflege" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Schmuckpflege, Reinigung &amp; Ultraschall
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Schonende Werterhaltung nach Empfehlungen des Gemological Institute of America (GIA)
            </p>
          </div>

          <a
            href={getAmazonAffiliateUrl('Ultraschallreiniger Schmuck Edelstahl digital')}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-all flex items-center gap-1.5 min-h-[44px] shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ähnliche Angebote auf Amazon suchen *</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Differenzierte Ultraschall-Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Risikobewertung Ultraschall */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                <span>Ultraschallbad: Risiken &amp; Differenzierung</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Ultraschallgeräte erzeugen mikroskopische Kavitationsbläschen in Flüssigkeiten. Die dabei freiwerdenden Stoßwellen können mikroskopische Risse vergrößern, Steinfüllungen herauslösen oder lose Krappen weiter aufbiegen.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-emerald-950 block">Grundsätzlich nur bei intakten, unbehandelten Stücken:</strong>
                  <span className="text-emerald-900 leading-relaxed">
                    Unbehandelte Naturdiamanten ohne Frakturfüllungen, unbehandelte Saphire und Rubine sowie massives Gelbgold (585/750) oder Platin 950 mit fest sitzenden Fassungen.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-rose-950 block">Niemals in den Ultraschall geben:</strong>
                  <span className="text-rose-900 leading-relaxed">
                    Smaragde (oft mit Ölen oder Kunstharz verfüllt), rissgefüllte Diamanten/Rubine, Zuchtperlen, Perlmutt, Opale, Türkise, Korallen, Lapislazuli, Tansanite, geklebter Schmuck sowie Stücke mit lockeren Fassungen oder feinen PVD-Beschichtungen.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950 leading-relaxed">
                  <strong>Unbekannter Stein oder unbekannte Behandlung?</strong><br />
                  Verzichten Sie im Zweifel auf Ultraschall und lassen Sie das Schmuckstück vorab von einem Goldschmied oder Sachverständigen gemmologisch prüfen.
                </div>
              </div>
            </div>
          </div>

          {/* Schonende Hausreinigung & Primärquellen */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-extrabold text-amber-950 text-base">
                Schonende Handreinigung für zuhause
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Für robuste Edelmetalle und harte Steine (nicht für Perlen, Opale oder wasserempfindliche Klebungen geeignet):
              </p>

              <div className="space-y-3 text-xs text-slate-700 mt-3">
                <div className="flex gap-3 items-start">
                  <span className="font-black text-amber-950 bg-amber-200 px-2 py-0.5 rounded text-xs">1</span>
                  <div>
                    <strong className="text-slate-900 block">Lauwarmes Wasser &amp; milde Seife:</strong>
                    Einige Tropfen mildes Geschirrspülmittel ohne Balsame in handwarmes Wasser geben. Schmuck kurz anfeuchten oder wenige Minuten einweichen (gilt nicht für Perlen oder poröse Steine!).
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="font-black text-amber-950 bg-amber-200 px-2 py-0.5 rounded text-xs">2</span>
                  <div>
                    <strong className="text-slate-900 block">Weiche Babyzahnbürste:</strong>
                    Mit sanftem Druck und kreisenden Bewegungen Verschmutzungen hinter Fassungen und Kettengliedern behutsam lösen.
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="font-black text-amber-950 bg-amber-200 px-2 py-0.5 rounded text-xs">3</span>
                  <div>
                    <strong className="text-slate-900 block">Klarspülen &amp; Poliertuch:</strong>
                    Unter klarem Wasser abspülen (Abfluss im Waschbecken vorher schließen!) und mit einem fusselfreien Tuch sanft trockentupfen.
                  </div>
                </div>
              </div>
            </div>

            {/* Primärquellen Verlinkung */}
            <div className="pt-3 border-t border-amber-200 text-xs space-y-1.5">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                Fachliche Primärquellen (GIA - Gemological Institute of America):
              </div>
              <ul className="space-y-1 text-[11px] text-slate-600">
                <li>
                  &bull; <a href="https://4cs.gia.edu/en-us/blog/how-to-clean-diamond-ring/" target="_blank" rel="noopener noreferrer"  className="text-amber-900 font-semibold underline inline-flex items-center gap-1">GIA Guide: How to Clean a Diamond Ring <ExternalLink className="w-3 h-3" /></a>
                </li>
                <li>
                  &bull; <a href="https://www.gia.edu/gem-care-guide" target="_blank" rel="noopener noreferrer" className="text-amber-900 font-semibold underline inline-flex items-center gap-1">GIA Gem Care and Cleaning Guide <ExternalLink className="w-3 h-3" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
