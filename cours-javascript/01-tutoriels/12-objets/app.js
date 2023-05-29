//* Les objets
// reproduisent un objet de la vraie vie
//* Objets - paire clef/valeur, méthodes

const person = {
  name: 'john',
  lastName: 'doe',
  age: 42,
  education: false,
  married: false,
  siblings: ['anna', 'susy', 'peter'],
  // greeting: function () {
  //   console.log("salut ! Je m'appelle John.");
  // },
  greeting() {
    console.log("Salut ! Je m'appelle John.");
  }
};
//! si on oublie la virgule entre chaque prop on aura une erreur

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

// assigne une valeur de l'objet à une variable
const age = person.age;
console.log(age);

// réassigne une valeur
person.name = 'Bob';
console.log(person.name);

// ajoute une paire clef/valeur
person.job = 'développeur';

console.log(person);
// console.table(person);
