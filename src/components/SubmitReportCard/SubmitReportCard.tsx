import { Modal, Space } from "antd"
import { ReportTextCard } from "../ReportTextCard/ReportTextCard"
import { StudentCard } from "../StudentCard/StudentCard"
import { SubmitReportForm } from "../SubmitReportForm/SubmitReportForm"
import { useState } from "react"


export const SubmitReportCard: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <Space direction="vertical" size={4}>
      <div style={{ cursor: "pointer" }} onClick={() => setShow(true)}>
        <StudentCard />
      </div>
      <ReportTextCard type="comment" />

      <Modal open={show} onCancel={() => (setShow(false))} title="Заполните форму" footer={false}>
        <SubmitReportForm />
      </Modal>
    </Space >
  )
}