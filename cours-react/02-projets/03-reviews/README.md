# Reviews (Avis)

## URL de Figma

[Reviews](https://www.figma.com/file/e8L2QiR4GVTa5cGuRpXtk3/Reviews?node-id=0%3A1&t=gcCYcePiKxnkJ9kH-1)

## Architecture des composants

- App.jsx
- Review.jsx

## Structure JSX

Dans **App.jsx**

- main
- section.container
  - div.title
    - h2
    - div.title-underline
  - `<Review />`

Dans **Review.jsx**

- article.review
  - div.img-container
    - img.person-img
    - span.quote-icon
  - h4.author
  - p.job
  - p.info
  - div.button-container
    - button.prev-btn
    - button.next-btn
  - button.random-btn

## Étapes

### Explorer les données

Naviguez vers `data.js` et jetez un œil à la structure des données

### Importer les avis

Premièrement, importez les données d'avis dans votre projet. Ces données devraient être un tableau d'objets, chaque objet représentant l'avis d'une personne et contenant des propriétés telles que le nom, le travail, l'URL de l'image, et le texte.

### Configurer la valeur du state (index)

Ensuite, configurez une state qui contrôle quelle personne de la liste est affichée.

### Icônes React (Optionnel)

[Docs](https://react-icons.github.io/react-icons/)

```
npm install react-icons --save
```

App.jsx

```jsx
import { FaBeer } from 'react-icons/fa';
const App = () => {
  return;

  <div>
    <h2>Avis de départ</h2>;
    <FaBeer className='beer' />
  </div>;
};
```

### Afficher la première personne

Pour afficher la première personne de la liste, vous pouvez accéder au premier élément du tableau d'avis et utiliser ses propriétés pour afficher l'image de la personne (styles en ligne), son nom, son travail, et le texte de son avis.

### Précédent et Suivant

Pour permettre à l'utilisateur de parcourir les avis, vous pouvez configurer des boutons pour afficher les avis précédents et suivants de la liste. Vous pouvez faire cela en gardant une trace de l'index actuel dans le tableau d'avis, et en mettant à jour l'index lorsque l'utilisateur clique sur le bouton suivant ou précédent. Vous pouvez ensuite utiliser l'index mis à jour pour accéder à l'avis de la personne correspondante dans le tableau d'avis.

### Aléatoire

Pour permettre à l'utilisateur d'afficher l'avis d'une personne aléatoire, vous pouvez configurer un bouton avec une fonctionnalité pour sélectionner aléatoirement un index dans le tableau d'avis. Vous pouvez ensuite utiliser l'index sélectionné pour afficher l'avis de la personne correspondante.

Dans l'ensemble, le flux de l'application devrait ressembler à quelque chose comme ceci :

- Importez les données d'avis dans votre projet sous forme d'un tableau d'objets.

- Configurez les données d'avis en tant que variable d'état en utilisant le hook useState.

- Affichez l'avis de la première personne de la liste en utilisant leurs propriétés d'image, de nom, de travail et de texte.

- Configurez des boutons pour afficher les avis suivants et précédents dans la liste. Gardez une trace de l'index actuel dans le tableau d'avis et mettez-le à jour lorsque l'utilisateur clique sur le bouton suivant ou précédent.

- Configurez un bouton pour afficher l'avis d'une personne aléatoire. Ce bouton doit sélectionner un index aléatoire dans le tableau d'avis et l'utiliser pour afficher l'avis de la personne correspondante.
