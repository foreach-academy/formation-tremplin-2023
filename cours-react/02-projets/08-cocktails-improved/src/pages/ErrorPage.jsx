import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! it&apos;s a dead end</h1>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to='/' className='btn-primary'>
          back home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
