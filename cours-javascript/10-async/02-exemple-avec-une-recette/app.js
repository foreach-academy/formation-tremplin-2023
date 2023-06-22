//* Faire une soupe
//* couper les oignons
//* couper les carottes
//* faire bouillir l'eau 10 min
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

const boilWater = (time) => {
  console.log('bout...');

  for (let i = 0; i < time; i++) {
    console.log('pas prêt');
  }

  console.log('fini.');
};

// console.log('couper les oignons');
// console.log('couper les carottes');
// boilWater(10000);
// console.log('ajouter les carottes');
// boilWater(5000);
// console.log('ajouter les oignons');
// boilWater(5000);

// on peut couper les légumes pendant que l'eau bout
//* Faire une soupe
//* faire bouillir l'eau 10 min
//* couper les oignons
//* couper les carottes
//* ajouter les carottes et laisser bouillir 5 min
//* ajouter les oignons et laisser bouillir 5 min

boilWater(10000);
console.log(`couper les oignons`);
console.log(`couper les carottes`);
boilWater(5000);
boilWater(5000);
