const createMails = () => {
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

const displayEvenMails = () => {
  const emails = createMails();

  for (let i = 0; i < 50; i++) {
    if ((i + 1) % 2 === 0) {
      console.log(emails[i]);
    }
  }
};

displayEvenMails();
