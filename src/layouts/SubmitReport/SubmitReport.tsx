import { Space } from "antd"
import { SubmitReportCollection } from "../../components/SubmitReportCollection/SubmitReportCollection"
import "./SubmitReport.scss"

export const SubmitReport = () => {
  return (
    <Space direction="vertical" className="submit-report" >
      <SubmitReportCollection />

    </Space>
  )
}