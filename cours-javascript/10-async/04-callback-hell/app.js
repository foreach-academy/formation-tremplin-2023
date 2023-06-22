//* callbacks

const boilWater = () => {
  console.log('bout...');

  setTimeout(() => {
    console.log('ajouter les oignons');
    console.log('couper les carottes');

    setTimeout(() => {
      console.log('ajouter les carottes');

      setTimeout(() => {
        console.log('fini');
      }, 5000);
    }, 5000);
  }, 10000);
};
//! c'est le bordel avec nos fonctions callbaks imbriquées les unes dans les autres, c'est ce qu'on appelle le callback hell

console.log('couper les oignons');
boilWater();
