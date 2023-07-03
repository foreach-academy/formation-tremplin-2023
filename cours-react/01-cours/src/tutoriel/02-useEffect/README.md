# Challenge

## useEffect fetch

```js
const url = 'https://api.github.com/users';
```

- Importer `useState` et `useEffect`
  - Initialiser un state `users` - valeur par défaut `[]`
- Initialiser `useEffect`
  - S'assurer qu'il ne fonctionne qu'au premier rendu !
- Dans le callback, créer une fonction qui performe un fetch
  - Utiliser l'url fourni :
    - Vous pouvez utiliser .then ou async
  - Définir `users` égale au résultat
  - Itérer à travers la liste et afficher image, nom d'utilisateur et lien vers profil
