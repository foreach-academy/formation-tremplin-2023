const path = require('path');

// séparateur utilisé par l'OS
// console.log(path.sep);

// chemin normalisé
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// nom du dossier/fichier cible du chemin
const base = path.basename(filePath);
console.log(base);

// chemin absolu
const absolutePath = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'test.txt'
);
console.log(absolutePath);
