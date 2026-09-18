import { FAQS_DATA } from '../components/FaqSection';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function updateStructuredData(pathname: string, routeName: string) {
  // Suche bestehendes Script oder erstelle eines
  let script = document.getElementById('schema-org-graph') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'schema-org-graph';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  const baseUrl = 'https://www.karat.info';
  const cleanPath = pathname === '/' ? '' : pathname;
  const currentUrl = `${baseUrl}${cleanPath}`;

  const graph: any[] = [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'karat.info - Schmuckratgeber',
      description: 'Unabhängiger Schmuckratgeber: Materialwissen zu Gold, Silber und Edelstahl, Ringgrößen-Ermittlung und Geschenkideen mit transparenten Partnerlinks.',
      inLanguage: 'de-DE',
    },
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'karat.info Redaktion',
      url: `${baseUrl}/`,
      logo: `${baseUrl}/favicon.svg`,
    },
  ];

  // 1. BreadcrumbList: Pro Unterseite NUR "Startseite → aktueller Bereich"
  if (pathname !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${currentUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startseite',
          item: `${baseUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: routeName,
          item: currentUrl,
        },
      ],
    });
  }

  // 2. FAQ-Markup: NUR auf Seiten mit sichtbaren FAQs ausgeben (/ und /faq)
  if (pathname === '/' || pathname === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${currentUrl}#faq`,
      mainEntity: FAQS_DATA.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  }, null, 2);
}
