import React, { useState } from 'react';
import { Gift, Heart, Sparkles, ExternalLink, ChevronRight, Info } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const GiftFinder: React.FC = () => {
  const [recipient, setRecipient] = useState<'partnerin' | 'partner' | 'braut' | 'freundin'>('partnerin');
  const [budget, setBudget] = useState<'unter30' | '30bis100' | 'luxus'>('30bis100');

  const getRecommendation = () => {
    if (recipient === 'partnerin') {
      if (budget === 'unter30') {
        return {
          title: 'Zarte Layering-Kette oder Wave-Ring',
          desc: 'Moderne Stil-Idee aus vergoldetem Edelstahl oder 925 Silber als unkomplizierte Überraschung für den Alltag.',
          query: 'Schmuck Geschenk Freundin Kette wasserfest Edelstahl vergoldet',
        };
      }
      if (budget === '30bis100') {
        return {
          title: 'Klassisches Tennis-Armband oder Süßwasserperlen-Ohrstecker',
          desc: 'Zeitlose Eleganz in 925 Sterling Silber mit funkelnden Steinen, passend für Jubiläen oder Geburtstage.',
          query: 'Tennisarmband 925 Silber Damen Geschenkbox Schmuck',
        };
      }
      return {
        title: 'Solitär-Ring oder Feingold-Kette (585 / 14 Karat)',
        desc: 'Beständiger Echtschmuck aus massivem Gold für Verlobung, runde Geburtstage oder besondere Meilensteine.',
        query: 'Solitaer Ring 585 Gold Diamant Brillant Damen Geschenk',
      };
    }

    if (recipient === 'partner') {
      if (budget === 'unter30') {
        return {
          title: 'Edelstahl-Panzerkette oder mattes Gliederarmband',
          desc: 'Robuster Herrenschmuck aus formstabilem 316L Edelstahl für den täglichen Freizeitlook.',
          query: 'Herren Kette Panzerkette Edelstahl silber Geschenk',
        };
      }
      if (budget === '30bis100') {
        return {
          title: 'Geflochtenes Lederarmband mit Edelstahl-Schließe',
          desc: 'Hochwertiges Armband in dunklen Farbtönen mit praktischer Magnetschließe.',
          query: 'Herren Lederarmband schwarz Edelstahl Magnetverschluss Geschenkbox',
        };
      }
      return {
        title: '925 Silber Siegelring oder geräumige Uhrenbox',
        desc: 'Markanter Herrenring mit Naturstein-Einlage oder eine Schatulle zur staubgeschützten Uhrenaufbewahrung.',
        query: 'Herren Siegelring 925 Silber Onyx massiv Uhrenkasten',
      };
    }

    if (recipient === 'braut') {
      return {
        title: 'Brautschmuck-Set mit Perlen & zarten Kristallen',
        desc: 'Filigrane Ohrhänger, Haarnadeln und Y-Ketten, abgestimmt auf weiße Brautkleider und Hochsteckfrisuren.',
        query: 'Brautschmuck Set Hochzeit Perlen Ohrringe Kette Haarschmuck',
      };
    }

    return {
      title: 'Ear-Cuff Set oder Scharnier-Creolen',
      desc: 'Vielseitige Trendstücke zum Kombinieren (Ear-Party), ideal für Geburtstage unter Freundinnen.',
      query: 'Ohrringe Geschenk Freundin Creolen Ear Cuff Set vergoldet',
    };
  };

  const rec = getRecommendation();

  return (
    <section id="geschenke" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-rose-100 text-rose-800 border border-rose-200">
                <Gift className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Schmuck-Geschenk-Ideenfinder
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Inspirationen und Suchvorlagen nach Anlass, Beschenkten und individuellem Budgetrahmen
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Filterauswahl */}
          <div className="lg:col-span-6 space-y-5">
            {/* Frage 1 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Für wen suchen Sie eine Geschenkidee?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'partnerin', label: 'Für die Partnerin / Frau' },
                  { id: 'partner', label: 'Für den Partner / Mann' },
                  { id: 'braut', label: 'Für die Braut / Hochzeit' },
                  { id: 'freundin', label: 'Beste Freundin / Schwester' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setRecipient(item.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer ${
                      recipient === item.id
                        ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm font-black'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frage 2 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Welcher Budgetrahmen ist angedacht?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'unter30', label: 'Bis 30 €', sub: 'Kleine Freude' },
                  { id: '30bis100', label: '30 – 100 €', sub: 'Beliebter Rahmen' },
                  { id: 'luxus', label: 'Ab 100 €', sub: 'Echtschmuck' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBudget(item.id as any)}
                    className={`py-2 px-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      budget === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <div className="font-extrabold text-xs">{item.label}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Wichtiger Händler-Hinweis */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Prüfung beim Händler erforderlich:</strong> Unser Ideenfinder generiert passende Suchbegriffe zu Amazon-Sortimenten. Reale Preise, Feingehalt, Passform und Lieferzeiten variieren je nach Händler und müssen auf der jeweiligen Produktseite geprüft werden.
              </p>
            </div>
          </div>

          {/* Empfehlungskarte */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-2xl border border-amber-300 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-950 mb-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Kuratierte Geschenk-Idee:</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                {rec.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {rec.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-amber-200/80">
              <a
                href={getAmazonAffiliateUrl(rec.query)}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all min-h-[48px]"
              >
                <span>Ähnliche Angebote auf Amazon suchen *</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="text-[10px] text-center text-amber-950/80 mt-2">
                * Werbelink / Partnerlink zu Amazon.de &bull; Händlerpreise und Verfügbarkeit prüfen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
