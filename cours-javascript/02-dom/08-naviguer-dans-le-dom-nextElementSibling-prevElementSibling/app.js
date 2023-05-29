//* previousElementSibling
//* nextElementSibling

const first = document.querySelector('.first');
console.log(first);

first.nextElementSibling.style.color = 'red';

const last = document.querySelector('.last');
last.previousElementSibling.style.color = 'blue';
