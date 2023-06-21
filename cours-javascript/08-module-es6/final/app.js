// import nommé (named import)
import { people, random } from './utils/data.js';
import { getElement } from './utils/getElement.js';
// avec export default on peut choisir le nom lors de l'import
import showPeople from './utils/showPeople.js';

console.log(random);

const container = getElement('#container');
const btn = getElement('.btn');

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
