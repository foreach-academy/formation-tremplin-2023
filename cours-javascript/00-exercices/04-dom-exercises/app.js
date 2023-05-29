const p = document.getElementById('value');
const btn = document.querySelector('.btn');
let previousHexColor = null;

p.textContent = 'Hello world';

btn.addEventListener('click', function () {
  let hexColor = null;

  do {
    hexColor = `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, 0)}`;
  } while (hexColor === previousHexColor);

  document.body.style.backgroundColor = hexColor;
});

//
const parent = document.getElementById('parent');
const children = parent.getElementsByClassName('child');
const child = children[0];
const secondParagraph = child.children[1];

console.log(secondParagraph);

//
const toast = document.querySelector('.show-alert');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function () {
  toast.classList.toggle('show-alert');
});

//
const colorBtns = document.querySelectorAll('.btn-color');

colorBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains('btn-red')) {
      document.body.style.backgroundColor = 'red';
    }

    if (styles.contains('btn-green')) {
      document.body.style.backgroundColor = 'green';
    }

    if (styles.contains('btn-blue')) {
      document.body.style.backgroundColor = 'blue';
    }
  });
});
