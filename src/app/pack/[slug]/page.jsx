import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import BuyButton from '../../../components/BuyButton';
import WishlistButton from '../../../components/WishlistButton';
import PackCollage from '../../../components/PackCollage';
import { PACKS, getPack } from '../../../data/packs';

export function generateStaticParams() {
  return PACKS.map((pack) => ({ slug: pack.id }));
}

export default async function PackPage({ params }) {
  const { slug } = await params;
  const pack = getPack(slug);

  if (!pack) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-6 py-10">
        <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
          → חזרה לחנות
        </Link>

        <div className="mt-6">
          <PackCollage images={pack.images} aspect="aspect-[4/5]" />
        </div>

        <div className="mt-8 space-y-1">
          <h1 className="text-xl font-bold">{pack.title}</h1>
          <p className="text-white/60 text-sm">{pack.images.length} רקעים · ₪{pack.price}</p>
        </div>

        <div className="mt-6">
          <BuyButton pack={pack} />
          <p className="mt-3 text-center text-xs text-white/50">הורדה מיידית לאחר התשלום</p>
        </div>

        <div className="mt-4 flex justify-center">
          <WishlistButton packId={pack.id} />
        </div>
      </main>
    </div>
  );
}
