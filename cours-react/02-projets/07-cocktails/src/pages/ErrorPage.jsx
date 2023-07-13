import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! it&apos;s a dead end</h1>
        <Link to='/' className='btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
