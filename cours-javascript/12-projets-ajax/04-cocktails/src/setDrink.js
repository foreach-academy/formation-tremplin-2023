// récupère l'id du coktail cliqué et le stocke dans le local storage
const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    const element = e.target;

    if (element.parentElement.classList.contains('cocktail')) {
      const id = element.parentElement.dataset.id;
      localStorage.setItem('drink', id);
    }

    if (element.nodeName === 'A') {
      const id = element.children[0].dataset.id;
      localStorage.setItem('drink', id);
    }
  });
};

export default setDrink;
