import React, { useState } from 'react';
import { Sparkles, Star, ExternalLink, ShieldCheck, Tag } from 'lucide-react';
import { JEWELRY_PRODUCTS, getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const AffiliateShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filtered = selectedCategory === 'all'
    ? JEWELRY_PRODUCTS
    : JEWELRY_PRODUCTS.filter((p) => {
        if (selectedCategory === 'schmuck') return p.category === 'gold' || p.category === 'diamant';
        if (selectedCategory === 'pflege') return p.category === 'pflege';
        if (selectedCategory === 'werkzeug') return p.category === 'werkzeug' || p.category === 'zubehoer';
        return true;
      });

  return (
    <section id="schmuck" className="my-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Kuratierte Schmuck- &amp; Zubehör-Empfehlungen
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Geprüfter Echtschmuck (585 &amp; 750 Gold, Diamanten), professionelle Schmuckpflege und Präzisions-Prüfwerkzeuge
            </p>
          </div>

          {/* Filter Kategorie */}
          <div className="flex flex-wrap rounded-xl bg-slate-100 p-1 text-xs font-bold gap-1 self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-lg transition-all min-h-[40px] ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Alle Artikel ({JEWELRY_PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('schmuck')}
              className={`px-3 py-2 rounded-lg transition-all min-h-[40px] ${
                selectedCategory === 'schmuck'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Echtschmuck &amp; Diamanten
            </button>
            <button
              onClick={() => setSelectedCategory('pflege')}
              className={`px-3 py-2 rounded-lg transition-all min-h-[40px] ${
                selectedCategory === 'pflege'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pflege &amp; Ultraschall
            </button>
            <button
              onClick={() => setSelectedCategory('werkzeug')}
              className={`px-3 py-2 rounded-lg transition-all min-h-[40px] ${
                selectedCategory === 'werkzeug'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Prüfwerkzeuge &amp; Lupen
            </button>
          </div>
        </div>

        {/* Produkt-Kacheln */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((item) => {
            const affiliateUrl = getAmazonAffiliateUrl(item.amazonSearchQuery, item.asin);
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5">
                  {/* Badge & Rating */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-200">
                      {item.highlight}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-700 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{item.rating}</span>
                      <span className="text-[10px] text-slate-400 font-normal">({item.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-800 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                    <div className="flex justify-between">
                      <span>Material:</span>
                      <strong className="text-slate-800">{item.material}</strong>
                    </div>
                    {item.karat && (
                      <div className="flex justify-between">
                        <span>Feingehalt / Karat:</span>
                        <strong className="text-amber-900 font-mono">{item.karat}</strong>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Preisspanne:</span>
                      <span className="text-slate-800 font-medium">{item.priceNote}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with CTA */}
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                  <a
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm min-h-[44px]"
                  >
                    <span>Auf Amazon ansehen*</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                  </a>
                  <div className="text-[10px] text-center text-slate-400 mt-1.5">
                    * Werbelink / Partnerlink zu Amazon.de
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Offizieller Amazon Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              <strong>Transparenzhinweis:</strong> * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Preise und Verfügbarkeiten werden direkt von Amazon.de bereitgestellt.
            </span>
          </div>
          <span className="text-[10px] text-slate-400 shrink-0">Store-ID: esstri-21 &bull; Tag: karat.info-21</span>
        </div>
      </div>
    </section>
  );
};
