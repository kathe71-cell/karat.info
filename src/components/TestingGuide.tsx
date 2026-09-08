import React, { useState } from 'react';
import { Search, Scale, Magnet, FlaskConical, Radio, AlertCircle } from 'lucide-react';
import { getAmazonAffiliateUrl } from '../data/affiliateProducts';

export const TestingGuide: React.FC = () => {
  const [airWeight, setAirWeight] = useState<number>(14.5);
  const [waterWeight, setWaterWeight] = useState<number>(1.08);

  // Archimedes Dichte: ρ = m_Luft / (m_Luft - m_Wasser)
  // Bei klassischer Tauchwägung (Waage tariert mit Wasserglas, Objekt am Faden frei schwebend): Auftrieb = m_Wasser
  const density = waterWeight > 0 ? (airWeight / waterWeight).toFixed(2) : '0';

  return (
    <section id="echtheitspruefung" className="my-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
              <Search className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Echtheitsprüfung von Goldschmuck (Physikalisch &amp; Chemisch)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Wissenschaftliche Prüfverfahren: Dichtebestimmung nach Archimedes, Strichprobe mit Salpetersäure und Magnetismus
          </p>
        </div>

        {/* 4 Methoden im Überblick */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Methode 1: Archimedes Dichtetest */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600" />
              <h3 className="font-extrabold text-slate-900 text-sm">
                1. Tauchwägung nach Archimedes (Zerstörungsfrei)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jede Goldlegierung hat eine unverwechselbare physikalische Dichte. Durch Eintauchen des Schmuckstücks in ein Wasserglas auf einer Feinwaage lässt sich das verdrängte Volumen exakt messen:
            </p>
            <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs font-mono">
              <div className="text-slate-500">Formel:</div>
              <strong className="text-amber-900 text-sm">ρ = m(Luft) / m(Wasser-Auftrieb) [g/cm³]</strong>
            </div>

            {/* Live-Rechner für Archimedes */}
            <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-xs space-y-2">
              <span className="font-bold text-amber-950 block">Dichte-Schnellrechner:</span>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-600 block">Gewicht in Luft (g):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={airWeight}
                    onChange={(e) => setAirWeight(parseFloat(e.target.value) || 0)}
                    className="w-full px-2 py-1 bg-white border border-amber-300 rounded font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-600 block">Auftrieb im Wasser (g):</label>
                  <input
                    type="number"
                    step="0.01"
                    value={waterWeight}
                    onChange={(e) => setWaterWeight(parseFloat(e.target.value) || 0)}
                    className="w-full px-2 py-1 bg-white border border-amber-300 rounded font-bold"
                  />
                </div>
              </div>
              <div className="pt-1 flex items-center justify-between border-t border-amber-200">
                <span className="font-bold text-slate-700">Berechnete Dichte:</span>
                <span className="font-mono font-black text-base text-amber-900">{density} g/cm³</span>
              </div>
            </div>

            {/* Referenz-Dichtetabelle */}
            <div className="text-[11px] text-slate-600 space-y-1">
              <div className="font-bold text-slate-800">Soll-Dichten bei Goldlegierungen:</div>
              <div className="flex justify-between py-0.5 border-b border-slate-200">
                <span>333er Gold (8 kt):</span>
                <span className="font-mono font-bold">10,9 – 11,5 g/cm³</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-200">
                <span>585er Gelbgold (14 kt):</span>
                <span className="font-mono font-bold">13,1 – 13,6 g/cm³</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-200">
                <span>750er Gelbgold (18 kt):</span>
                <span className="font-mono font-bold">15,1 – 15,5 g/cm³</span>
              </div>
              <div className="flex justify-between py-0.5 text-amber-900 font-bold">
                <span>999er Feingold (24 kt):</span>
                <span className="font-mono">19,32 g/cm³</span>
              </div>
            </div>
          </div>

          {/* Methode 2: Salpetersäure-Strichtest */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-amber-600" />
              <h3 className="font-extrabold text-slate-900 text-sm">
                2. Säureprüfung mit Arkansas-Strichstein
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Die bewährte chemische Standardmethode der Goldschmiede: Auf einem feinkörnigen Prüfstein wird ein hauchdünner Metallabrieb erzeugt und mit kalibrierten Prüfsäuren (Salpetersäure/Salzsäure-Gemische) benetzt:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">8 kt bis 14 kt Prüfsäure:</strong>
                Löst unedle Metalle (Messing, Tombak, minderwertiges Gold) sofort mit Zischen und Grünfärbung auf. Echtes 585er/750er Gold bleibt unberührt.
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                <strong className="text-slate-900 block mb-0.5">18 kt &amp; 21,6 kt Königswasser-Prüfung:</strong>
                Erfordert spezielle konzentrierte Gemische. Nur Legierungen mit &ge; 75 % bzw. 90 % Feingold widerstehen der Reaktion.
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getAmazonAffiliateUrl('Gold Pruefsaeure Set Strichstein Arkansas Pruefset')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Gold-Prüfsäure-Sets auf Amazon*</span>
              </a>
            </div>
          </div>

          {/* Methode 3: Magnet-Test */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <Magnet className="w-5 h-5 text-amber-600" />
              <h3 className="font-extrabold text-slate-900 text-sm">
                3. Neodym-Magnetprüfung
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gold, Silber und Platin sind <strong>diamagnetisch</strong> bzw. paramagnetisch &ndash; sie werden von einem starken Magneten niemals angezogen.
            </p>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <strong>Praxis-Tipp:</strong> Reagiert eine Kette oder ein Ring merklich auf einen Neodym-Magneten, liegt meist vergoldeter Stahl, Eisen oder Nickel vor. 
              <em>Ausnahme:</em> Die winzige Spiralfeder im Karabinerverschluss besteht aus mechanischen Gründen fast immer aus Federstahl und darf leicht magnetisch sein.
            </div>
          </div>

          {/* Methode 4: Elektronische Wirbelstrom & RFA */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-amber-600" />
              <h3 className="font-extrabold text-slate-900 text-sm">
                4. Zerstörungsfreie RFA &amp; Wirbelstrom-Sensorik
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Für hochpreisigen Diamantschmuck und dickere Barren nutzen Prüflabore modernste Wirbelstrom-Leitfähigkeitsmessung (MS/m) oder Röntgenfluoreszenz-Analysen (RFA), um selbst Wolframkerne mit identischer Dichte aufzudecken.
            </p>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
              <strong>Diamant-Prüfung:</strong> Diamanten zeichnen sich durch extrem hohe thermische Leitfähigkeit aus. Mit tragbaren Thermal-Testern kann echter Diamant in Sekunden von Zirkonia unterschieden werden.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
