//* Les fonctions - se déclare, s'invoque/s'appelle

// console.log('hello Bob');
// console.log('hello John');
// console.log('hello Susy');

// Les fonctions évitent la redondance de code
function hello() {
  // la logique
  console.log('hello Bob');
  console.log('hello John');
  console.log('hello Susy');
}

//! Le nom d'une fonction est sensible à la casse en JS
// hello();
// hello();
// hello();

//* paramètres/arguments
//* ce sont des espaces réservés (placeholders), des variables locales

function greet(name) {
  console.log('hello ' + name);
}

// greet();
// greet('John');
// greet('Bob');
// greet('Susy');
//! Attention à la logique car on peut passser n'importe quel type de données
// greet(4);

// On peut aussi passer des variables en argument
const bob = 'Bob';
const john = 'John';
const susy = 'Susy';

// greet(bob);
// greet(john);
// greet(susy);

// On peut créer plusieurs paramètres
function greet2(name, second) {
  console.log(second);
  console.log('hello ' + name);
}

greet2(susy, bob);
