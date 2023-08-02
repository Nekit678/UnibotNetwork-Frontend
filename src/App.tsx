import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app'>
        <Header />

        <Outlet />
      </div>
    </div>
  );
}

export default App;
