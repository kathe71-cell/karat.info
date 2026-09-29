import React, { useState } from 'react';
import { Layers, ShieldCheck, Droplets, Gem, Sparkles, Check, HelpCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const MaterialGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gold' | 'silber' | 'edelstahl' | 'perlen' | 'steine'>('gold');

  return (
    <section id="materialkunde" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <Layers className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Materialkunde: Schmuckmetalle &amp; Steine
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Faktenbasierte Kaufberatung: Zusammensetzung, Beschichtungsverfahren und Haltbarkeitsfaktoren im Detail
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex flex-wrap rounded-xl bg-slate-100 p-1 text-xs font-bold gap-1 self-start md:self-auto">
            {[
              { id: 'gold', label: 'Echtgold vs. Beschichtung' },
              { id: 'silber', label: '925 Sterling Silber' },
              { id: 'edelstahl', label: '316L Edelstahl & PVD' },
              { id: 'perlen', label: 'Perlenarten & Lüster' },
              { id: 'steine', label: 'Diamant, Moissanit & Zirkonia' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-2 rounded-lg transition-all min-h-[38px] cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transparenz-Hinweis zu Verträglichkeit & Nutzung */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Wichtiger Grundsatz:</strong> Hautverträglichkeit und Haltbarkeit sind niemals absolut. Sie hängen stets von der konkreten Legierung (z. B. Nickel- und Kupfergehalt), der handwerklichen Verarbeitung, der Schichtdicke bei Vergoldungen sowie individuellen Faktoren (Schweißzusammensetzung, Kosmetika, Reibung) ab.
          </p>
        </div>

        {/* Tab Inhalt */}
        <div className="mt-6">
          {activeTab === 'gold' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Massives Gold */}
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-amber-950">
                      Massives Gold (585 / 750)
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mt-1">Echtschmuck nach FeinGehG</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      Nach dem deutschen Feingehaltstempelgesetz (§ 5 FeinGehG) enthält 585er Gold 585/1000 Anteile (14 Karat) und 750er Gold 750/1000 Anteile (18 Karat) reines Feingold. Massives Gold oxidiert bei gewöhnlichem Alltagsgebrauch nicht und lässt sich über Generationen aufarbeiten.
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-amber-900 border-t border-amber-200/60 leading-relaxed">
                    &bull; Feingehaltsangaben/Punzen nach § 5 FeinGehG werden vom Hersteller oder Händler gestempelt. Eine Punze allein garantiert keine behördliche Prüfung und ersetzt keine analytische Echtheitsprüfung.
                  </div>
                </div>

                {/* Gold Vermeil */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                      Gold Vermeil (Silber-Basis)
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mt-1">Galvanische Dickvergoldung</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      Vermeil bezeichnet Schmuck mit einem Kern aus <strong>925 Sterling Silber</strong> und einer galvanischen Echtgold-Auflage. Nach den Leitlinien der US-Handelsbehörde FTC (<strong>16 CFR § 23.4</strong>) muss die Beschichtung aus Gold oder einer Goldlegierung (mindestens 10 Karat) bestehen und überall eine Mindestdicke aufweisen, die dem Äquivalent von <strong>mindestens 2,5 Mikrometern Feingold</strong> entspricht. Wird eine Legierung unter 24 Karat verwendet (z. B. 14k oder 10k), muss die physische Schichtdicke entsprechend größer sein, um denselben Feingoldanteil zu erreichen. Im deutschen Recht gilt das Irreführungsverbot (§ 5 UWG): Der Silberkern und die Vergoldung müssen transparent deklariert werden.
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-slate-700 border-t border-slate-200">
                    &bull; Dickere Goldschicht als Flash-Platings; Abrieb bei starker mechanischer Reibung im Alltag möglich.
                  </div>
                </div>

                {/* Gold Filled */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-600">
                      Gold Filled (Walzgold)
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mt-1">Mechanisch verbundene Goldschicht</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      Bei „Gold Filled“ wird eine Goldlegierungsschicht unter Druck und Hitze mechanisch auf ein unedles Trägermetall (meist Messing) aufgewalzt. Nach den US-FTC-Leitlinien (<strong>16 CFR § 23.3</strong>) muss die aufgewalzte Goldlegierung (mind. 10 Karat) mindestens <strong>1/20 (5 %)</strong> bzw. 1/10 des gesamten Metallgewichts ausmachen – gemeint ist die Legierungsschicht, nicht 5 % reines Feingold. Dies ist eine US-Handelsbezeichnung, keine eigenständige deutsche Schutzbezeichnung.
                    </p>
                  </div>
                  <div className="pt-2 text-xs font-semibold text-slate-700 border-t border-slate-200">
                    &bull; Mechanisch deutlich dicker als galvanische Tauchbäder; der Schmuckkern besteht jedoch aus unedlem Metall.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'silber' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base">925 Sterling Silber im Alltag</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  925er Sterlingsilber besteht zu 92,5 % aus Feinsilber und 7,5 % anderen Metallen (traditionell Kupfer zur Härtung). 
                  Silber reagiert natürlicherweise mit Schwefelverbindungen aus der Umgebungsluft, Kosmetika oder Hautschweiß zu Silbersulfid und läuft im Laufe der Zeit dunkel an. Dies ist eine normale chemische Reaktion und kein Qualitätsmangel.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                  <strong>Schutz vor Anlaufen:</strong> Durch eine galvanische Rhodinierung (hauchdünne Schicht aus der Platin-Gruppe) wird das Anlaufen verzögert, solange die Schutzschicht intakt bleibt.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <h3 className="font-extrabold text-amber-950 text-base">Sinnvolle Lagerung von Silberschmuck</h3>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Trocken &amp; luftgeschützt:</strong> Luftdichte Druckverschlussbeutel oder Schmuckkästen mit weichem Innenfutter verlangsamen den Kontakt mit Umgebungsluft.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Badezimmer meiden:</strong> Hohe Luftfeuchtigkeit und Duschdampf beschleunigen Oxidationsprozesse von Silber erheblich.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'edelstahl' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base">316L Edelstahl &amp; PVD-Beschichtung</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Edelstahl der Güteklasse 316L (oft als Chirurgen-Edelstahl bezeichnet) zeichnet sich durch hohe Härte und Korrosionsbeständigkeit aus. Durch den Molybdän- und Chromanteil bildet sich an der Luft eine schützende Passivschicht.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <strong className="text-slate-900 block font-bold">Einordnung der Norm DIN EN 1811:</strong>
                  <p className="text-[11px] leading-relaxed text-slate-600">
                    Die Norm DIN EN 1811 ist ein europaweit harmonisiertes <strong>Referenzprüfverfahren für die Nickellässigkeit</strong> (Nickel-Freisetzung) von Erzeugnissen mit unmittelbarem und längerem Hautkontakt gemäß EU-REACH-Verordnung. Sie dient der Vermeidung von Kontaktallergien – sie ist <em>keine</em> Zertifizierung für Wasserfestigkeit oder PVD-Beschichtungen.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-extrabold text-slate-900 text-base">Grenzen der Wasserfestigkeit bei PVD-Schmuck</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Das PVD-Verfahren (Physical Vapour Deposition) bindet im Vakuum Farb- und Titannitridschichten fester an den Stahl als einfache Glanztauchbäder. 
                  Dennoch ist die Haltbarkeit <strong>nicht unbegrenzt</strong>: Schweißlaktate, meersalzhaltiges Wasser, gechlortes Poolwasser sowie scheuernde Textilien können die Beschichtung über die Monate und Jahre mechanisch und chemisch angreifen.
                </p>
                <div className="pt-2">
                  <a
                    href={getAmazonAffiliateUrl('Wasserdichter Schmuck Edelstahl 18K vergoldet Damen')}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition-all shadow-sm"
                  >
                    <span>Ähnliche Angebote auf Amazon suchen *</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <div className="text-[10px] text-slate-500 mt-1">
                    * Partnerlink zu Amazon.de
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'perlen' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">Zucht im Süßwasser</span>
                <h3 className="font-bold text-slate-900 text-sm">Süßwasser-Zuchtperlen</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Werden in Flüssen und Binnenseen gezüchtet. Häufig kernlos oder mit organischem Kern, wodurch sie überwiegend aus Perlmutt bestehen. Vielfältige Farb- und Formvariationen.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">Salzwasser-Tradition</span>
                <h3 className="font-bold text-slate-900 text-sm">Akoya-Perlen</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Klassische Salzwasser-Zuchtperlen aus der Akoya-Auster. Bekannt für meist gleichmäßig runde Formen und einen ausgeprägten, spiegelnden Glanz (Lüster).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">Organische Wuchsform</span>
                <h3 className="font-bold text-slate-900 text-sm">Barock- &amp; Keshi-Perlen</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Asymmetrisch und individuell gewachsene Formen ohne strenge Symmetrie. Beliebt für moderne Designerstücke und Unikatschmuck.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'steine' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
                <span className="text-[10px] font-bold text-amber-950 bg-amber-200 px-2 py-0.5 rounded">Mohshärte 10</span>
                <h3 className="font-bold text-slate-900 text-sm">Naturdiamant</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kristalliner Kohlenstoff mit höchster mineralischer Härte gegen Ritzung. Dennoch spröde gegenüber harten Stößen (Spaltbarkeit) und empfindlich bei Behandlungen.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">Mohshärte 9,25</span>
                <h3 className="font-bold text-slate-900 text-sm">Moissanit (Siliziumkarbid)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Synthetischer Stein mit sehr hoher Härte und starker Doppelbrechung (höhere Lichtdispersion bzw. „Feuer“ als Diamant). Deutlich preisgünstiger als Naturdiamanten.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded">Mohshärte ca. 8 – 8,5</span>
                <h3 className="font-bold text-slate-900 text-sm">Cubic Zirkonia (synth.)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Künstlich erzeugtes Zirkoniumoxid. Kostengünstige Steinalternative für Modeschmuck. Kann im Dauereinsatz durch alltäglichen Kontakt mit Staubpartikeln feine Kratzer erleiden.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
