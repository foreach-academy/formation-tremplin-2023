import { useState } from 'react';

//* useState est une fonction

// Règles des hooks :
// - tous les hooks commencent par use...
// - le nom d'un composant commence par une majuscule sinon => erreur
// - un hook doit être dans un composant ou un custom hook
// - ne peut pas être appelé dans une condition

const UseStateBasics = () => {
  const [text, setText] = useState('Titre au pif');

  const handleClick = () => {
    if (text === 'Titre au pif') {
      setText('Hello world');
    } else {
      setText('Titre au pif');
    }
  };

  return (
    <>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Changer le titre
      </button>
    </>
  );
};

export default UseStateBasics;
