//* innerWidth - propriété de window qui retourne la largeur intérieur de la fenêtre en pixels

//* innerHeight - propriété de window qui retourne la hauteur intérieur de la fenêtre en pixels

//* la méthode elem.getBoundingClientRect() retourne un object DOMRect fournissant des informations à propos de la taille d'un élément et sa position relation à la fenêtre

console.log('height ' + window.innerHeight);
console.log('width ' + window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', function () {
  const values = box.getBoundingClientRect();
  // la prop bottom = top + height
  console.log(values);
});
