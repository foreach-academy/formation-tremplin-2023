const ControlledInputs = () => {
  return (
    <form className='form'>
      <h4>Inputs controllés</h4>

      {/* nom */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Nom
        </label>
        <input type='text' name='name' id='name' className='form-input' />
      </div>

      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='text' name='email' id='email' className='form-input' />
      </div>

      <button type='submit' className='btn btn-block'>
        Envoyer
      </button>
    </form>
  );
};

export default ControlledInputs;
