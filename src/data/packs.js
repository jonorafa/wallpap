export const PACKS = [
  {
    id: 'old-money-vibes',
    title: 'Old Money Vibes',
    price: 24.99,
    images: [
      '/wallpapers/old_money_porsche.jpg',
      '/wallpapers/old_money_interior.jpg',
      '/wallpapers/old_money_riva.jpg'
    ]
  },
  {
    id: 'complete-collection',
    title: 'The Master Collection',
    price: 79.99,
    images: [
      '/wallpapers/old_money_porsche.jpg',
      '/wallpapers/old_money_riva.jpg',
      '/wallpapers/old_money_interior.jpg',
      '/wallpapers/monaco_dusk.png',
      '/wallpapers/minimalist_nordic.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/cyberpunk_tokyo.png'
    ]
  },
  {
    id: 'monaco-riviera-vol1',
    title: 'Monaco & Riviera Sunset',
    price: 24.99,
    images: [
      '/wallpapers/monaco_dusk.png',
      '/wallpapers/old_money_riva.jpg',
      '/wallpapers/old_money_porsche.jpg'
    ]
  },
  {
    id: 'nordic-canvas-vol1',
    title: 'Nordic Canvas & Tactile Clay',
    price: 24.99,
    images: [
      '/wallpapers/minimalist_nordic.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/old_money_interior.jpg'
    ]
  },
  {
    id: 'framed-perspectives-vol1',
    title: 'Framed Perspectives & Interiors',
    price: 24.99,
    images: [
      '/wallpapers/old_money_interior.jpg',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/minimalist_nordic.png'
    ]
  },
  {
    id: 'abstract-gold-vol1',
    title: 'Abstract Obsidian & Gold Leaf',
    price: 24.99,
    images: [
      '/wallpapers/abstract_gold.png',
      '/wallpapers/minimalist_nordic.png',
      '/wallpapers/old_money_riva.jpg'
    ]
  },
  {
    id: 'cyberpunk-tokyo-vol1',
    title: 'Neon Rain & Tokyo Nights',
    price: 24.99,
    images: [
      '/wallpapers/cyberpunk_tokyo.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/old_money_interior.jpg'
    ]
  }
];

export function getPack(id) {
  return PACKS.find((pack) => pack.id === id);
}
