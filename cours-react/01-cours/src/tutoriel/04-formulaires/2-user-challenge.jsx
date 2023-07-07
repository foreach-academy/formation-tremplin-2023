import { useState } from 'react';
import { data } from '../../data.js';

const UserChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newPerson = {
      id: Date.now(),
      name: name
    };
    setPeople([...people, newPerson]);
    setName('');
  };

  const deletePerson = (id) => {
    const filteredPeople = people.filter((person) => person.id !== id);
    setPeople(filteredPeople);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Ajouter un utilisateur</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Nom
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className='btn btn-block'>Ajouter</button>
      </form>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className='btn' onClick={() => deletePerson(id)}>
              Supprimer
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UserChallenge;
