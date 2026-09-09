import React from 'react';
import { Sparkles, Layers, Gift, ShieldCheck } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-white/95 backdrop-blur border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="flex items-center justify-around gap-1 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => scrollToSection('katalog')}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl bg-amber-500 text-slate-950 text-[11px] font-extrabold shadow-sm min-h-[48px] min-w-[100px] cursor-pointer"
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span>Katalog*</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('materialkunde')}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-700 hover:text-amber-800 hover:bg-amber-50 text-[10px] font-bold min-h-[48px] min-w-[64px] cursor-pointer"
        >
          <Layers className="w-5 h-5 text-amber-600 mb-0.5" />
          <span>Material</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('geschenke')}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-700 hover:text-amber-800 hover:bg-amber-50 text-[10px] font-bold min-h-[48px] min-w-[64px] cursor-pointer"
        >
          <Gift className="w-5 h-5 text-amber-600 mb-0.5" />
          <span>Geschenke*</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToSection('schmuckpflege')}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-700 hover:text-amber-800 hover:bg-amber-50 text-[10px] font-bold min-h-[48px] min-w-[64px] cursor-pointer"
        >
          <ShieldCheck className="w-5 h-5 text-amber-600 mb-0.5" />
          <span>Pflege</span>
        </button>
      </div>
    </div>
  );
};
