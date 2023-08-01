import { Space } from "antd"
import './ReportMarkCard.scss'
import { Typography } from 'antd';
import { CustomTag } from "../Tags/CustomTag";

const { Title } = Typography;

export const ReportMarkCard: React.FC = () => {

  return (
    <div style={{ height: "100%", borderRadius: "1.5rem", backgroundImage: "url(./cardImage.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}>
      <Space className="report-mark-card" direction="vertical" size={8} align="center">
        <Space>
          <Title className="report-mark-card__title" level={4}>Теория</Title>
          <CustomTag status={5} />
        </Space>

        <Space>
          <Title className="report-mark-card__title" level={4}>Практика</Title>
          <CustomTag status={4} />
        </Space>

        <Space>
          <Title className="report-mark-card__title" level={4}>Отношение</Title>
          <CustomTag status={3} />
        </Space>

      </Space>
    </div>
  )
}