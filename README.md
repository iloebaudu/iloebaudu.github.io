# Site d'Isabelle Di Nunzio : massages du monde, Taurumi et réflexologie

Site vitrine statique (HTML, CSS et un peu de JavaScript), sans framework ni étape de compilation. Il peut être publié tel quel sur **GitHub Pages**.

## Structure

```
index.html                     Accueil
massages-du-monde.html         Massages du monde (cartes générées depuis data/massages.js)
reflexologie.html              Réflexologie
formations.html                Formations (cartes générées depuis data/formations.js)
a-propos.html                  À propos
salon-domicile-contact.html    Salon & domicile / Contact (carte OpenStreetMap)
faq.html                       Questions fréquentes
mentions-legales.html          Mentions légales
politique-confidentialite.html Politique de confidentialité
404.html                       Page « introuvable »
css/style.css                  TOUT le style ; variables (couleurs, polices) en haut du fichier
js/main.js                     Menu mobile, animations, affichage des données
data/massages.js               ➜ tarifs + liste des massages
data/formations.js             ➜ liste des formations
images/                        Photos (voir IMAGES.md)
fonts/                         Polices Google Fonts hébergées localement
sitemap.xml, robots.txt        Référencement
```

---

## 1. Adresse du site

Le site est publié à l'adresse **https://iloebaudu.github.io**, utilisée dans toutes les pages (balises `canonical`, Open Graph, données structurées), dans `sitemap.xml` et dans `robots.txt`.

Si vous prenez plus tard un nom de domaine personnalisé (par exemple `https://www.lacherprise-massage.fr`), faites un **Rechercher / Remplacer dans tous les fichiers** (`Ctrl+Maj+H` dans VS Code) : remplacez `https://iloebaudu.github.io` par la nouvelle adresse, **sans `/` à la fin**.

## 2. Modifier les tarifs

Ouvrez **`data/massages.js`** et modifiez le bloc `TARIFS` :

```js
window.TARIFS = [
  { duree: "1 h",     prix: 60 },
  { duree: "1 h 30",  prix: 80 }
];
```

Les cartes de massages et les blocs de tarifs se mettent à jour tout seuls.

⚠️ Pour le référencement Google, les prix sont aussi écrits en dur à deux autres endroits. Pensez à les modifier :

- le texte de secours dans les pages : faites un Rechercher `60 €` / `80 €` dans les fichiers `.html` ;
- les données structurées : bloc `<script type="application/ld+json">` en haut de `index.html` et de `salon-domicile-contact.html` (lignes `"price": "60"`, `"priceRange"`), ainsi que les réponses de la FAQ (`faq.html`).

## 3. Modifier la liste des massages

Toujours dans **`data/massages.js`**, chaque massage est un bloc `{ ... }` :

- **modifier un texte** : changez ce qui se trouve entre guillemets ;
- **retirer un massage** : supprimez le bloc `{ ... },` en entier ;
- **ajouter un massage** : copiez un bloc existant, collez-le à la suite et adaptez-le (avec un `id` unique, sans espace ni accent) ;
- **mettre un massage en avant** : `vedette: true` (le Taurumi actuellement).

## 4. Modifier les formations

Ouvrez **`data/formations.js`**. Les formations actuelles sont des **exemples** (`exemple: true`) : un badge « Exemple – informations à venir » s'affiche sur chaque carte.

Pour publier une vraie formation :

1. modifiez titre, dates, durée, prix, places, etc. ;
2. passez `exemple: true` à **`exemple: false`**.

Le badge disparaît alors et la formation est ajoutée automatiquement aux données Google (Schema.org « Course »).

Quand toutes les formations sont réelles, supprimez aussi l'encadré d'avertissement dans `formations.html` (le paragraphe `class="alerte-exemple"`).

## 5. Modifier les textes

Les textes se trouvent directement dans les fichiers `.html`. Ouvrez-les avec un éditeur de texte (VS Code, Notepad++…) et modifiez ce qui se trouve **entre les balises**, par exemple `<p>texte</p>`.

- Les passages à compléter sont signalés par **`[À COMPLÉTER]`** ou **`[À PERSONNALISER]`**. Faites une recherche sur ces mots.
- Le **titre de l'onglet** (`<title>`) et la **description Google** (`<meta name="description">`) se trouvent en haut de chaque page.
- L'**en-tête** et le **pied de page** sont répétés dans chaque page. Pour les modifier (numéro, adresse, menu), utilisez Rechercher / Remplacer dans tous les fichiers.
- Le numéro de téléphone apparaît sous deux formes : `06 18 93 01 26` (affiché) et `tel:+33618930126` (lien d'appel).
- **Avis clients** : un emplacement commenté est prévu dans `index.html` (recherchez `AVIS CLIENTS`). N'y mettez que de vrais avis, avec l'accord des personnes concernées.

Vocabulaire : le site parle uniquement de **bien-être, détente, relaxation et rééquilibrage**. Évitez les termes « soigner », « guérir », « thérapeutique », « traitement » et « médical ».

## 6. Changer les photos

Voir **[IMAGES.md](IMAGES.md)**. En bref : remplacez le fichier dans `images/` **en gardant le même nom**, en deux tailles (1600 px et 800 px de large).

## 7. Changer les couleurs ou les polices

Tout est regroupé en haut de **`css/style.css`**, dans le bloc `:root { ... }` :

```css
--c-creme:   #FAF5EC;  /* fond principal */
--c-terre-fonce: #9A4A2C;  /* boutons */
...
```

Changez un code couleur et tout le site suit.

## 8. Publier sur GitHub Pages

1. Créez un compte sur [github.com](https://github.com), puis un **nouveau dépôt** (« New repository »), public, par exemple `site-isabelle`.
2. Envoyez **le contenu de ce dossier** à la racine du dépôt :
   - **sans ligne de commande** : sur la page du dépôt, cliquez sur « Add file » puis « Upload files », glissez tous les fichiers et dossiers, puis cliquez sur « Commit changes » ;
   - **en ligne de commande** :
     ```bash
     git remote add origin https://github.com/VOTRE-COMPTE/site-isabelle.git
     git push -u origin main
     ```
3. Dans le dépôt, allez dans **Settings → Pages**.
4. Dans **Source**, choisissez « Deploy from a branch », sélectionnez la branche **`main`** et le dossier **`/ (root)`**, puis cliquez sur **Save**.
5. Après une à deux minutes, le site est en ligne à l'adresse `https://VOTRE-COMPTE.github.io/site-isabelle/`.

**Nom de domaine personnalisé (facultatif)** : dans Settings → Pages → *Custom domain*, saisissez votre domaine, puis suivez les instructions de GitHub pour configurer les DNS chez votre registrar. Cochez ensuite « Enforce HTTPS ».

**Après la mise en ligne** :

- déclarez le site et le `sitemap.xml` dans [Google Search Console](https://search.google.com/search-console) ;
- créez ou mettez à jour une **fiche Google Business Profile** : c'est essentiel pour apparaître dans les recherches « massage Alès ».

## 9. Tester en local

Il suffit de double-cliquer sur `index.html`. Pour un test plus fidèle, lancez un petit serveur :

```bash
python3 -m http.server 8000
```

Puis ouvrez <http://localhost:8000>.

## 10. Après une modification : vider le cache

Les navigateurs gardent les fichiers en mémoire quelques minutes. Si une modification n'apparaît pas, rechargez la page en forçant (`Cmd+Maj+R` sur Mac, `Ctrl+F5` sur PC) ou attendez une dizaine de minutes.

Quand vous modifiez `css/style.css`, `js/main.js` ou un fichier de `data/`, augmentez le numéro de version `?v=2` (par exemple `?v=3`) dans toutes les pages `.html` avec un Rechercher / Remplacer. Les visiteurs recevront ainsi immédiatement la nouvelle version.
