import { Col, Row, Space } from "antd"
import { ReportInfoCard } from "../ReportInfoCard/ReportInfoCard"
import { ReportMarkCard } from "../ReportMarkCard/ReportMarkCard"
import { ReportTextCard } from "../ReportTextCard/ReportTextCard"
import "./StudentReport.scss"



export const StudentReport: React.FC = () => {
  return (
    <Row className="student-report" gutter={[10, 10]}>
      <Col className="student-report__info"><ReportInfoCard /></Col>
      <Col className="student-report__marks"><ReportMarkCard /></Col>
      <Col className="student-report__report-text"><ReportTextCard /></Col>
    </Row>
  )
}

