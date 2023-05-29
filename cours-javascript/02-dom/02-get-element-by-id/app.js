//* Sélectionne l'élément que l'on veut modifier
//* Décide l'effet que l'on veut appliquer à la sélection

// retourne null si l'élément n'est pas trouvé

const h1 = document.getElementById('title');
console.log(h1);
h1.style.color = 'red';

// document.getElementById('btn').style.backgroundColor = 'blue';
// document.getElementById('btn').style.color = 'white';

const btn = document.getElementById('btn');
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';
