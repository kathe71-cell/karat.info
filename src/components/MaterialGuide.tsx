import React, { useState } from 'react';
import { Layers, ShieldCheck, Droplets, Gem, Sparkles, Check, HelpCircle } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const MaterialGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gold' | 'silber' | 'edelstahl' | 'perlen' | 'steine'>('gold');

  return (
    <section id="materialkunde" className="my-12">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <Layers className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Große Materialkunde: Echtschmuck &amp; Modeschmuck
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Welches Material passt zu Ihnen? Haltbarkeit, Wasserfestigkeit und Allergie-Verträglichkeit im direkten Vergleich
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex flex-wrap rounded-xl bg-slate-100 p-1 text-xs font-bold gap-1 self-start md:self-auto">
            {[
              { id: 'gold', label: 'Echtgold vs. Vergoldung' },
              { id: 'silber', label: '925 Sterling Silber' },
              { id: 'edelstahl', label: '316L Edelstahl (Wasserfest)' },
              { id: 'perlen', label: 'Echte Perlen & Muscheln' },
              { id: 'steine', label: 'Diamant, Moissanit & Zirkonia' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-2 rounded-lg transition-all min-h-[38px] ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Inhalt */}
        <div className="mt-6">
          {activeTab === 'gold' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-amber-950">
                  Massives 585 &amp; 750 Echtgold (DIN EN ISO 9202)
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Echtschmuck nach FeinGehG</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Besteht nach <strong>§ 5 FeinGehG</strong> zu 585/1000 (14 kt) bzw. 750/1000 (18 kt) aus reinem Feingold (Au). Es ist oxidationsresistent, korrosionsfrei und verliert auch nach Jahrzehnten weder Farbe noch Materialsubstanz.
                </p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> 100 % Allergiefrei &amp; Werthaltig
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-slate-600">
                  Gold Vermeil &amp; Gold Filled (FTC 16 CFR § 23.5)
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Hochwertige Edelmetall-Basis</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vermeil erfordert zwingend massives <strong>925 Sterling Silber</strong> als Trägermetall mit einer elektrolytisch aufgebrachten 18K-Goldschicht von mindestens <strong>2,5 Mikrometern Schichtdicke</strong>.
                </p>
                <div className="pt-2 text-xs font-bold text-amber-800 flex items-center gap-1.5">
                  <Check className="w-4 h-4" /> Edler Glanz zum Bruchteil des Preises
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-slate-600">
                  PVD-Vergoldeter 316L Edelstahl (DIN EN 1811)
                </div>
                <h3 className="font-extrabold text-slate-900 text-base">Vakuum-Plasma-Beschichtung</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Physical Vapour Deposition im Hochvakuum: Goldatome werden ionisiert und mit dem Stahlkristallgitter verbunden. Bis zu 10-mal abriebfester als normale Galvanik und absolut resistent gegen Chlor- und Schweiß-Laktate.
                </p>
                <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <Droplets className="w-4 h-4" /> 100 % Dusch-, Sport- &amp; Meerwasserfest
                </div>
              </div>
            </div>
          )}

          {activeTab === 'silber' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base">925 Sterling Silber &amp; Punzierung</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  925er Silber besteht zu 92,5 % aus reinem Feinsilber und 7,5 % Kupfer zur Härtung. Es ist der weltweite Standard für Echtsilberschmuck. 
                  Silber reagiert natürlicherweise mit Schwefelverbindungen in der Luft und läuft mit der Zeit dunkel an &ndash; lässt sich jedoch mit einem Poliertuch sofort wieder auf Hochglanz bringen.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>Tipp:</strong> Achten Sie auf <em>rhodiniertes Silber</em>. Eine hauchdünne Rhodiumschicht (aus der Platinfamilie) verhindert das Anlaufen dauerhaft.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <h3 className="font-extrabold text-amber-950 text-base">Richtige Aufbewahrung von Silberschmuck</h3>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Luftdicht lagern:</strong> Kleine Druckverschlussbeutel oder Schmuckkästen mit speziellem Anti-Tarnish-Samtbezug schützen vor Oxydation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Kein feuchtes Bad:</strong> Hohe Luftfeuchtigkeit im Badezimmer beschleunigt das Schwarzwerden von Silber massiv.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'edelstahl' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base">Warum 316L Chirurgen-Edelstahl die Modewelt erobert</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chirurgen-Edelstahl (Legierung 316L) ist extrem korrosionsbeständig, oxidiert nicht, rostet nicht und läuft niemals an. 
                  Im Gegensatz zu herkömmlichem Modeschmuck aus Messing oder Zinklegierungen hinterlässt Edelstahl <strong>keine grünen oder schwarzen Verfärbungen auf der Haut</strong>.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2 bg-white rounded border border-slate-200">
                    <strong className="text-slate-900 block">&check; Hypoallergen</strong>
                    Bindet Nickel fest im Gitter
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200">
                    <strong className="text-slate-900 block">&check; 100 % Wasserfest</strong>
                    Ideal für Sommer &amp; Strand
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
                <h3 className="font-extrabold text-emerald-950 text-base">Für wen eignet sich Edelstahl-Schmuck?</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ideal für alle, die Schmuck Tag und Nacht tragen möchten &ndash; beim Schwimmen, im Fitnessstudio, unter der Dusche. Zudem unschlagbar günstig für moderne Statement- und Chunky-Designs, die aus massivem Gold unbezahlbar wären.
                </p>
                <a
                  href={getAmazonAffiliateUrl('Wasserdichter Schmuck Edelstahl 18K vergoldet Damen')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold"
                >
                  <span>Wasserfesten Edelstahlschmuck auf Amazon ansehen*</span>
                </a>
              </div>
            </div>
          )}

          {activeTab === 'perlen' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">Preis-Leistungs-Sieger</span>
                <h3 className="font-bold text-slate-900 text-sm">Süßwasser-Zuchtperlen</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Werden in Flüssen und Seen gezüchtet. Bestehen fast vollständig aus echtem Perlmuttschichten ohne harten Kern. Extrem widerstandsfähig und herrlich lebendig.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">Luxus-Klassiker</span>
                <h3 className="font-bold text-slate-900 text-sm">Akoya-Salzwasserperlen</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aus japanischen Meeresgewässern. Berühmt für ihre perfekte Kreisrundheit und den spiegelartigen, kühlen Tiefenglanz (Lüster).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-purple-900 bg-purple-100 px-2 py-0.5 rounded">Trend-Design</span>
                <h3 className="font-bold text-slate-900 text-sm">Barock- &amp; Keshi-Perlen</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Organisch gewachsene, unregelmäßige Formen. Jede Barockperle ist ein unverwechselbares Unikat und steht im Zentrum moderner Haute-Couture-Looks.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'steine' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <span className="text-[10px] font-bold text-amber-900 bg-amber-200 px-2 py-0.5 rounded">Mohshärte 10 (Höchste)</span>
                <h3 className="font-bold text-slate-900 text-sm">Naturdiamant</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Das härteste Mineral der Erde. Nutzt sich im Alltag niemals ab und behält seine Brillanz über Jahrhunderte. Wertbeständig und emotional unersetzlich.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">Mohshärte 9,25</span>
                <h3 className="font-bold text-slate-900 text-sm">Moissanit</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Siliziumkarbid mit höherer Lichtbrechung (Feuer) als Diamanten. Extrem hart und kaum von echtem Diamant zu unterscheiden &ndash; bei ca. 10 % des Preises.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded">Mohshärte 8,5</span>
                <h3 className="font-bold text-slate-900 text-sm">Cubic Zirkonia (AAA)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Synthetischer Kristall. Perfekt für erschwinglichen Modeschmuck, Cocktailringe und Tennisarmbänder. Bietet maximalen Glamour für jedes Budget.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
