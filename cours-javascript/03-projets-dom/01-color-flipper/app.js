const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
let previousIndex = null;

btn.addEventListener('click', function () {
  let newIndex = null;

  do {
    newIndex = getRandomNumber();
  } while (newIndex === previousIndex);

  previousIndex = newIndex;

  document.body.style.backgroundColor = colors[newIndex];
  color.textContent = colors[newIndex];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
