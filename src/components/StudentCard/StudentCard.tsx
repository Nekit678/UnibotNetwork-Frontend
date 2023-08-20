import "./StudentCard.scss"
import { Typography, Space, Button } from 'antd';
import {
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
const { Title } = Typography;

export const StudentCard: React.FC<{ checked?: boolean | null, report?: boolean }> = ({ checked, report }) => {
  return (
    <div style={{ height: "100%", borderRadius: "1.5rem", backgroundImage: "url(./cardImage.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}>
      <Space style={{ paddingBottom: "1rem" }} className="student-card" direction="vertical" size={0} align="center">
        <Title className="student-card__title" level={4}>Иван</Title>
        <Title className="student-card__title" level={4}>Иванов</Title>
        {!report ? <Button size="small">Данные ученика</Button> : checked != null && (checked ? <CheckOutlined style={{ color: "#0bd641", fontSize: "2em" }} /> : <CloseOutlined style={{ color: "#e40606", fontSize: "2em" }}/>)}
      </Space>
    </div>
  )
}