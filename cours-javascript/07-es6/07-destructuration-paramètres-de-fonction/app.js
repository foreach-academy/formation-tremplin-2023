//* Déstructurer des paramètres de fonction

const bob = {
  first: 'Bob',
  last: 'Sanders',
  city: 'Chicago',
  siblings: {
    sister: 'Jane'
  }
};

// on peut faire encore plus simple/rapide en destructurant dans les paramètres
const printPerson = ({ first, last, city }) => console.log(first, last, city);

printPerson(bob);
