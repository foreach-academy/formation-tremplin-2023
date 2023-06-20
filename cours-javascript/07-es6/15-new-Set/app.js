//* objet Set - stocke une collection de valeurs uniques de n'importe quel type

//* new Set()
//* add(value)
//* delete(value)
//* clear()
//* has(value)

//* itérateurs
//* entries(), keys(), forEach()

const unique = new Set();
// console.log(unique);

const random = 'au pif';

unique.add('premier');
unique.add('second');
unique.add(random);
unique.add('premier');
unique.add(4);

// console.log(unique);

// retourne un booléen
const result = unique.delete(4);
// console.log(unique);

const isValue = unique.has('quatre');
console.log(isValue);
