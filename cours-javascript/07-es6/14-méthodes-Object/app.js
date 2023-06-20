//* trois méthodes pour convertir des objets en tableaux
//* Object.keys() - converti les noms des proriétés en un tableau
//* Object.values() - converti les valeurs des proriétés en un tableau
//* Object.entries() - converti les deux

const person = {
  name: 'john',
  age: 25,
  status: 'étudiant'
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const result = Object.entries(person);
console.log(result);

// méthode map
const newResult = result.map((item) => {
  const [first, second] = item;

  return first;
});

console.log(newResult);
