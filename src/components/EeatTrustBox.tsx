import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';

export const EeatTrustBox: React.FC = () => {
  return (
    <section className="my-10">
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 text-xs text-slate-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-sm">
                  Fachredaktion karat.info &bull; E-E-A-T Qualitätsprüfung
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" /> Verifiziert
                </span>
              </div>
              <p className="text-slate-500 mt-0.5">
                Stand: <strong>März 2026</strong> &bull; Geprüft nach FeinGehG, DIN EN ISO 18323 &amp; CIBJO Blue Books
              </p>
            </div>
          </div>

          <div className="text-[11px] text-slate-500">
            Letzte redaktionelle Prüfung: <strong>März 2026</strong>
          </div>
        </div>

        {/* Verifizierungs-Säulen */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="flex items-start gap-2">
            <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Feingehalte &amp; Punzierung:</strong>
              Echtschmuck-Klassifizierung nach dem deutschen Gesetz über den Feingehalt der Gold- und Silberwaren (FeinGehG).
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Material- &amp; Hautverträglichkeit:</strong>
              EU-Nickel-Richtlinie (REACH-Verordnung) und Zertifizierungen für 316L Chirurgen-Edelstahl und Echtsilber.
            </div>
          </div>

          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Kuratierte Empfehlungen:</strong>
              Unabhängige Produktauswahl basierend auf echten Kundenbewertungen, Verarbeitungsqualität und Tragekomfort.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
