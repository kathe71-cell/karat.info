import React, { useState } from 'react';
import { Gift, Heart, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const GiftFinder: React.FC = () => {
  const [recipient, setRecipient] = useState<'partnerin' | 'partner' | 'braut' | 'freundin'>('partnerin');
  const [budget, setBudget] = useState<'unter30' | '30bis100' | 'luxus'>('30bis100');

  const getRecommendation = () => {
    if (recipient === 'partnerin') {
      if (budget === 'unter30') {
        return {
          title: 'Wasserdichte Wave-Ringe & Layering-Ketten',
          desc: 'Moderne Trendstücke aus 18k vergoldetem Edelstahl, die jeden Tag getragen werden können.',
          query: 'Schmuck Geschenk Freundin Kette wasserfest Edelstahl vergoldet',
        };
      }
      if (budget === '30bis100') {
        return {
          title: 'Klassisches Zirkonia Tennis-Armband oder Süßwasserperlen',
          desc: 'Eleganter Glanz in 925 Sterling Silber mit edler Schmuckschatulle.',
          query: 'Tennisarmband 925 Silber Damen Geschenkbox Schmuck',
        };
      }
      return {
        title: '585 Echtgold Solitär-Ring oder Diamant-Ohrstecker',
        desc: 'Ein unvergesslicher Liebesbeweis fürs Leben mit echtem Naturdiamant und Zertifikat.',
        query: 'Solitaer Ring 585 Gold Diamant Brillant Damen Geschenk',
      };
    }

    if (recipient === 'partner') {
      if (budget === 'unter30') {
        return {
          title: 'Maskuline Edelstahl-Panzerkette oder Gravur-Armband',
          desc: 'Robuster, zeitloser Schmuck für jeden Tag aus antiallergenem 316L Edelstahl.',
          query: 'Herren Kette Panzerkette Edelstahl silber Geschenk',
        };
      }
      if (budget === '30bis100') {
        return {
          title: 'Geflochtenes Rindsleder-Armband mit Edelstahl-Magnetschließe',
          desc: 'Hochwertiges Lederarmband in stilvoller Geschenkbox.',
          query: 'Herren Lederarmband schwarz Edelstahl Magnetverschluss Geschenkbox',
        };
      }
      return {
        title: 'Massiver 925er Silber Siegelring mit Onyx oder Uhrenkasten',
        desc: 'Markanter Herrenring mit echtem Edelstein oder eine edle Uhrenbox mit Sichtfenster.',
        query: 'Herren Siegelring 925 Silber Onyx massiv Uhrenkasten',
      };
    }

    if (recipient === 'braut') {
      return {
        title: 'Brautschmuck-Set mit Perlen & Zirkonia',
        desc: 'Zarte Haarnadeln, Chandelier-Ohrringe und filigrane Y-Colliers für den großen Tag.',
        query: 'Brautschmuck Set Hochzeit Perlen Ohrringe Kette Haarschmuck',
      };
    }

    return {
      title: 'Ear-Cuff Set oder Scharnier-Creolen',
      desc: 'Stylischer Trendschmuck, der sofort für Begeisterung sorgt &ndash; ideal zum Geburtstag.',
      query: 'Ohrringe Geschenk Freundin Creolen Ear Cuff Set vergoldet',
    };
  };

  const rec = getRecommendation();

  return (
    <section id="geschenke" className="my-12">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-rose-100 text-rose-800 border border-rose-200">
                <Gift className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Interaktiver Schmuck-Geschenk-Finder
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Finden Sie in 2 Klicks die perfekte Überraschung für Geburtstage, Verlobung, Jahrestage oder Feiertage
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Filterauswahl */}
          <div className="lg:col-span-6 space-y-5">
            {/* Frage 1 */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Für wen suchen Sie ein Geschenk?
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
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold text-left transition-all ${
                      recipient === item.id
                        ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
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
                2. Welches Budget haben Sie eingeplant?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'unter30', label: 'Bis 30 €', sub: 'Kleine Freude' },
                  { id: '30bis100', label: '30 – 100 €', sub: 'Beliebteste Wahl' },
                  { id: 'luxus', label: 'Ab 100 €', sub: 'Echtschmuck / Luxus' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBudget(item.id as any)}
                    className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
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
          </div>

          {/* Empfehlungskarte */}
          <div className="lg:col-span-6 bg-gradient-to-br from-amber-50 to-amber-100/60 rounded-2xl border border-amber-300 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-950 mb-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Perfekte Geschenkempfehlung:</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                {rec.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {rec.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-amber-200">
              <a
                href={getAmazonAffiliateUrl(rec.query)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all min-h-[48px]"
              >
                <span>Passende Geschenke auf Amazon ansehen*</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="text-[10px] text-center text-amber-900/80 mt-2">
                * Werbelink / Partnerlink zu Amazon.de
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
