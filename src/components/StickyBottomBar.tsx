import React from 'react';
import { Calculator, Sparkles, BookOpen, Ruler } from 'lucide-react';

export const StickyBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-white/95 backdrop-blur border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="flex items-center justify-around gap-1 max-w-md mx-auto">
        <a
          href="#rechner"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-700 hover:text-amber-800 hover:bg-amber-50 text-[10px] font-bold min-h-[48px] min-w-[64px]"
        >
          <Calculator className="w-5 h-5 text-amber-600 mb-0.5" />
          <span>Rechner</span>
        </a>

        <a
          href="#schmuck"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl bg-amber-500 text-slate-950 text-[11px] font-extrabold shadow-sm min-h-[48px] min-w-[120px]"
        >
          <Sparkles className="w-5 h-5 mb-0.5" />
          <span>Schmuck*</span>
        </a>

        <a
          href="#punzierung"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-700 hover:text-amber-800 hover:bg-amber-50 text-[10px] font-bold min-h-[48px] min-w-[64px]"
        >
          <BookOpen className="w-5 h-5 text-amber-600 mb-0.5" />
          <span>Punzen</span>
        </a>

        <a
          href="#ringgroessen"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-700 hover:text-amber-800 hover:bg-amber-50 text-[10px] font-bold min-h-[48px] min-w-[64px]"
        >
          <Ruler className="w-5 h-5 text-amber-600 mb-0.5" />
          <span>Größen</span>
        </a>
      </div>
    </div>
  );
};
