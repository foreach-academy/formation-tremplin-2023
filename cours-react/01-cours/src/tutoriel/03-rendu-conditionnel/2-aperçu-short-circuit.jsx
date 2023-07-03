import { useState } from 'react';

// on ne peut pas utiliser de conditions ou de boucles
// ce n'est pas permis par react car il n'y pas de retour
// c'est pourquoi on va utiliser les circuit-courts

//* L'opérateur || (OU logique) retourne le premier operande si il est "truthy", ou le second opérande si le premier est "falsy"

//* L'opérateur && (ET logique) retourne le premier operande si il est "falsy", ou le second opérande si le premier est "truthy"

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('John');

  return (
    <div>
      <h4>Falsy OU : {text || 'Hello world'}</h4>
      <h4>Falsy ET : {text && 'Hello world'}</h4>
      <h4>Truthy OU : {name || 'Hello world'}</h4>
      <h4>Truthy ET : {name && 'Hello world'}</h4>
    </div>
  );
};

export default ShortCircuitOverview;
