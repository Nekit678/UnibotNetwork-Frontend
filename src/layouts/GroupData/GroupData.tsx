import { Button, Col, Divider, Row, Space } from "antd"
import { FilterLesson } from "../../components/FilterLesson/FilterLesson"
import "./GroupData.scss"
import { ReportTextCard } from "../../components/ReportTextCard/ReportTextCard"
import { StudentCard } from "../../components/StudentCard/StudentCard"
import Title from "antd/es/typography/Title"



export const GroupData: React.FC = () => {
  return (
    <Space className="group-data" direction="vertical" size={20}>

      <Space wrap>
        <Space wrap>
          <FilterLesson groupFilter />
          <Button type="primary">Данные группы</Button>
        </Space>
        <ReportTextCard type="timezone" />
      </Space>


      <Divider style={{ margin: 0 }}><Title level={2}>Группа</Title></Divider>

      <Row gutter={[15, 15]} className="group-data__collection">
        <Col>
          <Space style={{ width: "100%" }}  direction="vertical">
            <StudentCard />
            <ReportTextCard type="comment"/>
          </Space>
        </Col>

        <Col>
          <Space style={{ width: "100%" }} direction="vertical">
            <StudentCard />
            <ReportTextCard type="comment" />
          </Space>
        </Col>

        <Col>
          <Space style={{ width: "100%" }} direction="vertical">
            <StudentCard />
            <ReportTextCard type="comment" />
          </Space>
        </Col>

        <Col>
          <Space style={{ width: "100%" }} direction="vertical">
            <StudentCard />
            <ReportTextCard type="comment" />
          </Space>
        </Col>

        <Col>
          <Space style={{ width: "100%" }} direction="vertical">
            <StudentCard />
            <ReportTextCard type="comment" />
          </Space>
        </Col>

      </Row>

    </Space>
  )
}