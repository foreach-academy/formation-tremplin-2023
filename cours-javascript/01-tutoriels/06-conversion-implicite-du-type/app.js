//* Conversion implicite du type
const name = 'John';
const lastName = 'DOE';
const fullName = name + ' ' + lastName;
// console.log(fullName);

const num1 = 4;
const num2 = 10;
const result = num1 + num2;
// console.log(result);

//? Que se passe-t-il si on fait une opération avec des strings ?
const value = name - lastName;
//! on obtient NaN - Not a Number (pas un nombre)
// console.log(value);

const num3 = '10';
const num4 = '23';
// const result2 = num3 + num4;
const result2 = num3 - num4;
// console.log(result2);

const randomNumber = 13;
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  // il faut convertir la valeur récupérée en nombre
  value = parseInt(value);
  console.log("Valeur de l'input");
  console.log(value);
  console.log('Somme de 2 valeurs');
  console.log(randomNumber + value);
});
