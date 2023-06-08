//* Objet Date

const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre'
];

const days = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi'
];

// date d'aujourd'hui
const date = new Date();

//! new Date('mois/jour/année')
// const date = new Date('1/12/2004');

//! new Date(année, mois - 1, jour, heure, minute, seconde)
// const date = new Date(2023, 5, 8, 17, 0, 0); // 8 juin 2023 17h00

console.log(date);

// on utilise des méthodes pour récupérer les infos qui nous intéressent
const timeInMs = date.getTime();
console.log(timeInMs);

// mois
const month = date.getMonth();
// console.log(month);

// jour
const day = date.getDay();
// console.log(day);

// jour du mois
// console.log(date.getDate());

// année
const year = date.getFullYear();
// console.log(year);

const sentence = `${days[day]} ${date.getDate()} ${months[month]} ${year}`;
console.log(sentence);

//* Intl.DateTimeFormat()
const formatter = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'full'
});

document.body.innerHTML = `<h1>${formatter.format(date)}</h1>`;
