# Rappel d'anniversaire

## URL Figma

[Birthday Buddy](https://www.figma.com/file/e2vsLe9DMnXZIygNHkwGL1/Birthday-buddy?node-id=0%3A1&t=AGNWdO5QQGOoNCfD-1)

## Structure JSX des composants

dans **App.jsx**

- main
  - section.container
    - h3
    - `<List />`
    - button

dans **List.jsx**

- <>
  - map
    - `<Person>`

Dans **Person.jsx**

- article.person
  - img.img
  - div
    - h4
    - p

## Importer les données

Dans `App.jsx`, importez les données (à partir de data.js) à restituer sous la forme d'un tableau d'objets. Chaque objet doit représenter une personne et contenir des propriétés telles que le nom, l'âge et l'URL de l'image.

## Initialiser l'état

Ensuite, initialiser les données le hook `useState`. Cela permettra de modifier les données et de refléter automatiquement ces modifications dans la sortie rendue.

## Itérer et rendre

Affichez le nombre d'éléments de la liste à l'aide de la propriété `length` du state. Ces informations peuvent être affichées en texte brut ou ajoutées à un message ou à un élément d'en-tête.

Pour afficher la liste des personnes, parcourez le tableau de données à l'aide de la méthode `map`. Pour chaque élément du tableau, affichez une image (astuce : utilisez des styles en ligne pour réduire la largeur). De plus, affichez le nom et l'âge de la personne sous forme de texte brut.

Créez un composant `<List />` pour contenir les éléments rendus. Ce composant peut être un simple élément div contenant la liste des composants Person.

Créez un composant `<Person />` pour restituer les informations de chaque personne. Ce composant doit recevoir les données de la personne retourner l'`image`, le `nom` et l'`âge`.

## Effacer la liste

Dans `App.jsx`, ajoutez un bouton pour effacer la liste et configurez la fonctionnalité en définissant une fonction qui réinitialise la variable d'état sur un tableau vide.

Dans l'ensemble, le flux de l'application devrait ressembler à ceci :

- Importez les données que vous souhaitez rendre dans `App.jsx`.
- Configurez les données en tant que variable d'état à l'aide de useState.
- Utilisez la méthode map pour itérer sur le tableau de données et afficher un composant `<Person />` pour chaque personne.
- Chaque composant `<Person />` doit retourner une image avec un style pour contrôler la largeur, le nom et l'âge de la personne.
- Créez un composant `<List />` contenant les éléments rendus.
- Créer un bouton avec une fonctionnalité pour effacer la liste.
- Affichez le nombre d'éléments de la liste à l'aide de la propriété length du state. Cela peut être rendu en texte brut ou ajouté à un élément de message ou d'en-tête.
