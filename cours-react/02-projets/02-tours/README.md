# Tours (visites)

## URL Figma

[Tours](https://www.figma.com/file/OnLoM3AzBFaHzSc2iolJS0/Tours?node-id=0%3A1&t=wiRXOlTLN5ehekYI-1)

## Architecture des composants

- App.jsx
- Main.jsx
- Loading.jsx
- Tour.jsx
- Tours.jsx

## Structure JSX des composants

Dans **App.jsx**

- main
  - `<Tours />`

Dans **Tours.jsx**

- section
  - div.title
    - h2 (Our Tours)
    - div.title-underline
  - div.tours { pour chaque voyages retourner `<Tour />` }

Dans **Tour.jsx**

- article.single-tour
  - img.img
  - span.tour-price
  - div.tour-info
    - h5
    - p
    - button.btn.delete-btn

Dans **Loading.jsx**

- div.loading

## Étapes

### Configuration

Créez d'abord trois composants (`Tours`, `Tour` et `Loading`). Vous pouvez créer trois fichiers distincts dans le répertoire de votre projet : `Tours.jsx`, `Tour.jsx` et `Loading.jsx`.

### Récupération des Visites

Le composant `Tours` sera chargé de rendre une liste de composants `Tour`. Dans `App.jsx`, vous récupérerez les données des tours à partir d'une URL en utilisant l'API fetch. Avant que les données ne soient chargées, vous devriez afficher un spinner de chargement ou un message, ce qui peut être réalisé à l'aide du composant `Loading`.

### Rendu des Visites

Une fois les données chargées, vous pouvez définir l'état de votre composant pour stocker les données des tours. Vous pouvez alors parcourir le tableau des tours et rendre un composant `Tour` pour chaque tour. Chaque composant `Tour` recevra les données du tour en tant que props, y compris l'id du tour, l'image, les informations, le nom et le prix.

### Suppression d'une visite

Pour mettre en œuvre la fonctionnalité de "suppression de visite", vous pouvez ajouter un bouton à chaque composant `Tour` qui, lorsqu'il est cliqué, supprime le tour de la liste des tours. Vous pouvez y parvenir en mettant à jour l'état du composant `Tours` pour supprimer le tour du tableau des tours.

### Lire plus

Pour mettre en œuvre la fonctionnalité "lire plus", vous pouvez ajouter un bouton à chaque composant `Tour` qui, lorsqu'il est cliqué, étend la description du tour. Vous pouvez y parvenir en mettant à jour l'état du composant Tour pour basculer un indicateur "lire plus" et rendre conditionnellement la description complète en fonction de cet indicateur.

### Récupération des visites

Enfin, vous pouvez mettre en œuvre une fonctionnalité de "récupération" en ajoutant un bouton ou autre élément d'interface utilisateur qui, lorsqu'il est cliqué, récupère à nouveau les données des tours à partir de l'URL et met à jour l'état du composant Tours. Vous pouvez également vouloir ajouter un état de chargement pendant le processus de récupération.

Dans l'ensemble, le flux de l'application devrait ressembler à ceci :

- `App.jsx` récupère les données des tours à partir d'une URL et détermine l'état du composant `Tours` pour stocker les données.

- Le composant `Tours` parcourt le tableau des tours et rend un composant `Tour` pour chaque tour.

- Chaque composant `Tour` dispose d'un bouton "supprimer le tour" et d'un bouton "lire plus". Lorsque le bouton "supprimer le tour" est cliqué, le composant `Tours` met à jour state pour supprimer le tour du tableau des tours.

- Lorsque le bouton "lire plus" est cliqué, le composant `Tour` met à jour state pour basculer un indicateur "lire plus" et rendre conditionnellement la description complète.

- Lorsque le bouton "récupérer" est cliqué, le composant `Tours` récupère à nouveau les données des tours à partir de l'URL et met à jour state.
