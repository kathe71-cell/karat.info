export interface JewelryProduct {
  id: string;
  title: string;
  category: 'gold' | 'diamant' | 'pflege' | 'werkzeug' | 'zubehoer';
  material: string;
  karat?: string;
  description: string;
  highlight: string;
  priceNote: string;
  rating: number;
  reviewCount: number;
  amazonSearchQuery: string;
  asin?: string;
}

export const AMAZON_STORE_ID = 'esstri-21';
export const AMAZON_TRACKING_TAG = 'karat.info-21';

export function getAmazonAffiliateUrl(query: string, asin?: string): string {
  if (asin) {
    return `https://www.amazon.de/dp/${asin}?tag=${AMAZON_TRACKING_TAG}`;
  }
  return `https://www.amazon.de/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TRACKING_TAG}`;
}

export const JEWELRY_PRODUCTS: JewelryProduct[] = [
  // Echtschmuck Gold & Diamant
  {
    id: 'ring-solitaer-585',
    title: 'Echtgold Solitär-Ring 585 (14 Karat) mit Brillant',
    category: 'diamant',
    material: '585 Gelbgold / Weißgold',
    karat: '14 kt (585er)',
    description: 'Klassischer Solitär-Verlobungsring in zeitloser 6er-Krappenfassung mit echtem Naturdiamant (0,25 ct bis 0,50 ct). Gestempelt nach FeinGehG.',
    highlight: 'Klassiker für Verlobung & Jubiläum',
    priceNote: 'Je nach Karatgewicht ab ca. 399 €',
    rating: 4.8,
    reviewCount: 312,
    amazonSearchQuery: 'Solitaer Ring 585 Gold Brillant Diamant 14 Karat',
  },
  {
    id: 'goldkette-panzer-585',
    title: 'Klassische Panzerkette 585 Gelbgold (14 Karat)',
    category: 'gold',
    material: '585 Gelbgold massiv',
    karat: '14 kt (585er)',
    description: 'Hochwertig diamantierte Kanten für maximalen Lichtspiegel. Robuster Karabinerverschluss, hypoallergen und alltagstauglich.',
    highlight: 'Massives 585 Echtgold, punziert',
    priceNote: 'Ab ca. 249 €',
    rating: 4.7,
    reviewCount: 489,
    amazonSearchQuery: 'Panzerkette 585 Gelbgold 14 Karat massiv gestempelt',
  },
  {
    id: 'ohrstecker-diamant-750',
    title: 'Brillant-Ohrstecker 750 Weißgold (18 Karat)',
    category: 'diamant',
    material: '750 Weißgold',
    karat: '18 kt (750er)',
    description: 'Feines 18-Karat-Weißgold mit funkelnden Brillanten im Prinzess- oder Rundschliff. Sicherer Schraub- oder Steckverschluss.',
    highlight: 'Hoher Feingoldgehalt (75 % Reingold)',
    priceNote: 'Ab ca. 320 €',
    rating: 4.9,
    reviewCount: 178,
    amazonSearchQuery: 'Diamant Ohrstecker 750 Weissgold 18 Karat',
  },
  {
    id: 'memoire-ring-585',
    title: 'Memoire-Ewigkeitsring 585 Gold mit Diamanten',
    category: 'diamant',
    material: '585 Rosé- oder Gelbgold',
    karat: '14 kt (585er)',
    description: 'Rundumlaufend oder halb ausgefasster Memoirering. Perfekt als Vorsteckring oder Ehering mit funkelndem Pavé-Besatz.',
    highlight: 'Exquisite Pavé-Fassung',
    priceNote: 'Ab ca. 450 €',
    rating: 4.8,
    reviewCount: 142,
    amazonSearchQuery: 'Memoire Ring 585 Gold Diamanten Eternity Ring',
  },
  {
    id: 'creolen-750-gold',
    title: 'Edle Scharnier-Creolen 750 Gelbgold (18 Karat)',
    category: 'gold',
    material: '750 Gelbgold',
    karat: '18 kt (750er)',
    description: 'Warmer, tiefer Goldfarbton durch 75 % Reingoldanteil. Scharnier-Verschluss für komfortables und sicheres Tragen.',
    highlight: 'Luxuriöse 18-Karat Legierung',
    priceNote: 'Ab ca. 289 €',
    rating: 4.7,
    reviewCount: 220,
    amazonSearchQuery: 'Creolen 750 Gelbgold 18 Karat Scharniercreolen',
  },

  // Schmuckpflege & Werterhalt
  {
    id: 'ultraschall-reiniger',
    title: 'Digitaler Ultraschallreiniger für Schmuck & Uhren',
    category: 'pflege',
    material: 'Edelstahltank (SUS304)',
    highlight: '42.000 Hz Kavitationswellen',
    description: 'Entfernt Seifenreste, Hautpartikel und Schmutz schonend auch aus feinsten Steinfassungen und Kettengliedern ohne mechanischen Abrieb.',
    priceNote: 'Ca. 39 – 59 €',
    rating: 4.6,
    reviewCount: 1840,
    amazonSearchQuery: 'Ultraschallreiniger Schmuck Brillen Digital Edelstahl',
  },
  {
    id: 'gold-tauchbad-hagerty',
    title: 'Profi Gold- & Edelstein-Reinigungsbad + Poliertuch',
    category: 'pflege',
    material: 'Spezial-Tauchbad & Mikrofaser',
    highlight: 'Bringt den Tiefenglanz zurück',
    description: 'Spezifisch formuliertes Tauchbad für Gelb-, Weiß- und Roségold. Löst Oxydationen in wenigen Minuten ohne Anätzen der Legierung.',
    priceNote: 'Ca. 12 – 18 €',
    rating: 4.8,
    reviewCount: 3410,
    amazonSearchQuery: 'Hagerty Gold Clean Schmucktauchbad Poliertuch',
  },
  {
    id: 'schmuckkasten-samtfutter',
    title: 'Luxus Schmuckkasten mit Anti-Anlauf-Samtbezug',
    category: 'pflege',
    material: 'Holzkern mit Mikrofaser-Samt',
    highlight: 'Schützt vor Kratzern & Oxydation',
    description: 'Mehrstufige Schatulle mit getrennten Fächern für Ringe, Ketten und Ohrstecker. Verhindert Reibung und vorzeitiges Anlaufen von Echtschmuck.',
    priceNote: 'Ca. 35 – 65 €',
    rating: 4.7,
    reviewCount: 920,
    amazonSearchQuery: 'Schmuckkasten Organizer Samtfutter abschliessbar fuer Echtschmuck',
  },

  // Prüf- und Messwerkzeuge (Authentizität & Karat-Bestimmung)
  {
    id: 'feinwaage-0001g',
    title: 'Präzisions-Feinwaage (0,001 g / 50 g) mit Kalibriergewicht',
    category: 'werkzeug',
    material: 'Hochpräzisions-DMS-Sensor',
    highlight: 'Milligramm-Genauigkeit (ct / g / dwt)',
    description: 'Unerlässlich zur genauen Feingewichts- und Karatbestimmung von Edelsteinen und Schmuckstücken nach dem Archimedischen Prinzip.',
    priceNote: 'Ca. 22 – 35 €',
    rating: 4.6,
    reviewCount: 2190,
    amazonSearchQuery: 'Feinwaage 0 001g Taschenwaage Kalibriergewicht Karat Waage',
  },
  {
    id: 'juwelierlupe-10x-uv',
    title: 'Achromatische Triplet Juwelierlupe (10x / 21 mm) mit LED & UV',
    category: 'werkzeug',
    material: 'Optisches Glas mit Antireflexbeschichtung',
    highlight: 'Verzerrungsfreie Punzenprüfung',
    description: 'Standard-Werkzeug für Juweliere nach CIBJO-Norm: 10-fache Vergrößerung zur Prüfung von Feingehaltsstempeln (333, 585, 750) und Steinfassungen.',
    priceNote: 'Ca. 18 – 29 €',
    rating: 4.7,
    reviewCount: 1450,
    amazonSearchQuery: 'Juwelierlupe 10x 21mm Triplet achromatisch LED UV Punzen',
  },
  {
    id: 'diamant-tester-selektor',
    title: 'Elektronischer Diamant- & Moissanit-Tester (Thermal Selector)',
    category: 'werkzeug',
    material: 'Mikro-Thermosonde',
    highlight: 'Erkennt echte Diamanten sofort',
    description: 'Misst die charakteristische thermische Leitfähigkeit zur schnellen Unterscheidung von echtem Naturdiamant und Glas/Zirkonia.',
    priceNote: 'Ca. 25 – 45 €',
    rating: 4.4,
    reviewCount: 1120,
    amazonSearchQuery: 'Diamant Tester Diamond Selector II Moissanite Edelstein Pruefer',
  },
  {
    id: 'ringmass-multisizer',
    title: 'Ringmaß-Set & Ringstock aus Edelstahl (EU 41–76)',
    category: 'zubehoer',
    material: 'Präzisions-Edelstahl',
    highlight: 'Exakte Ringgrößen-Ermittlung',
    description: 'Ermöglicht das präzise Ausmessen des Fingerumfangs vor dem Kauf von Verlobungs- und Eheringen. Verhindert teure spätere Ringweitenänderungen.',
    priceNote: 'Ca. 12 – 19 €',
    rating: 4.8,
    reviewCount: 2840,
    amazonSearchQuery: 'Ringmass Ringgroessenmesser Ringstock Ringmassband Set',
  },
];
