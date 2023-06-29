import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const section = get('.section-center');
const title = get('.title');

const displayDrinks = async ({ drinks }) => {
  // cache les chargement
  hideLoading();

  if (!drinks) {
    title.textContent = 'Sorry, no drinks matched your search';
    section.innerHTML = null;
    return;
  }

  // affiche les cocktails
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
      <article class="cocktail" data-id=${id}>
        <img src=${image} alt=${name} />
        <h3>${name}</h3>
      </article>
    </a>`;
    })
    .join('');

  section.innerHTML = newDrinks;
  title.textContent = '';
  return section;
};

export default displayDrinks;
