import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
  // récupère les cocktails
  const data = await fetchDrinks(url);
  // affiche les cocktails
  const section = await displayDrinks(data);

  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
