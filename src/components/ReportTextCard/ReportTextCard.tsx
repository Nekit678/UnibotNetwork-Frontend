import { Space } from "antd"
import './ReportTextCard.scss'
import { Typography } from 'antd';

const { Title } = Typography;

export const ReportTextCard: React.FC = () => {

  return (
    <div style={{ height: "100%", borderRadius: "1.5rem", backgroundImage: "url(./cardImage.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}>
      <Space className="report-text-card" direction="vertical" size={0} align="center">
        <Title className="report-text-card__title" level={4}>Работали над какой-нибудь функцией, все было хорошо. Работал хорошо, материал усвоен успешно.</Title>
      </Space>
    </div>
  )
}