const displayAges = (currentAge) => {
  let age = 0;

  while (currentAge >= 0) {
    console.log(`Il y a ${currentAge} ans, tu avais ${age} ans`);
    currentAge--;
    age++;
  }
};

displayAges(30);
