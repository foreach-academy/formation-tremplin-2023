import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Compteur</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Le compteur est à {counter}
      </button>
    </>
  );
};

export default Counter;
