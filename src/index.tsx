import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.scss"
import ruRU from 'antd/lib/locale/ru_RU';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { ConfigProvider } from 'antd';

dayjs.locale('ru');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
