# Projet Menu

## URL de Figma

[Menu](https://www.figma.com/file/PwlnSJXCuo4qD2o6EJiuj9/Menu?node-id=0%3A1&t=oaKVwYVqc9Oon2Ts-1)

## Structure du projet

- App.jsx
- Categories.jsx
- data.js
- main.jsx
- Menu.jsx
- MenuItem.jsx
- Title.jsx

## Structure JSX

- **App.jsx**

  - main
    - section.menu
      - `<Title title="Our menu"/>`
      - `<Categories />`
      - `<Menu />`

- **Title.jsx**

  - div.title
    - h2
    - div.title-underline

- **Categories.jsx**

  - div.btn-container
    - categories.map() et retourner button.btn

- **Menu.jsx**

  - div.section-center
    - items.map() et retourner :
      - `<MenuItem />`

- **MenuItem.jsx**
  - article.menu-item
    - img.img
    - div.item-info
      - header
        - h4
        - h4.item-price
      - p.item-text

## Étapes

### Composant Titre

Premièrement, vous devez créer un composant `Title` pour afficher le titre principal de votre application. Ce composant peut être une simple fonction qui retourne un élément d'en-tête avec le titre de l'application.

### Explorer et Importer les Données

Importez les données des éléments du menu depuis `data.js` dans votre projet. Ces données devraient être un tableau d'objets, chaque objet représentant un élément de menu et contenant des propriétés telles que le titre, le prix, l'URL de l'image et la description.

### State

Configurez les données des éléments du menu comme une variable d'état dans le composant `App.jsx` en utilisant le hook useState. Cela vous permettra de modifier les données et d'avoir ces modifications automatiquement reflétées dans la sortie rendue.

### Rendu des Éléments

Passez le state des éléments du menu au composant `Menu.jsx`. Dans le composant `Menu`, parcourez la liste des éléments du menu en utilisant la méthode map, et pour chaque élément, faites le rendu d'un composant `MenuItem`.

Dans le composant `MenuItem`, faites le rendu d'un élément image, d'un titre, d'un prix et d'une description. Vous pouvez utiliser les données du tableau des éléments du menu pour remplir les informations de chaque composant.

### Catégories Uniques

Dans le composant `App.jsx`, mettez en place une fonctionnalité pour obtenir uniquement les catégories uniques des données des éléments du menu et les stocker dans un tableau séparé. Ajoutez une catégorie `all` à ce tableau pour afficher tous les éléments du menu.

**Astuce :** new Set()

Vous pouvez trouver plus d'infos sur l'objet Set ci-dessous après toutes les étapes.

### State et Rendu des Catégories

Configurez le tableau des catégories comme une variable d'état dans le composant `App.jsx` en utilisant le hook useState. Cela vous permettra de modifier les données et d'avoir ces modifications automatiquement reflétées dans la sortie rendue.

Créez un composant `Categories` et passez le state des catégories à ce composant. Dans le composant `Categories`, parcourez le tableau des catégories et faites le rendu de boutons pour chaque catégorie.

### Fonctionnalité de Filtrage

Mettez en place une fonctionnalité de filtrage où, une fois que l'utilisateur clique sur le bouton, seuls les éléments du menu qui appartiennent à la catégorie sélectionnée sont affichés. Pour ce faire, définissez une fonction qui prend une catégorie en paramètre et met à jour l'état pour n'afficher que les éléments du menu qui appartiennent à cette catégorie. Vous pouvez alors passer cette fonction au composant Catégories comme une prop, et l'attacher aux boutons.

Lorsque l'utilisateur clique sur un bouton de catégorie, la fonction de filtrage doit être appelée avec la catégorie sélectionnée en paramètre. La fonction doit ensuite mettre à jour l'état pour n'afficher que les éléments du menu qui appartiennent à la catégorie sélectionnée.

### Flux

Globalement, le flux de l'application devrait ressembler à quelque chose comme ceci :

- Créer un composant `Title` pour afficher le titre de l'application.

- Importer les données des éléments du menu depuis `data.js` dans votre projet.

- Configurer les données des éléments du menu dans un state dans le composant `App.jsx`.

- Passer la valeur d'état des éléments du menu au composant `Menu.jsx` et faire le rendu d'un composant `MenuItem` pour chaque élément dans le tableau des éléments du menu.

- Dans le composant `MenuItem`, afficher l'image, le titre, le prix et la description.

- Mettre en place une fonctionnalité pour obtenir uniquement les catégories uniques des données des éléments du menu et les stocker dans un tableau séparé, y compris une catégorie `all` pour afficher tous les éléments du menu.

- Configurer le tableau des catégories comme une variable d'état dans le composant `App.jsx`.

- Créer un composant `Catégories` et faire le rendu d'un bouton pour chaque catégorie dans le tableau des catégories.

- Définir une fonction qui prend une catégorie en paramètre et met à jour l'état pour n'afficher que les éléments du menu qui appartiennent à cette catégorie.

- Attacher la fonction de filtrage aux boutons de catégorie dans le composant Catégories.

- Répéter les étapes 9-10 jusqu'à ce que l'utilisateur ait sélectionné une catégorie différente ou choisisse de quitter le composant Menu.

#### Objet Set

En JavaScript, l'objet `Set` est une collection de valeurs uniques. Il vous permet de stocker des valeurs de n'importe quel type, comme des types primitifs (nombres, chaînes, booléens) et des références d'objets.

Voici un exemple simple d'utilisation d'un Set :

```js
// Créer un nouveau set
const monSet = new Set();

// Ajouter des valeurs au set
monSet.add(1);
monSet.add(2);
monSet.add(3);

// Ajouter une valeur en double (ignorée)
monSet.add(1);

// Obtenir la taille du set (3)
console.log(monSet.size);

// Vérifier si une valeur est dans le set (true)
console.log(monSet.has(2));

// Supprimer une valeur du set
monSet.delete(2);

// Obtenir un tableau de toutes les valeurs dans le set
const monTableau = Array.from(monSet);
console.log(monTableau); // [1, 3]
```

```js
const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];
console.log(tempItems);
```
