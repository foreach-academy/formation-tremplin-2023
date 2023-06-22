//* Fetch est un méthode intégrée
//* basée sur les promesses
//* XHR n'est pas mauvais, on peut faire tous nos futurs exemples et projets avec.
//* Fetch est juste une approche alternative qui est plus simple et a une syntaxe plus propre. Le résultat final est le même.

const url = './api/people.json';

// const response = fetch(url);
// console.log(response);

const btn = document.querySelector('.btn');

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join('');
  const element = document.createElement('div');
  element.innerHTML = displayData;
  document.body.append(element);
};

// btn.addEventListener('click', () => {
//   fetch(url)
//     .then((resp) => {
//       //* objet Réponse
//       // console.log(resp);

//       //* converti la réponse en JSON
//       //* retourne une promesse
//       return resp.json();
//     })
//     .then((data) => displayItems(data))
//     .catch((err) => console.log(err));
// });

//* async/await
btn.addEventListener('click', async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});
