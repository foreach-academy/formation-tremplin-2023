// supprime la classe active pour chaque item
export default (items) =>
  items.forEach((item) => item.classList.remove('active'));
