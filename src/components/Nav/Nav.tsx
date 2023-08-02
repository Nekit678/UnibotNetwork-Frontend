import { Menu, Typography } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import "./Nav.scss"

const { Title } = Typography;

export const Nav: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <nav className='nav'>
      <Menu mode="vertical" theme="dark" className='nav__menu' style={{
        borderRadius: "1.5rem",
        display: show ? "block" : "none"
      }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Главная
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          Профиль
        </Menu.Item>
        <Menu.Item key="messages" icon={<MailOutlined />}>
          Сообщения
        </Menu.Item>
        <Menu.Item key="apps" icon={<AppstoreOutlined />}>
          Приложения
        </Menu.Item>
      </Menu>
    </nav >
  )
}