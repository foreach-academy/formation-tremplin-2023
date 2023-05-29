//* objet Math

// arrondi en-dessous
let number = 4.56789;
let result = Math.floor(number);

// arrondi au-dessus
number = 4.1222222;
result = Math.ceil(number);

// racine carré
number = 144;
result = Math.sqrt(number);

// puissance
number = 5;
result = Math.pow(number, 2);
// alternative
result = 5 ** 2;

// PI
result = Math.PI;

// retourne le plus petit nombre dans une liste
result = Math.min(4, 5, 6, 7, 8, 9);

// retourne le plus grand nombre dans une liste
result = Math.max(4, 5, 6, 1000, 8, 9, 100, 200);

// nombre décimal aléatoire entre 0 (inclus) et 1 (exclus)
result = Math.random();

// nombre décimal aléatoire entre 0 (inclus) et 10 (exclus)
result = Math.random() * 10;

// nombre entier aléatoire entre 1 et 10
result = Math.ceil(Math.random() * 10);
// autre option
result = Math.floor(Math.random() * 10 + 1);

console.log(result);
