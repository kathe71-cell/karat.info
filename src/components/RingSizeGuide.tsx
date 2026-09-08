import React, { useState } from 'react';
import { Ruler, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

interface RingSizeMapping {
  eu: number; // Umfang in mm
  diameter: number; // Innen-Ø in mm
  us: string;
  uk: string;
}

const RING_SIZES: RingSizeMapping[] = [
  { eu: 48, diameter: 15.3, us: '4.5', uk: 'I 1/2' },
  { eu: 50, diameter: 15.9, us: '5.5', uk: 'K 1/2' },
  { eu: 52, diameter: 16.5, us: '6.0', uk: 'L 1/2' },
  { eu: 54, diameter: 17.2, us: '7.0', uk: 'N 1/2' },
  { eu: 56, diameter: 17.8, us: '7.5', uk: 'P' },
  { eu: 58, diameter: 18.5, us: '8.5', uk: 'R' },
  { eu: 60, diameter: 19.1, us: '9.0', uk: 'S 1/2' },
  { eu: 62, diameter: 19.7, us: '10.0', uk: 'U' },
  { eu: 64, diameter: 20.4, us: '11.0', uk: 'W' },
  { eu: 66, diameter: 21.0, us: '11.5', uk: 'X 1/2' },
  { eu: 68, diameter: 21.6, us: '12.5', uk: 'Z' },
];

export const RingSizeGuide: React.FC = () => {
  const [selectedEu, setSelectedEu] = useState<number>(54);

  const current = RING_SIZES.find((r) => r.eu === selectedEu) || RING_SIZES[3];

  return (
    <section id="ringgroessen" className="my-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <Ruler className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Ringgrößen-Finder &amp; Umrechner
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Ermitteln Sie die perfekte Passform für Verlobungs-, Trau- und Memoire-Ringe
            </p>
          </div>

          <a
            href={getAmazonAffiliateUrl('Ringmass Edelstahl Multisizer Ringstock Ringgroessenmesser')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 min-h-[44px]"
          >
            <span>Ringmaß-Set auf Amazon*</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Interaktiver Größenwähler */}
          <div className="lg:col-span-6 space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Fingerumfang / EU-Ringgröße auswählen:
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {RING_SIZES.map((size) => (
                <button
                  key={size.eu}
                  onClick={() => setSelectedEu(size.eu)}
                  type="button"
                  className={`py-2 px-3 rounded-xl font-mono text-sm font-bold border transition-all ${
                    selectedEu === size.eu
                      ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {size.eu}
                </button>
              ))}
            </div>

            {/* Ergebnis-Karte */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mt-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-950">
                Ausgewählte Ringgröße: EU {current.eu}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Innendurchmesser</div>
                  <div className="font-mono font-black text-slate-900 text-base">{current.diameter} mm</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">US-Größe</div>
                  <div className="font-mono font-black text-slate-900 text-base">{current.us}</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">UK-Größe</div>
                  <div className="font-mono font-black text-slate-900 text-base">{current.uk}</div>
                </div>
              </div>

              {/* Visuelle Ring-Schablone */}
              <div className="flex items-center justify-center pt-2">
                <div
                  className="rounded-full border-4 border-amber-500 bg-white flex items-center justify-center text-xs font-mono font-bold text-slate-800 shadow-sm"
                  style={{
                    width: `${current.diameter * 3.4}px`,
                    height: `${current.diameter * 3.4}px`,
                  }}
                >
                  Ø {current.diameter} mm
                </div>
              </div>
            </div>
          </div>

          {/* Ratgeber: Wie messe ich richtig? */}
          <div className="lg:col-span-6 space-y-3 text-xs sm:text-sm text-slate-600">
            <h3 className="font-bold text-slate-900 text-base mb-2">
              So ermitteln Sie Ihre Ringgröße zuhause:
            </h3>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs mt-0.5">1</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Vorhandenen passenden Ring messen (Genaueste Methode):</strong>
                Legen Sie einen gut sitzenden Ring auf ein Lineal oder nutzen Sie eine Schieblehre, um den <em>reinen Innendurchmesser</em> (ohne Ringschiene) auf den Millimeter genau abzulesen.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs mt-0.5">2</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Papierstreifen-Methode:</strong>
                Wickeln Sie einen 5 mm breiten Papierstreifen um die breiteste Stelle des Fingers (achten Sie auf den Fingerknöchel!). Markieren Sie die Überlappung und messen Sie die Länge in Millimetern = EU-Umfang.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs mt-0.5">3</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Tageszeit &amp; Temperatur beachten:</strong>
                Finger sind abends und bei Wärme meist etwas kräftiger als morgens. Messen Sie am besten am späten Nachmittag bei normaler Raumtemperatur.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
