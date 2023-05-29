const createEmails = () => {
  const tab = [];

  for (let i = 0; i < 50; i++) {
    if (i + 1 >= 10) {
      tab.push(`john.doe.${i + 1}@gmail.com`);
    } else {
      tab.push(`john.doe.0${i + 1}@gmail.com`);
    }
  }

  return tab;
};

console.log(createEmails());
