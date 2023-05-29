//* Sélectionne l'élément ou le groupe d'éléments que l'on veut modifier
//* Décide l'effet que l'on veut appliquer à la sélection

//* plusieurs façons

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

//* assigner à une variable
const element = document.getElementById('element');
// faire quelque chose

document.querySelector(element); // faire quelque chose

//* objet global window
// c'est un objet géant dans lequel il y a la prop document où on sélectionne nos éléments

// console.log(window);

//* retourne un objet noeud ou une liste de noeuds qui est un une sorte d'array object

// sélectionne un noeud
const btn = document.getElementById('btn');
// on a donc accès a ses props
const name = btn.nodeName;
const css = btn.style;
console.log(btn);
console.log(name);
console.log(css);
