import { Form, Input, Select } from "antd"
import { useEffect } from "react"



export const SubmitReportForm: React.FC<any> = ({ setForm }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    setForm(form)
  }, [setForm, form])

  return (
    <div>
      <Form layout="vertical"
        form={form}>

        <Form.Item label="Оценка теории"
          name="tmark"
          rules={[
            { required: true, message: "Обязательное поле!" }
          ]}>
          <Select placeholder="Оценка..." options={[
            { value: 5, label: 5 },
            { value: 4, label: 4 },
            { value: 3, label: 3 }
          ]} />
        </Form.Item>

        <Form.Item label="Оценка практики"
          name="pmark"
          rules={[
            { required: true, message: "Обязательное поле!" }
          ]}>
          <Select placeholder="Оценка..." options={[
            { value: 5, label: 5 },
            { value: 4, label: 4 },
            { value: 3, label: 3 }
          ]} />
        </Form.Item>

        <Form.Item label="Оценка интереса"
          name="amark"
          rules={[
            { required: true, message: "Обязательное поле!" }
          ]}>
          <Select placeholder="Оценка..." options={[
            { value: 5, label: 5 },
            { value: 4, label: 4 },
            { value: 3, label: 3 }
          ]} />
        </Form.Item>

        <Form.Item label="Отчет"
          name="reportText"
          rules={[
            { required: true, message: "Обязательное поле!" }
          ]}>
          <Input.TextArea style={{ resize: "none" }} placeholder="Напишите текст отчета..." />
        </Form.Item>

      </Form>
    </div>
  )
}