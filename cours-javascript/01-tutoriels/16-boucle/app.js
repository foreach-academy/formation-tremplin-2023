//* Les Boucles
//* Répètent un bloc de code tant que la condition est vraie

//* boucle tant que (while loop)
let amount = 10;

while (amount > 0) {
  // console.log("J'ai " + amount + ' euros et je vais au magasin');
  //! ne pas oublier la décrémentation sinon on aura un loop infini car la condition sera toujours vraie
  amount--;
}

//* boucle faire tant que (do while loop)
//* exécute le bloc de code d'abord, puis vérifie la condition
let money = 12;

do {
  console.log('Tu as ' + money + ' euros');
  //! il faut un échappatoire
  money++;
} while (money < 10);

//* boucle pour (for loop)
for (let i = 0; i < 10; i++) {
  console.log('le nombre est : ' + i);
}

let number = 10;
for (number; number >= 0; number--) {
  console.log('le nombre est : ' + number);
}
