import './App.scss';
import { Shedule } from './layouts/Shedule/Shedule';
import { StudentData } from './layouts/StudentData/StudentData';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app'>
        {/* <Shedule /> */}
        <StudentData />
      </div>
    </div>
  );
}

export default App;
