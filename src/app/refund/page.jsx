import LegalPage from '../../components/LegalPage';
import { content } from '../../lib/content';

export const metadata = { title: `${content.footer.refund} — Rekapaper` };

export default function RefundPage() {
  return (
    <LegalPage title={content.footer.refund}>
      <p className="text-white/70 italic">
        [TODO: draft — must be reviewed by a lawyer before launch. Consumer law often restricts how
        far a seller can refuse refunds on digital goods, even when they were downloaded.]
      </p>

      <h2>1. Digital product</h2>
      <p>
        Every item sold here is a digital download. Nothing is shipped, and there is nothing to
        return physically.
      </p>

      <h2>2. Refund conditions</h2>
      <p>
        [TODO: decide and state the actual policy. This must be written before launch and must
        comply with the consumer protection rules of the jurisdiction you sell into.]
      </p>

      <h2>3. Files that will not download or open</h2>
      <p>
        If a file is missing, corrupted, or will not open, contact {content.contactEmail} and we
        will fix it or refund you. [TODO: confirm the time window for raising this.]
      </p>

      <h2>4. How to request a refund</h2>
      <p>
        Email {content.contactEmail} with your order reference. [TODO: state how long a decision
        takes and how the money is returned.]
      </p>

      <p>Last updated: [TODO: date].</p>
    </LegalPage>
  );
}
