//* Switch

const dice = 2;

//* Avec des if
if (dice === 1) {
  console.log('tu as fait un');
}

if (dice === 2) {
  console.log('tu as fait deux');
}

if (dice < 1 || dice > 6) {
  console.log("tu n'as pas jeté le dé");
}

//* else if
if (dice === 1) {
  console.log('tu as fait un');
} else if (dice === 2) {
  console.log('tu as fait deux');
} else if (dice === 3) {
  console.log('tu as fait trois');
} else if (dice === 4) {
  console.log('tu as fait quatre');
} else if (dice === 5) {
  console.log('tu as fait cinq');
} else if (dice === 6) {
  console.log('tu as fait six');
} else {
  console.log("tu n'as pas jeté le dé");
}

//! il ne faut pas oublier le break sinon le programme va exécuter tous les cas dans l'ordre à partir du cas vrai
switch (dice) {
  case 1:
    console.log('tu as fait un un');
    break;
  case 2:
    console.log('tu as fait un deux');
    break;
  case 3:
    console.log('tu as fait un trois');
    break;
  case 4:
    console.log('tu as fait un quatre');
    break;
  case 5:
    console.log('tu as fait un cinq');
    break;
  case 6:
    console.log('tu as fait un six');
    break;
  default:
    console.log("tu n'as pas jeté le dé");
    break;
}
