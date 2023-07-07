import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // faire quelque chose
    console.log(name, email);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>Inputs controllés</h4>

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
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
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
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>

      <button type='submit' className='btn btn-block'>
        Envoyer
      </button>
    </form>
  );
};

export default ControlledInputs;
