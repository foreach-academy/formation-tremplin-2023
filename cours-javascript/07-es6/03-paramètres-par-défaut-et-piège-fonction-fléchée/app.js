//* paramètres par défaut, pièges de la fonction fléchée

// on peut appeler une fonction avant sa déclaration grâce au hoisting
sayHi('John');
sayHi();

function sayHi(name = 'Bob') {
  console.log(`Salut ${name}`);
}

//! on ne peut pas appeler une fonction avant sa déclaration dans le cas d'une fonction fléchée
// sayHello('peter');

const sayHello = (name = 'Susan') => console.log(`Bonjour ${name}`);

sayHello('Peter');
sayHello();
