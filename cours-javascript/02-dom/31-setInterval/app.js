//* setInterval - exécute la fonction répétitivement à un interval de temps spécifique

//* - passe la référence à la fonction
//* - durée en ms (1000ms = 1 seconde)
//* - par défaut 0, on verra plus en détail dans la partie async/await
//* - retourne un identifiant unique
//* - clearInterval pour annuler

function showScore(name, score) {
  console.log(`bonjour ${name}, ton score est ${score}`);
}

// setInterval(showScore, 1000, 'john', 45);

const firstID = setInterval(showScore, 1000, 'john', 45);
const secondID = setInterval(showScore, 4000, 'susan', 48);

clearInterval(firstID);
