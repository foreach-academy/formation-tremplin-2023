// const fs = require('fs');
// fs.readFileSync()
//* pareil
const { readFileSync, writeFileSync } = require('fs');

console.log('début');

//* lire un fichier
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

//* écrire dans un fichier
// writeFileSync(
//   './content/result-sync.txt',
//   `Voici le résulat : ${first} ${second}`
// );

//* ajouter du texte dans le fichier
writeFileSync(
  './content/result-sync.txt',
  `Voici le résulat : ${first} ${second}`,
  {
    flag: 'a' // append
  }
);

console.log('tâche terminée');
console.log('début de la prochaine tâche');
