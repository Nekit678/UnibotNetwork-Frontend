import { Button, Form, Input } from "antd"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './LoginForm.scss'
import Title from "antd/es/typography/Title";

export const LoginForm = () => {
  return (
    <Form
      className="login-form"
      layout="vertical"
      size="small"
      requiredMark={false}

    >
      <Form.Item
        label={<Title style={{ color: "white" }} level={4}>Логин</Title>}
        name="login"
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input className="login-form__input"
          prefix={<UserOutlined />}
          placeholder="Введите логин"
          bordered={false} />
      </Form.Item>
      <Form.Item
        style={{ marginTop: "3rem" }}
        name="password"
        label={<Title style={{ color: "white" }} level={4}>Пароль</Title>}
        rules={[{ required: true, message: 'Обязательное поле!' }]}
      >
        <Input.Password
          className="login-form__input"
          prefix={<LockOutlined />}
          type="password"
          placeholder="Введите пароль"
          bordered={false}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form__button">
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}