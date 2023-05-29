const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
let previousColor = null;

btn.addEventListener('click', function () {
  let newColor = null;

  do {
    newColor = getRandomColor();
  } while (newColor === previousColor);

  previousColor = newColor;

  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
});

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
