# Site de l'association Empreinte d'Espoir

Site statique (HTML/CSS/JS, sans base de données ni outil à installer) en 4 pages :

| Page | Fichier |
|---|---|
| L'objet de l'association | `index.html` |
| Nos futurs projets | `projets.html` |
| Nos projets réalisés | `realisations.html` |
| La cagnotte | `cagnotte.html` |

**Tout le contenu se modifie dans un seul fichier : [`assets/js/data.js`](assets/js/data.js).**
Pas besoin de toucher au HTML.

## Voir le site sur son ordinateur

Double-cliquer sur `index.html`, ou lancer `python3 -m http.server` dans ce dossier puis ouvrir http://localhost:8000.

## Mettre à jour le contenu

- **Textes, valeurs, zones, équipe, contacts** : sections correspondantes de `data.js`.
- **Éléments animés de l'accueil** : `motsHero` (mots qui défilent dans le grand titre), `domaines`, `etapes` (« Comment ça marche ») et `citations` (proverbes qui défilent). Les bandeaux qui défilent reprennent automatiquement les valeurs et les domaines.
- **Nouveau projet** : copier un bloc `{ ... }` dans `projetsFuturs` et changer les valeurs (`id` unique, sans espace ni accent).
- **Projet terminé** : le retirer de `projetsFuturs` et l'ajouter à `projetsRealises` (un modèle prêt à copier est en commentaire dans `data.js`). Tant que la liste est vide, la page Réalisations affiche « Nos premières réalisations arrivent bientôt ».
- **Montant collecté** : modifier le champ `collecte` du projet. Les compteurs animés, les barres d'avancement, les pourcentages et les totaux se recalculent seuls.
- **Euros et francs CFA** : les montants se saisissent en euros et l'équivalent en francs CFA s'affiche à côté (taux fixe : 1 € = 655,957 F CFA). Pour saisir en francs CFA, mettre `devise: "XOF"` : les euros s'afficheront alors à côté.
- **Budgets des exemples** : ils sont calculés à partir des prix courants au Sénégal (détail en commentaire au-dessus de chaque budget dans `data.js`). À vérifier sur place avant de lancer une collecte.
- **Photos** : les déposer dans `assets/img/projets/`, puis indiquer leur chemin, par exemple
  `photos: { avant: ["assets/img/projets/puits-avant.jpg"], pendant: [], apres: [] }`.
  Les réduire avant de les envoyer (environ 1600 px de large, moins de 300 Ko) : beaucoup de visiteurs consultent le site sur mobile avec peu de données.
- **Moyens de don** : renseigner `dons.lienPrincipal` (page HelloAsso, Stripe…), `wave`, `orangeMoney`, `iban`. Un champ vide est masqué automatiquement.
- **Logo** : remplacer `assets/img/logo.svg` par le logo officiel (même nom ; un `.png` fonctionne aussi en changeant l'extension dans `main.js` et les pages HTML).
- **Mise en production** : passer `demo: true` à `demo: false` pour retirer le bandeau « Site en préparation ».

## Mettre en ligne gratuitement (GitHub Pages)

1. Créer un compte sur https://github.com puis un dépôt **public** nommé `empreinte-espoir` (vide, sans README).
2. Dans ce dossier :
   ```bash
   git remote add origin https://github.com/<compte>/empreinte-espoir.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch → `main` / `(root)` → Save**.
4. Le site est en ligne au bout d'une à deux minutes sur `https://<compte>.github.io/empreinte-espoir/`.

**Mises à jour sans rien installer** : sur github.com, ouvrir `assets/js/data.js`, cliquer sur le crayon ✏️, modifier, puis **Commit changes**. Le site se met à jour tout seul en une minute environ, et l'historique garde chaque modification (pratique pour la transparence).

Autres options gratuites : [Netlify](https://app.netlify.com/drop) (glisser-déposer le dossier) ou Cloudflare Pages (connecté au dépôt GitHub).

## Nom de domaine (optionnel)

Pour une adresse comme `empreintedespoir.org`, il faut acheter le domaine chez un registrar (OVH, Gandi, Namecheap…), environ 10 à 15 € par an. C'est le seul coût éventuel. Ensuite : **Settings → Pages → Custom domain** sur GitHub. Le HTTPS reste gratuit.
