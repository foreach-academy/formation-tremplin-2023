import { Link, Form, redirect } from 'react-router-dom';
import FormRow from '../components/FormRow.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // fetch avec méthode POST
  // const resp = await fetch('/api/v1/auth/login', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // });
  // console.log(await resp.json());

  try {
    const resp = await axios.post('/api/v1/auth/login', data);
    localStorage.setItem('token', resp.data.token);
    toast.success('Connexion réussie');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <Form method='POST' className='form'>
      <h4>Connexion</h4>
      <FormRow type='email' name='email' />
      <FormRow type='password' name='password' labelText='mot de passe' />
      <button type='submit' className='btn btn-block'>
        Se connecter
      </button>
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        Vous n&apos;êtes pas membre ?{' '}
        <Link to='/register'>S&apos;inscrire</Link>
      </p>
    </Form>
  );
};
export default Login;
