import { Col, Modal, Row } from "antd"
import "./SubmitReportCollection.scss"
import { SubmitReportCard } from "../SubmitReportCard/SubmitReportCard"



export const SubmitReportCollection: React.FC = () => {
  return (
    <Row gutter={[14, 14]}>
      <Col>
        <SubmitReportCard />
      </Col>
      <Col>
        <SubmitReportCard />
      </Col>
      <Col>
        <SubmitReportCard />
      </Col>
      <Col>
        <SubmitReportCard />
      </Col>
      <Col>
        <SubmitReportCard />
      </Col>
      <Col>
        <SubmitReportCard />
      </Col>
      <Col>
        <SubmitReportCard />
      </Col>

      

    </Row>
  )
}