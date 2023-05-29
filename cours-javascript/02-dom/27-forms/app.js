//* submit event listener
//* prevent default
//* comment avoir la valeur

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('formulaire soumis');
  console.log(name.value);
  console.log(password.value);
});
