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
    description: 'Unabhängiger Schmuckratgeber für Deutschland: Materialwissen zu Gold (333–750), Silber 925, Edelstahl 316L und PVD-Vergoldung. Ringgrößen-Rechner, Pflege-Ratgeber und Geschenkideen mit transparenten Amazon-Partnerlinks.',
  },
  '/katalog': {
    title: 'Schmuck-Katalog: Stil-Ideen & Suchmuster | karat.info',
    description: 'Über 50 kuratierte Schmuck-Stil-Ideen: Ringe, Ketten, Creolen, Armbänder und Accessoires für Damen und Herren. Filterbar nach Material und Preiskategorie mit Partnerlinks zu aktuellen Händlerangeboten auf Amazon.',
  },
  '/materialkunde': {
    title: 'Materialkunde: Gold, Silber & Edelstahl im Vergleich | karat.info',
    description: 'Detaillierter Vergleich von Schmuckmaterialien: Goldlegierungen 333 bis 999, 925 Sterling Silber, 316L Edelstahl, PVD-Vergoldung und Gold Vermeil mit Feingehaltsdaten nach FeinGehG und DIN EN 1811.',
  },
  '/styling': {
    title: 'Schmuck-Styling: Layering, Stacking & Kombinationen | karat.info',
    description: 'Stylingtipps für modernes Schmuck-Styling: Ketten-Layering mit unterschiedlichen Längen, Ear-Candy-Looks mit mehreren Ohrringen, Ring-Stacking-Regeln und das stilvolle Kombinieren von Gold und Silber.',
  },
  '/geschenke': {
    title: 'Schmuck-Geschenkefinder: Ideen nach Budget & Anlass | karat.info',
    description: 'Interaktiver Geschenk-Ideenfinder für Schmuck: Empfehlungen nach Empfänger (Partnerin, Partner, Braut, Freundin) und Budget (bis 30 €, 30–100 €, ab 100 €) mit Amazon-Suchlinks.',
  },
  '/ringgroessen': {
    title: 'Ringgrößen-Ratgeber: Tabelle, Formel & Schablone | karat.info',
    description: 'Ringgröße exakt ermitteln: Innenumfang in mm = EU-Ringgröße (ISO 8653:2016). Formel: Durchmesser = EU-Größe ÷ π. Umrechnungstabelle EU, US und UK-Größen sowie Anleitung zur Selbstmessung.',
  },
  '/schmuckpflege': {
    title: 'Schmuckpflege & Ultraschall: Ratgeber mit GIA-Quellen | karat.info',
    description: 'Reinigungsratgeber für Gold-, Silber- und Edelstahlschmuck: Welche Steine Ultraschall vertragen, wie Silber nicht anläuft und wie Perlen richtig gepflegt werden. Mit GIA-Quellenangaben.',
  },
  '/punzierung': {
    title: 'Punzierung & Feingehalte: Gold 333 bis 999 & Silber | karat.info',
    description: 'Vollständige Punzierungstabellen nach FeinGehG: Gold 333 bis 999 (8 bis 24 Karat), 925 Sterling Silber, 800er Silber, 999 Feinsilber und Platin 850–950 mit Legierungsbeispielen.',
  },
  '/faq': {
    title: 'FAQ: Häufige Fragen zu Schmuck & Materialien | karat.info',
    description: 'Faktenbasierte Antworten: Warum verfärbt Schmuck die Haut? Unterschied Gold Vermeil vs Gold Filled? Welche Steine dürfen in Ultraschall? Nickelfreiheit bei Edelstahl? Diamant vs Moissanit vs Zirkonia.',
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

  // Füge llms.txt Link und AI-freundliche Meta-Tags im <head> ein (nach letztem vorhandenen <meta> Tag)
  const llmsLink = `\n  <link rel="alternate" type="text/plain" title="LLMs.txt" href="https://www.karat.info/llms.txt" />`;
  html = html.replace('</head>', `${llmsLink}\n</head>`);

  const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`;
  const dir = path.dirname(toAbsolute(filePath));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(toAbsolute(filePath), html);
  console.log(`  ✓ ${url} -> ${filePath} (${(html.length / 1024).toFixed(1)} kB)`);
}

console.log('Static Site Prerendering complete!');
