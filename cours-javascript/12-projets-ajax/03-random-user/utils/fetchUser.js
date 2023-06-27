// https://randomuser.me/
const url = 'https://randomuser.me/api/';

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];

    // destructure
    const { email, phone } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const { age } = person.dob;
    const {
      street: { number, name }
    } = person.location;

    return {
      email,
      phone,
      image,
      password,
      age,
      name: `${first} ${last}`,
      street: `${number} ${name}`
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;
