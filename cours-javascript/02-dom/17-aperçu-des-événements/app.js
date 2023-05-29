//* events
// tous nos changements fait en JS sont instantannées mais pour que notre app soit plus interactive il faut qu'elle réponde à des events
// ex: clic, scroll, soumission de formulaire

// sélectionne les éléments
const btn = document.querySelector('.btn');
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');

// addEventListener("event", la function qu'on veut exécuter)
btn.addEventListener('click', function () {
  // console.log("Hey, tu m'as cliqué dessus !");

  // heading.style.backgroundColor = 'red';
  // heading.style.color = 'white';
  // heading.style.textTransform = 'uppercase';
  // heading.style.fontSize = '2rem';

  heading.classList.add('red');
});

paragraph.addEventListener('click', function () {
  paragraph.classList.add('blue');
});
