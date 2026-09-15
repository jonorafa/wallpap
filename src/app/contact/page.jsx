import LegalPage from '../../components/LegalPage';
import { content } from '../../lib/content';

export const metadata = { title: `${content.footer.contact} — Rekapaper` };

export default function ContactPage() {
  return (
    <LegalPage title={content.footer.contact}>
      <p>For any question about an order, a file, or a refund, write to:</p>

      <p>
        <a
          href={`mailto:${content.contactEmail}`}
          className="underline underline-offset-4 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {content.contactEmail}
        </a>
      </p>

      <p className="text-white/70 italic">
        [TODO: confirm this address is monitored, and add a response time if you want to commit to
        one. Add a business address here if it is legally required where you sell.]
      </p>
    </LegalPage>
  );
}
