import { useState } from 'react';

const MultipleInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // faire quelque chose
    if (!person.name || !person.email || !person.age) return;
    const newPerson = { ...person, id: Date.now() };
    setPeople([...people, newPerson]);
    setPerson({
      name: '',
      email: '',
      age: ''
    });
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple inputs</h4>

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
            value={person.name}
            onChange={handleChange}
          />
        </div>

        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='form-input'
            value={person.email}
            onChange={handleChange}
          />
        </div>

        {/* age */}
        <div className='form-row'>
          <label htmlFor='age' className='form-label'>
            Âge
          </label>
          <input
            type='number'
            name='age'
            id='age'
            className='form-input'
            value={person.age}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Ajouter une personne
        </button>
      </form>
      {people.map((person) => {
        const { id, name, email, age } = person;

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{age}</p>
          </div>
        );
      })}
    </>
  );
};

export default MultipleInputs;
