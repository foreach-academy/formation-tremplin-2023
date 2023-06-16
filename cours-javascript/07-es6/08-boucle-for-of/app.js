//* for of - boucle à travers les valeurs d'un objet itérable
//* String, Array, NodeList, Map, Set, etc... - PAS DES OBJETS (mais ils sont itérables)
//* contrairement à forEach - on peut utliser break, continue

//! les objets ne sont pas itérables bien qu'il existe des méthodes pour parcourir leurs props

const fruits = ['pomme', 'orange', 'banane', 'pêche'];
const longName = 'John Smith Pepper III';
let shortName = '';

for (const fruit of fruits) {
  if (fruit === 'banane') {
    // sort de la boucle
    // break;

    // passe à l'itération suivante
    continue;
  }

  // console.log(fruit);
}

for (const letter of longName) {
  if (letter === ' ') {
    continue;
  } else {
    shortName += letter;
  }
}

console.log(shortName);
