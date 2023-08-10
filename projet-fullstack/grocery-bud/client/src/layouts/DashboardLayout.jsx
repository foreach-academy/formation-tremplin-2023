import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  const token = localStorage.getItem('token');

  try {
    const {
      data: { user }
    } = await axios('/api/v1/users/current-user', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const { data } = await axios('/api/v1/items', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return { user, data };
  } catch (error) {
    console.log(error?.response?.data?.msg);
    return redirect('/');
  }
};

const DashboardLayout = () => {
  const { user, data } = useLoaderData();
  const items = data.items;

  return (
    <>
      <Navbar user={user} />
      <Outlet context={{ items }} />
    </>
  );
};

export default DashboardLayout;
