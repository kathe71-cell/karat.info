import React from 'react';
import { BookOpen, Award, FileText, CheckCircle2, UserCheck } from 'lucide-react';

export const EeatTrustBox: React.FC = () => {
  return (
    <section className="my-8">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-7 text-xs text-slate-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
              <UserCheck className="w-6 h-6 text-amber-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                  Redaktionelle Methodik &amp; Transparenz
                </span>
              </div>
              <p className="text-slate-500 mt-0.5 text-xs">
                Verantwortliche Fachrecherche: Redaktionsteam karat.info &bull; Stand: <strong>September 2026</strong>
              </p>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
            Letzte redaktionelle Aktualisierung: <strong>September 2026</strong>
          </div>
        </div>

        {/* Transparenz-Säulen */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-5">
          <div className="flex items-start gap-2.5">
            <FileText className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block mb-0.5">Rechtliche Feingehaltsprüfung:</strong>
              Grundlage für Angaben zu 585/750 Gold und 925 Silber ist das deutsche <em>Gesetz über den Feingehalt der Gold- und Silberwaren (FeinGehG)</em>.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block mb-0.5">Gemmologische Fachquellen:</strong>
              Pflege- und Reinigungshinweise stützen sich auf wissenschaftliche Leitfäden des <em>Gemological Institute of America (GIA)</em>.
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Award className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block mb-0.5">Auswahlverfahren &amp; Kriterien:</strong>
              Vorgestellte Stil-Ideen basieren auf Materialtransparenz, Kundenresonanz bei Partnern und Relevanz für den deutschen Markt.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
