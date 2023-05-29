//* permet une sélection des éléments dynamiques (par exemple créés avec JS)

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

//* event bubbling - le 1er élément cliqué puis remonte -- par defaut
function showBubbling(e) {
  console.log('current traget', e.currentTarget);
  // console.log('target', e.target);

  // if (e.target.classList.contains('link')) {
  //   console.log('tu as cliqué sur le lien');
  // }
}

// tous les event se délenchent lorsque l'on clique sur un lien
// list.addEventListener('click', showBubbling);
// container.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling);
// window.addEventListener('click', showBubbling);

//* event propagation - l'ordre dans lequel les events sont déclenchés

function stopPropagation(e) {
  console.log('tu as cliqué sur la liste');
  e.stopPropagation();
}

// list.addEventListener('click', stopPropagation);
// container.addEventListener('click', showBubbling);
// document.addEventListener('click', showBubbling);
// window.addEventListener('click', showBubbling);

//* event capturing - se déclenche depuis la racine jusqu'à atteindre la cible
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });
list.addEventListener('click', stopPropagation, { capture: true });
