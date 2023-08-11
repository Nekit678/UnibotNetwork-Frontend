import { Col, Row } from "antd"
import { ReportTextCard } from "../ReportTextCard/ReportTextCard"
import { ReportMarkCard } from "../ReportMarkCard/ReportMarkCard"
import { StudentCard } from "../StudentCard/StudentCard"
import "./SubmitReportCollection.scss"



export const SubmitReportCollection = () => {
  return (
    <Row className="sub-rep-collection">
      <Col className="sub-rep-collection__student">
        <StudentCard />
      </Col>
      <Col className="sub-rep-collection__marks">
        <ReportMarkCard />
      </Col>
      <Col className="sub-rep-collection__comment">
        <ReportTextCard type="comment" />
      </Col>
      <Col className="sub-rep-collection__text">
        <ReportTextCard type="text" />
      </Col>
    </Row>
  )
}