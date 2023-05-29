//* Propriétés et Méthodes pour les Arrays
let names = ['john', 'bobo', 'barry', 'olga', 'ben', 2, 3, 4];

//* length
console.log(names.length);
// affiche le dernier élement du tableau
console.log(names[names.length - 1]);
console.log(names.at(-1));

//* concat
const lastNames = ['poivrons', 'oignon', 'banane'];
const allNames = names.concat(lastNames);
// console.table(allNames);

//* reverse
// console.table(allNames.reverse());

//* unshift - ajoute un élément au début
allNames.unshift('susy');
allNames.unshift('anna');

//* shift - supprime le premier élément
allNames.shift();
allNames.shift();

//* push - ajoute un élément à la fin
allNames.push('susy');

//* pop - supprime le dernier élément
allNames.pop();
allNames.pop();
allNames.pop();
// retourne l'élement supprimé
const pepper = allNames.pop();

//* slice -
const tab1 = allNames.slice(0, 5);
const tab2 = allNames.slice(5, 8);
// const specificNames = tab1.concat(tab2);

//* splice - mute le tableau d'origine - splice(début, nb d'éléments)
const specificNames = allNames.splice(4, 1);
console.log(specificNames);
console.table(allNames);

//* join
console.log(allNames.join(' '));
