# Photos du site

Toutes les photos actuelles sont **provisoires**. Elles viennent d'[Unsplash](https://unsplash.com) et sont utilisables gratuitement, y compris pour un usage commercial, sous la [licence Unsplash](https://unsplash.com/license) (aucun crédit obligatoire).

Chaque photo existe en **deux tailles** dans `images/` :

- `nom.jpg` : grande version, 1600 px de large ;
- `nom-800.jpg` : version mobile, 800 px de large.

## Remplacer une photo par une vraie photo d'Isabelle

1. Préparez la nouvelle photo en deux tailles (1600 px et 800 px de large, format JPG, qualité ~75 %). Des outils gratuits comme [Squoosh](https://squoosh.app) font ça très bien.
2. Donnez-leur **exactement le même nom** que la photo à remplacer, puis écrasez les anciens fichiers dans `images/`.
3. Si le sujet de la photo change, mettez à jour son texte alternatif (`alt="…"`) dans les pages HTML. Pour les cartes des massages et des formations, ce texte se trouve dans `data/massages.js` et `data/formations.js` (champ `imageAlt`).

Gardez de préférence le même format (paysage 3:2). La photo du salon (`salon-ambiance-bougies`) est en portrait.

## Liste des photos

Lien source : `https://unsplash.com/photos/<identifiant>`

| Fichier (dans `images/`) | Où elle apparaît | Sujet actuel | Identifiant Unsplash | À remplacer par (suggestion) |
|---|---|---|---|---|
| `hero-pierres-chaudes-fleurs` | Accueil, grand visuel (et `og-image.jpg`) | Dos avec pierres chaudes et fleurs blanches | `photo-1600334089648-b0d9d3028eb2` | Photo d'ambiance du salon / d'un Taurumi |
| `taurumi-massage-huile` | Accueil, bloc « massage sur mesure » | Huile versée sur un dos | `photo-1544161515-4ab6ce6db874` | Isabelle en train de masser |
| `tahiti-bungalows-lagon` | Accueil, Massages (carte Taurumi), À propos | Bungalows sur pilotis, lagon | `photo-1589197331516-4d84b72ebde3` | Photo personnelle de Tahiti |
| `polynesie-coucher-soleil-plage` | Accueil (« Je transmets le Taurumi »), Formations (Taurumi) | Plage et cocotiers au coucher du soleil | `photo-1542259009477-d625272157b7` | Photo personnelle de Polynésie |
| `pierres-chaudes-mains` | Massages (pierres chaudes) | Mains posant des pierres chaudes | `photo-1600334129128-685c5582fd35` | Photo de vos pierres / d'une séance |
| `lomi-lomi-hawaii-kauai` | Massages et Formations (Lomi-lomi) | Côte de Kauai, Hawaï | `photo-1598135753163-6167c1a1ad65` | (peut rester) |
| `thai-temple-thailande` | Massages et Formations (thaï) | Temple doré en Thaïlande | `photo-1528181304800-259b08848526` | (peut rester) |
| `californien-golden-gate` | Massages (californien) | Golden Gate, San Francisco | `photo-1501594907352-04cda38ebc29` | (peut rester) |
| `reflexologie-pieds-fleurs` | Accueil, Réflexologie, Massages | Pieds dans une vasque fleurie | `photo-1519415510236-718bdfcd89c8` | Séance de réflexologie au salon |
| `formation-mains-massage` | Accueil (Formations), Formations (californien) | Mains massant un dos | `photo-1519824145371-296894a0daa9` | Photo d'une formation |
| `formation-gestes-bras` | Formations (en-tête), Massages (massage du ventre) | Mains, pressions douces | `photo-1611073615830-9f76902c10fe` | **Photo d'un massage du ventre** |
| `a-propos-meditation-palmiers` | À propos | Silhouette en méditation face aux palmiers | `photo-1600618528240-fb9fc964b853` | **Portrait d'Isabelle** |
| `salon-ambiance-bougies` (portrait) | Salon & domicile | Bougies et diffuseur | `photo-1620733723572-11c53f73a416` | **Photo du salon** |
| `domicile-salon-lumineux` | Salon & domicile | Salon lumineux | `photo-1613545325268-9265e1609167` | Table installée à domicile |
| `massage-assis-mains-dos` (portrait) | Massages (massage assis) | Mains posées sur un dos | `photo-1519823551278-64ac92734fb1` | **Photo de la chaise de massage assis** |
| `huile-flacon-mains` | Massages (carte « Massage sur mesure ») | Flacon d'huile compte-gouttes | `photo-1515377905703-c4788e51af15` | Les huiles d'Isabelle |
| `pierres-zen-nature` | Formations (pierres chaudes) | Galets empilés | `photo-1532009877282-3340270e0529` | Photo d'une formation pierres chaudes |

Les noms des photographes ne sont pas indiqués ici : vous les trouverez sur chaque page Unsplash (lien ci-dessus) si vous souhaitez les créditer.

## Autres visuels

| Fichier | Rôle | Origine |
|---|---|---|
| `og-image.jpg` (1200×630) | Image d'aperçu sur Facebook, WhatsApp, etc. | Recadrage de `hero-pierres-chaudes-fleurs` |
| `images/motifs/tiare.svg` | Fleur de tiaré (logo, puces, ornements) | Dessin original créé pour le site |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Icônes d'onglet et d'écran d'accueil | Dessin original créé pour le site |
| Frises « tapa » | Motifs décoratifs | Dessinés en SVG directement dans `css/style.css` |
