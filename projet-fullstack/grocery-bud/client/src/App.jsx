import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// layout
import DashboardLayout from './layouts/DashboardLayout.jsx';
// pages
import { Dashboard, ErrorPage, Landing, Login, Register } from './pages';

// loaders
import { loader as dashboardLayoutLoader } from './layouts/DashboardLayout.jsx';

// actions
import { action as registerAction } from './pages/Register.jsx';
import { action as loginAction } from './pages/Login.jsx';
import { action as addItemAction } from './components/ItemsForm.jsx';
import { action as deleteItemAction } from './pages/DeleteItem.jsx';
import { action as editItemAction } from './pages/EditItem.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    loader: dashboardLayoutLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        action: addItemAction
      }
    ]
  },
  {
    path: '/items/delete/:id',
    action: deleteItemAction
  },
  {
    path: '/items/edit/:id',
    action: editItemAction
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
