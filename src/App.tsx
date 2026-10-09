import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import React, { useState, useEffect } from 'react';
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
import { ProjektuebernahmeModal } from './components/ProjektuebernahmeModal';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Breadcrumbs } from './components/Breadcrumbs';
import { 
  Sparkles, 
  Layers, 
  Gift, 
  ShieldCheck, 
  Ruler, 
  ArrowRight, 
  HelpCircle, 
  BookOpen, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { navigateTo, ROUTES } from './utils/navigation';
import { updateStructuredData } from './utils/seo';

export default function App({ initialPath = '/' }: { initialPath?: string }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (initialPath && initialPath !== '/') return initialPath;
    return typeof window !== 'undefined' ? window.location.pathname || '/' : initialPath || '/';
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLegalModal, setActiveLegalModal] = useState<'impressum' | 'datenschutz' | 'projektuebernahme' | null>(null);

  // Hilfsfunktion: Breadcrumb-Titel für aktuelle Route
  const getCurrentRouteTitle = (path?: string) => {
    const target = path || currentPath;
    return ROUTES[target]?.name || 'Bereich';
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Initialisierung bei Direktaufruf
    const initialPath = window.location.pathname || '/';
    setCurrentPath(initialPath);

    const params = new URLSearchParams(window.location.search);
    const initialCategory = params.get('kategorie');
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    updateStructuredData(initialPath, getCurrentRouteTitle(initialPath));

    // Browser-Zurück/Vorwärts
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      const currentParams = new URLSearchParams(window.location.search);
      const cat = currentParams.get('kategorie') || 'all';
      setSelectedCategory(cat);
      updateStructuredData(path, getCurrentRouteTitle(path));
    };
    window.addEventListener('popstate', handlePopState);

    // Auf eigene Navigations-Events hören
    const handleRouteEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ path: string; categoryId?: string }>;
      const newPath = customEvent.detail?.path || window.location.pathname || '/';
      if (customEvent.detail?.path) {
        setCurrentPath(customEvent.detail.path);
      }
      if (customEvent.detail?.categoryId) {
        setSelectedCategory(customEvent.detail.categoryId);
      }
      updateStructuredData(newPath, getCurrentRouteTitle(newPath));
    };
    window.addEventListener('karat-route-change', handleRouteEvent);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('karat-route-change', handleRouteEvent);
    };
  }, []);

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    navigateTo('/katalog', id);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-amber-200 selection:text-amber-950 pb-20 lg:pb-0">
      {/* Header mit gesetzlicher Transparenzleiste (ohne Sternchen an interner Navigation) */}
      <Header currentPath={currentPath} onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Hauptbereich */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 flex-1 w-full">
        
        {/* Breadcrumb-Navigation auf allen Unterseiten */}
        {currentPath !== '/' && (
          <Breadcrumbs items={[{ label: getCurrentRouteTitle(), path: currentPath }]} />
        )}

        {/* ==================================================================== */}
        {/* ROUTE 1: STARTSEITE (/) */}
        {/* ==================================================================== */}
        {currentPath === '/' && (
          <div className="space-y-10">
            {/* Hero-Bereich mit neuer Positionierung nach Vorgabe Punkt 1 */}
            <section className="text-center max-w-4xl mx-auto pt-4 sm:pt-8 pb-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight mb-4">
                Schmuck verstehen. <span className="text-amber-600">Bewusst auswählen.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mb-6">
                Materialwissen, Ringgrößen und Geschenkideen – mit transparent gekennzeichneten Partnerlinks.
              </p>

              {/* Früh sichtbare Geschäftsmodell-Erklärung nach Vorgabe Punkt 1 */}
              <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-slate-700 text-left flex items-start gap-3 shadow-sm mb-8">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-amber-950 block font-bold">
                    Transparenz &amp; Geschäftsmodell von karat.info:
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    karat.info ist ein unabhängiges Informations- und Ratgeberportal und kein Online-Shop. Wir verkaufen selbst keine Waren und führen kein Warenlager. Wir unterstützen Sie bei der Wahl der richtigen Legierung, Ringgröße und Pflege. Bei Klick auf mit Sternchen (*) markierte Partnerlinks leiten wir zu passenden Händlerangeboten auf Amazon.de weiter, wofür wir eine Werbekostenerstattung erhalten können.
                  </p>
                </div>
              </div>

              {/* Navigations-Buttons OHNE Sternchen */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/katalog"
                  onClick={(e) => { e.preventDefault(); navigateTo('/katalog'); }}
                  className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 min-h-[48px] cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Katalog &amp; Ideen durchstöbern</span>
                </a>
                <a
                  href="/materialkunde"
                  onClick={(e) => { e.preventDefault(); navigateTo('/materialkunde'); }}
                  className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm sm:text-base border border-slate-300 shadow-sm transition-all flex items-center gap-2 min-h-[48px] cursor-pointer"
                >
                  <Layers className="w-5 h-5 text-amber-600" />
                  <span>Materialkunde (Gold &amp; Edelstahl)</span>
                </a>
                <a
                  href="/ringgroessen"
                  onClick={(e) => { e.preventDefault(); navigateTo('/ringgroessen'); }}
                  className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-sm sm:text-base border border-slate-300 shadow-sm transition-all flex items-center gap-2 min-h-[48px] cursor-pointer"
                >
                  <Ruler className="w-5 h-5 text-amber-600" />
                  <span>Ringgrößen ermitteln</span>
                </a>
              </div>
            </section>

            {/* Kategorien-Grid */}
            <CategoryHero
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            {/* Übersicht der Kern-Ratgeber mit direkten Absprunglinks */}
            <section className="my-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Unsere zentralen Schmuckratgeber
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
                  Fundiertes Wissen zu Edelmetallen, Ringweiten und Schmuckpflege – sachlich und ohne Werbeübertreibungen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-amber-900" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Materialkunde &amp; Punzierung</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Vergleich von massivem 585/750 Gold, 925 Sterling Silber und 316L Edelstahl. Fakten zur Nickelfreigabe nach DIN EN 1811 und Feingehaltsangaben nach § 5 FeinGehG.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-slate-100 flex gap-2">
                    <a
                      href="/materialkunde"
                      onClick={(e) => { e.preventDefault(); navigateTo('/materialkunde'); }}
                      className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Zur Materialkunde</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-slate-300">&bull;</span>
                    <a
                      href="/punzierung"
                      onClick={(e) => { e.preventDefault(); navigateTo('/punzierung'); }}
                      className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Feingehalte</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Ruler className="w-5 h-5 text-amber-900" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Ringgrößen &amp; Umrechnung</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Durchmesser und Umfang rechnerisch bestimmen (d = U/π) sowie EU-Größen nach ISO 8653:2016 mit internationalen Richtwerttabellen (US/UK wie BS 6820) und schematischer Schablone.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-slate-100">
                    <a
                      href="/ringgroessen"
                      onClick={(e) => { e.preventDefault(); navigateTo('/ringgroessen'); }}
                      className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Zum Ringgrößen-Ratgeber</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-amber-900" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Pflege, Reinigung &amp; Ultraschall</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Wann Ultraschallbäder Schmucksteinen schaden können, welche Stücke geschont werden müssen und Links zu Primärquellen des GIA.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-slate-100">
                    <a
                      href="/schmuckpflege"
                      onClick={(e) => { e.preventDefault(); navigateTo('/schmuckpflege'); }}
                      className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Zur Pflegeberatung</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Ausgewählte kuratierte Stil-Ideen */}
            <ComprehensiveCatalog
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />

            {/* Redaktionelle Transparenz-Box */}
            <EeatTrustBox />

            {/* Häufig gestellte Fragen (FAQ) */}
            <FaqSection />
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 2: KATALOG & STIL-IDEEN (/katalog) */}
        {/* ==================================================================== */}
        {currentPath === '/katalog' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Schmuck-Katalog: Stil-Ideen &amp; Suchmuster
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Entdecken Sie unsere kuratierte Übersicht an Schmuck- und Accessoire-Inspirationen. Über die Such- und Typfilter finden Sie gezielte Ideen zu Echtschmuck, Edelstahl und Zubehör.
              </p>
            </div>

            <ComprehensiveCatalog
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              isStandalonePage={true}
            />

            {/* Verweise auf weiterführende Ratgeber */}
            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Unsicher bezüglich Legierung oder Ringweite?</strong>
                <span>Nutzen Sie vor einer Bestellung unsere fachlichen Leitfäden zu Materialeigenschaften und Weitenmessung.</span>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href="/materialkunde"
                  onClick={(e) => { e.preventDefault(); navigateTo('/materialkunde'); }}
                  className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-xs cursor-pointer"
                >
                  Materialkunde
                </a>
                <a
                  href="/ringgroessen"
                  onClick={(e) => { e.preventDefault(); navigateTo('/ringgroessen'); }}
                  className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-xs cursor-pointer"
                >
                  Ringgrößen
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 3: MATERIALKUNDE (/materialkunde) */}
        {/* ==================================================================== */}
        {currentPath === '/materialkunde' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Materialkunde: Feingehalte, Legierungen &amp; Beschichtungen
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Umfassender Ratgeber zu Feingold, 925 Sterling Silber, Chirurgen-Edelstahl 316L und Edelsteinen. Faktenbasierte Erläuterungen zu Hautverträglichkeit, Nickelfreisetzung und Schichtstärken.
              </p>
            </div>

            <MaterialGuide />

            <HallmarkTable />

            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-amber-950 block font-bold mb-0.5">Wie reinigt man Gold- und Silberschmuck richtig?</strong>
                <span>Erfahren Sie in unserem Pflegeratgeber, wann Ultraschallreinigung hilft und wann sie empfindliche Steine beschädigen kann.</span>
              </div>
              <a
                href="/schmuckpflege"
                onClick={(e) => { e.preventDefault(); navigateTo('/schmuckpflege'); }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-extrabold text-xs shrink-0 cursor-pointer"
              >
                Zum Pflegeratgeber
              </a>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 4: STYLING & LAYERING (/styling) */}
        {/* ==================================================================== */}
        {currentPath === '/styling' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Schmuck-Styling: Layering, Stacking &amp; Kombinationen
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Anleitungen zum stilvollen Kombinieren mehrerer Halsketten, dem Aufbau einer harmonischen Ear-Party und dem stilsicheren Mischen von Gold- und Silbertönen.
              </p>
            </div>

            <StyleGuide />

            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Auf der Suche nach passenden Ketten oder Creolen?</strong>
                <span>Stöbern Sie in unserem kuratierten Katalog nach Längen, Materialien und Designs.</span>
              </div>
              <a
                href="/katalog"
                onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'ketten'); }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-extrabold text-xs shrink-0 cursor-pointer"
              >
                Ketten-Katalog aufrufen
              </a>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 5: GESCHENKE-FINDER (/geschenke) */}
        {/* ==================================================================== */}
        {currentPath === '/geschenke' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Schmuck-Geschenkideen: Der interaktive Ideenfinder
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Finden Sie mit wenigen Klicks passende Geschenkideen für Partnerin, Partner, Braut oder Freundin – gefiltert nach Budget und Anlass.
              </p>
            </div>

            <GiftFinder />

            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Soll es ein Ring als Geschenk sein?</strong>
                <span>Ermitteln Sie vor dem Kauf die passende Ringweite mit unserer Formel und Schablone.</span>
              </div>
              <a
                href="/ringgroessen"
                onClick={(e) => { e.preventDefault(); navigateTo('/ringgroessen'); }}
                className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-xs shrink-0 cursor-pointer"
              >
                Ringgrößen ermitteln
              </a>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 6: RINGGRÖSSEN (/ringgroessen) */}
        {/* ==================================================================== */}
        {currentPath === '/ringgroessen' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Ringgrößen-Ratgeber &amp; Umrechnungstabelle
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Erfahren Sie, wie Sie den Fingerumfang exakt messen, wie Durchmesser und Umfang mathematisch zusammenhängen und wie internationale Ringmaße genormt sind.
              </p>
            </div>

            <RingSizeGuide />

            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-amber-950 block font-bold mb-0.5">Verlobungsringe &amp; Bandringe im Katalog</strong>
                <span>Entdecken Sie klassische Solitäre, Memoire-Ringe und Bandringe in unserer kuratierten Übersicht.</span>
              </div>
              <a
                href="/katalog"
                onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'ringe'); }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl font-extrabold text-xs shrink-0 cursor-pointer"
              >
                Ring-Katalog aufrufen
              </a>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 7: SCHMUCKPFLEGE (/schmuckpflege) */}
        {/* ==================================================================== */}
        {currentPath === '/schmuckpflege' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Schmuckpflege &amp; Ultraschall: Ratgeber &amp; Quellen
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Schonende Werterhaltung für Gold, Silber und Edelsteine: Differenzierte Hinweise zum Einsatz von Ultraschallgeräten und Verlinkung primärer GIA-Quellen.
              </p>
            </div>

            <JewelryCareGuide />

            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Mehr über Metalle und Legierungen erfahren?</strong>
                <span>In unserer Materialkunde finden Sie Details zu den chemischen Eigenschaften von Gold, Silber und Edelstahl.</span>
              </div>
              <a
                href="/materialkunde"
                onClick={(e) => { e.preventDefault(); navigateTo('/materialkunde'); }}
                className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-xs shrink-0 cursor-pointer"
              >
                Zur Materialkunde
              </a>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 8: PUNZIERUNG (/punzierung) */}
        {/* ==================================================================== */}
        {currentPath === '/punzierung' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Punzierung &amp; Feingehalte (333 bis 999)
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Amtliche Stempelzeichen für Gold, Silber und Platin nach dem deutschen Feingehaltstempelgesetz (FeinGehG).
              </p>
            </div>

            <HallmarkTable />

            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <strong className="text-slate-900 block font-bold mb-0.5">Unterschied zwischen Massivgold und Vergoldungen</strong>
                <span>Erfahren Sie in der Materialkunde, was Gold Vermeil und PVD-Beschichtungen von massivem Feingold unterscheidet.</span>
              </div>
              <a
                href="/materialkunde"
                onClick={(e) => { e.preventDefault(); navigateTo('/materialkunde'); }}
                className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl font-bold text-slate-800 text-xs shrink-0 cursor-pointer"
              >
                Zur Materialkunde
              </a>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* ROUTE 9: FAQ (/faq) */}
        {/* ==================================================================== */}
        {currentPath === '/faq' && (
          <div className="space-y-6">
            <div className="pt-2 pb-4">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Häufige Fragen (FAQ) zu Schmuck, Materialien &amp; Pflege
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
                Antworten auf häufig gestellte Fragen zu PVD-Beschichtungen, Hautverträglichkeit, Gold Vermeil und der Werterhaltung von Schmuckstücken.
              </p>
            </div>

            <FaqSection />

            <EeatTrustBox />
          </div>
        )}

      </main>

      {/* Footer mit rechtlichen Pflichtangaben, korrekten Hinweisen & Amazon PartnerNet Klausel */}
      <footer className="bg-slate-950 text-slate-400 text-xs mt-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Spalte 1: Marken- & Portalinfo (KEIN "Ihr Online-Shop") */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-14 w-auto rounded-xl bg-white p-1.5 flex items-center justify-center overflow-hidden shadow-sm">
                  <img src="/logo.png" alt="Karat" className="h-full w-auto object-contain" />
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Unabhängiger Schmuck- und Materialratgeber für Echtschmuck, Edelmetalle, Modeschmuck und Zubehör mit redaktionell kuratierten Partnerlinks.
              </p>
            </div>

            {/* Spalte 2: Kategorien (ohne Sternchen) */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Schmuck-Kategorien</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="/katalog?kategorie=ringe" onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'ringe'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Ringe &amp; Solitäre</a></li>
                <li><a href="/katalog?kategorie=ketten" onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'ketten'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Ketten &amp; Colliers</a></li>
                <li><a href="/katalog?kategorie=ohrschmuck" onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'ohrschmuck'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Ohrringe &amp; Ear Cuffs</a></li>
                <li><a href="/katalog?kategorie=armschmuck" onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'armschmuck'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Armbänder &amp; Bangles</a></li>
                <li><a href="/katalog?kategorie=modeschmuck" onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'modeschmuck'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Modeschmuck &amp; Edelstahl</a></li>
                <li><a href="/katalog?kategorie=herren" onClick={(e) => { e.preventDefault(); navigateTo('/katalog', 'herren'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Herrenschmuck</a></li>
              </ul>
            </div>

            {/* Spalte 3: Ratgeber & Werkzeuge (ohne Sternchen) */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Ratgeber &amp; Werkzeuge</div>
              <ul className="space-y-1.5 text-slate-400">
                <li><a href="/materialkunde" onClick={(e) => { e.preventDefault(); navigateTo('/materialkunde'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Materialkunde (Gold vs. Edelstahl)</a></li>
                <li><a href="/styling" onClick={(e) => { e.preventDefault(); navigateTo('/styling'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Styling- &amp; Layering-Guide</a></li>
                <li><a href="/geschenke" onClick={(e) => { e.preventDefault(); navigateTo('/geschenke'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Geschenk-Ideenfinder</a></li>
                <li><a href="/ringgroessen" onClick={(e) => { e.preventDefault(); navigateTo('/ringgroessen'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Ringgrößen-Tabelle &amp; Formel</a></li>
                <li><a href="/schmuckpflege" onClick={(e) => { e.preventDefault(); navigateTo('/schmuckpflege'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Pflege &amp; Ultraschall (GIA-Quellen)</a></li>
                <li><a href="/punzierung" onClick={(e) => { e.preventDefault(); navigateTo('/punzierung'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Feingehalte (333 bis 999)</a></li>
                <li><a href="/faq" onClick={(e) => { e.preventDefault(); navigateTo('/faq'); }} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Häufige Fragen (FAQ)</a></li>
              </ul>
            </div>

            {/* Spalte 4: Rechtliches */}
            <div className="space-y-2">
              <div className="font-extrabold text-white uppercase tracking-wider text-[11px]">Rechtliches</div>
              <ul className="space-y-1.5 text-slate-400">
                <li>
                  <button
                    onClick={() => setActiveLegalModal('impressum')}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    Impressum (§ 5 DDG)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveLegalModal('datenschutz')}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    Datenschutzerklärung (DSGVO)
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Amazon PartnerNet Transparenzklausel & PAngV */}
          <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-400 space-y-2 leading-relaxed">
            <p>
              * <strong>Transparenzhinweis &amp; Werbekennzeichnung:</strong> karat.info ist Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
            </p>
            <p>
              <strong>Vertragsschluss &amp; Preise (PAngV &amp; UWG):</strong> karat.info verkauft selbst keine Waren. Bei Klick auf einen externen Partnerlink (*) werden Sie zum Angebot auf Amazon.de weitergeleitet. Ein Kaufvertrag kommt ausschließlich zwischen Ihnen und dem jeweiligen Händler auf Amazon.de zustande. Alle angegebenen Preisspannen sind unverbindliche Orientierungswerte, die durch stichprobenartige Marktrecherchen gängiger Angebote (u. a. Amazon.de und Otto.de, Stand: September 2026 für typische Legierungen und Grammgewichte von ca. 1,5 bis 3 g) erhoben wurden. Sie dienen ausschließlich der Orientierung bei der Budgetplanung und können sich jederzeit ändern. Verbindlich sind allein die Preise und Angaben auf der Händlerseite zum Zeitpunkt des Kaufs.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
            <div>&copy; {new Date().getFullYear()} karat.info &bull; Unabhängiger Schmuckratgeber &amp; Stil-Inspirationen.</div>
            <div className="flex gap-4">
              <button onClick={() => setActiveLegalModal('impressum')} className="hover:underline cursor-pointer">Impressum</button>
              <button onClick={() => setActiveLegalModal('datenschutz')} className="hover:underline cursor-pointer">Datenschutz</button>
            </div>
          </div>
        </div>
      
            <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-300">
              <span className="font-bold text-white block mb-1">Projektübernahme</span>
              <p className="mb-2">Interesse an der Übernahme von karat.info inklusive Projekt?</p>
              <a href="/projektuebernahme" className="text-amber-400 hover:text-amber-300 font-medium cursor-pointer" onClick={(e) => { e.preventDefault(); setActiveLegalModal('projektuebernahme'); }}>
                Mehr erfahren &rarr;
              </a>
            </div>

</footer>

      {/* Rechtliche Modals (Impressum & Datenschutz) */}
      
      {activeLegalModal === 'projektuebernahme' && (
        <ProjektuebernahmeModal isOpen={true} onClose={() => setActiveLegalModal(null)} />
      )}

      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Mobile Sticky Bar (ohne Sternchen an interner Navigation) */}
      <StickyBottomBar />
      <ScrollToTop />
      <Analytics />
    </div>
  );
}
