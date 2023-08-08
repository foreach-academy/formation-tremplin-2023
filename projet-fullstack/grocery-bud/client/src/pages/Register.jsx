import { Link } from 'react-router-dom';
import FormRow from '../components/FormRow.jsx';

const Register = () => {
  return (
    <form className='form'>
      <h4>Inscription</h4>
      <FormRow type='text' name='name' labelText='nom' defaultValue='john' />
      <FormRow type='email' name='email' defaultValue='john@gmail.com' />
      <FormRow
        type='password'
        name='password'
        labelText='mot de passe'
        defaultValue='secret123'
      />
      <button className='btn btn-block'>S&apos;inscrire</button>
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        Vous êtes déjà membre ? <Link to='/login'>Se connecter</Link>
      </p>
    </form>
  );
};
export default Register;
