//* Déstructuration
//* plus rapide/facile pour accéder/extraire les valeurs d'un tableau

const fruits = ['orange', 'banane', 'citron'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

// ancienne façon
const orange = fruits[0];
const banane = fruits[1];
const citron = fruits[2];

console.log(orange, banane, citron);

// avec la déstructuration
const [john, peter, bob] = friends;
// console.log(john, peter, bob);

// si j'essaie d'accéder à un index qui n'est pas présent, sa valeur sera undefined
// on peut utiliser le nom qu'on veut pour associer la valeur

// const [ennemy, peter, bob, anna, kelly, susan] = friends;
// console.log(ennemy);
// console.log(susan);

// pour passer des éléments, on ajoute juste une virgule

const [ennemy, , , anna] = friends;
console.log(anna);

// raccourci snippet
// dar
