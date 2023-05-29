//* getAttribute()
//* setAttribute()

const first = document.querySelector('.first');

// récupère la valeur de l'attribut "class"
const classValue = first.getAttribute('class');
// console.log(classValue);

// récupère la valeur de l'attribut "id"
const idValue = first.getAttribute('id');
// console.log(idValue);

const link = document.getElementById('link');

// récupère la valeur de l'attribut "href"
const showLink = link.getAttribute('href');
// console.log(showLink);

const last = link.parentElement.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = "J'ai aussi une classe first";
// console.log(last);

const links = document.querySelectorAll('.first');
console.log(links);
