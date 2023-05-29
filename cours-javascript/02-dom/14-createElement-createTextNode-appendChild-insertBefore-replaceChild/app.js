//* createElement("element")
//* createTextNode("text content")
//* element.appendChild(childElement)

const result = document.querySelector('#result');

// crée un élément vide
const bodyDiv = document.createElement('div');

// crée un text node
const text = document.createTextNode('une simple div de body');

bodyDiv.appendChild(text);

// on ajoute notre élément dans body en tant que dernier enfant
// document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('titre dynamique');

heading.appendChild(headingText);
heading.classList.add('blue');
// result.appendChild(heading);

// console.log(result.children);

//* insertBefore("element", "location")
// insère avant la location
document.body.insertBefore(bodyDiv, result);

const first = document.querySelector('.red');
result.insertBefore(heading, first);

//* replaceChild("new", "old")
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('je suis un texte de small heading');

smallHeading.classList.add('red');
smallHeading.appendChild(smallText);

document.body.replaceChild(smallHeading, bodyDiv);
