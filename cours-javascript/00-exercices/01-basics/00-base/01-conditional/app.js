const temperature = 25;

if (temperature > 30) {
  console.log('Il fait chaud !');
} else if (temperature > 20) {
  console.log('Il fait bon !');
} else {
  console.log('Il fait froid !');
}

const hour = 10;
const day = 'Lundi';

const workDay = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

if (workDay.includes(day) && hour >= 9 && hour <= 17) {
  console.log("C'est l'heure de travailler !");
} else {
  console.log('Profitez de votre temps libre !');
}
