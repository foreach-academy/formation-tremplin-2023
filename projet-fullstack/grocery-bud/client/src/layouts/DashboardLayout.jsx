import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
