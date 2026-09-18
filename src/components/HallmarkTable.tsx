import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Check, Info } from 'lucide-react';

interface HallmarkItem {
  metal: 'gold' | 'silber' | 'platin';
  stamp: string;
  karat?: string;
  purePercent: string;
  colorName: string;
  usage: string;
  composition: string;
}

const HALLMARKS: HallmarkItem[] = [
  {
    metal: 'gold',
    stamp: '333',
    karat: '8 Karat',
    purePercent: '33,3 %',
    colorName: 'Gelb-, Weiß-, Rotgold',
    usage: 'Günstigerer Schmuck in Deutschland. Neigt durch den hohen Anteil von Unedelmetallen (Kupfer/Messing) eher zum Anlaufen.',
    composition: 'Beispiel: 33,3 % Gold, Rest Kupfer, Silber und/oder Zink',
  },
  {
    metal: 'gold',
    stamp: '375',
    karat: '9 Karat',
    purePercent: '37,5 %',
    colorName: 'Gelb-, Weißgold',
    usage: 'Verbreiteter Mindeststandard in Großbritannien und anderen internationalen Märkten.',
    composition: 'Beispiel: 37,5 % Gold, Rest Kupfer und Silber',
  },
  {
    metal: 'gold',
    stamp: '585',
    karat: '14 Karat',
    purePercent: '58,5 %',
    colorName: 'Gelb-, Weiß-, Roségold',
    usage: 'Der weitverbreitete deutsche & mitteleuropäische Standard für Verlobungs- und Eheringe. Hohe Härte bei gutem Feingehalt.',
    composition: 'Beispiel: 58,5 % Gold, Rest Silber, Kupfer und je nach Farbe Palladium/Zink',
  },
  {
    metal: 'gold',
    stamp: '750',
    karat: '18 Karat',
    purePercent: '75,0 %',
    colorName: 'Sattes Gelbgold, Graugold, Rosé',
    usage: 'Gehobener internationaler Juweliersstandard. Warmer, satter Farbton bei hohem Edelmetallwert.',
    composition: 'Beispiel: 75,0 % Reingold, Rest Silber, Kupfer oder Palladium',
  },
  {
    metal: 'gold',
    stamp: '900',
    karat: '21,6 Karat',
    purePercent: '90,0 %',
    colorName: 'Münzgold',
    usage: 'Typisch für historische Goldmünzen (z. B. Preußen 20 Mark, Goldmark).',
    composition: 'Beispiel: 90,0 % Feingold, 10,0 % Kupfer zur Härtung',
  },
  {
    metal: 'gold',
    stamp: '916',
    karat: '22 Karat',
    purePercent: '91,6 %',
    colorName: 'Traditionelles Schmuckgold',
    usage: 'Anlagemünzen (z. B. Krugerrand) und traditioneller asiatischer/orientalischer Goldschmuck.',
    composition: 'Beispiel: 91,6 % Feingold, Rest Kupfer oder Silber',
  },
  {
    metal: 'gold',
    stamp: '999',
    karat: '24 Karat',
    purePercent: '99,9 %',
    colorName: 'Reines Feingold',
    usage: 'Hauptsächlich für Anlagebarren und Münzen. Für fein gefasste Alltagsringe meist zu weich und kratzempfindlich.',
    composition: 'Mindestens 99,9 % elementares Gold (Au)',
  },
  {
    metal: 'silber',
    stamp: '925',
    karat: 'Sterling',
    purePercent: '92,5 %',
    colorName: 'Sterlingsilber',
    usage: 'Internationaler Standard für Echtsilberschmuck, Ketten und Besteck.',
    composition: '92,5 % Feinsilber, 7,5 % Legierungsmetalle (traditionell Kupfer)',
  },
  {
    metal: 'silber',
    stamp: '800 / 835',
    karat: 'Altsilber',
    purePercent: '80,0 % – 83,5 %',
    colorName: 'Tafelsilber-Legierung',
    usage: 'Historisches Besteck, Kannen, Schmuck vor den 1970er Jahren.',
    composition: 'Beispiel: 80,0 bis 83,5 % Feinsilber, Rest Kupfer',
  },
  {
    metal: 'platin',
    stamp: '950',
    karat: 'Platin 950',
    purePercent: '95,0 %',
    colorName: 'Platinweiß',
    usage: 'Hochwertigste Trauringe und Solitärfassungen. Sehr dichte, schwere Struktur; nutzt sich mechanisch kaum ab.',
    composition: 'Beispiel: 95,0 % reines Platin, 5,0 % Wolfram, Kupfer oder Ruthenium',
  },
];

export const HallmarkTable: React.FC = () => {
  const [selectedMetal, setSelectedMetal] = useState<'all' | 'gold' | 'silber' | 'platin'>('all');

  const filtered = selectedMetal === 'all' 
    ? HALLMARKS 
    : HALLMARKS.filter(h => h.metal === selectedMetal);

  return (
    <section id="punzierung" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Punzierung &amp; Feingehalte (333 bis 999)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Feingehaltsangaben &amp; Punzen nach dem Gesetz über den Feingehalt der Gold- und Silberwaren (FeinGehG)
            </p>
          </div>

          <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-bold gap-1 self-start sm:self-auto">
            {[
              { id: 'all', label: 'Alle Metalle' },
              { id: 'gold', label: 'Gold' },
              { id: 'silber', label: 'Silber' },
              { id: 'platin', label: 'Platin' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedMetal(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-all min-h-[34px] cursor-pointer ${
                  selectedMetal === tab.id
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Transparenz-Hinweis FeinGehG & Echtheitsprüfung */}
        <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Rechtlicher Hinweis nach § 5 FeinGehG:</strong> Der Feingehaltsstempel (die Punze, z. B. 585 oder 750) gibt den Feingehalt des reinen Edelmetalls in Tausendteilen an. 999er Gold bedeutet somit mindestens 999/1000 bzw. 99,9 % Feingold. In Deutschland besteht kein staatlicher Punzierungszwang durch ein staatliches Punzierungsamt; Feingehaltsangaben werden vom Hersteller oder Händler eigenverantwortlich gestempelt. Eine Punze allein ist daher kein amtliches Gütesiegel und ersetzt im Zweifel keine materialanalytische Echtheitsprüfung (z. B. durch Röntgenfluoreszenzanalyse oder Säuretest beim Sachverständigen).
          </p>
        </div>

        {/* Responsive Tabelle */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-3">Punze / Stempel</th>
                <th className="py-3.5 px-3">Karat / Bezeichnung</th>
                <th className="py-3.5 px-3">Feingehalt</th>
                <th className="py-3.5 px-3">Typische Farbgebung</th>
                <th className="py-3.5 px-3">Beispiel-Zusammensetzung</th>
                <th className="py-3.5 px-3">Häufige Verwendung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item, idx) => (
                <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                  <td className="py-3 px-3 font-mono font-black text-slate-900 text-sm">
                    {item.stamp}
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">
                    {item.karat || item.colorName}
                  </td>
                  <td className="py-3 px-3 font-mono font-bold text-amber-950">
                    {item.purePercent}
                  </td>
                  <td className="py-3 px-3 text-slate-600">
                    {item.colorName}
                  </td>
                  <td className="py-3 px-3 text-slate-500 italic text-[11px]">
                    {item.composition}
                  </td>
                  <td className="py-3 px-3 text-slate-600 max-w-xs leading-relaxed">
                    {item.usage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
