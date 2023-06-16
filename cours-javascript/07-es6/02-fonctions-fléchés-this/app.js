//* Fonctions fléchées

//* this

const btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//   console.log(this);
//   this.style.background = 'orange';
// });

//! on a une erreur car le scope environnant est le scope globale (on fait donc référence à l'objet window)
// btn.addEventListener('click', () => {
//   console.log(this);
//   this.style.background = 'orange';
// });

btn.addEventListener('click', function () {
  console.log(this);

  //! erreur
  // setTimeout(function () {
  //   console.log(this);
  //   this.style.color = 'black';
  // }, 2000);

  setTimeout(() => {
    console.log(this);
    this.style.background = 'orange';
  }, 2000);
});
