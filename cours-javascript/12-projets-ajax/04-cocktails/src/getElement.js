const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`pas d'élément sélectionné : ${selection}`);
};

export default getElement;
