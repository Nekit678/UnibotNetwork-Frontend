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
    ],
  },
  { path: '*', element: <NotFound /> },
])


root.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
