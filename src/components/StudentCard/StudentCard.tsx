import "./StudentCard.scss"
import { Typography, Space, Button } from 'antd';
const { Title } = Typography;

export const StudentCard: React.FC = () => {
  return (
    <div style={{ height: "100%", borderRadius: "1.5rem", backgroundImage: "url(./cardImage.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}>
      <Space style={{ paddingBottom: "1rem" }} className="student-card" direction="vertical" size={0} align="center">
        <Title className="student-card__title" level={4}>Иван</Title>
        <Title className="student-card__title" level={4}>Иванов</Title>
        <Button size="small">Данные ученика</Button>
      </Space>
    </div>
  )
}