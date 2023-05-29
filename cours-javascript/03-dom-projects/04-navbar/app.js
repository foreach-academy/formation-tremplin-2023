// classList - montre/récupère toutes les classes
// contains - vérifie dans classList une classe spécifique
// add - ajoute une classe
// remove - supprime classe
// toggle - toggle une classe

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});
