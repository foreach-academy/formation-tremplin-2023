const displayAges = (currentAge) => {
  let age = 0;

  while (currentAge >= 0) {
    let sentence = `Il y a ${currentAge} ans, `;

    if (currentAge === age) {
      sentence += "tu avais la moitié de l'âge que tu as aujourd'hui";
    } else {
      sentence += `tu avais ${age} ans`;
    }

    console.log(sentence);
    currentAge--;
    age++;
  }
};

displayAges(30);
