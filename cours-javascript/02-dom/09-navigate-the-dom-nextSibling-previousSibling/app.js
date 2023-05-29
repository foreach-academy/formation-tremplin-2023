//* previousSibling
//* nextSibling
//* retourne les espaces

const first = document.querySelector('.first');
//! on sélectione l'espace
// const second = first.nextSibling;
// console.log(second);
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

const last = document.querySelector('#last');
const third = (last.previousSibling.previousSibling.style.color = 'green');
console.log(third);

// on sélectionne null si on cherche un frère inexistant
console.log(last.nextSibling.nextSibling);
