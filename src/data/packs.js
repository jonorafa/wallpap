export const PRICE = 19.9;

// Packs are disjoint: no image appears in more than one pack.
// Each pack holds 4 wallpapers; old_money_golf.png and
// penthouse_discipline_skyline.png are unused, held back for a future pack.
// The 6 redundant files in /public/wallpapers (exact duplicates and
// lower-resolution copies of scenes below) are intentionally unreferenced.
export const PACKS = [
  {
    id: 'motorsport',
    title: 'Motorsport',
    price: PRICE,
    description: '',
    images: [
      '/wallpapers/f1_pyramids_night.png',
      '/wallpapers/f1_some_drivers_never_leave.png',
      '/wallpapers/porsche_gt3_positano.png',
      '/wallpapers/monaco_dusk.png'
    ]
  },
  {
    id: 'city-travel',
    title: 'City & Travel',
    price: PRICE,
    description: '',
    images: [
      '/wallpapers/jerusalem_kotel_sunset.png',
      '/wallpapers/rio_beach_sunset.png',
      '/wallpapers/cyberpunk_tokyo.png',
      '/wallpapers/riva_positano_helm.png'
    ]
  },
  {
    id: 'interiors-abstracts',
    title: 'Interiors & Abstracts',
    price: PRICE,
    description: '',
    images: [
      '/wallpapers/bitcoin_trading_desk.png',
      '/wallpapers/rabbi_five_dollar.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/minimalist_nordic.png'
    ]
  }
];

export function getPack(id) {
  return PACKS.find((pack) => pack.id === id);
}
