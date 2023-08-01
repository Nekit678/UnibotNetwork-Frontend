import { Button, Space } from "antd"
import './ReportInfoCard.scss'
import { Typography } from 'antd';

import { useState } from 'react';

const { Title } = Typography;

export const ReportInfoCard: React.FC = () => {

  return (
    <div style={{ height: "100%", borderRadius: "1.5rem", backgroundImage: "url(./cardImage.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}>
      <Space className="report-info-card" direction="vertical" size={0} align="center">
        <Space>
          <Title className="report-info-card__title" level={4}>28.07.22</Title>
          <Title className="report-info-card__title" level={4}>13:37</Title>
        </Space>

        <Title className="report-info-card__title" level={4}>Гр. 255-06</Title>
        <Title className="report-info-card__title" level={4}>Ур. 155</Title>
        <Title className="report-info-card__title" level={4}>Королевский Д.В.</Title>
      </Space>
    </div>
  )
}