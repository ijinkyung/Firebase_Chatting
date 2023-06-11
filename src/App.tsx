import ConatainerWrap from './components/ConatainerWrap/ConatainerWrap';
import Nav from './components/Nav/Nav';
import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <ConatainerWrap>
        <Outlet />
      </ConatainerWrap>
    </>
  );
}

export default App;
