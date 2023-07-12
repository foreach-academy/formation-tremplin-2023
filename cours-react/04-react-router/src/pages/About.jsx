import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <h2>Page à propos</h2>
      <Link to='/'>Retour à l&apos;accueil</Link>
    </section>
  );
};

export default About;
