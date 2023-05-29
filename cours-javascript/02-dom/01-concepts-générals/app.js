//* Sélectionne l'élément ou le groupe d'éléments que l'on veut modifier
//* Décide l'effet que l'on veut appliquer à la sélection

//* plusieurs façons

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';

// console.log(document.getElementsByTagName('button')[0]);
document.getElementById('btn').style.color = 'red';

//* assigne à une variable
const title = document.getElementsByTagName('h1')[0];

// fais quelque chose
title.style.color = 'fuchsia';

// sélectionne un noeud
const btn = document.getElementById('btn');
console.log(btn);

// donne accès a ses propriétés (props)
// balise (tag)
const name = btn.nodeName;
console.log(name);

// props css
const css = btn.style;
console.log(css);
