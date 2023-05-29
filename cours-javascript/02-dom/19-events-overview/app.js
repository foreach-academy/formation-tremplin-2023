//* events
// tous nos changements fait en JS sont instantannées mais pour que notre app soit plus interactive il faut qu'elle réponde à des events
// ex: clic, scroll, soumission de formulaire

//* sélectionner l'élément
//* addEventListener() puis préciser quel event et ce qu'on veut faire

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function () {
  // console.log("Hey, tu m'as cliqué dessus !");
  heading.classList.add('red');
});
