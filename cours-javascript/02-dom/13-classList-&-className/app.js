//* className
//* classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// récupère le nom de la classe
// const classValue = first.className;
// console.log(classValue);

// on ne fait que réaffecter une classe
// second.className = 'colors';
// second.className = 'text';

// la solution pourrait être
second.className = 'colors text';

// mais c'est mieux d'utiliser classList
// third.classList.add('colors');
// third.classList.add('text');

// pour ajouter 2 classes d'affiler
third.classList.add('text', 'colors');

const classValue = third.classList;
console.log(classValue);

// supprime une classe
third.classList.remove('text');

// vérifie si un élément possède une classe
let result = third.classList.contains('colors'); // true

if (result) {
  console.log('hello world');
} else {
  console.log("n'a pas la classe");
}
