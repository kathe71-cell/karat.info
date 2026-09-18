import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist-ssr/entry-server.js');

const ROUTES = {
  '/': {
    title: 'Schmuck verstehen. Bewusst auswählen. | karat.info',
    description: 'Unabhängiger Schmuckratgeber: Materialwissen zu Gold, Silber und Edelstahl, Ringgrößen-Ermittlung und Geschenkideen mit transparenten Partnerlinks.',
  },
  '/katalog': {
    title: 'Schmuck-Katalog: Stil-Ideen & Suchmuster | karat.info',
    description: 'Kuratierte Schmuck- und Geschenkideen: Ringe, Ketten, Creolen und Accessoires im Überblick mit Partnerlinks zu Händlerangeboten.',
  },
  '/materialkunde': {
    title: 'Materialkunde: Gold, Silber & Edelstahl im Vergleich | karat.info',
    description: 'Differenzierte Schmuck-Materialkunde: Feingehalte, PVD-Vergoldung, Gold Vermeil und Nickelverträglichkeit nach DIN EN 1811 und FeinGehG.',
  },
  '/styling': {
    title: 'Schmuck-Styling: Layering, Stacking & Kombinationen | karat.info',
    description: 'Praktische Stylingtipps für Ketten-Layering, Ear-Candy und das stilvolle Mischen von Gold und Silber.',
  },
  '/geschenke': {
    title: 'Schmuck-Geschenkefinder: Ideen nach Budget & Anlass | karat.info',
    description: 'Interaktiver Geschenk-Ideenfinder für Damen und Herren mit Orientierungswerten und Amazon-Suchlinks.',
  },
  '/ringgroessen': {
    title: 'Ringgrößen-Ratgeber: Tabelle, Formel & Schablone | karat.info',
    description: 'Ringgröße exakt ermitteln: Innendurchmesser, Umfangsberechnung (d = U/π) und internationale Ringmaße nach ISO 8653:2016.',
  },
  '/schmuckpflege': {
    title: 'Schmuckpflege & Ultraschall: Ratgeber mit GIA-Quellen | karat.info',
    description: 'Sichere Pflege von Gold-, Silber- und Edelsteinschmuck: Wann Ultraschall schadet und wie Sie Schmuck schonend reinigen.',
  },
  '/punzierung': {
    title: 'Punzierung & Feingehalte: Gold 333 bis 999 & Silber | karat.info',
    description: 'Punzierungstabelle nach FeinGehG: Gold 333 bis 999 (99,9 %), 925 Sterling Silber und Platin mit Legierungsbeispielen.',
  },
  '/faq': {
    title: 'FAQ: Häufige Fragen zu Schmuck & Materialien | karat.info',
    description: 'Faktenbasierte Antworten zu Wasserfestigkeit, PVD-Beschichtung, Gold Vermeil, Pflege und Allergieverträglichkeit.',
  },
};

console.log(`Starting prerendering of ${Object.keys(ROUTES).length} routes...`);

for (const [url, meta] of Object.entries(ROUTES)) {
  const appHtml = render(url);

  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Update Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${meta.title}" />`);
  html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`);
  html = html.replace(/<meta property="twitter:title" content=".*?" \/>/, `<meta property="twitter:title" content="${meta.title}" />`);

  // Update Description
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.description}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.description}" />`);
  html = html.replace(/<meta property="twitter:description" content=".*?" \/>/, `<meta property="twitter:description" content="${meta.description}" />`);

  // Update Canonical & OG URL
  const canonicalUrl = `https://www.karat.info${url === '/' ? '/' : url}`;
  html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="twitter:url" content=".*?" \/>/, `<meta property="twitter:url" content="${canonicalUrl}" />`);

  const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`;
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(toAbsolute(filePath), html);
  console.log(`  ✓ ${url} -> ${filePath} (${(html.length / 1024).toFixed(1)} kB)`);
}

console.log('Static Site Prerendering complete!');
