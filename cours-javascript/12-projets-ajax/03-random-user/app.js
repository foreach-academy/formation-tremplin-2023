import get from './utils/getElement.js';
import fetchUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const showUser = async () => {
  // récupére l'utilisateur depuis l'api
  const person = await fetchUser();
  console.log(person);
  // affiche l'utilisateur
};

window.addEventListener('DOMContentLoaded', showUser);
