//* spread operator (opérateur de propagation) - ...
//* Permet à un itérable de s'expandre individuellement à l'intérieur du récepteur
//* Split en plusieurs items et les copie

// un string est un itérable
const formation = 'forEach Academy';
const letters = [...formation];

// console.log(...formation);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';

//! le problème est qu'on a des tableaux dans un tableau
// const friends = [boys, girls, bestFriend];
// console.log(friends);

// la solution
const friends = [...boys, ...girls, bestFriend];
// console.log(friends);

// faire une copie
//* référence
// const newFriends = friends;
// console.log(newFriends);
// newFriends[0] = 'karine';

// les 2 arrays ont leur index 0 modifié
// console.log(friends);
// console.log(newFriends);

//* copie
const newFriends = [...friends];
newFriends[0] = 'karine';

console.log(friends);
console.log(newFriends);
