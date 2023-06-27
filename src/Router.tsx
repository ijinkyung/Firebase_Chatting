import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import Chatting from './pages/Chatting/Chatting';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      { index: true, element: <Main /> },
      { path: '/login', element: <Account /> },
      { path: '/signUp', element: <Account /> },
      { path: '/home', element: <Home /> },
      { path: '/chatting/:id', element: <Chatting /> },
    ],
  },
]);
