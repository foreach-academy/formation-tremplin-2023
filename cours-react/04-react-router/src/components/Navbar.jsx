import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        // style={({ isActive }) => ({ color: isActive ? 'red' : 'grey' })}
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Accueil
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        À propos
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Produits
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Connexion
      </NavLink>
    </nav>
  );
};

export default Navbar;
