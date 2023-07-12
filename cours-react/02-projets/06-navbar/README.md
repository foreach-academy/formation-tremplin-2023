# Navbar

## URL Figma

[Barre de navigation](https://www.figma.com/file/Se61eLfK50x0JatmdSdLzL/Navbar?node-id=0%3A1&t=iDQ4v9bsLeblAFUK-1)

## Structure des composants

- App.jsx
- Navbar.jsx

## Structure JSX des composants

Dans **App.jsx**

- <>
  - `<Navbar />`

Dans **Navbar.jsx**

Importer `links` et `social` depuis `data.js`

- nav
  - div.nav-center
    - div.nav-header
      - img.logo
      - btn.nav-toggle
        - `<FaBars />`
    - div.links-container
      - ul.links
        - links.map() retourne
          - li
            - a
    - ul.social-icons
      - social.map() retourne
        - li
          - a

## Étapes

### Données

Vérifiez le fichier `data.jsx` et trouvez deux tableaux : un pour les liens et un pour les icônes sociales. Remarquez comment les icônes de `react-icons` peuvent être utilisées directement dans les structures de données. Assurez-vous simplement d'utiliser l'extension de fichier `.jsx` dans Vite

### Approche initiale

Mettez en place un composant `Navbar` avec un state `showLinks` (booléen). Importez les liens à partir de `data` et affichez-les conditionnellement dans la `Navbar` en fonction de la valeur d'état `showLinks`. Mettez en place un bouton qui change la valeur et, par conséquent, bascule les liens. Mettez en place CSS pour la `Navbar`.

### Approche dynamique

Utilisez la fonction `useRef()` et `getBoundingClientRect()`, pour obtenir la hauteur exacte des liens

### Application complète

Finalement, ajoutez des liens sociaux et CSS pour afficher la `Navbar` sur le grand écran.

### Flux de l'application

Le flux de l'application devrait ressembler à quelque chose comme ceci :

- Vérifiez le fichier `data.jsx` et trouvez deux tableaux : un pour les liens et un pour les icônes sociales.

- Mettez en place un composant `Navbar` avec un state `showLinks` (booléen). Importez les liens à partir de `data` et affichez-les conditionnellement dans la `Navbar` en fonction du state `showLinks`. Mettez en place un bouton qui change la valeur et, par conséquent, affiche les liens. Mettez en place CSS pour la `Navbar`.

- Masquez les liens par défaut dans le CSS. Créez une classe qui affiche les liens avec une hauteur fixe. Refactorez le JSX dans la `Navbar` pour basculer la classe, ce qui à son tour bascule la `Navbar`.

- Utilisez la fonction `useRef()` et `getBoundingClientRect()`, pour obtenir la hauteur exacte des liens

- Ajoutez des liens sociaux et CSS pour afficher la `Navbar` sur le grand écran.
