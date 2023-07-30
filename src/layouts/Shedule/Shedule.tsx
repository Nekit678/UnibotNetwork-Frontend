import { FilterLesson } from "../../components/FilterLesson/FilterLesson";
import { LessonCardCollection } from "../../components/LessonCardCollection/LessonCardCollection";
import "./Shedule.scss"
import { Pagination, Space } from "antd";


export const Shedule: React.FC = () => {
  return (
    <Space className="shedule" direction="vertical" size={16}>
      <FilterLesson />
      <LessonCardCollection />
      <Pagination responsive  total={1000} />
    </Space>
  )
}