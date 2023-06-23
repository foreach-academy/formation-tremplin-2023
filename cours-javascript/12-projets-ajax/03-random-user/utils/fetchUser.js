// https://randomuser.me/
const url = 'https://randomuser.me/api/';

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export default fetchUser;
