//* Opérateurs Logiques
//* (|| - OR), (&&, AND)

const name = 'bob';
const age = 24;

// On a besoin que l'une ou l'autre valeur soit vraie
// if (name === 'bob' || age === 24) {
//   console.log('Salut cher utilisateur');
// } else {
//   console.log('mauvaise valeur');
// }

// il faut que les 2 valeurs soient vraies
if (name === 'bob' && age === 24) {
  console.log('Salut cher utilisateur');
} else {
  console.log('Mauvaises valeurs');
}
