//* Web Storage API - fournit par le navigateur
//* session storage, local storage
//* setItem, getItem, removeItem, clear

// session storage et local storage fonctionnent de la même façon
// session storage conserve les données dans la session courante du navigateur
// local storage conserve les données entre la fermeture et l'ouverture du navigateur

// regarder dans le dev tools
// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

// si on utilise la même clef, on va réécrire la valeur
localStorage.setItem('name', 'john');
// localStorage.setItem('name', 'peter');
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'developpeur');
localStorage.setItem('address', '25 rue de la vague');

// accède à une clef
const name = localStorage.getItem('name');
console.log(name);

// supprime une clef
localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);

// vide le local storage
localStorage.clear();
