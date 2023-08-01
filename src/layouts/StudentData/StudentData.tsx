import React from 'react';
import "./StudentData.scss"
import { Space } from "antd";
import { ReportCardCollection } from '../../components/ReportCollection/ReportCollection';
import { FilterLesson } from '../../components/FilterLesson/FilterLesson';

export const StudentData: React.FC = () => {
  return (
    <Space direction="vertical" className='student-data'>
      <FilterLesson />
      <ReportCardCollection />
    </Space>
  )
}