export const PRICE = 19.9;

// Packs are disjoint: no image appears in more than one pack.
// Each pack holds 5 wallpapers, ordered dark -> light (measured center-band
// luminance) so adjacent strips in PackCollage flow smoothly instead of
// jumping between a bright frame and a dark one.
// The 6 redundant files in /public/wallpapers (exact duplicates and
// lower-resolution copies of scenes below) are intentionally unreferenced.
export const PACKS = [
  {
    id: 'motorsport',
    title: 'Motorsport',
    price: PRICE,
    description: '',
    images: [
      '/wallpapers/f1_some_drivers_never_leave.png',
      '/wallpapers/f1_pyramids_night.png',
      '/wallpapers/monaco_dusk.png',
      '/wallpapers/porsche_tennis_court.png',
      '/wallpapers/porsche_gt3_positano.png'
    ]
  },
  {
    id: 'city-travel',
    title: 'City & Travel',
    price: PRICE,
    description: '',
    images: [
      '/wallpapers/penthouse_discipline_skyline.png',
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
      '/wallpapers/old_money_golf.png',
      '/wallpapers/abstract_gold.png',
      '/wallpapers/rabbi_five_dollar.png',
      '/wallpapers/minimalist_nordic.png'
    ]
  }
];

export function getPack(id) {
  return PACKS.find((pack) => pack.id === id);
}
