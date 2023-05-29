//* JSON.stringify(), JSON.parse()

const friends = ['john', 'peter', 'bob'];

//! par défaut, on se dirait de faire comme ça mais notre variable ne sera pas stockée sous forme d'array
// localStorage.setItem('friends', friends);

// const values = localStorage.getItem('friends');

// on veut affiche "john" mais on obtient "j" car notre tableau à été stocké sous forme de string
// console.log(values[0]);

// là, on stocke notre tableau dans le local storage
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
// on peut maintenant accéder aux valeurs de notre array
// console.log(values[0]);
// console.log(values[1]);
// console.log(values[2]);

//* démo du principe qu'on utilise pour récupérer des données et en ajoutée dans le local storage
let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);

// fruits.push('pomme');
// fruits.push('orange');

localStorage.setItem('fruits', JSON.stringify(fruits));
