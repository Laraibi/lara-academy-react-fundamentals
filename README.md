# React JS — Lara Academy · Solution complète

Le panier partagé, les quantités, le retrait, la recherche contrôlée et le compteur sont connectés. Le panier se réinitialise au rechargement : aucune persistance ni API distante ne fait partie de cet épisode.

## Lancer le projet

Installer **Node.js 24** et npm. La version utilisée pour vérifier ce projet est **24.21.0** ; `.nvmrc` permet `nvm use` si nvm est déjà installé. Vérifier `node --version` avant de commencer.

Après avoir cloné ce dépôt, ouvrir un terminal dans son dossier :

```sh
npm ci
npm run dev
```

Ouvrir l’adresse affichée par Vite (par défaut `http://127.0.0.1:5173`). Si le port est occupé, utiliser celui affiché. Sur Windows, ces mêmes commandes fonctionnent dans PowerShell avec Node.js installé.

- `/` : la boutique de Hamza.
- `/counter.html` : le compteur isolé pour comprendre `useState` et `onClick`.
- `/vanilla.html` : l’expérience DOM en JavaScript. Dans la branche de départ, le total oublié est un défi volontaire, pas une limite de JavaScript.

Le style est déjà prêt : Tailwind CSS 4.3.3, plugin Vite officiel, thème dans `src/style.css`, classes utilitaires dans le JSX. Pas de `npx tailwindcss init`, pas de CDN, pas de clé API. Navigateurs modernes requis : Chrome 111+, Safari 16.4+, Firefox 128+.

## Suivre le cours, étape par étape

1. Dans `vanilla.js`, mettre à jour le total après le clic et expliquer les deux écritures DOM.
2. Dans `ProductCard.jsx`, repérer la valeur reçue par `product` et le rôle des props.
3. Dans `Counter.jsx`, remplacer `const count = 0` par `useState(0)`, ajouter `handleClick` avec `setCount(previous => previous + 1)`, puis connecter `onClick`.
4. Dans `App.jsx`, remplacer le panier statique par `useState([])`. Ajouter `handleAdd` avec `setCart(previous => addItem(previous, product))` et transmettre la fonction à `ProductCard`.
5. Brancher `handleRemove` sur `Cart`. Tester la quantité, puis la disparition d’une ligne lorsque la quantité atteint zéro.
6. Remplacer la recherche statique par `useState('')`, connecter `value` et `onChange`, puis filtrer `PRODUCTS`. Tester les majuscules, les espaces et une recherche sans résultat.
7. Ajouter le défi « Vider le panier » : tester rempli, déjà vide, puis un nouvel ajout.

La branche `solution` contient le résultat du cours. Pour la consulter sans perdre ses exercices, cloner le dépôt dans un deuxième dossier avec `git clone --branch solution URL_DU_DEPOT boutique-solution`, puis `npm ci` et `npm run dev` dans ce deuxième dossier. Remplacer `URL_DU_DEPOT` par l’adresse GitHub du dépôt.

## Vérifier son travail

```sh
npm run check
npm run preview
```

`check` vérifie les cas métier, construit les trois pages, puis confirme que Tailwind produit un vrai fichier CSS. `preview` sert le build local ; il faut lancer `check` ou `build` avant.

À tester dans le navigateur : compteur 0→1→2 ; deux Casques + une Souris = 3 articles / 380 DH ; retirer un Casque = 230 DH ; retirer jusqu’au panier vide = 0 DH ; recherche « SOUR » et «  souris  » ; aucune correspondance. Dans le projet de départ, ces interactions deviennent disponibles au fil des étapes.

Les versions directes sont fixées et `package-lock.json` est fourni. Utiliser `npm ci` pour retrouver l’installation vérifiée. Aucun serveur, paiement ou compte n’est nécessaire. Le premier `npm ci` nécessite une connexion à npm.


Dépôt officiel : https://github.com/Laraibi/lara-academy-react-fundamentals

Lara Academy : https://laraibi.com
