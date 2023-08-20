import { FormInstance, Modal, Space } from "antd"
import { ReportTextCard } from "../ReportTextCard/ReportTextCard"
import { StudentCard } from "../StudentCard/StudentCard"
import { SubmitReportForm } from "../SubmitReportForm/SubmitReportForm"
import { useState } from "react"

export const SubmitReportCard: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean | null>(null)
  const [form, setForm] = useState<FormInstance<any>>()


  const validate = async () => {
    try {
      await form?.validateFields();
      setChecked(true)
    } catch (errorInfo) {
      setChecked(false)
    }
  };

  return (
    <Space direction="vertical" size={4}>

      <div style={{ cursor: "pointer" }} onClick={() => setShow(true)}>
        <StudentCard checked={checked} report />
      </div>

      <ReportTextCard type="comment" />


      <Modal open={show} onCancel={() => { setShow(false); validate(); }} title="Заполните форму" footer={false}>
        <SubmitReportForm setForm={setForm} />
      </Modal>

    </Space >
  )
}