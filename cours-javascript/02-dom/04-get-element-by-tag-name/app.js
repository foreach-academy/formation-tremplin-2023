//* node-list = array-like object => collection
//* index, accès à la propriété length mais pas les méthodes sur un tableau

const headings = document.getElementsByTagName('h2');
// console.log(headings);

headings[0].style.color = 'red';

// console.log(headings.length);

const items = document.getElementsByTagName('li');
// console.log(items);

//! cette méthode ne fonctionne pas car ce n'est pas considéré comme un array
// items.forEach(function (item) {
//   console.log(item);
// });

// on peut transfromer notre node list en array via le spread operator. On reviendra dessus quand on fera l'ES6
const betterItems = [...items];

betterItems.forEach(function (item) {
  // console.log(item);
});

items[2].style.color = 'orange';

// on peut voir que le premier est un HTMLCollection et le second un array, c'est pour ça qu'on peut utiliser notre méthode
console.log(items);
console.log(betterItems);
