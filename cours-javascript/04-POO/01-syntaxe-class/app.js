//* Programmation Orientée Objet (POO)

//* On utilise les classes pour représenter des entités comme dans la vraie vie. C'est un modèle de données

//* Les valeurs peuvent être des strings, numbers, booleans, arrrays et functions, dans ce cas on l'appelera une méthode

//* Une convention commune est de mettre la première lettre de notre classe en majuscule
class Account {
  // Prototype

  bank = "Caisse d'épargne";

  // Un constructeur sert à donner des attributs par défaut à notre objet
  // La fonction construct() est excutée à l'instanciation de notre classe
  constructor(name, initialBalance) {
    // this fait référence à notre objet
    this.name = name;
    this.initialBalance = initialBalance;
  }

  deposit(amount) {
    this.initialBalance += amount;
    console.log(
      `Bonjour ${this.name}, votre solde est de ${this.initialBalance}`
    );
  }
}

// instancie la classe
const john = new Account('john', 0);
// console.log(john);
// console.log(john.name);
// john.deposit(500);
console.log(john);

const bob = new Account('bob', 700);
console.log(bob);
bob.deposit(1000);
console.log(bob);
console.log(bob.bank);
