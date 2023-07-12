// react router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// pages
import {
  Home,
  About,
  SharedLayout,
  ErrorPage,
  Products,
  SingleProduct,
  SharedProductLayout,
  Login,
  Dashboard,
  ProtectedRoute
} from './pages';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <SharedLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'products',
          element: <SharedProductLayout />,
          children: [
            {
              index: true,
              element: <Products />
            },
            {
              path: ':productId',
              element: <SingleProduct />
            }
          ]
        },
        { path: '/login', element: <Login setUser={setUser} /> },
        {
          path: '/dashboard',
          element: (
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          )
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
