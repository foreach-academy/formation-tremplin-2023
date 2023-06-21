export const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  } else {
    throw Error(`Il n'y a pas d'élément avec le sélecteur : ${selection}`);
  }
};
