import React from 'react';
import { X, ShieldCheck, FileCheck, Scale, Lock, Info } from 'lucide-react';

interface LegalModalsProps {
  activeModal: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col my-8">
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
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
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
                <h4 className="font-bold text-slate-900 text-base mb-1">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h4>
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
                <h4 className="font-bold text-slate-900 text-base mb-1">Verantwortlich für redaktionelle Inhalte nach § 18 Abs. 2 MStV</h4>
                <p>
                  Jens Kathe, Hansastraße 6, 34119 Kassel
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-amber-600" />
                  Geschäftsmodell &amp; Transparenzhinweis (§ 5 UWG)
                </h4>
                <p>
                  karat.info ist ein unabhängiges Informations- und Ratgeberportal für Schmuck, Materialien und Geschenkideen. Wir verkaufen selbst keine Waren und führen kein eigenes Warenlager. Bei Klick auf die mit einem Sternchen (*) gekennzeichneten Partnerlinks werden Sie zu Angeboten von Drittanbietern auf Amazon.de weitergeleitet.
                </p>
                <p className="font-semibold text-slate-800">
                  Ein Kaufvertrag kommt ausschließlich zwischen Ihnen und dem jeweiligen Händler auf Amazon.de zu dessen Konditionen, AGB und Widerrufsbelehrung zustande.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2 text-xs">
                <h4 className="font-bold text-amber-950 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-amber-700" />
                  Preise &amp; Angaben (PAngV)
                </h4>
                <p>
                  Alle auf unserer Website erwähnten Preisspannen sind unverbindliche Orientierungswerte (Marktbeobachtungsstand: September 2026). Verbindlich sind stets die aktuellen Preise, Lieferbedingungen und Angaben auf der Website des Händlers zum Zeitpunkt des Kaufs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900">Amazon PartnerNet-Transparenzklausel</h4>
                <p>
                  karat.info ist Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann.
                </p>
                <p className="font-bold text-slate-900">
                  * Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
                </p>
                <p className="text-[11px] text-slate-500">
                  Amazon und das Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder eines seiner verbundenen Unternehmen.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900">Verbraucherstreitbeilegung (§ 36 VSBG)</h4>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">1. Datenschutz auf einen Blick</h4>
                <p>
                  Wir legen großen Wert auf den Schutz Ihrer Privatsphäre. karat.info bindet keine externen Tracking-Cookies von Drittanbietern und keine Drittanbieter-Schriftarten (wie Google Fonts CDNs) ein.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">2. Verantwortliche Stelle</h4>
                <p>
                  Jens Kathe<br />
                  Hansastraße 6<br />
                  34119 Kassel<br />
                  Deutschland<br />
                  E-Mail: info@karat.info
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  SSL-/TLS-Verschlüsselung
                </h4>
                <p>
                  Diese Seite nutzt zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Dies erkennen Sie am Schloss-Symbol und dem Präfix „https://“ in Ihrer Browserzeile.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">3. Server-Log-Dateien &amp; Hosting</h4>
                <p>
                  Beim Aufruf dieser Website erhebt und speichert unser Hosting-Dienstleister (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) automatisch Informationen in Server-Log-Dateien, die Ihr Browser übermittelt:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 my-2">
                  <li>IP-Adresse des anfragenden Rechners (zur Bereitstellung der Netzwerkverbindung und Abwehr von DDoS-Angriffen)</li>
                  <li>Browsertyp und Version sowie Betriebssystem</li>
                  <li>Referrer URL (die zuvor besuchte Seite)</li>
                  <li>Datum und Uhrzeit der Serveranfrage</li>
                </ul>
                <p className="text-xs">
                  Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der technischen Bereitstellung, Betriebsstabilität und IT-Sicherheit der Website).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">4. Lokale Schriftarten (Keine externen Font-CDNs)</h4>
                <p>
                  Diese Website verwendet ausschließlich auf Ihrem Betriebssystem lokal vorinstallierte Systemschriftarten (System Font Stack: Apple-System, Segoe UI, Roboto, sans-serif). Es werden keine Schriftdateien von externen Servern nachgeladen; Ihre IP-Adresse wird hierfür nicht an Drittanbieter übertragen.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">5. Partnerlinks (Amazon PartnerNet)</h4>
                <p>
                  Unsere Website enthält Affiliate-Links (*). Wenn Sie auf einen solchen Partnerlink klicken, werden Sie auf Amazon.de weitergeleitet. Amazon verarbeitet dabei Daten (z. B. Referrer-Information und Partnerkennung), um zu erfassen, dass Sie über unseren Partnerlink vermittelt wurden.
                </p>
                <p className="text-xs mt-1">
                  Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (wirtschaftliches berechtigtes Interesse an der Finanzierung dieses kostenfreien Informationsangebots).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">6. Ihre Rechte als betroffene Person</h4>
                <p>
                  Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu (Art. 77 DSGVO), beispielsweise beim Hessischen Beauftragten für Datenschutz und Informationsfreiheit.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-3xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors min-h-[44px] cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
