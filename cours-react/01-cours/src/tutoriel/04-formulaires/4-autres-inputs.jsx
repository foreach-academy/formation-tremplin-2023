import { useState } from 'react';

const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    console.log(e.target.value);
    setFramework(e.target.value);
  };

  return (
    <form className='form'>
      <h4>Autres inputs</h4>

      {/* shipping */}
      <div className='form-row' style={{ textAlign: 'left' }}>
        <input
          type='checkbox'
          name='shipping'
          id='shipping'
          checked={shipping}
          onChange={handleShipping}
        />
        <label htmlFor='shipping'> Frais de port gratuits</label>
      </div>

      {/* framework */}
      <div className='form-row'>
        <label htmlFor='framework' className='form-label'>
          Framework
        </label>
        <select
          name='framework'
          id='framework'
          className='form-input'
          value={framework}
          onChange={handleFramework}
        >
          {frameworks.map((framework, index) => (
            <option key={index} value={framework}>
              {framework}
            </option>
          ))}
        </select>
      </div>

      <button type='submit' className='btn btn-block'>
        Envoyer
      </button>
    </form>
  );
};

export default OtherInputs;
