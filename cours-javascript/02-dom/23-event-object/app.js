//* argument de l'objet event e, evt ou event
//* info à propos de l'event déclenché
//* event.type
//* event.currentTarget
//* mot-clef this
//* preventDefault() - empêche le comportement par défaut

// quand on clique sur le lien, ça scrolle tout en haut de la page

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

heading.addEventListener('click', function (event) {
  //! si j'écris mal ma variable cela causera un bug
  // headings.classList.add('blue');

  // on va utiliser l'objet event pour qu'on puisse toujours sélectionner mon élément
  console.log(event.currentTarget);

  // on peut aussi sélectionner notre élément avec this
  console.log(this);
});

btn.addEventListener('click', function (event) {
  // console.log(event.currentTarget);
  event.currentTarget.classList.add('blue');

  // permet de savoir l'event
  console.log(event.type);
});

//* on veut empêcher le scroll vers le haut lors du clic sur le lien
const link = document.querySelector('#link');

function someFunc(e) {
  // on utilisera ça avec les formulaires pour éviter de recharger la page
  e.preventDefault();
}

link.addEventListener('click', someFunc);
