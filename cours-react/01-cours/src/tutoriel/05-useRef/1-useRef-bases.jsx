import { useEffect, useRef } from 'react';

// stocke une valeur comme useState
// Ne déclenche PAS de rendu
// cible des éléments dans le DOM

// l'utilité la plus populaire de useRef est de cibler des éléments du DOM
const UseRefBasics = () => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputRef.current);
    const name = inputRef.current.value;
    console.log(name);
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        {/* nom */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Nom
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-input'
            ref={inputRef}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Envoyer
        </button>
      </form>
    </>
  );
};

export default UseRefBasics;
