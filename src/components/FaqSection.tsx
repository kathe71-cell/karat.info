import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Was bedeutet Karat bei Goldschmuck?',
    a: 'Bei Goldschmuck beziffert Karat (abgekürzt kt) den Feingehalt des reinen Goldes in 24 Teilen. 24 Karat ist reines Feingold (999,9 ‰). Ein 14-karätiges Schmuckstück (585er) besteht zu 14 Teilen (58,5 %) aus Gold und zu 10 Teilen (41,5 %) aus Härtungsmetallen wie Silber und Kupfer.',
  },
  {
    q: 'Was ist der Unterschied zwischen Karat bei Gold und Karat bei Diamanten?',
    a: 'Karat bei Gold ist ein reines Verhältnismaß (Feingehalt in 24stel Teilen). Karat bei Diamanten und Edelsteinen (Carat, abgekürzt ct) ist dagegen eine physikalische Masseneinheit: 1 metrisches Karat (1 ct) wiegt exakt 0,200 Gramm (200 Milligramm).',
  },
  {
    q: 'Was ist besser für einen Verlobungsring: 585er (14k) oder 750er (18k) Gold?',
    a: 'Beide Legierungen sind exzellent. 585er Gold (14 Karat) ist aufgrund des höheren Anteils an Zusatzmetallen etwas härter, kratzfester und preisgünstiger – ideal für sehr aktive Hände. 750er Gold (18 Karat) hat einen deutlich satteren, tieferen Goldton, einen höheren Eigenwert (75 % Reingold) und ist der weltweite Standard in der Haute Joaillerie.',
  },
  {
    q: 'Warum wird in Deutschland kein 333er Gold für hochwertigen Schmuck empfohlen?',
    a: '333er Gold (8 Karat) enthält zu 66,7 % unedle Metalle und nur 33,3 % Gold. Durch den hohen Kupfer- und Silberanteil kann 333er Schmuck mit Luftsauerstoff und Schweiß reagieren, dunkel anlaufen und Grünspan bilden. Im internationalen Handel (z. B. USA, Schweiz, UK) darf 333er Legierung gesetzlich oft gar nicht als „Gold“ bezeichnet werden.',
  },
  {
    q: 'Wie berechnet sich der Ankaufswert von Altgold oder Erbschmuck?',
    a: 'Der reine Materialwert berechnet sich aus dem Gewicht des Schmuckstücks abzüglich von Steinen und Fremdstoffen multipliziert mit dem Feingehalt (z. B. 0,585 bei 585er Gold) und dem aktuellen Börsen-Goldpreis pro Gramm. Seriöse Juweliere und Scheideanstalten ziehen typischerweise zwischen 5 % und 15 % Schmelz-, Prüf- und Handelskosten ab.',
  },
  {
    q: 'Was bedeuten Stempel wie 925, 585 oder 750 im Schmuckstück?',
    a: 'Diese Nummern sind gesetzliche Feingehaltsstempel (Punzen) nach § 5 FeinGehG. Sie geben den Anteil des Edelmetalls in Tausendsteln (Promille) an: 585 = 585/1000 Feingold (14k), 750 = 750/1000 Feingold (18k), 925 = 925/1000 Reinsilber (Sterlingsilber).',
  },
  {
    q: 'Darf jeder Echtschmuck im Ultraschallbad gereinigt werden?',
    a: 'Nein! Massives Gold, Platin, Diamanten, Rubine und Saphire dürfen problemlos in das Ultraschallgerät. Poröse oder behandelte Edelsteine wie Smaragde (Ölbehandlung), Opale, Perlen, Türkise oder Tansanite können durch die hochfrequenten Druckwellen platzen, blind werden oder ihre Farbe verlieren.',
  },
  {
    q: 'Wie erkenne ich, ob ein Goldstempel echt ist?',
    a: 'Ein Stempel allein ist kein Echtheitsbeweis, da er gefälscht werden kann. Sicherheit bietet die Kombination aus Dichtebestimmung nach dem Archimedischen Prinzip (Tauchwägung), Überprüfung der Diamagnetik mit einem Neodym-Magneten und dem Säure-Strichtest auf dem Arkansas-Stein.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="my-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
              <HelpCircle className="w-5 h-5" />
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Häufig gestellte Fragen (FAQ) zu Karat &amp; Schmuck
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Faktenbasierte Antworten der Fachredaktion nach deutschem und europäischem Edelmetallrecht
          </p>
        </div>

        <div className="divide-y divide-slate-200 mt-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-3 focus:outline-none min-h-[48px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base hover:text-amber-800 transition-colors">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
