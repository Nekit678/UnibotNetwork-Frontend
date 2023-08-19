import { Form, Input, Select } from "antd"



export const SubmitReportForm: React.FC<any> = () => {
  return (
    <div>
      <Form layout="vertical">

        <Form.Item label="Дата">
          <Select disabled />
        </Form.Item>

        <Form.Item label="Группа">
          <Select disabled />
        </Form.Item>

        <Form.Item label="Оценка теории">
          <Select placeholder="Оценка..." options={[
            { value: 5, label: 5 },
            { value: 4, label: 4 },
            { value: 3, label: 3 }
          ]} />
        </Form.Item>

        <Form.Item label="Оценка практики">
          <Select placeholder="Оценка..." options={[
            { value: 5, label: 5 },
            { value: 4, label: 4 },
            { value: 3, label: 3 }
          ]} />
        </Form.Item>

        <Form.Item label="Оценка интереса">
          <Select placeholder="Оценка..." options={[
            { value: 5, label: 5 },
            { value: 4, label: 4 },
            { value: 3, label: 3 }
          ]} />
        </Form.Item>

        <Form.Item label="Отчет">
          <Input.TextArea placeholder="Напишите текст отчета..." />
        </Form.Item>

      </Form>
    </div>
  )
}