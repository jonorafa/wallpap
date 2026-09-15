// All user-facing copy lives here so a second language can be added later
// by duplicating this file, without touching the components.

export const content = {
  brand: 'REKAPAPER',
  contactEmail: 'rekapaper.il@gmail.com',

  meta: {
    title: 'Rekapaper — Oil Painting Wallpapers for Mac',
    description: 'Cinematic oil painting wallpaper packs for Mac displays.'
  },

  nav: {
    collections: 'Collections',
    wishlist: 'Wishlist',
    bag: 'Bag'
  },

  product: {
    back: 'Back to collections',
    wallpaperCount: (n) => `${n} wallpapers`,
    buyNow: 'Buy Now',
    processing: 'Processing…',
    addToBag: 'Add to bag',
    addedToBag: 'Added to bag',
    // Only claims that are actually true today. "Instant download" and
    // "Secure payment" stay out until checkout and delivery are built.
    guarantees: ['High-resolution wallpapers', 'Optimized for Mac displays', 'Digital product']
  },

  bag: {
    title: 'Bag',
    empty: 'Your bag is empty.',
    remove: 'Remove',
    close: 'Close',
    total: 'Total',
    checkout: 'Checkout'
  },

  wishlist: {
    add: 'Add to wishlist',
    added: 'In your wishlist',
    pageTitle: 'Wishlist',
    empty: 'Your wishlist is empty.',
    browse: 'Browse collections'
  },

  footer: {
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    refund: 'Refund Policy',
    contact: 'Contact',
    rights: (year) => `© ${year} Rekapaper. All rights reserved.`
  }
};

export function formatPrice(price) {
  return `₪${price.toFixed(2)}`;
}
