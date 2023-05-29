//* Fonctions, return, if, tableaux, boucle for

// essence
const gas = [20, 40, 100, 30];
// nourriture
const food = [10, 40, 50];

function calculateTotal(tab) {
  let total = 0;

  for (let i = 0; i < tab.length; i++) {
    total += tab[i];
  }

  if (total > 100) {
    console.log('Wow! Tu dépenses trop.');
  }

  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal
});
