//* spread operator ... - objet
//* ES2018 - ES8

const person = {
  name: 'john',
  job: 'développeur'
};

// copie
// const newPerson = { ...person };

// on peut ajouter des props ou les réécrire
const newPerson = { ...person, city: 'chicago', name: 'peter' };

console.log(person);
console.log(newPerson);
