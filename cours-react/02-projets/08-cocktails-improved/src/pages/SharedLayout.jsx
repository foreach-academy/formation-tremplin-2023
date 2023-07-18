import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Loading from '../components/Loading.jsx';

const SharedLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet />}
    </>
  );
};
export default SharedLayout;
