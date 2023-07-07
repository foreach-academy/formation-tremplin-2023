const frameworks = ['react', 'angular', 'vue', 'svelte'];

const OtherInputs = () => {
  return (
    <form className='form'>
      <h4>Autres inputs</h4>

      {/* shipping */}
      <div className='form-row' style={{ textAlign: 'left' }}>
        <input type='checkbox' name='shipping' id='shipping' />
        <label htmlFor='shipping'> Frais de port gratuits</label>
      </div>

      {/* framework */}
      <div className='form-row'>
        <label htmlFor='framework' className='form-label'>
          Framework
        </label>
        <select name='framework' id='framework' className='form-input'>
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
