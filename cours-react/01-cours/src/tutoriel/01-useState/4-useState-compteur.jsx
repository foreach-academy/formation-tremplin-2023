import { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <section>
      <h1>Compteur</h1>
      <h2>{value}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button className='btn' onClick={() => setValue(value - 1)}>
          Décrémenter
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Incrémenter
        </button>
      </div>
    </section>
  );
};

export default UseStateCounter;
