const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) return element;
  throw new Error(`Il n'y a pas d'élément correspondant à : ${selection}`);
};

export default getElement;
