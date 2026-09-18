export interface RouteConfig {
  path: string;
  name: string;
  title: string;
  description: string;
}

export const ROUTES: Record<string, RouteConfig> = {
  '/': {
    path: '/',
    name: 'Startseite',
    title: 'Schmuck verstehen. Bewusst auswählen. | karat.info',
    description: 'Unabhängiger Schmuckratgeber: Materialwissen zu Gold, Silber und Edelstahl, Ringgrößen-Ermittlung und Geschenkideen mit transparenten Partnerlinks.',
  },
  '/katalog': {
    path: '/katalog',
    name: 'Katalog & Stil-Ideen',
    title: 'Schmuck-Katalog: Stil-Ideen & Suchmuster | karat.info',
    description: 'Kuratierte Schmuck- und Geschenkideen: Ringe, Ketten, Creolen und Accessoires im Überblick mit Partnerlinks zu Händlerangeboten.',
  },
  '/materialkunde': {
    path: '/materialkunde',
    name: 'Materialkunde',
    title: 'Materialkunde: Gold, Silber & Edelstahl im Vergleich | karat.info',
    description: 'Differenzierte Schmuck-Materialkunde: Feingehalte, PVD-Vergoldung, Gold Vermeil und Nickelverträglichkeit nach DIN EN 1811 und FeinGehG.',
  },
  '/styling': {
    path: '/styling',
    name: 'Styling- & Layering',
    title: 'Schmuck-Styling: Layering, Stacking & Kombinationen | karat.info',
    description: 'Praktische Stylingtipps für Ketten-Layering, Ear-Candy und das stilvolle Mischen von Gold und Silber.',
  },
  '/geschenke': {
    path: '/geschenke',
    name: 'Geschenk-Finder',
    title: 'Schmuck-Geschenkefinder: Ideen nach Budget & Anlass | karat.info',
    description: 'Interaktiver Geschenk-Ideenfinder für Damen und Herren mit Orientierungswerten und Amazon-Suchlinks.',
  },
  '/ringgroessen': {
    path: '/ringgroessen',
    name: 'Ringgrößen-Ratgeber',
    title: 'Ringgrößen-Ratgeber: Tabelle, Formel & Schablone | karat.info',
    description: 'Ringgröße exakt ermitteln: Innendurchmesser, Umfangsberechnung (d = U/π) und internationale Ringmaße nach ISO 8653:2016.',
  },
  '/schmuckpflege': {
    path: '/schmuckpflege',
    name: 'Schmuckpflege',
    title: 'Schmuckpflege & Ultraschall: Ratgeber mit GIA-Quellen | karat.info',
    description: 'Sichere Pflege von Gold-, Silber- und Edelsteinschmuck: Wann Ultraschall schadet und wie Sie Schmuck schonend reinigen.',
  },
  '/punzierung': {
    path: '/punzierung',
    name: 'Punzierung & Feingehalte',
    title: 'Punzierung & Feingehalte: Gold 333 bis 999 & Silber | karat.info',
    description: 'Punzierungstabelle nach FeinGehG: Gold 333 bis 999 (99,9 %), 925 Sterling Silber und Platin mit Legierungsbeispielen.',
  },
  '/faq': {
    path: '/faq',
    name: 'Häufige Fragen (FAQ)',
    title: 'FAQ: Häufige Fragen zu Schmuck & Materialien | karat.info',
    description: 'Faktenbasierte Antworten zu Wasserfestigkeit, PVD-Beschichtung, Gold Vermeil, Pflege und Allergieverträglichkeit.',
  },
};

export const navigateTo = (pathWithQuery: string, categoryId?: string) => {
  let targetPath = pathWithQuery.startsWith('/') ? pathWithQuery : `/${pathWithQuery}`;
  
  // Wenn categoryId übergeben wird und Pfad /katalog ist, URL-Query anfügen
  if (categoryId && categoryId !== 'all') {
    const [pathname] = targetPath.split('?');
    if (pathname === '/katalog') {
      targetPath = `/katalog?kategorie=${encodeURIComponent(categoryId)}`;
    }
  }

  const [purePath] = targetPath.split('?');

  if (window.location.pathname + window.location.search !== targetPath) {
    window.history.pushState({}, '', targetPath);
  }

  // Update SEO Title & Canonical tag
  const route = ROUTES[purePath] || ROUTES['/'];
  if (route) {
    document.title = route.title;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `https://www.karat.info${route.path === '/' ? '/' : route.path}`;
    }
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = route.description;
    }
  }

  // Nach Seitenwechsel nach oben scrollen
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Dispatch custom event for state updates
  window.dispatchEvent(new CustomEvent('karat-route-change', { 
    detail: { 
      path: purePath, 
      fullUrl: targetPath,
      categoryId 
    } 
  }));
};
