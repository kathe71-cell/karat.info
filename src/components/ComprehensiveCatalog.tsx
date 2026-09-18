import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  Search, 
  ExternalLink, 
  Filter, 
  Tag, 
  X,
  ShieldCheck,
  Info
} from 'lucide-react';
import { PRODUCTS_CATALOG, getAmazonAffiliateUrl, CATEGORIES } from '../data/affiliateProducts';
import { navigateTo } from '../utils/navigation';

interface CatalogProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  isStandalonePage?: boolean;
}

export const ComprehensiveCatalog: React.FC<CatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  isStandalonePage = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'echtschmuck' | 'modeschmuck' | 'accessoire'>('all');

  // URL Query-Parameter für Kategorie auslesen falls standalone
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catParam = params.get('kategorie');
    if (catParam && CATEGORIES.some(c => c.id === catParam)) {
      onSelectCategory(catParam);
    }
  }, []);

  const handleCategoryClick = (id: string) => {
    onSelectCategory(id);
    if (isStandalonePage) {
      const newUrl = id === 'all' ? '/katalog' : `/katalog?kategorie=${encodeURIComponent(id)}`;
      window.history.replaceState({}, '', newUrl);
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((item) => {
      // Kategorie-Filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Typ-Filter (Echt vs Mode vs Accessoire)
      if (selectedType !== 'all') {
        if (selectedType === 'accessoire' && item.type !== 'accessoire' && item.type !== 'pflege') return false;
        if (selectedType !== 'accessoire' && item.type !== selectedType) return false;
      }
      // Textsuche
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchMat = item.material.toLowerCase().includes(q);
        const matchCat = item.categoryLabel.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchMat && !matchCat) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedType, searchQuery]);

  return (
    <section id="katalog" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        {/* Header & Suchleiste */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {isStandalonePage ? 'Schmuck-Katalog & Stil-Inspirationen' : 'Katalog: Stil-Ideen & Suchmuster'}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              {filteredProducts.length} redaktionell kuratierte Stil-Ideen &bull; Unabhängige Orientierung mit Partnerlinks zu Amazon
            </p>
          </div>

          {/* Suchfeld */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Suchen nach z. B. 585 Gold, Perlen, Creolen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Suche leeren"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Hinweis zur Unterscheidung von Ideen und konkreten Angeboten */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Transparenzhinweis:</strong> Die folgenden Einträge sind redaktionell kuratierte <em>Stil-Ideen und Suchmuster</em>. karat.info führt keine eigenen Warenlager. Ein Klick auf die Partnersuche leitet zu passenden aktuellen Händlerangeboten auf Amazon.de weiter. Bitte prüfen Sie Material, Feingehalt, Maße und Preise direkt beim Händler.
          </p>
        </div>

        {/* Filter-Leiste (Kategorien & Typen) */}
        <div className="py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 mt-2">
          {/* Typ-Filter */}
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs font-bold text-slate-500 self-center mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Typ:
            </span>
            {[
              { id: 'all', label: 'Alle' },
              { id: 'echtschmuck', label: 'Echtschmuck (Gold/Silber)' },
              { id: 'modeschmuck', label: 'Modeschmuck & Edelstahl' },
              { id: 'accessoire', label: 'Accessoires & Pflege' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                  selectedType === t.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Schnelle Kategorie-Dropdown/Reset */}
          {selectedCategory !== 'all' && (
            <button
              onClick={() => handleCategoryClick('all')}
              className="text-xs text-amber-900 hover:text-amber-950 font-extrabold flex items-center gap-1 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-300"
            >
              <span>Kategorie zurücksetzen ({CATEGORIES.find(c => c.id === selectedCategory)?.label || selectedCategory})</span>
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Produkt-Karten Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500 text-base font-semibold">Keine Stil-Ideen gefunden für Ihre Suchkriterien.</p>
            <button
              onClick={() => { setSearchQuery(''); handleCategoryClick('all'); setSelectedType('all'); }}
              className="mt-3 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer hover:bg-amber-400"
            >
              Alle Filter zurücksetzen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredProducts.map((item) => {
              const url = getAmazonAffiliateUrl(item.amazonSearchQuery);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-5">
                    {/* Header: Kategorie-Badge & Stil-Idee Kennzeichnung */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {item.categoryLabel}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                          Stil-Inspiration
                        </span>
                      </div>
                    </div>

                    {/* Titel */}
                    <h3 className="font-black text-slate-900 text-base group-hover:text-amber-800 transition-colors leading-snug mb-2">
                      {item.title}
                    </h3>

                    {/* Beschreibung */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Spezifikationen & Orientierungswerte */}
                    <div className="space-y-1.5 text-[11px] border-t border-slate-100 pt-3 text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Material-Fokus:</span>
                        <strong className="text-slate-800 text-right font-medium max-w-[200px] truncate">{item.material}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Merkmal:</span>
                        <strong className="text-amber-950 font-semibold">{item.highlight}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Budget-Orientierung:</span>
                        <span className="text-slate-900 font-bold">{item.priceRange}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer mit verbindlicher CTA-Beschriftung nach Vorgabe */}
                  <div className="p-4 bg-slate-50 border-t border-slate-100">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm min-h-[44px]"
                    >
                      <span>Ähnliche Angebote auf Amazon suchen *</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                    </a>
                    <div className="text-[10px] text-center text-slate-500 mt-1.5">
                      * Werbelink / Partnerlink zu Amazon.de &bull; Händlerpreise prüfen
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Amazon & PAngV Disclosure Box mit konkreter Erhebungsmethode */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-2">
          <div className="flex items-start sm:items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
            <span className="font-semibold text-slate-700">
              * Werbekennzeichnung, Preisangaben &amp; Erhebungsmethode (§ 5 UWG &amp; PAngV):
            </span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. <strong>Erhebungsmethode der Budget-Orientierungen:</strong> Die angegebenen Preisspannen beruhen auf einer stichprobenartigen Erhebung gängiger Angebote im deutschen Online-Handel (u. a. Marktplätze Amazon.de und Otto.de sowie Kataloge etablierter Schmuckversender, Erhebungsstand: September 2026). Ausgewertet wurden typische Preisfenster für Standardmodelle des jeweiligen Materials (z. B. 585er Goldringe mit 1,5 bis 3 g Gewicht, 925er Echtsilberketten oder 316L Edelstahlschmuck). Reale Endpreise variieren je nach tagesaktuellem Edelmetallkurs, spezifischem Feingewicht, Steinqualitäten und Händlerkonditionen. Ein Kaufvertrag kommt ausschließlich mit dem jeweiligen Verkäufer auf Amazon.de zustande.
          </p>
        </div>
      </div>
    </section>
  );
};
