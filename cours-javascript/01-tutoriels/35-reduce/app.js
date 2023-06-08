//* reduce
//* réduit l'array à une simple valeur - nombre, array, objet
//* itère aussi avec une fonction callback
//* 1er paramètre ('acc') - total de tous les calculs
//* 2ème paramètre ('curr') - itération/valeur actuelle

const people = [
  { name: 'bob', age: 20, job: 'développeur', id: 1, salary: 200 },
  { name: 'peter', age: 25, job: 'designer', id: 2, salary: 30 },
  { name: 'susy', age: 30, job: 'la boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, job: 'la boss', id: 4, salary: 500 }
];

//! il faut bien initialiser le type de la valeur initiale que l'on veut retourner
const total = people.reduce(function (acc, currItem) {
  // console.log(`total ${acc}`);
  // console.log(current item', currItem);
  console.log(`salaire : ${currItem.salary}`);

  acc += currItem.salary;

  //! on veut retourner l'accumulateur (le total) sinon il y aura des bugs
  // return acc;
  return acc;
}, 0);

console.log(total);

// TODO: challenge #9
