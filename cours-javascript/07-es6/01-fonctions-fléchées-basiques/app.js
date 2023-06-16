//* Fonctions fléchées

//* pas de nom, toujours une expression qu'on assigne à une variable
//* pas de mot-clef "function"
//* retour implicite

// déclaration basique
// function sayHi() {
//   console.log('Salut');
// }

// sayHi();

// expression de fonction
// const hello = function (name) {
//   console.log(`Salut ${name}`);
// };

// hello('Bob');

// une fonction qui retourne un résultat
// function double(value) {
//   return value * 2;
// }

// console.log(double(2));

// const double4 = double(4);
// console.log(double4);

const sayHi = () => console.log('Salut');
// sayHi();

const hello = (name) => console.log(`Salut ${name}`);
// hello('Bob');

// retour implicite lorsqu'on a qu'une ligne
const double = (value) => value * 2;
const num = double(4);
// console.log(num);

// qu'une ligne dans le corps de la fonction
const multiply = (num1, num2) => {
  const result = num1 * num2;
  // plus de code
  // ....

  return result;
};

// console.log(multiply(4, 6));

// retourne objet
const object = () => ({ name: 'john', age: 25 });
const person = object();
// console.log(person);

// en tant que fonction callback
const numbers = [1, 2, 3, 4, 5, 6];
const bigNumber = numbers.filter((num) => num > 2);
// console.log(bigNumber);

// event listener
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => console.log('Tu as cliqué sur moi'));
