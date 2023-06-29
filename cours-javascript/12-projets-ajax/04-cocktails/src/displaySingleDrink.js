import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const drinkName = get('.drink-name');
const drinkDescription = get('.drink-description');
const ingredients = get('.drink-ingredients');
const img = get('.drink-img');

const displayDrink = (data) => {
  // cache le chargement
  hideLoading();
  // affiche les infos d'un cocktail
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;

  const list = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key])
    .map((key) => drink[key]);

  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  drinkDescription.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join('');
};

export default displayDrink;
