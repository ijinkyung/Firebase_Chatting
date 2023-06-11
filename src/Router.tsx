import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      { index: true, element: <Main /> },
      { path: '/login', element: <Account /> },
      { path: '/signUp', element: <Account /> },
    ],
  },
]);
