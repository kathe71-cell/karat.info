import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    q: 'Kann man mit vergoldetem Edelstahlschmuck duschen und schwimmen?',
    a: 'Schmuck aus 316L-Edelstahl mit PVD-Beschichtung ist im Alltag deutlich widerstandsfähiger gegen Feuchtigkeit und Schweiß als gewöhnlich galvanisch beschichteter Modeschmuck. Allerdings hängt die Lebensdauer der Farbschicht von der Schichtdicke, mechanischer Reibung sowie dem Kontakt mit Seifen, gechlortem Poolwasser oder Salzwasser ab. Um Abrieb zu minimieren, empfiehlt sich das Ablegen vor dem Schwimmen.',
  },
  {
    q: 'Warum verfärbt mancher Modeschmuck die Haut grün oder dunkel?',
    a: 'Verfärbungen entstehen meist, wenn kupfer- oder zinkhaltige Messinglegierungen mit dem sauren Schweißfilm der Haut oder Feuchtigkeit reagieren. Dabei bilden sich Kupfersalze. Bei Edelmetallen (585/750 Gold), intaktem 925 Sterling Silber und korrosionsfestem 316L Edelstahl tritt diese Reaktion in der Regel nicht auf.',
  },
  {
    q: 'Was unterscheidet 925 Sterling Silber von Edelstahl?',
    a: '925 Sterling Silber ist ein traditionelles Edelmetall mit 92,5 % Feinsilbergehalt, das einen warmen, weichen Weißglanz aufweist, jedoch durch Schwefelwasserstoff in der Luft mit der Zeit anläuft (Silbersulfid). Edelstahl ist ein robuster Industriewerkstoff, der formstabil ist und nicht anläuft, jedoch einen etwas kühleren, dunkleren Farbton besitzt.',
  },
  {
    q: 'Was ist der Unterschied zwischen Gold Vermeil und Gold Filled?',
    a: 'Gold Vermeil basiert nach den Leitlinien der US-FTC (16 CFR § 23.4) auf einem Kern aus massivem 925 Sterling Silber mit einer galvanischen Goldauflage (mind. 10 Karat), deren Mindestdicke überall dem Äquivalent von mindestens 2,5 Mikrometern Feingold entsprechen muss (bei Legierungen unter 24k ist die physische Schicht entsprechend dicker). Bei Gold Filled wird hingegen eine Goldlegierungsschicht (mindestens 10 Karat) mechanisch unter Hitze und Druck auf ein unedles Trägermetall (meist Messing) aufgewalzt, wobei die Legierungsschicht nach 16 CFR § 23.3 mindestens 1/20 (5 %) bzw. 1/10 des gesamten Metallgewichts ausmachen muss.',
  },
  {
    q: 'Darf jeder Edelsteinschmuck in ein Ultraschallreinigungsgerät?',
    a: 'Nein! Ultraschall kann poröse Steine (wie Perlen, Opale, Türkise) zerstören, geölte oder harzgefüllte Steine (wie Smaragde) trüben und Risse in behandelten Steinen vergrößern. Auch bei losen Fassungen oder geklebtem Schmuck ist Ultraschall ungeeignet. Im Zweifel empfiehlt die Gemmologie (z. B. GIA) eine manuelle Reinigung mit lauwarmem Seifenwasser.',
  },
  {
    q: 'Welche Ringgröße entspricht welchem Durchmesser?',
    a: 'Die europäische Ringgröße (EU-Größe) gibt den Innenumfang in Millimetern an (ISO 8653:2016). Teilt man die EU-Größe durch die Kreiszahl Pi (ca. 3,1416), erhält man den Innendurchmesser (z. B. EU 54 ÷ 3,1416 ≈ 17,2 mm). Internationale US-/UK-Größen beruhen auf separaten Richtwert-Tabellen (z. B. BS 6820).',
  },
  {
    q: 'Wie unterscheiden sich Zirkonia, Moissanit und Naturdiamanten?',
    a: 'Naturdiamanten bestehen aus kristallinem Kohlenstoff und besitzen die höchste Ritzhärte (Mohshärte 10). Moissanit ist ein synthetisches Siliziumkarbid mit einer Härte von 9,25 und besonders starker Lichtstreuung (höheres Feuer als Diamant). Cubic Zirkonia ist ein synthetisches Zirkoniumoxid (Mohshärte ca. 8-8,5), das optisch glänzt, im dauerhaften Alltagseinsatz jedoch schneller feine Kratzer annehmen kann.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="my-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-8">
        <div className="pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
              <HelpCircle className="w-5 h-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Häufig gestellte Fragen (FAQ) zu Schmuck &amp; Materialien
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Faktenbasierte Antworten zu Metallen, Schichtstärken, Verträglichkeit und Werterhalt
          </p>
        </div>

        <div className="divide-y divide-slate-100 mt-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-3 focus:outline-none min-h-[48px] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-slate-900 text-sm sm:text-base hover:text-amber-800 transition-colors">
                    {faq.q}
                  </span>
                  <span className="p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0">
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
