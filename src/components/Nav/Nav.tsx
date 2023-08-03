import { Menu } from 'antd';
import {
  CalendarOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  SolutionOutlined
} from '@ant-design/icons';
import "./Nav.scss"
import { useNavigate } from 'react-router-dom';

export const Nav: React.FC<{ show: boolean }> = ({ show }) => {
  const navigate = useNavigate()

  return (
    // ! NEED REWRITE WITH USE "ITEMS"
    <nav className='nav'>
      <Menu onClick={(data => navigate(data.key))} mode="vertical" theme="dark" className='nav__menu' style={{
        borderRadius: "1.5rem",
        display: show ? "block" : "none"
      }}>
        <Menu.Item key="/" icon={<CalendarOutlined />}>
          Расписание
        </Menu.Item>
        <Menu.Item key="/groupdata" icon={<UsergroupAddOutlined />}>
          Данные группы
        </Menu.Item>
        <Menu.Item key="/studentdata" icon={<UserOutlined />}>
          Данные ученика
        </Menu.Item>
        <Menu.Item key="/subreport" icon={<SolutionOutlined />}>
          Сдача отчетов
        </Menu.Item>
      </Menu>
    </nav >
  )
}