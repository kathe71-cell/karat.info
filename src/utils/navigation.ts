export interface RouteConfig {
  path: string;
  sectionId: string;
  title: string;
  description: string;
}

export const ROUTES: Record<string, RouteConfig> = {
  '/': {
    path: '/',
    sectionId: 'top',
    title: 'Edler Schmuck & stilvolle Accessoires: Kollektionen & Ratgeber | karat.info',
    description: 'Entdecken Sie ausgewählte Kollektionen in Echtgold, 925 Silber, wasserfestem Edelstahl, Diamanten sowie Trend-Modeschmuck & Zubehör.',
  },
  '/katalog': {
    path: '/katalog',
    sectionId: 'katalog',
    title: 'Schmuck-Katalog & Kollektionen: Ringe, Ketten, Creolen & Mehr | karat.info',
    description: 'Entdecken Sie Ringe, Halsketten, Creolen, Armbänder, Herrenschmuck und Zubehör im kuratierten Katalog.',
  },
  '/materialkunde': {
    path: '/materialkunde',
    sectionId: 'materialkunde',
    title: 'Schmuck-Materialkunde: 585 Gold, 925 Silber & 316L Edelstahl | karat.info',
    description: 'Fachwissen zu 585/750 Gold, 925 Sterling Silber, 316L Chirurgen-Edelstahl und Perlen nach DIN EN ISO 9202.',
  },
  '/styling': {
    path: '/styling',
    sectionId: 'styling',
    title: 'Styling- & Layering-Guide: Stacking & Schmuck kombinieren | karat.info',
    description: 'Professionelle Styling-Tipps zum Necklace Stacking, Ear Party, Ring Stacking und gekonnten Mischen von Metallen.',
  },
  '/geschenke': {
    path: '/geschenke',
    sectionId: 'geschenke',
    title: 'Schmuck-Geschenkefinder: Geschenke nach Budget & Anlass | karat.info',
    description: 'Finden Sie das perfekte Schmuckgeschenk für Geburtstag, Jahrestag, Jubiläum oder besondere Anlässe.',
  },
  '/ringgroessen': {
    path: '/ringgroessen',
    sectionId: 'ringgroessen',
    title: 'Ringgrößen-Tabelle & Ratgeber: Ringgröße einfach ermitteln | karat.info',
    description: 'Ringgröße einfach und präzise ermitteln mit internationaler Vergleichstabelle und Mess-Methoden.',
  },
  '/schmuckpflege': {
    path: '/schmuckpflege',
    sectionId: 'schmuckpflege',
    title: 'Schmuckpflege & Werterhalt: Gold, Silber & Edelstahl reinigen | karat.info',
    description: 'Reinigungs- und Pflegetipps für Gold, Silber, Edelstahl, Perlen und Diamantschmuck.',
  },
  '/punzierung': {
    path: '/punzierung',
    sectionId: 'punzierung',
    title: 'Punzierung & Feingehalte: Gold 333 bis 999, 925 Silber, Platin | karat.info',
    description: 'Übersicht aller amtlichen Punzierungen und Feingehalte von 333 bis 999 Feingold und 925 Sterling Silber.',
  },
  '/faq': {
    path: '/faq',
    sectionId: 'faq',
    title: 'FAQ: Häufige Fragen zu Schmuck, Pflege & Edelmetallen | karat.info',
    description: 'Antworten auf die wichtigsten Fragen zu Wasserfestigkeit, Ringgrößen, Gold Vermeil und Materialqualität.',
  },
};

export const navigateTo = (path: string, categoryId?: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  if (window.location.pathname !== normalizedPath) {
    window.history.pushState({}, '', normalizedPath);
  }

  // Update SEO Title & Canonical tag
  const route = ROUTES[normalizedPath] || ROUTES['/'];
  if (route) {
    document.title = route.title;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `https://karat.info${route.path === '/' ? '' : route.path}`;
    }
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = route.description;
    }
  }

  // Smooth scroll
  if (route.sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.getElementById(route.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Dispatch custom event for state updates
  window.dispatchEvent(new CustomEvent('karat-route-change', { detail: { path: normalizedPath, categoryId } }));
};
