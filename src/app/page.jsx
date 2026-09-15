import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import ProductGrid from '../components/ProductGrid';
import { PACKS } from '../data/packs';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-10">
        <ProductGrid packs={PACKS} />
      </main>
      <SiteFooter />
    </div>
  );
}
