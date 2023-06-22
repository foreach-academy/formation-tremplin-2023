//* Le JS est un déroulement simple, un langage synchrone. On exécute le programme ligne par ligne
const boilWater = () => {
  console.log('bout...');

  for (let i = 0; i < 10000; i++) {
    console.log('pas prêt');
  }

  console.log('fini.');
};

console.log('je suis le premier');
boilWater();
console.log('je suis le deuxième');
console.log('je suis le troisième');
