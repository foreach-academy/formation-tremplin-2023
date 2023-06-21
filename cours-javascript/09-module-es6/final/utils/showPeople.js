//! on ne peut avoir qu'un seul export par défaut par fichier
const showPeople = (people) => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');

  return newPeople;
};

export default showPeople;

// autre façon
// export default (people) => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join('');

//   return newPeople;
// };
