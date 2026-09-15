# Rekapaper

Boutique de packs de fonds d'écran (peinture à l'huile) pour Mac.

- **Stack** : Next.js 16 (App Router, JavaScript), React 19, Tailwind CSS v4
- **Prod** : https://wallpap.vercel.app
- **Langue du site** : anglais

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Structure

```
src/
  app/            # routes App Router (accueil, /pack/[slug], /wishlist, pages légales)
  components/     # composants UI
  context/        # CartContext (panier, persisté en localStorage)
  data/packs.js   # catalogue : 3 packs de 5 wallpapers, 19.90₪
  lib/content.js  # tous les textes de l'interface, centralisés
public/wallpapers # images des packs
```

## À savoir

- `src/lib/content.js` centralise toutes les chaînes de l'interface : ajouter une
  langue = dupliquer ce fichier, pas réécrire les composants.
- Les packs sont disjoints (aucune image partagée entre deux packs) et leurs
  images sont ordonnées par luminosité croissante, pour que les bandes de
  `PackCollage` s'enchaînent sans rupture de contraste.
- Sur la grille d'accueil, les packs s'affichent en bandes recadrées plutôt qu'en
  image unique : une capture d'écran ne donne pas un fond d'écran exploitable.
  C'est une dissuasion visuelle, pas une protection — les fichiers de
  `public/wallpapers` restent accessibles directement.

## Pas encore fait

- **Paiement** : « Buy Now » et « Checkout » sont des placeholders
  (`// TODO: connect to payment provider`). Aucun prestataire n'est branché.
- **Livraison des fichiers** : pas de téléchargement après achat.
- **Pages légales** : brouillons avec des `[TODO: ...]` explicites (entité
  légale, adresse, juridiction, politique de remboursement). À faire relire par
  un juriste avant lancement.
- **Recherche et compte** : icônes décoratives, sans fonctionnalité derrière.
