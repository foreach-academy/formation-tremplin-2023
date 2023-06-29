import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const input = get('[name="drink"]');

// écoute le formulaire et affiche les cocktails
form.addEventListener('submit', (e) => e.preventDefault());
form.addEventListener('keyup', () => {
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseUrl}${value}`);
});
