//* Exemples concrets

// Exercice 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exerice 2
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Exerice 3
for (let i = 0; i < 5; i++) {
  console.log('Ouverture de la porte');
  console.log('Fermeture de la porte\n');
}

//* Exemples pratiques

// Exerice 1
let sum = 0;

for (let i = 2; i <= 10; i += 2) {
  sum += i;
}

console.log('La somme des nombres pairs de 1 à 10 est : ' + sum);

// Exerice 2
const size = 5;

for (let i = 0; i < size; i++) {
  let row = '';

  for (let j = 0; j < size; j++) {
    row += '* ';
  }

  console.log(row);
}

// Exerice 3
const number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${number} = ${i * number}`);
}
