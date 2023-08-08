import { Link, useRouteError } from 'react-router-dom';
import main from '../assets/images/main.svg';

const Landing = () => {
  // const error = useRouteError();
  // console.log(error);

  return (
    <main>
      <div className='container page'>
        <div className='info flow'>
          <h1>
            Application de <span>liste de courses</span>
          </h1>
          <p className='info-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, minus
            molestias necessitatibus nam assumenda aliquam aliquid magnam et
            quia a totam non. Non ipsum modi ex temporibus odio expedita vel!
          </p>
          <Link to='/login' className='btn btn-hero'>
            Se connecter
          </Link>
        </div>
        <img src={main} alt='' className='img main-img' />
      </div>
    </main>
  );
};

export default Landing;
