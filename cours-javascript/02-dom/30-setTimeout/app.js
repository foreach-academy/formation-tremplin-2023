//* setTimeout - exécute la fonction après un temps spécifique

//* - passe la référence à la fonction
//* - durée en ms (1000ms = 1 seconde)
//* - par défaut 0, on verra plus en détail dans la partie async/await
//* - retourne un identifiant unique
//* - clearTimeout pour annuler
//* - sur l'objet window

function sayHello() {
  console.log('hello john');
}

// après 1 seconde on a le log
// setTimeout(sayHello, 1000);

//! il faut passer la référence à la fonction et non l'invoquer - ça ne marche pas

//* passer des arguments
function showScore(name, score) {
  console.log(`bonjour ${name}, ton score est ${score}`);
}

// on passe les arguments après la durée
// setTimeout(showScore, 1000, 'john', 34);

// on invoque quand même la fonction
const firstID = setTimeout(showScore, 1000, 'john', 34);
const secondID = setTimeout(showScore, 1000, 'peter', 88);
console.log(firstID);
console.log(secondID);

// on annule directement le premier timeout donc il ne s'exécutera pas
clearTimeout(firstID);

// on peut aussi l'utiliser via l'objet window
// window.setTimeout(() => {

// }, timeout);
