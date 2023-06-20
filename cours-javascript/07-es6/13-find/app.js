const people = [
  { id: 1, name: 'john' },
  { id: 2, name: 'peter' },
  { id: 3, name: 'anna' }
];

//* find - retourne un spécifique
// on récupère la référence à l'objet "anna"
const anna = people.find((person) => person.name === 'anna');

console.log(anna);

//! si on le modifie, cela modifiera aussi l'objet dans le tableau
anna.name = 'bob';

console.log(anna);
console.log(people);
