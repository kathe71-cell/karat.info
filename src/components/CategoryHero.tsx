import React from 'react';
import { 
  Sparkles, 
  Crown, 
  Link as LinkIcon, 
  CircleDot, 
  Smile, 
  Activity, 
  Flame, 
  Shield, 
  Box, 
  HeartHandshake
} from 'lucide-react';
import { CATEGORIES } from '../data/affiliateProducts';
import { navigateTo } from '../utils/navigation';

interface CategoryHeroProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryHero: React.FC<CategoryHeroProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ringe': return <CircleDot className="w-5 h-5" />;
      case 'ketten': return <LinkIcon className="w-5 h-5" />;
      case 'ohrschmuck': return <Smile className="w-5 h-5" />;
      case 'armschmuck': return <Activity className="w-5 h-5" />;
      case 'modeschmuck': return <Flame className="w-5 h-5" />;
      case 'herren': return <Shield className="w-5 h-5" />;
      case 'accessoires': return <Crown className="w-5 h-5" />;
      case 'uhren-organizer': return <Box className="w-5 h-5" />;
      case 'pflege': return <Sparkles className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    navigateTo('/katalog', catId);
  };

  return (
    <section className="my-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Schmuck-Kategorien &amp; Kollektionen
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl mx-auto">
          Wählen Sie eine Kategorie, um kuratierte Stil-Ideen, Feingehalte und Kaufkriterien direkt aufzurufen:
        </p>
      </div>

      {/* Grid aller Kategorien */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between group min-h-[96px] cursor-pointer ${
                isSelected
                  ? 'border-amber-500 bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-500/30'
                  : 'border-slate-200 bg-white hover:border-amber-400 hover:shadow-md text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`p-2 rounded-xl transition-colors ${
                    isSelected
                      ? 'bg-slate-950 text-amber-400'
                      : 'bg-amber-100 text-amber-900 group-hover:bg-amber-500 group-hover:text-slate-950'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                </span>
                <span
                  className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${
                    isSelected
                      ? 'bg-slate-950/20 text-slate-950 font-black'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {cat.count} Ideen
                </span>
              </div>
              <div>
                <h3 className="font-extrabold text-xs sm:text-sm tracking-tight leading-snug">
                  {cat.label}
                </h3>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
