# Exercices

## Méthodes sur les tableaux

### Utiliser `map` pour écrire une fonction qui ajoute un `!` à chaque élément.

```js
const f = (strings) => {
  return strings;
};

// BUT
console.log(f(['a', 'b', 'c'])); // ['a!','b!', 'c!']
console.log(f(['A cat'])); // ['A cat!']
console.log(f([''])); // ['!']
console.log(f([])); // []
```

### Écrire une fonction qui additionne les carrés des nombres impairs d'un tableau. Utiliser les méthodes `map`, `filter` et `reduce` ensemble.

Un indice : `x` est impair si `x % 2 === 1`

```js
const f = (arr) => {
  return 0;
};

// BUT
console.log(f([0, 0])); // 0
console.log(f([3])); // 9
console.log(f([4])); // 0
console.log(f([1, 2, 3, 4, 5])); // 35
console.log(f([2, 2, 2, 2])); // 0
console.log(f([])); // 0
console.log(f.toString().includes('filter')); // true
console.log(f.toString().includes('map')); // true
console.log(f.toString().includes('reduce')); // true
```

## Spread Operator

### Utiliser le spread operator pour écrire une fonction `mergeObjects` qui combine deux objets.

```js
const mergeObjects = (obj1, obj2) => {};

// BUT :  { name: 'Betty', age: 36 }
console.log(mergeObjects({ name: 'Amir', age: 36 }, { name: 'Betty' }));
```

## Déstructuration et Rest Operator

### Utiliser la déstructuration de tableau pour extraire les deux premiers noms d'utilisateur de la liste. Les mettre dans les variables `firstUser` et `secondUser`.

```js
const names = ['Amir', 'Betty', 'Cindy', 'Dalili'];

// BUT : users = ['Amir', 'Betty']
const users = [firstUser, secondUser];
console.log(users);
```

### Utiliser la déstructuration pour extraire la valeur `40` du tableau imbriqué ci-dessous. Le déstructurer en une variable nommée `y2`.

```js
const dataPoints = [
  [10, 20],
  [30, 40]
];

// BUT : y2 = 40
console.log(y2);
```

### Utiliser une seule opération de déstructuration de tableau pour :

- Placer le premier et deuxième nom d'utilisateur dans les variables `firstUser` et `secondUser`.
- Placer le reste des noms d'utilisateur dans une variable `otherUsers`.

```js
const names = ['Amir', 'Betty', 'Cindy', 'Dalili'];

// BUT : users = ['Amir', 'Betty', ['Cindy', 'Dalili']]
const users = [firstUser, secondUser, otherUsers];
console.log(users);
```

### Utiliser la déstructuration pour extraire le nom du chat de Betty, qui est stocké dans un objet imbriqué. Le stocker dans la variable `name`. (Ce nom de variable correspond à la clé de nom dans `cat`, ce qui rend la déstructuration plus facile qu'elle ne le serait si elle ne correspondait pas.)

```js
const user = {
  name: 'Betty',
  cat: {
    name: 'Keanu',
    age: 2
  }
};

// BUT : name = 'Keanu'
console.log(name);
```

### Terminer cette fonction qui transforme les objets chat (comme `{name : 'Ms. Fluff', age : 4}`) en strings (comme `'Ms. Fluff (4)'`). Utiliser la déstructuration pour extraire `name` et `age` de l'objet `cat`.

```js
const catDescription = (obj) => {
  return;
};

// BUT : ['Ms. Fluff (4)', 'Keanu (2)']
console.log([
  catDescription({ name: 'Ms. Fluff', age: 4 }),
  catDescription({ name: 'Keanu', age: 2 })
]);
```

## Async/Await

### Utiliser async/wait pour compléter cette fonction `quadruple` ("multiplie le nombre par 4"). Elle devrait utiliser la fonction `double` deux fois.

```js
const double = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500);
  });
};

async function quadruple(n) {
  return;
}

// BUT : [4, 8, 12]
console.log(await Promise.all([quadruple(1), quadruple(2), quadruple(3)]));
```

## Fetch API

### Écrire une fonction `fetchUser` qui récupére les données d'un utilisateur. Afficher dnas la console son nom complet et son age de la personne

```js
const url = 'https://randomuser.me/api?page=1';
```
