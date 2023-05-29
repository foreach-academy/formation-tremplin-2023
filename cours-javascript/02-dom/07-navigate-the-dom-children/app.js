//* childNodes - retourne tous les noeuds enfants incluant les espaces qui sont traités comme un noeud texte

//* children
//* firstChild
//* lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;
// console.log(allChildren);

// sélectionne les éléments enfants
const children = result.children;
console.log(children);
console.log(children[1]);

// On sélectionne les espaces comme avec childNodes
console.log(result.firstChild);
console.log(result.lastChild);

// parfois il faudra naviguer dans le DOM pour sélectionner notre élément donc il faut savoir quelle méthode utiliser
