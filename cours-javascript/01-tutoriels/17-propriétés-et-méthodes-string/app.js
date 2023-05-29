//* Propriétés et méthodes des chaînes de caractères

let text = 'John DOE';

//! la propriété length prend en compte les espaces
const result = text.length;

console.log(text.length);

// minuscule
console.log(text.toLowerCase());
// majuscule
console.log(text.toUpperCase());
// caractère à l'index x
console.log(text.charAt(1));
// dernière caractère à l'index x
console.log(text.charAt(text.length - 1));
console.log(text.at(-1));
//! JS est sensible à la casse
// donne l'index d'un caractère sinon -1
console.log(text.indexOf('h'));
console.log(text.indexOf('p'));
console.log(text.indexOf('o'));
// enlève les espaces au début et à la fin
console.log(text.trim());
// retourne vrai si le texte commence par la chaîne sinon faux
console.log(text.startsWith('J'));
// retourne vrai si la chaîne est incluse dnas le texte sinon faux
console.log(text.includes('hn'));
// coupe un morceau du texte
// slice(index de départ, index de fin non-inclus)
console.log(text.slice(0, 2));
console.log(text.slice(2));
// le dernier caractère
console.log(text.slice(-1));
// transforme un texte en tableau
console.log(text.split(''));

// on peut enchaîner les méthodes
console.log(text.toLowerCase().includes('hn'));
