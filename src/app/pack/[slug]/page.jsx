import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import BuyButton from '../../../components/BuyButton';
import WishlistButton from '../../../components/WishlistButton';
import WallpaperPreview from '../../../components/WallpaperPreview';
import { PACKS, getPack } from '../../../data/packs';
import { content, formatPrice } from '../../../lib/content';

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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        <Link
          href="/"
          className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          ← {content.product.back}
        </Link>

        <div className="mt-6 grid md:grid-cols-[1.7fr_1fr] gap-12 items-center">
          <WallpaperPreview images={pack.images} />

          <div>
            <h1 className="text-2xl font-bold">{pack.title}</h1>
            <p className="text-white/70 text-sm mt-1">
              {content.product.wallpaperCount(pack.images.length)}
            </p>
            <p className="text-xl font-semibold mt-4">{formatPrice(pack.price)}</p>

            {pack.description && (
              <p className="text-white/70 text-sm mt-4 leading-relaxed">{pack.description}</p>
            )}

            <div className="mt-6">
              <BuyButton pack={pack} />
            </div>

            <ul className="mt-5 space-y-2">
              {content.product.guarantees.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <WishlistButton packId={pack.id} />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
