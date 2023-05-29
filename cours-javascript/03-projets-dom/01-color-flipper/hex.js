// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
let previousHexColor = null;

btn.addEventListener('click', function () {
  // let hexColor = '#';

  // for (let i = 0; i < 6; i++) {
  //   hexColor = hexColor + getRandomHex();
  //   console.log(hexColor);
  // }

  let hexColor = null;

  do {
    hexColor = `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, 0)}`;
  } while (previousHexColor === hexColor);

  previousHexColor = hexColor;

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomHex() {
  return hex[Math.floor(Math.random() * hex.length)];
}
