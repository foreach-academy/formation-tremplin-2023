import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    if (!user.name || !user.email) return;
    setUser(user);
    navigate('/dashboard');
  };

  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5>Connexion</h5>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            nom
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        <button type='submit' className='btn btn-block'>
          se connecter
        </button>
      </form>
    </section>
  );
};

export default Login;
