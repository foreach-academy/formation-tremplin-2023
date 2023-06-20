//* Rest Operator ... - opérateur reste
//* rassemble/collecte les items

//* tableaux
const fruits = ['pomme', 'orange', 'citron'];
// const [first, ...rest] = fruits;

const [, , ...tacos] = fruits;
console.log(tacos);

//* objets
const person = {
  name: 'john',
  lastName: 'doe',
  job: 'développeur'
};

const { job, ...rest } = person;
//! on a une erreur car il doit être en dernier pour rassembler le reste des éléments
// const { ...rest, job } = person;

console.log(job, rest);
