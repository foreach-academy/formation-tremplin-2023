import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log('Salut depuis le premier useEffect');
  }, [value]);

  useEffect(() => {
    console.log('Salut depuis le second useEffect');
  }, [secondValue]);

  console.log('Rendu du composant');

  return (
    <>
      <div style={{ padding: '3rem' }}>
        <h2>Première valeur : {value}</h2>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Clique moi
        </button>
      </div>

      <div style={{ padding: '3rem' }}>
        <h2>Seconde valeur : {secondValue}</h2>
        <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
          Clique moi
        </button>
      </div>
    </>
  );
};

export default MultipleEffects;
