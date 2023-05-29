const displayYears = (yearOfBirth) => {
  const currentYear = new Date().getFullYear();

  while (yearOfBirth <= currentYear) {
    console.log(yearOfBirth);
    yearOfBirth++;
  }
};

displayYears(1993);
