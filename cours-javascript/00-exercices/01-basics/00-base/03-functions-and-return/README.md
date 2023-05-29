# Fonctions et return

**Fonctions**

En JavaScript, une fonction est un bloc de code conçu pour effectuer une tâche spécifique. C'est une manière de regrouper des instructions afin de les utiliser plusieurs fois. En évitant de répéter le même code à plusieurs endroits, on améliore la lisibilité et la maintenabilité du programme.

Une fonction est définie avec le mot-clé `function`, suivi d'un nom pour la fonction, d'une paire de parenthèses `()` qui peuvent contenir des paramètres à passer à la fonction, et d'une paire d'accolades `{}` qui contiennent le corps de la fonction (les instructions à exécuter).

**Return**

Le mot-clé return est utilisé pour indiquer la valeur qu'une fonction doit renvoyer. Lorsqu'une fonction atteint une instruction `return`, elle arrête son exécution et renvoie la valeur spécifiée.

## Fonction de salutation

Écrire une fonction qui salue un utilisateur par son nom. La fonction prend un paramètre name et retourne une salutation personnalisée.

```js
console.log(sayHi('John')); // "Bonjour John !"
```

## Fonction d'addition

Écrire une fonction qui prend deux nombres comme arguments et retourne leur somme.

```js
console.log(add(5, 7)); // 12
```

## Fonction de multiplication

Écrire une fonction `multiply(a, b)` qui prend deux nombres en paramètre et retourne leur produit. On devrait pouvoir l'appeler comme ceci :

```js
console.log(multiply(5, 7)); // 35
```

## Dire bonjour

Écrire une fonction `greet(name, age)` qui prend en paramètre un nom et un âge et retourne une phrase du type `"Bonjour John, vous avez 30 ans"`. On devrait pouvoir l'appeler comme ceci :

```js
console.log(greet('John', 30)); // "Bonjour John, vous avez 30 ans."
```

## Le carré d'un nombre

Écrire fonction `square(number)` qui prend un nombre en paramètre et retourne son carré. On devrait pouvoir l'appeler comme ceci :

```js
console.log(carre(5)); // 25.
```
