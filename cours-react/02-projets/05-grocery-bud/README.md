# Gocery Bud (Épicerie)

## URL Figma

[Grocery Bud](https://www.figma.com/file/8rXGl68NoEmAhHpcV7aB5o/Grocery-bud?node-id=0%3A1&t=IMjjwDExGWpXdpQL-1)

## Structure du projet

- App.jsx
- Form.jsx
- Items.jsx
- SingleItem.jsx
- main.jsx

## Strctures JSX

App.jsx

```js
const setLocalStorage = () => {};
const addItem = (e) => {};
const removeItem = (id) => {};
const editItem = (id) => {};
```

- section.section-center
  - `<ToastContainer />`
  - `<Form.jsx />`
  - `<Items items={list} removeItem={removeItem} editItem={editItem} />`

Form.jsx

```js
const handleSubmit = (e) => {};
```

- form
  - h4 (grocery bud)
  - div.form-control
    - input.form-input
    - btn.btn

Items.jsx

- div.items
  - map pour retourner `<SingleItem />`

SingleItem.jsx

- div.single-item
  - input[type="checkobx"]
  - p
- btn.btn.remove-btn

## Étapes

### State

Dans `App.jsx`, configurez un state `items` à l'aide du hook useState.

### Composant Form

Créez un composant `Form` qui contient un champ de saisie et un bouton de soumission. Lorsque l'utilisateur soumet le formulaire, la fonction `handleSubmit` est appelée.

Dans la fonction `handleSubmit`, empêchez le comportement de soumission de formulaire par défaut à l'aide de `event.preventDefault()`. Si le formulaire est soumis avec une valeur vide, affichez un message et retournez.

### Ajouter un article

Si le formulaire est soumis avec une valeur, créez un nouvel objet item qui comprend un nom (pris à partir de l'input du formulaire), une propriété `completed` (valeur par défaut `false`), et un identifiant unique (généré à l'aide d'une bibliothèque comme `uuid` ou `nanoid`).

Ajoutez le nouvel élément à la state `items` en utilisant la fonction `setItems`.

### Rendre la liste

Créez deux nouveaux composants : `Items` et `SingleItem`. Dans Items, itérez sur la liste des éléments et affichez chaque élément dans un composant `SingleItem`. Pour l'instant, affichez seulement le nom de l'article.

### SingleItem

Dans `SingleItem`, configurez un state appelé `isChecked` avec une valeur par défaut de la propriété `completed` de l'article. Affichez une case à cocher et ajoutez des styles en ligne pour ajouter ou supprimer la propriété `text-decoration: line-through` en fonction de la valeur `isChecked`. Mettez en place une fonctionnalité pour basculer la state `isChecked` lorsque la case à cocher est cliquée.

### Supprimer un article

Dans `App.jsx`, créez une fonction `removeItem` et passez-la au composant `SingleItem`. Dans `SingleItem`, ajoutez un bouton qui, lorsqu'il est cliqué, supprime l'article de la liste.

### Stockage local

Mettez en place une fonctionnalité de stockage local pour conserver la liste des articles à travers les rechargements de page.

Plus d'info ci-dessous.

### React-Toastify

Mettez en œuvre la bibliothèque `react-toastify` pour gérer les alertes lorsqu'un nouvel élément est ajouté à la liste, lorsque l'utilisateur essaie de soumettre un formulaire vide, et lorsqu'un élément est supprimé de la liste.

### Flux

Dans l'ensemble, le flux de l'application devrait ressembler à quelque chose comme ceci :

- Dans `App.jsx`, configurez une stat appelé `items` à l'aide du hook useState.

- Créez un composant `Form` qui contient un champ de saisie et un bouton de soumission, et configurez la fonction `handleSubmit` pour ajouter de nouveaux éléments à la liste.

- Créez deux nouveaux composants : `Items` et `SingleItem`, et utilisez-les pour afficher la liste des éléments.

- Mettez en place une fonctionnalité de stockage local pour conserver la liste des articles à travers les rechargements de page.

- Mettez en œuvre la bibliothèque `react-toastify` pour gérer les alertes lorsqu'un nouvel élément est ajouté à la liste, lorsque l'utilisateur essaie de soumettre un formulaire vide, et lorsqu'un élément est supprimé de la liste.

### Stockage local

Le `localStorage` est un objet intégré dans les navigateurs web qui permet aux applications web de stocker localement des paires clé-valeur dans le navigateur de l'utilisateur.

Pour stocker des données dans le `localStorage`, vous pouvez utiliser la méthode `localStorage.setItem(clé, valeur)`, où la clé est un identifiant unique pour les données à stocker et la valeur est les données que vous souhaitez stocker. Notez que le paramètre valeur doit être une chaîne de caractères.

Voici un exemple d'utilisation de `localStorage.setItem()` :

```js
localStorage.setItem('username', 'John');
```

Ce code stocke la chaîne `'John'` avec la clé `'username'` dans le `localStorage`.

Pour récupérer des données du `localStorage`, vous pouvez utiliser la méthode `localStorage.getItem(clé)`, où clé est l'identifiant unique pour les données que vous souhaitez récupérer. Cette méthode renvoie la valeur associée à la clé que vous passez en entrée, sous forme de chaîne.

Voici un exemple d'utilisation de `localStorage.getItem()` pour récupérer la valeur de la clé `'username'` que nous avons définie précédemment :

```js
const username = localStorage.getItem('username');
console.log(username); // affiche 'John'
```

Notez que le `localStorage` peut seulement stocker des chaînes de caractères, donc si vous avez besoin de stocker des objets ou d'autres types de données, vous devrez d'abord les convertir en chaînes de caractères. Une façon de le faire est d'utiliser `JSON.stringify()` pour convertir vos données en une chaîne JSON avant de les stocker dans le `localStorage`, et puis d'utiliser `JSON.parse()` pour les convertir à nouveau en un objet lorsque vous les récupérez.

Par exemple :

```js
const user = {
  name: 'John',
  age: 30,
  email: 'john@gmail.com'
};

localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));

console.log(storedUser.name); // affiche 'John'
console.log(storedUser.age); // affiche 30
console.log(storedUser.email); // affiche 'john@gmail.com'
```

En résumé, le `localStorage` vous permet de stocker localement des paires clé-valeur dans le navigateur de l'utilisateur à l'aide de `localStorage.setItem()` et de récupérer ces valeurs à l'aide de `localStorage.getItem()`. Cependant, notez que le `localStorage` peut seulement stocker des chaînes de caractères, donc vous devrez convertir d'autres types de données en chaînes avant de les stocker.
