//* Sélectionne l'élément ou groupe d'éléments que l'on veut modifier
//* Décide l'effet que l'on veut appliquer à la sélection

// retourne null si l'élément n'est pas trouvé

const h1 = document.getElementById('title');
h1.style.color = 'red';

// document.getElementById('btn').style.backgroundColor = 'blue';
// document.getElementById('btn').style.color = 'white';

// on préfèra récupérer notre noeud dans une variable pour éviter de recopier (surtout si on doit effectuer plusieurs changement)
const btn = document.getElementById('btn');

btn.style.backgroundColor = 'blue';
btn.style.color = 'white';
