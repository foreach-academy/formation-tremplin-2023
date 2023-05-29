//* Les conditionelles
//* <, >, <=, >=, ==, ===, !, !=, !==

// const value = 2 < 1;
// console.log(value);
// const value = true;

// if (value) {
//   console.log('hello world');
// }

//* else

const value2 = 2 > 1;

// if (value2) {
//   console.log('Hello world');
// } else {
//   console.log('hello people');
// }

//* else if
const num1 = 6;
const num2 = '6';
//* == - compare la valeur
//* === - compare la valeur et le type
const result = num1 === num2;

// if (num1 > num2) {
//   console.log('le premier nombre est plus grand que le second');
// } else if (result) {
//   console.log('les deux nombres sont égaux');
// } else {
//   console.log('le premier nombre est plus petit');
// }

//* ! operator (opérateur not)
const value3 = false;

// if (!value3) {
//   console.log('la valeur est fausse');
// }

//* != vérifie seulement la valeur
//* !== vérifie la valeur et le type
const value4 = num1 != num2;
const value5 = num1 !== num2;
console.log(value4);
console.log(value5);
