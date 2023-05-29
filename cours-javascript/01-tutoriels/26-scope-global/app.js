//* Global Scope vs Local Scope
//* toute variable en-dehors du bloc de code {} est dite dans le Scope Globale
//* elle peut être accessible n'importe où dans le programme
//! pièges : collisions de noms, peut être modifiée par erreur

let name = 'bob';
name = 'peter';

function calculate() {
  // du code...
  name = 'orange';
  console.log(name);

  function inner() {
    name = 'intérieur';
    console.log(`C'est depuis la fonction inner : ${name}`);
  }

  inner();
}

// calculate();

if (true) {
  console.log(name);
  name = 'slip';
}

console.log(`mon nom est ${name} et je suis génial`);
