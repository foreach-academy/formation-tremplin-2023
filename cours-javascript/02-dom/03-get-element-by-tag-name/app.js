//* node-list = array-like object => collection
//* index, accès à la propriété length mais pas les méthodes sur un tableau

const headings = document.getElementsByTagName('h2');
// console.log(headings);
// console.log(headings.length);

headings[0].style.color = 'red';

const items = document.getElementsByTagName('li');
console.log(items);

//! cette méthode ne fonctionne pas car items n'est pas considéré comme un array
// items.forEach(function (element) {
//   console.log(element);
// });

// on peut transfromer notre node list en array via le spread operator. On reviendra dessus quand on fera l'ES6
const betterItems = [...items];
console.log(betterItems);

betterItems.forEach(function (element) {
  console.log(element);
});

items[2].style.color = 'orange';
