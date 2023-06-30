import { useState } from 'react';
import { data } from './data.js';
import List from './List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>
          {people.length} anniversaire{people.length > 1 ? 's' : ''}{' '}
          aujourd&apos;hui
        </h3>

        <List people={people} />
        <button className='btn' onClick={() => setPeople([])}>
          Vider la liste
        </button>
      </section>
    </main>
  );
};

export default App;
