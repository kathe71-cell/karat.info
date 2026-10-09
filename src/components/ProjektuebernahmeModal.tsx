import React from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjektuebernahmeModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xl text-slate-900 space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-xl font-bold text-slate-950">Projektübernahme</h3>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm space-y-4 text-slate-600">
          <p className="text-base leading-relaxed text-slate-800">
            Eine Übernahme von karat.info als vollständiges Projekt ist grundsätzlich möglich.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="font-semibold mb-3 text-slate-800">Gegenstand einer möglichen Übernahme können sein:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Domain karat.info</li>
              <li>vollständiges Website-Projekt</li>
              <li>Quellcode</li>
              <li>bestehende Inhalte</li>
              <li>projektspezifische technische Komponenten</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-sm font-bold text-slate-900 mb-1">Interesse an einer Projektübernahme?</h4>
            <p className="mb-4">Anfragen bitte per E-Mail an jens@kathe.org.</p>
            <a 
              href="mailto:jens@kathe.org?subject=Projektübernahme%20karat.info"
              className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-medium text-sm transition-colors cursor-pointer"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
