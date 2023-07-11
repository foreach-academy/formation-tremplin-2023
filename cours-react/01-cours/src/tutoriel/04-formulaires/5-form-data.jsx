const UnctrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //* il est important que les inputs aient un attr "name" pour utiliser l'API Form Data
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    // faire quelque chose
    console.log(newUser);
    // reset la valeur des inputs
    e.currentTarget.reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>Inputs Non-controlés (API FormData)</h4>

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
          required
        />
      </div>

      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input type='email' name='email' id='email' className='form-input' />
      </div>

      {/* password */}
      <div className='form-row'>
        <label htmlFor='password' className='form-label'>
          Mot de passe
        </label>
        <input
          type='password'
          name='password'
          id='password'
          className='form-input'
        />
      </div>

      <button type='submit' className='btn btn-block'>
        Envoyer
      </button>
    </form>
  );
};

export default UnctrolledInputs;
