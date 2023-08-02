import { Space } from "antd"
import './ReportTextCard.scss'
import { Typography } from 'antd';

const { Title } = Typography;

interface ReportTextCardProps {
  type?: "text" | "comment" | "timezone"
  text?: string
}

export const ReportTextCard: React.FC<ReportTextCardProps> = ({ type, text }) => {

  return (
    <div style={{ height: "100%", borderRadius: "1.5rem", backgroundImage: "url(./cardImage.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}>
      <Space className="report-text-card" direction="vertical" size={0}>

        {type === "timezone" ?
          <Title className="report-text-card__title" level={3}>ЧАСОВОЙ ПОЯС: +3 от Москвы</Title>
          : <></>}

        {type === "comment" ?
          <Title className="report-text-card__title" level={4}>
            {text ? text : "Служебных коммнетариев нет!"}
          </Title> : <></>}


        {type === "text" ?
          <Title className="report-text-card__title" level={4}>
            {text ? text : "Нет текста отчета!Нет текста отчета!Нет текста отчета!Нет текста отчета!Нет текста отчета!Нет текста отчета!Нет текста отчета!"}
          </Title> : <></>}

      </Space>
    </div>
  )
}