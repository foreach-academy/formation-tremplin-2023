import { useState, useEffect } from 'react';

//* par défaut s'exécute après chaque rendu
//* second argument
//* permet de faire les effets secondaires (side effects) -  tout travail qui se fait en-dehors du composant
//* ex: changer le titre du document, fetch des données, ajouter un eventListener,...

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Appel de useEffect');

    if (value > 0) {
      document.title = `Nouveaux messages (${value})`;
    }

    // si le 2ème arg (tableau de dépendances) est vide ([]) alors useEffect ne déclenche qu'au premier rendu
    // si on met une variable entre les [] alors il se déclenchera à chaque fois que la variable sera modifiée
  }, [value]);

  console.log('Rendu du composant');

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Clique moi
      </button>
    </>
  );
};

export default UseEffectBasics;
