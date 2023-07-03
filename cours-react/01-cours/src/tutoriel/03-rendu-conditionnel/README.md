# Challenges

## Multiple returns - fetch data

```js
const url = 'https://api.github.com/users/USERNAME';
```

- Créer un state `user`
  - Valeur par défaut d'user - `null`
- Fetch les données depuis l'url (et afficher le résulat dans la console)

## Short circuit

- Créer deux states
  - Un "falsy" et l'autre "truthy"
- Pour chaque state, mettre en place les conditions pour chaque opérateurs en JSX - indice {}
  - || OU
  - && ET

## Toggle challenge

- Créer un state (booléen)
- Retourner un bouton et un composant/élément
- Quand l'utilisateur clique sur le bouton
  - Changer le state
  - Afficher conditionellement le composant/élément

## User challenge

- Créer un state
  - `user` - valeur par défaut `null`
- Créer deux fonctions
  - `login` - défini `user` égal à un objet avec une propriété `name`
  - `logout` - défini `user` égal `null`
- Dans le JSX utiliser l'opérateur `?` pour afficher deux messages :
  - `h2` avec `"Salut [nom de l'utilisateur]"` et un bouton de déconnexion
  - `h2` avec `"Veuillez vous connecter"` et un bouton de connexion
