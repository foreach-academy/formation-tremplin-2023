import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// layout
import DashboardLayout from './layouts/DashboardLayout.jsx';
// pages
import { Dashboard, ErrorPage, Landing, Login, Register } from './pages';

// actions
import { action as loginAction } from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
