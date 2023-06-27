import { RecoilRoot } from 'recoil';
import ConatainerWrap from './components/ConatainerWrap/ConatainerWrap';
import Nav from './components/Nav/Nav';
import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <RecoilRoot>
        <ConatainerWrap>
          <Outlet />
        </ConatainerWrap>
      </RecoilRoot>
    </>
  );
}

export default App;
