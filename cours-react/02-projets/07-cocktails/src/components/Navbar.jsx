import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink to='/'>
          <img src={Logo} alt='logo' className='logo' />
        </NavLink>
      </div>
      <ul className='nav-links'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
