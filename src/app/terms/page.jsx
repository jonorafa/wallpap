import LegalPage from '../../components/LegalPage';
import { content } from '../../lib/content';

export const metadata = { title: `${content.footer.terms} — Rekapaper` };

export default function TermsPage() {
  return (
    <LegalPage title={content.footer.terms}>
      <p className="text-white/70 italic">
        [TODO: draft — must be reviewed by a lawyer before launch.]
      </p>

      <h2>1. Who we are</h2>
      <p>
        This store is operated by [TODO: legal entity name], registered at [TODO: registered
        address], business number [TODO: company / VAT number]. You can reach us at{' '}
        {content.contactEmail}.
      </p>

      <h2>2. What we sell</h2>
      <p>
        Rekapaper sells digital wallpaper packs. Each pack is a set of image files delivered
        electronically. No physical goods are shipped.
      </p>

      <h2>3. Prices and payment</h2>
      <p>
        Prices are shown in [TODO: confirm currency — ₪ / ILS] and include [TODO: state whether VAT
        is included]. Payment is processed by [TODO: payment provider name] — we never store your
        card details.
      </p>

      <h2>4. Licence and permitted use</h2>
      <p>
        [TODO: confirm licence terms.] Suggested baseline: you may use the wallpapers for personal,
        non-commercial use on your own devices. You may not resell, redistribute, or include them in
        another product.
      </p>

      <h2>5. Delivery</h2>
      <p>[TODO: describe how files are delivered once checkout is implemented.]</p>

      <h2>6. Refunds</h2>
      <p>See our Refund Policy.</p>

      <h2>7. Governing law</h2>
      <p>[TODO: state the governing jurisdiction.]</p>

      <h2>8. Changes</h2>
      <p>
        We may update these terms. The version published on this page is the one that applies.
        Last updated: [TODO: date].
      </p>
    </LegalPage>
  );
}
