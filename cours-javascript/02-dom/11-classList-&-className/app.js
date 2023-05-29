//* className
//* classList

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

// récupère le nom de la classe
// const classValue = first.getAttribute('class');
const firstClassValue = first.className;
// console.log(classValue);

// réafecte le nom d'une classe
second.className = 'colors';
second.className = 'text';

// une solution
second.className = 'colors text';

// meilleure alternative
// third.classList.add('colors');
// third.classList.add('text');

// ajoute les 2 classes d'affiler
third.classList.add('text', 'colors');

const thirdClassValue = third.classList;
// console.log(thirdClassValue);

// supprime une classe
third.classList.remove('text');

// vérifi si un élément possède une classe
const result = third.classList.contains('colors'); // true

if (result) {
  console.log('hello world');
} else {
  console.log("n'a pas la classe");
}
