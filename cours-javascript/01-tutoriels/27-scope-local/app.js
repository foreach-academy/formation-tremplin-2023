//* Scope Local
//* ne peut pas être accessible en-dehors du bloc de code

let name = 'bob';

function calculate() {
  const name = 'john';

  function inner() {
    const age = 25;
  }

  inner();
}

calculate();

if (true) {
  const name = 'peter';
}

{
  const special = 'special';
}

// console.log(special);
