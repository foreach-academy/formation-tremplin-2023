// function fullName(firstName, lastName) {
//   return `${firstName} ${lastName}`.toUpperCase();
// }

// console.log(fullName('john', 'doe'));
// console.log(fullName('doe', 'john'));

const fullName = ({ firstName, lastName }) =>
  `${firstName} ${lastName}`.toUpperCase();

console.log(fullName({ firstName: 'john', lastName: 'doe' }));
console.log(fullName({ lastName: 'doe', firstName: 'john' }));
