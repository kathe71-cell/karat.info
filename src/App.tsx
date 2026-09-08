import React, { useState } from 'react';
import { Header } from './components/Header';
import { PositionZeroBox } from './components/PositionZeroBox';
import { GoldCalculator } from './components/GoldCalculator';
import { DiamondCalculator } from './components/DiamondCalculator';
import { HallmarkTable } from './components/HallmarkTable';
import { RingSizeGuide } from './components/RingSizeGuide';
import { JewelryCareGuide } from './components/JewelryCareGuide';
import { AffiliateShowcase } from './components/AffiliateShowcase';
import { TestingGuide } from './components/TestingGuide';
import { EmbedWidgetSection } from './components/EmbedWidgetSection';
import { EeatTrustBox } from './components/EeatTrustBox';
import { FaqSection } from './components/FaqSection';
import { LegalModals } from './components/LegalModals';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Gem, Calculator, Sparkles, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export default function App() {
  const [calculatorTab, setCalculatorTab] = useState<'gold' | 'diamant'>('gold');
  const [activeLegalModal, setActiveLegalModal] = useState<'impressum' | 'datenschutz' | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-amber-200 selection:text-amber-950 pb-20 lg:pb-0">
      {/* Header mit gesetzlicher Transparenzleiste */}
      <Header onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Hauptinhalt */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 flex-1 w-full">
        {/* Hero-Bereich */}
        <section className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold mb-4 shadow-sm">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Das unabhängige Fachportal für Feingehalt, Punzierung &amp; Echtschmuck</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mb-4">
            Karat bei Gold &amp; Schmuck <span className="text-amber-600">exakt berechnen</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Ermitteln Sie Feingoldanteil, Materialwert und Punzierungen nach dem <strong>deutschen FeinGehG</strong> oder 
            rechnen Sie <strong>metrisches Karat (ct)</strong> für Diamanten und Brillanten nach <strong>DIN EN ISO 18323</strong> um.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#rechner"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 min-h-[48px]"
            >
              <Calculator className="w-5 h-5" />
              <span>Zum Karat-Rechner</span>
            </a>
            <a
              href="#schmuck"
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm sm:text-base border border-slate-300 shadow-sm transition-all flex items-center gap-2 min-h-[48px]"
            >
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>Echtschmuck-Kollektionen*</span>
            </a>
          </div>
        </section>

        {/* 1. Pflichtbaustein: Position-0 Definitions-Box */}
        <PositionZeroBox />

        {/* 2. Pflichtbaustein: Interaktiver Karat-Rechner */}
        <section id="rechner" className="my-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex rounded-2xl bg-slate-200 p-1 text-xs sm:text-sm font-extrabold shadow-inner">
              <button
                onClick={() => setCalculatorTab('gold')}
                className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 min-h-[44px] ${
                  calculatorTab === 'gold'
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>Gold-Karat &amp; Feingold (kt)</span>
              </button>
              <button
                onClick={() => setCalculatorTab('diamant')}
                className={`px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 min-h-[44px] ${
                  calculatorTab === 'diamant'
                    ? 'bg-white text-slate-950 shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Gem className="w-4 h-4 text-amber-600" />
                <span>Diamanten &amp; Edelsteine (ct)</span>
              </button>
            </div>
          </div>

          {calculatorTab === 'gold' ? <GoldCalculator /> : <DiamondCalculator />}
        </section>

        {/* Kuratierte Amazon Affiliate Schmuckkollektionen */}
        <AffiliateShowcase />

        {/* Offizielle Punzierungstabelle (§ 5 FeinGehG) */}
        <HallmarkTable />

        {/* Ringgrößen-Guide & Finder */}
        <RingSizeGuide />

        {/* Wissenschaftliche Echtheitsprüfung */}
        <TestingGuide />

        {/* Schmuckpflege & Ultraschall-Guide */}
        <JewelryCareGuide />

        {/* 3. Pflichtbaustein: Webmaster Embed Widget Box */}
        <EmbedWidgetSection />

        {/* 4. Pflichtbaustein: E-E-A-T Redaktions-Trust-Box */}
        <EeatTrustBox />

        {/* FAQ Sektion für SEO */}
        <FaqSection />
      </main>

      {/* Footer mit rechtlichen Pflichtangaben und Amazon PartnerNet Klausel */}
      <footer className="bg-slate-950 text-slate-400 text-xs mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Spalte 1: Marken-Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                  <Gem className="w-4 h-4 text-slate-950" />
                </div>
                <span className="text-lg font-black text-white">karat<span className="text-amber-500">.info</span></span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Das unabhängige Fachportal für Feingehalte nach dem Gesetz über den Feingehalt der Gold- und Silberwaren (FeinGehG) und metrische Karat nach DIN EN ISO 18323.
              </p>
            </div>

            {/* Spalte 2: Rechner & Guides */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Fachbereiche</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="#rechner" className="hover:text-amber-400 transition-colors">Gold-Karat Rechner</a></li>
                <li><a href="#rechner" className="hover:text-amber-400 transition-colors">Diamanten-Karat (ct)</a></li>
                <li><a href="#punzierung" className="hover:text-amber-400 transition-colors">Punzierungstabelle (333 - 999)</a></li>
                <li><a href="#ringgroessen" className="hover:text-amber-400 transition-colors">Ringgrößen-Finder</a></li>
                <li><a href="#echtheitspruefung" className="hover:text-amber-400 transition-colors">Echtheitsprüfung (Dichte &amp; Säure)</a></li>
              </ul>
            </div>

            {/* Spalte 3: Echtschmuck & Partner */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Echtschmuck*</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="#schmuck" className="hover:text-amber-400 transition-colors">Solitär-Ringe 585 &amp; 750*</a></li>
                <li><a href="#schmuck" className="hover:text-amber-400 transition-colors">Panzerketten Gelbgold 14k*</a></li>
                <li><a href="#schmuck" className="hover:text-amber-400 transition-colors">Ultraschallreiniger &amp; Pflege*</a></li>
                <li><a href="#schmuck" className="hover:text-amber-400 transition-colors">Juwelierlupen &amp; Feinwaagen*</a></li>
                <li><a href="#embed" className="hover:text-amber-400 transition-colors">Rechner-Widget einbinden</a></li>
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
                <li className="text-[11px] text-slate-400 pt-2">
                  Redaktion: Jens Kathe<br />
                  Hansastraße 6, 34119 Kassel
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
              Alle Berechnungen auf dieser Website sind unverbindliche Modellrechnungen. Die tatsächlichen Ankaufskurse und Schmuckpreise variieren je nach Legierungszusammensetzung, Marktlage und individuellem Verhandlungspartner.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
            <div>&copy; {new Date().getFullYear()} karat.info &bull; Alle Rechte vorbehalten.</div>
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
