import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { toast } from 'react-toastify';

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    toast.success('Déconnexion...');
    navigate('/');
  };

  return (
    <nav>
      <NavLink to='/'>
        <img src={logo} alt='Grocery Bud' />
      </NavLink>
      {user && (
        <div className='nav-user-info'>
          <span className='username'>{user.name}</span>
          <button type='button' className='btn' onClick={logout}>
            déconnexion
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
