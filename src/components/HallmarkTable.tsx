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
    usage: 'Günstiger Modeschmuck in DE. Achtung: Neigt durch hohen Kupferanteil zum Oxidieren/Anlaufen.',
    composition: '33,3 % Gold, ca. 50 % Kupfer, 16,7 % Silber/Zink',
  },
  {
    metal: 'gold',
    stamp: '375',
    karat: '9 Karat',
    purePercent: '37,5 %',
    colorName: 'Gelb-, Weißgold',
    usage: 'Mindeststandard in Großbritannien & Australien für echten Schmuck.',
    composition: '37,5 % Gold, Rest Kupfer und Silber',
  },
  {
    metal: 'gold',
    stamp: '585',
    karat: '14 Karat',
    purePercent: '58,5 %',
    colorName: 'Gelb-, Weiß-, Roségold',
    usage: 'Der deutsche & europäische Schmuck-Standard für Verlobungs-, Ehe- und Memoire-Ringe. Sehr widerstandsfähig.',
    composition: '58,5 % Gold, 28 % Silber/Kupfer, 13,5 % Zusatzmetalle',
  },
  {
    metal: 'gold',
    stamp: '750',
    karat: '18 Karat',
    purePercent: '75,0 %',
    colorName: 'Sattes Gelbgold, Graugold, Rosé',
    usage: 'Internationaler Luxus- und Haute-Joaillerie-Standard. Edler Tiefenglanz bei hoher Wertbeständigkeit.',
    composition: '75,0 % Reingold, 15 % Silber/Kupfer, 10 % Palladium/Zink',
  },
  {
    metal: 'gold',
    stamp: '900',
    karat: '21,6 Karat',
    purePercent: '90,0 %',
    colorName: 'Klassisches Münzgold',
    usage: 'Historische Goldmünzen (Preußen 20 Mark, Goldmark, Sovereign).',
    composition: '90,0 % Gold, 10,0 % Kupfer (zur Härtung)',
  },
  {
    metal: 'gold',
    stamp: '916',
    karat: '22 Karat',
    purePercent: '91,6 %',
    colorName: 'Rötliches Gold',
    usage: 'Anlage-Goldmünzen (Krugerrand, Sovereign) und traditioneller asiatischer Goldschmuck.',
    composition: '91,6 % Gold, 8,4 % Kupfer (Crown Gold)',
  },
  {
    metal: 'gold',
    stamp: '999',
    karat: '24 Karat',
    purePercent: '99,9 %',
    colorName: 'Reines Feingold',
    usage: 'Goldbarren, Wiener Philharmoniker, Maple Leaf. Für Alltags-Ringe meist zu weich.',
    composition: '99,99 % reines elementares Gold (Au)',
  },
  {
    metal: 'silber',
    stamp: '925',
    karat: 'Sterling',
    purePercent: '92,5 %',
    colorName: 'Sterlingsilber',
    usage: 'Beliebtester Standard für Echtsilberschmuck, Ketten, Ringe und Besteck.',
    composition: '92,5 % Feinsilber, 7,5 % Kupfer',
  },
  {
    metal: 'silber',
    stamp: '800 / 835',
    karat: 'Altsilber',
    purePercent: '80,0 % - 83,5 %',
    colorName: 'Klassisches Tafelsilber',
    usage: 'Historisches Besteck, Kannen, Schmuck vor 1970.',
    composition: '80-83,5 % Feinsilber, Rest Kupfer',
  },
  {
    metal: 'platin',
    stamp: '950',
    karat: 'Platin 950',
    purePercent: '95,0 %',
    colorName: 'Weiß-Grau metallisch',
    usage: 'Höchstwertiger Verlobungs- & Ehering-Werkstoff. Hypoallergen, nutzt sich beim Tragen nicht ab.',
    composition: '95,0 % reines Platin (Pt), 5 % Wolfram, Iridium oder Ruthenium',
  },
];

export const HallmarkTable: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'gold' | 'silber' | 'platin'>('all');

  const filtered = filter === 'all' ? HALLMARKS : HALLMARKS.filter((h) => h.metal === filter);

  return (
    <section id="punzierung" className="my-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Feingehalt- &amp; Punzierungstabelle (DIN EN ISO 9202)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500">
              Gesetzliche Feingehaltsstempel in Deutschland nach <strong>§ 5 FeinGehG</strong> (Gesetz über den Feingehalt der Gold- und Silberwaren)
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex rounded-xl bg-slate-100 p-1 self-start md:self-auto text-xs font-bold">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-2 rounded-lg transition-all ${
                filter === 'all' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Alle Metalle
            </button>
            <button
              onClick={() => setFilter('gold')}
              className={`px-3 py-2 rounded-lg transition-all ${
                filter === 'gold' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Gold (kt)
            </button>
            <button
              onClick={() => setFilter('silber')}
              className={`px-3 py-2 rounded-lg transition-all ${
                filter === 'silber' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Silber
            </button>
            <button
              onClick={() => setFilter('platin')}
              className={`px-3 py-2 rounded-lg transition-all ${
                filter === 'platin' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Platin
            </button>
          </div>
        </div>

        {/* Tabelle */}
        <div className="overflow-x-auto mt-6 -mx-5 sm:mx-0">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Stempel (Punze)</th>
                <th className="py-3 px-4">Karat (kt)</th>
                <th className="py-3 px-4">Feingehalt</th>
                <th className="py-3 px-4">Typische Verwendung</th>
                <th className="py-3 px-4 hidden md:table-cell">Typische Legierung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item, idx) => (
                <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-black text-slate-900 text-base">
                    <span className="inline-block px-2 py-0.5 rounded bg-slate-100 border border-slate-300">
                      {item.stamp}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-amber-900">
                    {item.karat || '—'}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                    {item.purePercent}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    <div className="font-semibold text-slate-900">{item.colorName}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.usage}</div>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 hidden md:table-cell">
                    {item.composition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Experten-Hinweis Legierungsfarben */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Warum hat 585er oder 750er Gold verschiedene Farben?
          </div>
          <p>
            Reines Feingold ist immer gelb. Die verschiedenen Schmuckfarben entstehen durch die gezielte Beimischung unedler oder edler Partnermetalle:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="p-2.5 rounded-lg bg-white border border-slate-200">
              <strong className="text-amber-800 block">Gelbgold:</strong>
              Gleichmäßiger Anteil von Feinsilber und Feinkupfer bewahrt den klassischen, sonnigen Goldton.
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200">
              <strong className="text-slate-800 block">Weißgold:</strong>
              Entfärbung durch Palladium oder Platin. Hochwertiges Weißgold wird zusätzlich rhodiniert.
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-slate-200">
              <strong className="text-rose-800 block">Rosé- &amp; Rotgold:</strong>
              Erhöhter Kupferanteil erzeugt den charakteristischen warmen bis kräftig roten Farbton.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
