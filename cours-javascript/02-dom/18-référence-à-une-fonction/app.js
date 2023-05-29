//* référence à une fonction

const btn = document.querySelector('.btn');
const heading = document.querySelector('h1');

function changeColor() {
  // const hasClass = heading.classList.contains('red');

  // if (hasClass) {
  //   heading.classList.remove('red');
  // } else {
  //   heading.classList.add('red');
  // }

  // raccourci
  heading.classList.toggle('red');
}

//! rien ne se passe quand on clique car on a déjà invoqué/exécuté la fonction
// btn.addEventListener('click', changeColor());

// il faut passer la référence de la fonction
btn.addEventListener('click', changeColor);
