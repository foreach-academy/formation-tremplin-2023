//* Arrays - [], commence à l'index 0

const friend1 = 'anna';
const friend2 = 'susan';
const friend3 = 'john';
const friend4 = 'peter';

// on peut stocker n'importe quel type de données
const friends = ['john', 'peter', 'susy', 42, undefined, null];

console.log(friends);
// console.table(friends);

// affiche le 2ème élément
console.log(friends[1]);

// on peut assigner la valeur d'un élément
const bestFriend = friends[2];
console.log(bestFriend);

// on peut réassigner la valeur d'un élément
friends[4] = 'anna';
console.log(friends);
console.log(friends[4]);
