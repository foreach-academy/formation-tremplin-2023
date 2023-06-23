## Dad Jokes Project

#### Structure HTML

- div.container
  - button.btn
  - p.result (lorem20)

#### Qu'est-ce q'une API ?

[What is an API?](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

- https://randomuser.me/api/
- utilisateur aléatoire

#### Docs

- important
- moteur de recherche
- tester dans le navigateur

#### Dad Jokes Docs

- [Dad Jokes](https://icanhazdadjoke.com/api)

- blague aléatoire
- https://icanhazdadjoke.com/

#### Sélectionner les élement

- sélectionner btn, result
- vérifier si les deux éléments sont biens sélectionnés
- écouter l'évènement 'click'

#### Fonction FetchDadJoke

- créer une fonction async
- mettre en place le fetch
- définir result.textContent = joke

```js
const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'learning app'
    }
  });

  const data = await response.json();
  result.textContent = data.joke;
};
```

#### Chargement

- définir result égal à 'Loading...'

#### Gestion d'Erreur

- bloc try/catch
- définir result égal à 'There was an error...'

#### Vérifie le Statut

- Fetch - throws an error seulement si la promesse n'est pas tenue
- la réponse Error reste tout de même une réponse
- vérifier si la propriété response.ok est true
- throw new Error('Whoops!')
