//* Les Fonctions
//* return
//* par défaut, une fonction retourne undefined
//* 1 inch = 2.54cm

const wallHeight = 80;

// prend une valeur en pouce et la convertie en cm
function calculate(value) {
  const newValue = value * 2.54;
  console.log('La valeur en cm est : ' + newValue + ' cm');

  return newValue;

  //! le code ne s'éxécute pas après un return (il est ignoré)
  console.log('hello');
}

// la valeur de la variable est égale au retour de la fonction
const width = calculate(100);
const height = calculate(wallHeight);

// const test = calculate('hello');
// console.log(test);

const dimensions = [width, height];
console.table(dimensions);
