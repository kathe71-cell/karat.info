import React from 'react';
import { X, ShieldCheck, FileCheck, Scale, Lock } from 'lucide-react';

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
              {activeModal === 'impressum' ? 'Impressum (§ 5 DDG)' : 'Datenschutzerklärung (DSGVO & TDDDG)'}
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
                  Geschäftsmodell, Vermittlung &amp; Vertragsschluss (§ 5 UWG)
                </h4>
                <p>
                  karat.info ist ein unabhängiger, kuratierter Online-Produktkatalog und Partnershop. Wir verkaufen selbst keine Waren und führen kein eigenes Warenlager. Bei Betätigung der mit einem Sternchen (*) gekennzeichneten Produkt-Links werden Sie zum jeweiligen Angebot auf unserer Partnerplattform Amazon.de weitergeleitet.
                </p>
                <p className="font-semibold text-slate-800">
                  Ein Kaufvertrag kommt ausschließlich zwischen Ihnen und dem jeweiligen Verkäufer auf Amazon.de zu den dort gültigen Allgemeinen Geschäftsbedingungen (AGB) und Widerrufsbelehrungen zustande.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2 text-xs">
                <h4 className="font-bold text-amber-950 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-amber-700" />
                  Preise &amp; Angaben nach Preisangabenverordnung (PAngV)
                </h4>
                <p>
                  Alle genannten Preise verstehen sich inkl. gesetzlicher MwSt. und ggf. zzgl. anfallender Versandkosten. Alle Preisangaben und Verfügbarkeiten auf dieser Website sind unverbindliche Schätz- und Richtwerte, die sich seit der letzten Aktualisierung geändert haben können. Maßgeblich für den Kauf ist immer der tatsächliche Preis auf der Produktseite des Händlers zum Zeitpunkt des Kaufs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h4 className="font-bold text-slate-900">Amazon PartnerNet-Klausel (Operating Agreement)</h4>
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
                <h4 className="font-bold text-slate-900">EU-Streitschlichtung &amp; Verbraucherstreitbeilegung</h4>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>. 
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">1. Datenschutz auf einen Blick</h4>
                <p>
                  Der Schutz Ihrer personenbezogenen Daten ist uns ein elementares Anliegen. Diese Plattform wurde nach den Prinzipien von <em>Privacy by Design</em> und <em>Privacy by Default</em> (Art. 25 DSGVO) entwickelt. Es werden beim Aufruf dieser Seite keine Tracking-Cookies, keine Werbe-Pixel von Drittanbietern und keine externen CDN-Schriftarten geladen.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">2. Verantwortliche Stelle nach Art. 4 Nr. 7 DSGVO</h4>
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
                  SSL- bzw. TLS-Verschlüsselung
                </h4>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">3. Server-Log-Dateien</h4>
                <p>
                  Beim Aufruf unserer Website erhebt und speichert der Hostinganbieter (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch übermittelt:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 my-2">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL (zuvor besuchte Seite)</li>
                  <li>Hostname des zugreifenden Rechners / anonymisierte IP-Adresse</li>
                  <li>Uhrzeit der Serveranfrage</li>
                </ul>
                <p className="text-xs">
                  Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der technisch fehlerfreien Bereitstellung, Ausfallsicherheit und Absicherung gegen Cyberangriffe).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">4. Keine Drittstaatentransfers über Schriftarten (Zero-CDN)</h4>
                <p>
                  Diese Website verwendet ausschließlich lokal auf Ihrem Endgerät vorinstallierte Systemschriftarten (System Fonts wie Apple-System, Segoe UI, Roboto). Es werden zu keinem Zeitpunkt Schriftarten von Servern von Google oder anderen Drittanbietern nachgeladen. Es findet insoweit kein Datentransfer Ihrer IP-Adresse an externe Font-Server statt.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">5. Affiliate-Links (Amazon PartnerNet)</h4>
                <p>
                  Auf unserer Website sind Partnerlinks (*) zum Partnerprogramm von Amazon EU S.à r.l. (38 avenue John F. Kennedy, L-1855 Luxemburg) eingebunden. Wenn Sie auf einen solchen Link klicken, werden Sie direkt zu Amazon.de weitergeleitet. Dabei verarbeitet Amazon die Information, dass Sie über unsere Partnerkennung (Tag) weitergeleitet wurden, um im Erfolgsfall eine Werbekostenerstattung zuzuordnen.
                </p>
                <p className="text-xs mt-1">
                  Rechtsgrundlage für die Einbindung der Partnerlinks ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes wirtschaftliches Interesse am Betrieb eines werbefinanzierten Online-Angebots).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">6. Ihre Rechte als betroffene Person</h4>
                <p>
                  Sie haben nach der DSGVO umfassende Rechte:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 my-2">
                  <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
                  <li><strong>Berichtigung (Art. 16 DSGVO) &amp; Löschung (Art. 17 DSGVO):</strong> Recht auf Berichtigung unrichtiger Daten oder Löschung.</li>
                  <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Recht auf Widerspruch gegen die Verarbeitung aus Gründen, die sich aus Ihrer besonderen Situation ergeben.</li>
                  <li><strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (z. B. beim Hessischen Beauftragten für Datenschutz und Informationsfreiheit, poststelle@datenschutz.hessen.de).</li>
                </ul>
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
