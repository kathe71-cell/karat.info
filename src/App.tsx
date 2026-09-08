import React, { useState } from 'react';
import { Header } from './components/Header';
import { CategoryHero } from './components/CategoryHero';
import { ComprehensiveCatalog } from './components/ComprehensiveCatalog';
import { MaterialGuide } from './components/MaterialGuide';
import { StyleGuide } from './components/StyleGuide';
import { GiftFinder } from './components/GiftFinder';
import { RingSizeGuide } from './components/RingSizeGuide';
import { JewelryCareGuide } from './components/JewelryCareGuide';
import { HallmarkTable } from './components/HallmarkTable';
import { EeatTrustBox } from './components/EeatTrustBox';
import { FaqSection } from './components/FaqSection';
import { LegalModals } from './components/LegalModals';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Gem, Sparkles, Layers, Gift, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { getAmazonAffiliateUrl } from './data/affiliateProducts';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLegalModal, setActiveLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    const catalogElement = document.getElementById('katalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-amber-200 selection:text-amber-950 pb-20 lg:pb-0">
      {/* Header mit gesetzlicher Transparenzleiste */}
      <Header onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Hauptbereich */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 flex-1 w-full">
        {/* Hero-Bereich */}
        <section className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Das umfassende Verzeichnis für Echtschmuck, Modeschmuck &amp; Accessoires</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mb-4">
            Schmuck &amp; Accessoires <span className="text-amber-600">Trends &amp; Kollektionen</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Entdecken Sie exklusiven <strong>Echtschmuck (585 &amp; 750 Gold, Diamanten)</strong>, 
            wasserfesten <strong>Edelstahl-Modeschmuck</strong>, Ringe, Ketten, Ohrringe, Armbänder, 
            Herrenschmuck, Haarschmuck, Uhrenboxen und professionelle Pflege-Sets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#katalog"
              className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 min-h-[48px]"
            >
              <Sparkles className="w-5 h-5" />
              <span>Katalog durchstöbern*</span>
            </a>
            <a
              href="#geschenke"
              className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm sm:text-base border border-slate-300 shadow-sm transition-all flex items-center gap-2 min-h-[48px]"
            >
              <Gift className="w-5 h-5 text-amber-600" />
              <span>Geschenk-Finder*</span>
            </a>
          </div>
        </section>

        {/* 1. Mega Category Grid */}
        <CategoryHero
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* 2. Umfassender Produkt- & Kollektionen-Katalog */}
        <ComprehensiveCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 3. Große Materialkunde (Echtgold, 925 Silber, Chirurgen-Edelstahl, Perlen, Steine) */}
        <MaterialGuide />

        {/* 4. Styling- & Layering-Guide (Necklace Stacking, Ear Party, Mixed Metals) */}
        <StyleGuide />

        {/* 5. Interaktiver Geschenke-Finder nach Anlass & Budget */}
        <GiftFinder />

        {/* 6. Ringgrößen-Ratgeber */}
        <RingSizeGuide />

        {/* 7. Schmuckpflege & Werterhalt */}
        <JewelryCareGuide />

        {/* 8. Punzierungs- & Feingehaltstabelle (333 bis 999, 925 Silber, 950 Platin) */}
        <HallmarkTable />

        {/* 9. E-E-A-T Redaktions-Trust-Box */}
        <EeatTrustBox />

        {/* 10. FAQ Sektion */}
        <FaqSection />
      </main>

      {/* Footer mit rechtlichen Pflichtangaben und Amazon PartnerNet Klausel */}
      <footer className="bg-slate-950 text-slate-400 text-xs mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Spalte 1: Marken-Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-14 w-auto rounded-xl bg-white p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
                  <img src="/logo.png" alt="Karat" className="h-full w-auto object-contain" />
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Das unabhängige Magazin &amp; Portal für Echtschmuck, Modeschmuck, Ringe, Ketten, Accessoires und Schmuckpflege.
              </p>
            </div>

            {/* Spalte 2: Kategorien */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Schmuck-Kategorien</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="#katalog" onClick={() => setSelectedCategory('ringe')} className="hover:text-amber-400 transition-colors">Ringe &amp; Solitäre</a></li>
                <li><a href="#katalog" onClick={() => setSelectedCategory('ketten')} className="hover:text-amber-400 transition-colors">Ketten &amp; Colliers</a></li>
                <li><a href="#katalog" onClick={() => setSelectedCategory('ohrschmuck')} className="hover:text-amber-400 transition-colors">Ohrringe &amp; Ear Cuffs</a></li>
                <li><a href="#katalog" onClick={() => setSelectedCategory('armschmuck')} className="hover:text-amber-400 transition-colors">Armbänder &amp; Bangles</a></li>
                <li><a href="#katalog" onClick={() => setSelectedCategory('modeschmuck')} className="hover:text-amber-400 transition-colors">Wasserfester Modeschmuck</a></li>
                <li><a href="#katalog" onClick={() => setSelectedCategory('herren')} className="hover:text-amber-400 transition-colors">Herrenschmuck</a></li>
              </ul>
            </div>

            {/* Spalte 3: Accessoires & Ratgeber */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Accessoires &amp; Ratgeber</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="#materialkunde" className="hover:text-amber-400 transition-colors">Materialkunde (Gold vs. Edelstahl)</a></li>
                <li><a href="#styling" className="hover:text-amber-400 transition-colors">Styling &amp; Layering-Guide</a></li>
                <li><a href="#geschenke" className="hover:text-amber-400 transition-colors">Geschenke-Finder</a></li>
                <li><a href="#ringgroessen" className="hover:text-amber-400 transition-colors">Ringgrößen-Tabelle</a></li>
                <li><a href="#schmuckpflege" className="hover:text-amber-400 transition-colors">Schmuckpflege &amp; Ultraschall</a></li>
                <li><a href="#punzierung" className="hover:text-amber-400 transition-colors">Feingehalte (333 bis 999)</a></li>
              </ul>
            </div>

            {/* Spalte 4: Rechtliches & Kontakt */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Rechtliches</div>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <button
                    onClick={() => setActiveLegalModal('impressum')}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    Impressum (§ 5 DDG)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveLegalModal('datenschutz')}
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    Datenschutzerklärung (DSGVO)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Offizielle Amazon PartnerNet Klausel nach Amazon-Vorgaben */}
          <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-400 space-y-2 leading-relaxed">
            <p>
              * <strong>Amazon PartnerNet Transparenzhinweis:</strong> karat.info ist Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
            <p>
              Preise, Produktverfügbarkeiten und Versandbedingungen werden direkt von den Händlern auf Amazon.de bereitgestellt und können sich kurzfristig ändern.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
            <div>&copy; {new Date().getFullYear()} karat.info &bull; Das Portal für Schmuck &amp; Accessoires.</div>
            <div className="flex gap-4">
              <button onClick={() => setActiveLegalModal('impressum')} className="hover:underline">Impressum</button>
              <button onClick={() => setActiveLegalModal('datenschutz')} className="hover:underline">Datenschutz</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Rechtliche Popups (Impressum & Datenschutz) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Mobile Sticky Bar */}
      <StickyBottomBar />
    </div>
  );
}
