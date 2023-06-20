// console.log(Math.max(4, 5, 6, 7, 88));

//! on ne peut pas passer un array dans cette function
const numbers = [4, 5, 6, 7, 88];
// console.log(Math.max(numbers));

console.log(Math.max(...numbers)); // 4, 5 , 6, 7, 88

const john = ['john', 'doe'];

const sayHello = (name, lastName) => {
  console.log(`Salut ${name} ${lastName}`);
};

sayHello(john[0], john[1]);
sayHello(...john); // sayHello('john', 'doe');
