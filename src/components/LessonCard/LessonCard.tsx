import { Button, Space } from "antd"
import './LessonCard.scss'
import { Typography } from 'antd';
import { Lesson } from "../../utils/types";
import { useState } from 'react';
import { CustomTag } from "../Tags/CustomTag";
const { Title } = Typography;

export const LessonCard: React.FC<Lesson> = ({ date, group, lessonNumber, lessonStatus, reportStatus, time }) => {
  const [isHover, setHover] = useState<boolean>(false)

  return (
    <div style={{ height: "100%", borderRadius: "1.5rem", backgroundImage: "url(./cardImage.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}>
      <Space style={{ paddingBottom: "1rem" }} onMouseLeave={() => (setHover(false))} onMouseEnter={() => (setHover(true))} className="lesson-card" direction="vertical" size={0} align="center">
        <Space>
          <Title className="lesson-card__title" level={4}>{date}</Title>
          <Title className="lesson-card__title" level={4}>{time}</Title>
        </Space>

        <Title className="lesson-card__title" level={4}>Гр. {group}</Title>
        <Title className="lesson-card__title" level={4}>Ур. {lessonNumber}</Title>

        {isHover ?
          <Space direction="vertical" size={4} align="center">
            <Button style={{ fontSize: "0.8em", height: "fit-content", padding: "0 1rem" }}>Данные группы</Button>
            <Button style={{ fontSize: "0.8em", height: "fit-content", padding: "0 1rem" }}>Сдать отчет</Button>
          </Space> :
          <Space direction="vertical" size={4} align="center">
            <CustomTag status={lessonStatus} />
            <CustomTag status={reportStatus} />
          </Space>}
      </Space>
    </div>
  )
}