const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);

function sayHello() {
  console.log('salut toi');
}

// heading.addEventListener('click', sayHello);

//? et si on voulait ajouter notre titre dynamiquement ?
btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `Je suis dans le container`;
  container.appendChild(element);
});

//! on obtient une erreur car on essaie d'attacher un eventListener à un élément qui n'existe pas (encore) (cf: 10)
// si je log mon heading l.3-4, on voit qu'il vaut null

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('heading')) {
    console.log('Salut toi');
  }
});
