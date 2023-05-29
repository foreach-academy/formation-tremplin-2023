//* Les Modèles Littéraux - ES6+
//* Avec les Backticks `` - ALT GR + 7
//* Interpolation ${} - insérer une expression (valeur)

const name = 'john';
const age = 25;
const sentence = "Hey ! C'est " + name + ' et il a ' + age + ' ans.';

console.log(sentence);

// `` plus puissants que ""
// plus facile pour gérer les variables
const value = `Hey ! C'est ${name} et il a ${age} ans. Et voici des maths : ${
  1 + 1
}`;

console.log(value);
