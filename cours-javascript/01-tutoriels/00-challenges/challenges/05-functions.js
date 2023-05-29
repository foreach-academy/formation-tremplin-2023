//* déclaration de fonction
// function calculateTotal(subTotal, taxt) {
//   // const total = subTotal + taxt;
//   // return total;

//   return subTotal + taxt;
// }

//* expression de fonction
// const calculateTotal = function (subTotal, taxt) {
//   return subTotal + taxt;
// };

//* fonction fléchée
const calculateTotal = (subTotal, taxt) => subTotal + taxt;

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(14, 7);
const order3 = calculateTotal(60, 30);

console.log(order1, order2, order3);
