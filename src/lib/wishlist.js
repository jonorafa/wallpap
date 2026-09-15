const STORAGE_KEY = 'reka_wishlist';

export function readWishlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

export function toggleWishlist(packId) {
  const saved = readWishlist();
  const next = saved.includes(packId) ? saved.filter((id) => id !== packId) : [...saved, packId];

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage unavailable (private mode, blocked cookies) — keep the in-memory result
  }

  return next;
}
