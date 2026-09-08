import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalsProps {
  activeModal: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-extrabold text-slate-900">
              {activeModal === 'impressum' ? 'Impressum (§ 5 DDG)' : 'Datenschutzerklärung (DSGVO)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
          {activeModal === 'impressum' ? (
            <>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Angaben gemäß § 5 DDG</h4>
                <p className="font-medium text-slate-800">
                  Jens Kathe<br />
                  Hansastraße 6<br />
                  34119 Kassel<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Kontakt</h4>
                <p>
                  E-Mail: <span className="font-mono text-amber-900 font-bold">info@karat.info</span>
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h4>
                <p>
                  Jens Kathe, Hansastraße 6, 34119 Kassel
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2 text-xs">
                <h4 className="font-bold text-amber-950">Hinweis auf EU-Streitschlichtung &amp; Verbraucherstreitbeilegung</h4>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>. 
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900">Amazon PartnerNet-Klausel</h4>
                <p>
                  karat.info ist Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann.
                </p>
                <p className="font-semibold text-slate-800">
                  * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
                </p>
                <p className="text-[11px] text-slate-500">
                  Amazon und das Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder eines seiner verbundenen Unternehmen.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">1. Datenschutz auf einen Blick</h4>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Website wird nach dem Grundsatz der Datensparsamkeit betrieben. Es werden beim Aufruf dieser Seite keine Tracking-Cookies, keine Profiling-Dienste und keine externen CDN-Schriftarten geladen.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">2. Verantwortliche Stelle</h4>
                <p>
                  Jens Kathe<br />
                  Hansastraße 6<br />
                  34119 Kassel<br />
                  E-Mail: info@karat.info
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">3. Server-Log-Dateien</h4>
                <p>
                  Der Provider der Seiten (Vercel Inc.) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit). Diese Daten sind nicht bestimmten Personen zuordenbar.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">4. Keine Google Fonts / Lokaler System Font Stack</h4>
                <p>
                  Diese Seite verzichtet bewusst auf die Einbindung externer Schriftarten (wie Google Fonts oder Adobe Typekit). Es werden ausschließlich lokal auf Ihrem Endgerät bereits installierte Systemschriften genutzt. Es erfolgt zu keinem Zeitpunkt eine Übertragung Ihrer IP-Adresse an externe Font-Server in Drittstaaten.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">5. Affiliate-Links (Amazon PartnerNet)</h4>
                <p>
                  Auf unserer Website setzen wir Affiliate-Links zum Partnerprogramm von Amazon.de ein. Wenn Sie auf einen solchen Link klicken und anschließend bei Amazon einen Kauf tätigen, erhalten wir eine Provision. Der Klick auf den Link leitet Sie zu Amazon weiter, wobei Amazon Ihre Herkunfts-Partnerkennung erfasst. Es werden von unserer Seite hierfür keine Nutzerprofile erstellt.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">6. Ihre Rechte (Auskunft, Berichtigung, Löschung)</h4>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors min-h-[44px]"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
