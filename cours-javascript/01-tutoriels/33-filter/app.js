//* filter
//* retourne un nouvel array
//* peut manipuler la taille d'un array
//* retours basés sur la condition

const people = [
  { name: 'bob', age: 20, job: 'developpeur' },
  { name: 'peter', age: 25, job: 'designer' },
  { name: 'susy', age: 30, job: 'la boss' },
  { name: 'anna', age: 35, job: 'la boss' }
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

const developers = people.filter(function (person) {
  // return person.job === 'developpeur';
  return person.job === 'développeur sénior';
});

console.log(people);
console.log(youngPeople);
// console.log(developers);
