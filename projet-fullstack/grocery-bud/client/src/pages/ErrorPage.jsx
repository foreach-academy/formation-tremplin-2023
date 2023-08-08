import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const ErrorPage = () => {
  return (
    <main className='error-page full-page'>
      <div className='flow'>
        <img src={img} alt='Page Introuvable' />
        <h1>Oups !</h1>
        <p>Nous ne parvenons pas à trouver la page que vous cherchez</p>
        <Link to='/'>Retourner à l&apos;accueil</Link>
      </div>
    </main>
  );
};
export default ErrorPage;
