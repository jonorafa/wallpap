import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import WishlistGrid from '../../components/WishlistGrid';
import { PACKS } from '../../data/packs';
import { content } from '../../lib/content';

export const metadata = {
  title: `${content.wishlist.pageTitle} — Rekapaper`
};

export default function WishlistPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-8">{content.wishlist.pageTitle}</h1>
        <WishlistGrid packs={PACKS} />
      </main>
      <SiteFooter />
    </div>
  );
}
