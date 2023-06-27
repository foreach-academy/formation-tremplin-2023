import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const showDrinks = async (url) => {
  // récupère les cocktails
  const cocktails = await fetchDrinks(url);
  // affiche les cocktails
  const section = displayDrinks(cocktails);

  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
