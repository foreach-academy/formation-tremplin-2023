//* keypress - quand on tape sur une touche
//* keydown - quand on une touche est appuyé
//* keyup - quand une touche est relâché

const nameInput = document.getElementById('name');
console.log(nameInput);

// nameInput.addEventListener('keypress', function () {
//   console.log("t'as appuyé sur une touche");
// });

// nameInput.addEventListener('keydown', function () {
//   console.log("t'as appuyé sur une touche");
// });

nameInput.addEventListener('keyup', function () {
  console.log(nameInput.value);
});
