//* innerHTML
//* textContent

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

// retourne le contenu texte
console.log(div.textContent);

// retourne tout le html
console.log(list.innerHTML);

console.log(list.textContent);

const randomVar = 'random value';

const ul = document.createElement('ul');

// pas besoin de créer un text node, on insère juste le html
// on peut utiliser les `` pour ne pas avoir de bugs avec les "" et on peut insérer du contenu dynamique
ul.innerHTML = `
  <li class="item">${randomVar}</li>
  <li>list item</li>
  <li>list item</li>
`;
document.body.appendChild(ul);

//! retourne le html en tant que string
div.textContent = `
  <li class="item">${randomVar}</li>
  <li>list item</li>
  <li>list item</li>
`;

// la différence avec innerHTML
// div.innerHTML = `
//   <li class="item">${randomVar}</li>
//   <li>list item</li>
//   <li>list item</li>
// `;
