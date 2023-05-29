//* click - se déclenche lors du clic
//* mousedown - le bouton est pressé
//* mouseup - le bouton est relâché
//* mouseenter - la souris se déplace sur un élément
//* mouseleave - la souris sort sur un élément

const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  console.log('tu as cliqué');
});

// cet event se déclenche en premier
btn.addEventListener('mousedown', function () {
  console.log('down');
});

btn.addEventListener('mouseup', function () {
  console.log('up');
});

heading.addEventListener('mouseenter', function () {
  heading.classList.add('blue');
});

heading.addEventListener('mouseleave', function () {
  heading.classList.remove('blue');
});
