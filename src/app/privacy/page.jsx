import LegalPage from '../../components/LegalPage';
import { content } from '../../lib/content';

export const metadata = { title: `${content.footer.privacy} — Rekapaper` };

export default function PrivacyPage() {
  return (
    <LegalPage title={content.footer.privacy}>
      <p className="text-white/70 italic">
        [TODO: draft — must be reviewed by a lawyer before launch.]
      </p>

      <h2>1. Who controls your data</h2>
      <p>
        [TODO: legal entity name], [TODO: registered address]. Contact: {content.contactEmail}.
      </p>

      <h2>2. What we collect</h2>
      <p>
        Today this site stores your bag and wishlist locally in your own browser. That data stays on
        your device and is never sent to us.
      </p>
      <p>
        [TODO: list what will be collected once checkout exists — e.g. email address, order
        reference, payment confirmation. Do not publish this page until that list is accurate.]
      </p>

      <h2>3. Analytics and cookies</h2>
      <p>
        [TODO: state whether any analytics tool is used. If none, say so explicitly. If one is
        added, a cookie banner may be required.]
      </p>

      <h2>4. Who we share data with</h2>
      <p>[TODO: list processors — payment provider, email provider, hosting.]</p>

      <h2>5. How long we keep it</h2>
      <p>[TODO: retention period.]</p>

      <h2>6. Your rights</h2>
      <p>
        [TODO: confirm which regime applies — Israeli Privacy Protection Law, GDPR, or both — and
        list the corresponding rights.] To make a request, write to {content.contactEmail}.
      </p>

      <p>Last updated: [TODO: date].</p>
    </LegalPage>
  );
}
