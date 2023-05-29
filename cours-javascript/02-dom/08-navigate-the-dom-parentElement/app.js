//* parentElement

const heading = document.querySelector('h2');
//! attention à ne pas trop enchaîner car le parent de <html> est null
// console.log(heading.parentElement.parentElement.parentElement.parentElement);

const parent = heading.parentElement;
parent.style.color = 'red';
