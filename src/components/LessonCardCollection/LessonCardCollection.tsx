import { Col, Row } from 'antd'
import './LessonCardCollection.scss'
import { LessonCard } from '../LessonCard/LessonCard';
import { Lesson } from '../../utils/types';

// Development only
interface LessonCardCollection { }

const lessonList: Lesson[] = [
  { lessonId: 0, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "на отмене", reportStatus: "на проверке", time: "13:37" },
  { lessonId: 1, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "назначается", reportStatus: "есть ошибки", time: "13:37" },
  { lessonId: 2, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "новое", reportStatus: "нет отчета", time: "13:37" },
  { lessonId: 3, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "новое время", reportStatus: "подготовлен", time: "13:37" },
  { lessonId: 4, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "отменено", reportStatus: "принят", time: "13:37" },
  { lessonId: 5, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "перенесено", reportStatus: "есть ошибки", time: "13:37" },
  { lessonId: 6, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "назначается", reportStatus: "есть ошибки", time: "13:37" },
  { lessonId: 7, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "назначается", reportStatus: "есть ошибки", time: "13:37" },
  { lessonId: 8, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "на отмене", reportStatus: "на проверке", time: "13:37" },
  { lessonId: 9, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "назначается", reportStatus: "есть ошибки", time: "13:37" },
  { lessonId: 10, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "новое", reportStatus: "нет отчета", time: "13:37" },
  { lessonId: 11, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "новое время", reportStatus: "подготовлен", time: "13:37" },
  { lessonId: 12, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "отменено", reportStatus: "принят", time: "13:37" },
  { lessonId: 13, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "перенесено", reportStatus: "есть ошибки", time: "13:37" },
  { lessonId: 14, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "назначается", reportStatus: "есть ошибки", time: "13:37" },
  { lessonId: 15, date: "28.07.22", group: "255-16", lessonNumber: 123, lessonStatus: "назначается", reportStatus: "есть ошибки", time: "13:37" }]

export const LessonCardCollection: React.FC<LessonCardCollection> = () => {
  return (
    <Row gutter={[10, 10]} className='lesson-card-collection'>
      {lessonList.map((item) => (<Col key={item.lessonId}><LessonCard {...item} /></Col>))}
    </Row>
  )
}