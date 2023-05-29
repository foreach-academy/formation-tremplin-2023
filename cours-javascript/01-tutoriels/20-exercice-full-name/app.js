//* tableaux & boucle for

const names = ['anna', 'susy', 'bob', 'peter'];
const lastName = 'shakeandbake';
let newArray = [];

for (let i = 0; i < names.length; i++) {
  newArray.push(`${names[i]} ${lastName}`);
}

console.log(newArray);
