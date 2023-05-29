//* querySelector("any css"); - sélectionne un élément
//* querySelectorAll("any css"); - sélectionne plusieurs éléments et peut utiliser les méthodes pour un tableau

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

// si on utilise querySelector, on n'aura que la première instance
const items = document.querySelector('.special');
// console.log(items);

// on sélectione le dernier enfant
const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

const list = document.querySelectorAll('.special');
// console.log(list);

list.forEach(function (item) {
  console.log(item);
  item.style.color = 'yellow';
});
