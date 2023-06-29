import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  // récupère les infos du cocktail
  const data = await fetchDrinks(`${url}${id}`);
  // affiche les infos du cocktail
  displayDrink(data);
};

window.addEventListener('DOMContentLoaded', presentDrink);
