import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import ruRU from 'antd/lib/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { ConfigProvider } from 'antd';
import { Shedule } from './layouts/Shedule/Shedule';
import { StudentData } from './layouts/StudentData/StudentData';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFound } from './layouts/NotFound/NotFound';
import { GroupData } from './layouts/GroupData/GroupData';
import { SubmitReport } from './layouts/SubmitReport/SubmitReport';
import { Login } from './layouts/Login/Login';

dayjs.locale('ru');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Shedule /> },
      { path: 'studentdata', element: <StudentData /> },
      { path: 'groupdata', element: <GroupData /> },
      { path: 'subreport', element: <SubmitReport /> },
    ],
  },
  { path: '*', element: <NotFound /> },
  { path: 'login', element: <Login /> }
])


root.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
