import { FilterLesson } from "../../components/FilterLesson/FilterLesson";
import { LessonCardCollection } from "../../components/LessonCardCollection/LessonCardCollection";
import { ReportTextCard } from "../../components/ReportTextCard/ReportTextCard";
import "./Shedule.scss"
import { Col, Divider, Pagination, Row, Space, Typography } from "antd";
const { Title } = Typography;

export const Shedule: React.FC = () => {
  return (
    <Space className="shedule" direction="vertical" size={16}>

      <Row className="shedule__header">
        <Col><FilterLesson dateFilter groupFilter lessonStatusFilter reportStatusFilter/></Col>
        <Col><ReportTextCard type="timezone" /></Col>
      </Row>

      <Divider style={{ margin: 0 }}><Title level={2}>Занятия</Title></Divider>

      <LessonCardCollection />

      <Pagination responsive total={1000} />
    </Space>
  )
}