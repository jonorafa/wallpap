import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThemeFilterBar from './components/ThemeFilterBar';
import PackCard from './components/PackCard';
import TextureShowcase from './components/TextureShowcase';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

import PackDetailModal from './components/PackDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ContactModal from './components/ContactModal';

import { PACKS } from './data/wallpapers';
import { translations } from './data/translations';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('he'); // Default language is Hebrew
  const [selectedPack, setSelectedPack] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutDetails, setCheckoutDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeFormat, setActiveFormat] = useState('all');

  const t = translations[lang] || translations.he;

  // Toggle language between Hebrew ('he') and English ('en')
  const handleToggleLang = () => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  // Sync document direction (RTL for Hebrew, LTR for English)
  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t]);

  // Add pack to cart
  const handleAddToCart = (pack, format = 'bundle') => {
    const wallpaperItem = {
      id: pack.id,
      title: pack.title,
      image: pack.images[0],
      prices: {
        iphone: pack.numericPrice,
        mac: pack.numericPrice,
        bundle: pack.numericPrice
      }
    };
    setCart((prev) => [...prev, { wallpaper: wallpaperItem, format: 'bundle' }]);
  };

  const handleCheckoutStart = (details) => {
    setCheckoutDetails(details);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Filter packs by category & search query
  const filteredPacks = PACKS.filter((pack) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = pack.title.toLowerCase().includes(q);
      const descStr = typeof pack.description === 'object' ? (pack.description[lang] || '') : pack.description;
      const matchesDesc = descStr.toLowerCase().includes(q);
      if (!matchesTitle && !matchesDesc) return false;
    }

    if (activeCategory !== 'all' && pack.category !== activeCategory) {
      return false;
    }

    return true;
  });

  return (
    <div dir={t.dir} className="min-h-screen bg-[#090A0F] text-slate-100 font-sans flex flex-col selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      
      {/* RekaPaper Navbar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cart.length}
        onOpenSearch={() => setIsSearchOpen(!isSearchOpen)}
        lang={lang}
        onToggleLang={handleToggleLang}
        t={t}
      />

      {/* Optional Search Bar Input Dropdown */}
      {isSearchOpen && (
        <div className="bg-[#121420] border-b border-amber-500/20 py-4 px-6 sm:px-12 animate-fadeIn sticky top-[73px] z-30 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <Search className="w-5 h-5 text-amber-400" />
            <input
              type="text"
              placeholder={lang === 'he' ? 'חפש קולקציה (למשל: Old Money, Positano, Gold, Tokyo...)' : 'Search collections (e.g. Old Money, Positano, Gold, Tokyo...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#090a0f] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5"
              >
                {lang === 'he' ? 'נקה' : 'Clear'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Hero Interactive Studio Showcase Section */}
      <Hero
        onSelectWallpaper={(wp) => {
          const matchingPack = PACKS.find((p) => p.images.includes(wp.image)) || PACKS[0];
          setSelectedPack(matchingPack);
        }}
        t={t}
        lang={lang}
      />

      {/* Filter Tabs Bar */}
      <ThemeFilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeFormat={activeFormat}
        setActiveFormat={setActiveFormat}
        t={t}
      />

      {/* Main Catalog Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        
        {filteredPacks.length === 0 ? (
          <div className="text-center py-20 bg-[#121420]/40 rounded-3xl border border-white/5 my-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
              <SlidersHorizontal className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif-luxury">
              {lang === 'he' ? 'לא נמצאו קולקציות התואמות לחיפוש' : 'No collections matched your search'}
            </h3>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="gold-gradient-bg text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg hover:brightness-110"
            >
              {t.catAll}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPacks.map((pack) => (
              <PackCard
                key={pack.id}
                pack={pack}
                onClick={(p) => setSelectedPack(p)}
                onQuickAdd={(p) => handleAddToCart(p, 'bundle')}
                t={t}
                lang={lang}
              />
            ))}
          </div>
        )}

      </main>

      {/* Texture Impasto Craft Showcase Section */}
      <TextureShowcase t={t} />

      {/* Collector Testimonials */}
      <ReviewsSection t={t} lang={lang} />

      {/* Accordion FAQ Section */}
      <FaqSection t={t} lang={lang} />

      {/* Studio Footer */}
      <Footer t={t} />

      {/* Interactive Modals */}
      <PackDetailModal
        pack={selectedPack}
        onClose={() => setSelectedPack(null)}
        onAddToCart={handleAddToCart}
        t={t}
        lang={lang}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateCart={setCart}
        onCheckout={handleCheckoutStart}
        t={t}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartDetails={checkoutDetails}
        onClearCart={() => setCart([])}
        t={t}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={t}
      />

    </div>
  );
}
