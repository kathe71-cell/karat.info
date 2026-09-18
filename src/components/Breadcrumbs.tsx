import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-1 text-xs text-slate-500 flex items-center gap-1.5 flex-wrap">
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigateTo('/');
        }}
        className="flex items-center gap-1 hover:text-amber-800 transition-colors font-medium cursor-pointer"
      >
        <Home className="w-3.5 h-3.5 text-amber-600" />
        <span>Startseite</span>
      </a>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-bold text-slate-900" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo(item.path!);
                }}
                className="hover:text-amber-800 transition-colors font-medium cursor-pointer"
              >
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
