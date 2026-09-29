import { FAQS_DATA } from '../components/FaqSection';

interface BreadcrumbItem {
  name: string;
  url: string;
}

const BASE_URL = 'https://www.karat.info';

export function updateStructuredData(pathname: string, routeName: string) {
  // Suche bestehendes Script oder erstelle eines
  let script = document.getElementById('schema-org-graph') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'schema-org-graph';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const cleanPath = pathname === '/' ? '' : pathname;
  const currentUrl = `${BASE_URL}${cleanPath}`;

  const graph: any[] = [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: 'karat.info - Schmuckratgeber',
      description: 'Unabhängiger Schmuckratgeber: Materialwissen zu Gold, Silber und Edelstahl, Ringgrößen-Ermittlung und Geschenkideen mit transparenten Partnerlinks.',
      inLanguage: 'de-DE',
      publisher: { '@id': `${BASE_URL}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'karat.info Redaktion',
      url: `${BASE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/favicon.svg`,
        width: 512,
        height: 512,
      },
    },
  ];

  // 1. BreadcrumbList
  if (pathname !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${currentUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: routeName, item: currentUrl },
      ],
    });
  }

  // 2. FAQPage (auf / und /faq)
  if (pathname === '/' || pathname === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${currentUrl}#faq`,
      mainEntity: FAQS_DATA.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    });
  }

  // 3. Seitenspezifische Article / HowTo / ItemList
  if (pathname === '/materialkunde') {
    graph.push({
      '@type': 'Article',
      '@id': `${currentUrl}#article`,
      headline: 'Schmuck-Materialkunde: Gold, Silber und Edelstahl im Vergleich',
      description: 'Detaillierter Vergleich von Schmuckmaterialien: Goldlegierungen 333 bis 999, 925 Sterling Silber, 316L Edelstahl, PVD-Vergoldung und Gold Vermeil mit Feingehaltsangaben nach FeinGehG.',
      inLanguage: 'de-DE',
      url: currentUrl,
      author: { '@id': `${BASE_URL}/#organization` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      about: [
        { '@type': 'Thing', name: '585 Gold', description: 'Goldlegierung mit 58,5 % Feingoldanteil (14 Karat)' },
        { '@type': 'Thing', name: '925 Sterling Silber', description: 'Silberlegierung mit 92,5 % Feinsilber' },
        { '@type': 'Thing', name: '316L Edelstahl', description: 'Korrosionsbeständiger austenitischer Stahl für Schmuck' },
        { '@type': 'Thing', name: 'PVD-Beschichtung', description: 'Physical Vapour Deposition — Vakuum-Aufdampfbeschichtung für Schmuck' },
        { '@type': 'Thing', name: 'Gold Vermeil', description: '925-Silber-Kern mit galvanischer Goldauflage ≥ 2,5 µm' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', 'h3', '.speakable'],
      },
    });
  }

  if (pathname === '/ringgroessen') {
    graph.push({
      '@type': 'HowTo',
      '@id': `${currentUrl}#howto`,
      name: 'Wie ermittle ich meine Ringgröße?',
      description: 'Anleitung zur Selbstmessung der Ringgröße mit Formel und Tabelle nach ISO 8653:2016.',
      inLanguage: 'de-DE',
      url: currentUrl,
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Finger messen',
          text: 'Messen Sie den Umfang Ihres Fingers mit einem Maßband oder einem Streifen Papier am Knöchel, abends bei normaler Temperatur.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'EU-Ringgröße ablesen',
          text: 'Der Umfang in Millimetern entspricht direkt der EU-Ringgröße (ISO 8653:2016). Beispiel: 54 mm Umfang = Größe 54.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Durchmesser berechnen',
          text: 'Durchmesser = EU-Größe ÷ π (3,1416). Beispiel: Größe 54 ÷ 3,1416 ≈ 17,2 mm Innendurchmesser.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Internationale Größen umrechnen',
          text: 'EU 52 ≈ US 6; EU 54 ≈ US 7; EU 56 ≈ US 7,5. Für UK-Größen Referenztabelle nach BS 6820 heranziehen.',
        },
      ],
    });
  }

  if (pathname === '/schmuckpflege') {
    graph.push({
      '@type': 'HowTo',
      '@id': `${currentUrl}#howto`,
      name: 'Wie pflege ich Schmuck richtig?',
      description: 'Reinigungsratgeber für Gold-, Silber- und Edelstahlschmuck mit Ultraschall-Übersicht nach GIA-Empfehlungen.',
      inLanguage: 'de-DE',
      url: currentUrl,
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Material bestimmen',
          text: 'Identifizieren Sie das Material: Echtgold (333–750), 925 Silber, 316L Edelstahl oder Modeschmuck. Das Material bestimmt die Reinigungsmethode.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Reinigungsmethode wählen',
          text: 'Gold und Silber: lauwarmes Seifenwasser + weiches Tuch. Edelstahl: feuchte Mikrofaser. Perlen und organische Steine: NUR trockenes oder leicht feuchtes Tuch.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Ultraschall prüfen',
          text: 'Ultraschall nur bei Diamanten, Rubinen und Saphiren in stabiler Fassung ohne Kleber. NICHT bei Perlen, Opalen, Türkis, Smaragden (meist geölt), Koralle oder loser Fassung.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Aufbewahrung',
          text: 'Silber in luftdichter Box oder Zip-Beutel aufbewahren — Schwefelverbindungen in der Luft verursachen Anlaufen. Schmuckstücke getrennt lagern, um Kratzer zu vermeiden.',
        },
      ],
    });
  }

  if (pathname === '/punzierung') {
    graph.push({
      '@type': 'Article',
      '@id': `${currentUrl}#article`,
      headline: 'Punzierung und Feingehalte: Gold, Silber und Platin nach FeinGehG',
      description: 'Vollständige Punzierungstabellen für Gold (333 bis 999), Silber (800, 925, 999) und Platin (850, 900, 950) nach dem deutschen Feingehaltstempelgesetz.',
      inLanguage: 'de-DE',
      url: currentUrl,
      author: { '@id': `${BASE_URL}/#organization` },
      publisher: { '@id': `${BASE_URL}/#organization` },
      about: [
        { '@type': 'Thing', name: 'FeinGehG', description: 'Deutsches Feingehaltstempelgesetz — regelt Punzierungspflichten für Edelmetallwaren' },
        { '@type': 'Thing', name: '585 Punzierung', description: 'Stempel „585" = 585/1000 Feingold = 14 Karat Gold' },
        { '@type': 'Thing', name: '925 Punzierung', description: 'Stempel „925" = 925/1000 Feinsilber = Sterling Silber' },
      ],
    });
  }

  if (pathname === '/katalog') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${currentUrl}#itemlist`,
      name: 'Schmuck-Katalog: Kuratierte Stil-Ideen',
      description: 'Redaktionell kuratierte Schmuck-Stil-Ideen in den Kategorien Ringe, Ketten, Ohrringe, Armbänder, Herren-Schmuck und Accessoires.',
      inLanguage: 'de-DE',
      url: currentUrl,
      numberOfItems: 50,
    });
  }

  if (pathname === '/styling') {
    graph.push({
      '@type': 'Article',
      '@id': `${currentUrl}#article`,
      headline: 'Schmuck-Styling: Layering, Ear Candy und Ring-Stacking',
      description: 'Praktische Tipps für das Kombinieren von Schmuck: Ketten-Layering, Ear-Party mit mehreren Ohrringen und stilvolles Mischen von Gold und Silber.',
      inLanguage: 'de-DE',
      url: currentUrl,
      author: { '@id': `${BASE_URL}/#organization` },
      publisher: { '@id': `${BASE_URL}/#organization` },
    });
  }

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  }, null, 2);
}
