import { Button, Col, Row, Space } from 'antd'
import './Login.scss'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import Title from 'antd/es/typography/Title'


export const Login: React.FC = () => {
  return (
    <div className='login-page-wrapper'>
      <div className='login-page'>
        <div className='login-page__login'>

          <Space className='login-page__form-part' direction='vertical' align='center' size={40}>
            <Title level={2} style={{ color: "white" }}>Вход в аккаунт</Title>
            <div className='login-page__form'>
              <LoginForm />
            </div>
          </Space>


          <Row className='login-page__welcome-part'>
            <Col>
              <img src='./logo.png' />
            </Col>
            <Col>
              <Space direction='vertical' align='center' className='login-page__learn-more-block'>
                <Title className='login-page__welcome-title' level={3} style={{ color: "#247cd3" }}>Исследуй.</Title>
                <Title className='login-page__welcome-title' level={3} style={{ color: "#247cd3" }}>Твори.</Title>
                <Title className='login-page__welcome-title' level={3} style={{ color: "#247cd3" }}>Программируй.</Title>
                <Button href='https://unibot-kids.ru/' target='_blank' className='login-page__learn-more-btn' type='primary'>Узнать больше</Button>
              </Space>

            </Col>
          </Row>


        </div>
      </div>
    </div>
  )
}