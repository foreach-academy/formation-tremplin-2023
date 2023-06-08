//* forEach
//* ne retourne pas un nouvel array

const people = [
  { name: 'bob', age: 20, job: 'developpeur' },
  { name: 'peter', age: 25, job: 'designer' },
  { name: 'susy', age: 30, job: 'la boss' }
];

function showPerson(person) {
  // console.log(person);
  console.log(person.job.toUpperCase());
}

//! on ne veut pas invoquer/exécuter la fonction. Ce n'est pas le but d'une fonction callback
// people.forEach(showPerson);

// on peut passer directement une fonction anonyme
people.forEach(function (item) {
  console.log(item.job.toUpperCase());
});
