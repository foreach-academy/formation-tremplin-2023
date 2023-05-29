//* déclaration/définition d'une fonction
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

//* expression d'une fonction
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 6);

// const values = [firstValue, secondValue, thirdValue];
const values = [firstValue, secondValue, add(5, 6)];
console.log(values);

//* fonction fléchée
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 10));
