//* parentElement

const heading = document.querySelector('h2');
// console.log(heading);

console.log(heading.parentElement.parentElement.parentElement.parentElement);

const parent = heading.parentElement;
parent.style.color = 'red';
