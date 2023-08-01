import { Outlet } from 'react-router-dom';
import './App.scss';
import { Shedule } from './layouts/Shedule/Shedule';
import { StudentData } from './layouts/StudentData/StudentData';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app'>
        {/* <Shedule /> */}
        {/* <StudentData /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
