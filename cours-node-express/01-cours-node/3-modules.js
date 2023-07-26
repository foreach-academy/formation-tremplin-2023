//* Modules - Code Encapsulé (il faut partager seulement le minimum)
//* CommonJS - utilisé par défaut par Node, tous les fichiers sont des modules par défaut

const { john, susan } = require('./4-names.js');
const sayHi = require('./5-utils.js');

sayHi(john);
sayHi(susan);
