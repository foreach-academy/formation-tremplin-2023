import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='section'>
      <h1>404 Page introuvable</h1>
      <Link>Retour à l&apos;accueil</Link>
    </section>
  );
};

export default ErrorPage;
