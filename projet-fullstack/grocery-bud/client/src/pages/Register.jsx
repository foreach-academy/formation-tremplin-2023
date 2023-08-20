import { Form, Link, redirect } from 'react-router-dom';
import FormRow from '../components/FormRow.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const resp = await axios.post('/api/v1/auth/register', data);
    localStorage.setItem('token', resp.data.token);
    toast.success('Inscription réussie');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Form method='POST' className='form'>
      <h4>Inscription</h4>
      <FormRow type='text' name='name' labelText='nom' />
      <FormRow type='email' name='email' />
      <FormRow type='password' name='password' labelText='mot de passe' />
      <button className='btn btn-block'>S&apos;inscrire</button>
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        Vous êtes déjà membre ? <Link to='/login'>Se connecter</Link>
      </p>
    </Form>
  );
};
export default Register;
