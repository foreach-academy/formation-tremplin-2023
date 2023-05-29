//* référence à une fonction

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

// function changeColor() {
//   console.log('hello');
// }

//! rien ne se passe quand on clique car on a déjà invoqué/exécuté la fonction
// btn.addEventListener('click', changeColor());

function changeColor() {
  let hasClass = heading.classList.contains('red');

  if (hasClass) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
}

btn.addEventListener('click', changeColor);
