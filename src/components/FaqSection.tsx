import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Kann man mit 18k vergoldetem Edelstahlschmuck duschen und schwimmen?',
    a: 'Ja! Schmuck aus 316L Chirurgen-Edelstahl mit hochwertiger PVD-Vergoldung (Physical Vapour Deposition) ist absolut wasserfest. Er rostet nicht, oxidiert nicht und kann beim Duschen, Schwimmen im Meer sowie beim Sport getragen werden, ohne seine Farbe zu verlieren.',
  },
  {
    q: 'Warum verfärbt mancher Modeschmuck die Haut grün oder schwarz?',
    a: 'Grüne Verfärbungen entstehen, wenn unedle Metalle wie Kupfer oder minderwertiges Messing mit dem natürlichen sauren Schweißfilm der Haut oder Feuchtigkeit reagieren. Dabei bilden sich Kupfersalze. Bei Echtschmuck (585/750 Gold), 925er Silber und 316L Chirurgen-Edelstahl tritt dieses Phänomen nicht auf.',
  },
  {
    q: 'Was ist der Unterschied zwischen 925 Sterling Silber und Edelstahl?',
    a: '925 Sterling Silber ist ein traditionelles Edelmetall (92,5 % reines Silber), das einen unvergleichlich weichen, warmen Weißglanz besitzt, jedoch im Laufe der Zeit oxidieren (anlaufen) kann. Edelstahl ist ein moderner Industriewerkstoff: extrem kratzfest, formstabil, läuft niemals an, ist aber etwas dunkler und schwerer.',
  },
  {
    q: 'Was bedeutet Gold Vermeil?',
    a: 'Gold Vermeil ist eine geschützte Bezeichnung für hochwertigen Echtschmuck: Die Basis muss zwingend aus massivem 925 Sterling Silber bestehen und mit einer mindestens 2,5 Mikrometer dicken Schicht aus echtem 10K-, 14K- oder 18K-Gold überzogen sein. Es ist die edelste Alternative zu massivem Echtgold.',
  },
  {
    q: 'Welcher Schmuck passt zu meinem Hautunterton?',
    a: 'Kühler Hautunterton (blaue Venen am Handgelenk, sonnenbrandanfällig): Weißgold, 925 Sterling Silber, Platin und Perlen harmonieren perfekt. Warmer Hautunterton (grünliche Venen, bräunt schnell): Sattes 585/750 Gelbgold, Gold Vermeil und Messing bringen die Haut zum Strahlen. Neutraler Hautunterton: Sie können mühelos alle Metalle und moderne Bicolor-Looks tragen.',
  },
  {
    q: 'Wie verhindert man, dass sich feine Halsketten verknoten?',
    a: 'Schließen Sie vor dem Ablegen immer den Verschluss! Beim Transport auf Reisen hilft es, die Kette durch einen Trinkhalm zu fädeln und zu schließen, oder ein spezielles Reise-Schmucketui mit Kettenschlaufen und elastischen Taschen zu verwenden.',
  },
  {
    q: 'Was ist der Unterschied zwischen Zirkonia, Moissanit und echtem Diamant?',
    a: 'Ein Diamant ist reiner Kohlenstoff und das härteste natürliche Material der Erde (Mohshärte 10). Moissanit ist ein Laboredelstein aus Siliziumkarbid (Mohshärte 9,25) mit noch höherem Feuer und Glanz als Diamant. Cubic Zirkonia ist ein synthetischer Zirkoniumoxid-Kristall (Mohshärte 8,5), der optisch funkelt, jedoch mit den Jahren durch Mikro-Kratzer an Brillanz verlieren kann.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="my-12">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-5 sm:p-8">
        <div className="pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-900 border border-amber-300">
              <HelpCircle className="w-5 h-5" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Häufig gestellte Fragen (FAQ) zu Schmuck &amp; Accessoires
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Wissenswertes zu Materialien, Verträglichkeit, Trends und Pflege von der Fachredaktion
          </p>
        </div>

        <div className="divide-y divide-slate-100 mt-4">
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
