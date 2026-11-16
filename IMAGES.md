# Photos du site

La plupart des photos sont désormais celles d'Isabelle. Quatre photos libres de droits d'[Unsplash](https://unsplash.com) restent provisoires ([licence Unsplash](https://unsplash.com/license), aucun crédit obligatoire).

Chaque photo existe en **deux tailles** dans `images/` :

- `nom.jpg` : grande version, 1600 px de large ;
- `nom-800.jpg` : version mobile, 800 px de large.

## Remplacer une photo par une vraie photo d'Isabelle

1. Préparez la nouvelle photo en deux tailles (1600 px et 800 px de large, format JPG, qualité ~75 %). Des outils gratuits comme [Squoosh](https://squoosh.app) font ça très bien.
2. Donnez-leur **exactement le même nom** que la photo à remplacer, puis écrasez les anciens fichiers dans `images/`.
3. Si le sujet de la photo change, mettez à jour son texte alternatif (`alt="…"`) dans les pages HTML. Pour les cartes des massages et des formations, ce texte se trouve dans `data/massages.js` et `data/formations.js` (champ `imageAlt`).

Gardez de préférence le même format (paysage 3:2). La photo du salon (`salon-ambiance-bougies`) est en portrait.

## Liste des photos

### Vos photos (dossier « image site maman »)

| Fichier (dans `images/`) | Où elle apparaît |
|---|---|
| `hero-pierres-chaudes-dos` | Accueil, grand visuel (et `og-image.jpg`, l'aperçu sur les réseaux sociaux) |
| `massage-visage-praticienne` | Accueil, bloc « Un massage sur mesure » |
| `massage-pierres-chaudes-nuque` | Accueil, carte « Massages du monde » |
| `formation-groupe-pratique` | Accueil, carte « Formations » |
| `formation-taurumi-danse-pareos` | Accueil, bloc « Je transmets le Taurumi » |
| `massage-sur-mesure-mains` | Massages, carte « Massage sur mesure » |
| `taurumi-massage-pareo` | Massages, carte Taurumi |
| `massage-thai-etirement` | Massages, carte massage thaï |
| `massage-californien-visage` | Massages, carte massage californien |
| `pierres-chaudes-pose` | Massages, carte pierres chaudes |
| `massage-assis-chaise` | Massages, carte massage assis |
| `formation-enseignement` | Formations, en-tête « Se former au Taurumi » |
| `formation-taurumi-groupe` | Formations, carte Taurumi |
| `formation-lomi-lomi-table` | Formations, carte Lomi-lomi |
| `formation-californien-pratique` | Formations, carte californien |
| `formation-thai-etirement` | Formations, carte thaï |
| `formation-pierres-chaudes` | Formations, carte pierres chaudes |
| `portrait-isabelle` | À propos, portrait |
| `monoi-tiare-nacre` | À propos, « Mon lien avec Tahiti » |
| `galerie-*` (12 photos) | À propos, galerie « Quelques moments partagés » |
| `salon-espace-lumineux` | Salon & domicile, bloc « Au salon » |

### Photos libres de droits restantes (Unsplash)

Ces photos sont encore provisoires. Lien source : `https://unsplash.com/photos/<identifiant>`.

| Fichier | Où elle apparaît | Sujet | Identifiant Unsplash | À remplacer par |
|---|---|---|---|---|
| `formation-gestes-bras` | Massages (massage du ventre) | Mains, pressions douces | `photo-1611073615830-9f76902c10fe` | **Photo d'un massage du ventre** |
| `reflexologie-pieds-fleurs` | Accueil, Réflexologie, Massages | Pieds dans une vasque fleurie | `photo-1519415510236-718bdfcd89c8` | Photo d'une séance de réflexologie |
| `lomi-lomi-hawaii-kauai` | Massages (Lomi-lomi) | Côte de Kauai, Hawaï | `photo-1598135753163-6167c1a1ad65` | Photo d'un Lomi-lomi (ou garder) |
| `domicile-salon-lumineux` | Salon & domicile, bloc « À domicile » | Salon lumineux | `photo-1613545325268-9265e1609167` | Table installée à domicile |

### Cadrage

Quand une photo est recadrée par le site (cartes, galerie), le cadrage se règle avec `imagePos` dans `data/massages.js` et `data/formations.js`, par exemple `imagePos: "50% 30%"` (horizontal, vertical ; une valeur verticale plus petite montre davantage le haut de la photo).

## Autres visuels

| Fichier | Rôle | Origine |
|---|---|---|
| `og-image.jpg` (1200×630) | Image d'aperçu sur Facebook, WhatsApp, etc. | Recadrage de `hero-pierres-chaudes-dos` |
| `images/motifs/tiare.svg` | Fleur de tiaré (logo, puces, ornements) | Dessin original créé pour le site |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Icônes d'onglet et d'écran d'accueil | Dessin original créé pour le site |
| Frises « tapa » | Motifs décoratifs | Dessinés en SVG directement dans `css/style.css` |
