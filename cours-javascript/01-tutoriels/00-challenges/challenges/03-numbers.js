const score1 = 29;
const score2 = 98;
const score3 = 60;

const totalScore = score1 + score2 + score3;
const avgScore = totalScore / 3;
// console.log(totalScore, avgScore);

const plates = 20;
const people = 7;

let remainingPlates = plates % people;
// remainingPlates = remainingPlates + 1;
// remainingPlates += 1;
remainingPlates++;

// const message = 'Il y a ' + remainingPlates + ' plats restants';
const message = `Il y a ${remainingPlates} plats restants`;
console.log(message);
