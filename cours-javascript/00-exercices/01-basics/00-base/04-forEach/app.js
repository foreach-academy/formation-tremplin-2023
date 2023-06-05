//* Algo
// Exercice 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((num) => {
  console.log(num);
});

// Exercice 2
const students = ['John', 'Peter', 'Susan', 'Anna'];

students.forEach((student) => {
  console.log(student.toUpperCase());
});

// Exercice 3
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

console.log(sum);

// Exercice 4
students.forEach((student) => {
  console.log(`Utilisateur : ${student}`);
});

// Exercice 5
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 28 },
  { name: 'Paul', age: 35 },
  { name: 'Anna', age: 25 },
  { name: 'Tom', age: 32 }
];

people.forEach((person) => {
  console.log(`${person.name} a ${person.age} ans.`);
});

//* DOM
// Exercice 1
const divsHighlight = document.querySelectorAll('.highlight');

divsHighlight.forEach((div) => {
  div.style.backgroundColor = 'yellow';
});

// Exercice 2
const lis = document.querySelectorAll('li');

lis.forEach((li) => {
  li.style.border = '1px solid red';
});

// Exercice 3
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((p) => {
  p.addEventListener('click', function (e) {
    e.currentTarget.style.color = p.className;
  });
});

// Exercice 4
const divs = document.querySelectorAll('.double');

divs.forEach(function (div) {
  div.addEventListener('click', function (e) {
    const double = Number(e.currentTarget.textContent) * 2;
    div.textContent = double;
  });
});
