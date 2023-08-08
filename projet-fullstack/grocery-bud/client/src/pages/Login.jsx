import { Link, Form, redirect } from 'react-router-dom';
import FormRow from '../components/FormRow.jsx';
import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const datas = Object.fromEntries(formData);

  // const resp = await fetch('/api/v1/auth/login', {
  //   method: 'POST',
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // });
  // console.log(await resp.json());

  try {
    const { data } = await axios.post('/api/v1/auth/login', datas);
    localStorage.setItem('token', data.token);
    return redirect('/dashboard');
  } catch (error) {
    console.log(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <Form method='POST' className='form'>
      <h4>Connexion</h4>
      <FormRow type='email' name='email' defaultValue='john@gmail.com' />
      <FormRow
        type='password'
        name='password'
        labelText='mot de passe'
        defaultValue='secret123'
      />
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
