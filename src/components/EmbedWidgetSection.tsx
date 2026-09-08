import React, { useState } from 'react';
import { Code2, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';

export const EmbedWidgetSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [widgetType, setWidgetType] = useState<'gold' | 'diamant'>('gold');

  const embedCode = `<iframe src="https://karat.info/rechner-embed?type=${widgetType}" width="100%" height="520" frameborder="0" style="border:1px solid #e2e8f0;border-radius:16px;max-width:680px;box-shadow:0 4px 12px rgba(0,0,0,0.06);" title="Karat & Feingold Rechner - karat.info"></iframe>
<p style="font-size:11px;color:#64748b;margin-top:6px;font-family:sans-serif;">Rechner bereitgestellt von <a href="https://karat.info/" target="_blank" style="color:#d97706;text-decoration:underline;">karat.info</a> - Dem Fachportal für Feingehalte &amp; Echtschmuck.</p>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="embed" className="my-12">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl border border-slate-800 p-5 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Code2 className="w-5 h-5" />
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                Kostenloses Rechner-Widget für Webmaster &amp; Juweliere
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Binden Sie den interaktiven Karat- und Feingehalt-Rechner kostenlos und werbefrei auf Ihrem Blog oder Webshop ein.
            </p>
          </div>

          <a
            href="/rechner-embed"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold transition-colors flex items-center gap-1.5 border border-slate-700"
          >
            <span>Embed-Vollansicht öffnen</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Konfiguration & Code */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Widget-Variante wählen:
              </label>
              <div className="flex rounded-lg bg-slate-800 p-0.5 text-xs font-bold">
                <button
                  onClick={() => setWidgetType('gold')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    widgetType === 'gold' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gold-Karat (kt)
                </button>
                <button
                  onClick={() => setWidgetType('diamant')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    widgetType === 'diamant' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Diamanten (ct)
                </button>
              </div>
            </div>

            {/* Code Box */}
            <div className="relative">
              <textarea
                readOnly
                value={embedCode}
                rows={6}
                className="w-full bg-slate-950/90 border border-slate-800 rounded-xl p-3.5 text-xs font-mono text-amber-200/90 focus:outline-none focus:ring-1 focus:ring-amber-500 selection:bg-amber-500/30"
              />
              <button
                onClick={copyToClipboard}
                className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-950" />
                    <span>Kopiert!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Code kopieren</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-400">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <strong className="text-white block mb-0.5">&check; 100 % DSGVO-konform:</strong>
                Keine Cookies, keine Tracker, keine externen Schriftarten (Zero-CDN).
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <strong className="text-white block mb-0.5">&check; Mobile Responsive:</strong>
                Passt sich stufenlos an Smartphones, Tablets und Desktops an.
              </div>
            </div>
          </div>

          {/* Vorschau Box */}
          <div className="lg:col-span-5 bg-slate-950/60 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="text-xs text-slate-400 font-bold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Live Vorschau des Widgets:</span>
            </div>
            <div className="bg-white text-slate-900 rounded-xl p-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                <span className="font-extrabold text-xs text-slate-900">
                  {widgetType === 'gold' ? 'Karat & Feingold Rechner' : 'Diamant-Karat Rechner'}
                </span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                  karat.info
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Gewicht:</span>
                  <span className="font-mono font-bold text-slate-900">10,0 Gramm</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Feingehalt:</span>
                  <span className="font-bold text-amber-800">585er (14 kt)</span>
                </div>
                <div className="p-2 bg-slate-50 rounded border border-slate-200 flex justify-between font-bold text-slate-900">
                  <span>Reingoldanteil:</span>
                  <span className="text-amber-800">5,85 g Feingold</span>
                </div>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 text-center mt-3">
              Automatischer Attributions-Link zur Stärkung der E-E-A-T Autorität
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
