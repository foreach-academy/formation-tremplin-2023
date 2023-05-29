const displayYearsAndAges = (yearOfBirth) => {
  const currentYear = new Date().getFullYear();
  let age = 0;

  while (yearOfBirth <= currentYear) {
    console.log(`${yearOfBirth} : ${age} ans`);
    age++;
    yearOfBirth++;
  }
};

displayYearsAndAges(1993);
