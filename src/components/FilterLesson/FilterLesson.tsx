import { DatePicker, Select, Space } from "antd"
import { LessonStatus, ReportStatus } from "../../utils/types";
import "./FilterLesson.scss"
import { CustomTag } from "../Tags/CustomTag";


const { RangePicker } = DatePicker;


const optionsLesson: { value: LessonStatus }[] = [
  { value: "на отмене" },
  { value: "отменено" },
  { value: "назначается" },
  { value: "новое" },
  { value: "новое время" },
  { value: "перенесено" }
];

const optionsReport: { value: ReportStatus }[] = [
  { value: "есть ошибки" },
  { value: "на проверке" },
  { value: "нет отчета" },
  { value: "подготовлен" },
  { value: "принят" }
];

//Development only
const optionsGroup: { value: string }[] = [
  { value: "255-06" },
  { value: "255-04" },
  { value: "255-10" },
  { value: "255-11" },
  { value: "255-123" }
];

interface FilterProps {
  lessonStatusFilter?: boolean
  reportStatusFilter?: boolean
  studentFilter?: boolean
  dateFilter?: boolean
  groupFilter?: boolean
}

export const FilterLesson: React.FC<FilterProps> = (
  { dateFilter, groupFilter, lessonStatusFilter, reportStatusFilter, studentFilter }) => {

  return (
    <Space wrap className="filter-lesson">

      <Select style={{ minWidth: 120 }} mode="multiple" showArrow allowClear placeholder="Статус урока"
        options={optionsLesson} tagRender={({ value }) => (<CustomTag status={value} />)} />

      <Select style={{ minWidth: 130 }} mode="multiple" showArrow allowClear placeholder="Статус отчета"
        options={optionsReport} tagRender={({ value }) => (<CustomTag status={value} />)} />

      <Select style={{ minWidth: 100 }} mode="multiple" showArrow allowClear placeholder="Группа"
        options={optionsGroup} />

      <RangePicker showTime={true} style={{ minWidth: 170 }} inputReadOnly format="DD.MM.YY" />

    </Space>
  )
}