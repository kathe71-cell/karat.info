import React, { useState } from 'react';
import { Ruler, Sparkles, CheckCircle2, ChevronRight, AlertCircle, Info, ExternalLink } from 'lucide-react';
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
  const calculatedDiameter = (current.eu / Math.PI).toFixed(2);

  return (
    <section id="ringgroessen" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <Ruler className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Ringgrößen-Ratgeber &amp; Umrechner
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Umfang und Innendurchmesser nach DIN EN ISO 8653:2016 ermitteln; Umrechnung nach Juweliersstandards
            </p>
          </div>

          <a
            href={getAmazonAffiliateUrl('Ringmass Multisizer Ringstock Ringgroessenmesser')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-all flex items-center gap-1.5 min-h-[44px] shadow-sm"
          >
            <span>Ähnliche Angebote auf Amazon suchen *</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Interaktiver Größenwähler */}
          <div className="lg:col-span-6 space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              EU-Ringgröße / Innenumfang in mm auswählen:
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {RING_SIZES.map((size) => (
                <button
                  key={size.eu}
                  onClick={() => setSelectedEu(size.eu)}
                  type="button"
                  className={`py-2 px-3 rounded-xl font-mono text-sm font-bold border transition-all cursor-pointer ${
                    selectedEu === size.eu
                      ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm font-black'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {size.eu}
                </button>
              ))}
            </div>

            {/* Ergebnis-Karte */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-950">
                  Ausgewählte Ringgröße: EU {current.eu}
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Umfang U = {current.eu} mm
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Innendurchmesser</div>
                  <div className="font-mono font-black text-slate-900 text-base">{current.diameter} mm</div>
                  <div className="text-[9px] text-slate-400 mt-0.5 font-mono">({calculatedDiameter} mm gerundet)</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">US-Größe *</div>
                  <div className="font-mono font-black text-slate-900 text-base">{current.us}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Richtwert-Tabelle</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-amber-200">
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">UK-Größe *</div>
                  <div className="font-mono font-black text-slate-900 text-base">{current.uk}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">BS 6820 Richtwert</div>
                </div>
              </div>

              {/* Visuelle schematische Darstellung nach Vorgabe Punkt 6 */}
              <div className="flex flex-col items-center justify-center pt-3 pb-1 border-t border-amber-200/60">
                <div
                  className="rounded-full border-[4px] border-amber-500 bg-white flex flex-col items-center justify-center shadow-sm transition-all duration-300"
                  style={{
                    width: `${Math.round(current.diameter * 4.8)}px`,
                    height: `${Math.round(current.diameter * 4.8)}px`,
                  }}
                >
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Innen-Ø</span>
                  <span className="font-mono font-black text-slate-900 text-xs sm:text-sm leading-tight mt-0.5 whitespace-nowrap">
                    {current.diameter} mm
                  </span>
                </div>
                <span className="text-[11px] text-amber-950 font-bold mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                  Schematische Darstellung (nicht maßstabsgetreu)
                </span>
                <span className="text-[10px] text-slate-500 text-center max-w-sm mt-0.5">
                  Da Bildschirme je nach Gerät unterschiedliche Pixeldichten aufweisen, kann ohne Hardwareskalierung keine physikalisch exakte Abmessung dargestellt werden.
                </span>
              </div>
            </div>
          </div>

          {/* Ratgeber: Messmethoden & Formel */}
          <div className="lg:col-span-6 space-y-3 text-xs sm:text-sm text-slate-600">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              Mathematische Berechnung &amp; Messpraxis:
            </h3>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
              <strong className="text-slate-900 block font-bold">Die Kreisformel zur Ringgrößenberechnung:</strong>
              <p className="font-mono text-amber-950 text-xs bg-white p-2 rounded border border-slate-200">
                Innendurchmesser (d) = Umfang (U) ÷ π (3,14159)
              </p>
              <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                Beispiel EU 54: 54 mm ÷ 3,14159 ≈ 17,19 mm Innendurchmesser. <strong>Quellenhinweis zu den Normen:</strong> Die internationale Norm <strong>ISO 8653:2016</strong> regelt ausschließlich die Definition und Bezeichnung des Innenumfangs in Millimetern (EU-Größe). Die angegebenen US- und UK-Größen beruhen auf separaten Standards (z. B. British Standard BS 6820) und etablierten Juweliers-Umrechnungstabellen als Orientierungswerte.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs mt-0.5">1</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Innendurchmesser eines passenden Rings messen:</strong>
                Legen Sie einen gut sitzenden Ring auf ein stabiles Lineal oder verwenden Sie einen Messschieber, um die lichte Weite der Innenseite exakt abzulesen.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs mt-0.5">2</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Fingerknöchel berücksichtigen:</strong>
                Der Ring muss über das Fingergelenk gleiten. Messen Sie bei schlankem Finger und ausgeprägtem Knöchel stets auch den Umfang des Knöchels.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-xs mt-0.5">3</span>
              <div>
                <strong className="text-slate-900 block mb-0.5">Tageszeit &amp; Temperatur:</strong>
                Finger sind am Abend und bei warmer Witterung etwas breiter als am Morgen. Für Trau- und Verlobungsringe empfiehlt sich eine professionelle Ringmaß-Messung beim Juwelier oder mit einem Messstreifen.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
