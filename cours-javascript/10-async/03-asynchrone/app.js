//* Faire une soupe
//* faire bouillir l'eau 10 min
//* couper les carottes
//* ajouter les carottes et laisser bouillir 5 min
//* couper les oignons
//* ajouter les oignons et laisser bouillir 5 min

//* NAVIGATEUR ! récupérer des données, connaître la géolocalisation, setTimeout, setTInterval etc...-> asynchrones

const boilWater = (time) => {
  console.log('chauffe...');

  setTimeout(() => {
    console.log('fini.');
  }, time);
};

boilWater(10000);
console.log('couper les carottes');
console.log('ajouter les carottes');
boilWater(5000);
console.log('couper les oignons');
console.log('ajouter les oignons');
boilWater(5000);
