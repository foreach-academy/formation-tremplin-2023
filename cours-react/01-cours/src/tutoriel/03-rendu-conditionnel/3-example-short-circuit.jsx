import { useState } from 'react';

const ShortCircuitExample = () => {
  //falsy
  const [text, setText] = useState('');
  //truthy
  const [name, setName] = useState('John');
  const [user, setUser] = useState({ name: 'John' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'Valeur par défaut'}</h2>
      {/* si on met l'opérateur "!" la div apparaît */}
      {/* {!text && (
        <div>
          <h2>Quel que soit le retour</h2>
          {name}
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}

      <h2 style={{ margin: '1rem 0' }}>Opérateur ternaire</h2>

      <button className='btn' onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Éditer' : 'Ajouter'}
      </button>

      {user ? (
        <div>
          <h2>Salut {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>Veuillez vous connecter</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>Quel que soit le retour</h2>
      {name}
    </div>
  );
};

export default ShortCircuitExample;
