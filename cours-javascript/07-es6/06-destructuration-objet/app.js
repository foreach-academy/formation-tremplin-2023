//* Déstructurer des objets

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane'
  }
};

// ancienne façon
// const firstName = bob.first;
// const city = bob.city;
// const sister = bob.siblings.sister;

// console.log(firstName, city, sister);

// avec destruction
//* les props doivent correspondrent
// on peut utiliser un alias pour changer le nom d'une variable lors de la déstructuration
const {
  first: firstName,
  last,
  // destructure l'objet siblings
  siblings: { sister: favSibling },
  zip
} = bob;

console.log(firstName, last, favSibling, zip);

// raccourci snippet
// dob
