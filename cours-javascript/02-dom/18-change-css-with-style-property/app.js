//* CSS

const random = document.querySelector('.random');

// liste des styles css qu'on peut changer
console.log(random.style);

// pour reproduire le style que l'on a en CSS il faut ajouter une par une les props :(
// random.style.backgroundColor = 'blue';
// random.style.color = 'white';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

// il est plus rapide de préparer le style dans le css et d'ajouter une classe avec le JS
random.classList.add('title');
