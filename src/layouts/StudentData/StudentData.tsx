import React from 'react';
import "./StudentData.scss"
import { Col, Divider, Row, Space, Typography } from "antd";
import { ReportCardCollection } from '../../components/ReportCollection/ReportCollection';
import { FilterLesson } from '../../components/FilterLesson/FilterLesson';
import { ReportTextCard } from '../../components/ReportTextCard/ReportTextCard';
const { Title } = Typography;

export const StudentData: React.FC = () => {
  return (
    <Space direction="vertical" className='student-data' size={20}>

      <Row className='student-data__header'>
        <Col className='student-data__filter'>
          <FilterLesson />
        </Col>
        <Col className='student-data__comments'>
          <ReportTextCard type='comment' />
        </Col>
        <Col className='student-data__timezone'>
          <ReportTextCard type='timezone' />
        </Col>
      </Row>

      <Divider style={{ margin: 0 }}><Title level={2}>Отчеты</Title></Divider>

      <ReportCardCollection />
    </Space>
  )
}