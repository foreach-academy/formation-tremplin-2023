import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
