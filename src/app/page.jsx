import SiteHeader from '../components/SiteHeader';
import ProductGrid from '../components/ProductGrid';
import { PACKS } from '../data/packs';

export default function Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="max-w-5xl mx-auto px-6 py-10">
        <ProductGrid packs={PACKS} />
      </main>
    </div>
  );
}
