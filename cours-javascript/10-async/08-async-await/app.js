//* async/await
//* doit avoir async
//* await attends que la promesse soit tenue
//* try/catch - gérer les erreurs

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

const addColor = (time, element, color) => {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`Il n'y a pas d'élément : ${element}`));
    }
  });
};

const displayColor = async () => {
  try {
    await addColor(1000, heading1, 'red');
    await addColor(2000, heading2, 'green');
    await addColor(1000, heading3, 'blue');
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener('click', () => {
  displayColor();
});
