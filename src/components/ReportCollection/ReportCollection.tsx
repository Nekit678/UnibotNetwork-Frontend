import { Col, Row, Space } from 'antd'
import './ReportCollection.scss'
import { Lesson } from '../../utils/types';
import { ReportInfoCard } from '../ReportInfoCard/ReportInfoCard';
import { ReportMarkCard } from '../ReportMarkCard/ReportMarkCard';
import { ReportTextCard } from '../ReportTextCard/ReportTextCard';
import { StudentReport } from '../StudentReport/StudentReport';

// Development only
interface ReportCardCollectionProps { }

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

export const ReportCardCollection: React.FC<ReportCardCollectionProps> = () => {
  return (
    <Space size={20} className='report-card-collection' direction='vertical'>
      {lessonList.map((item) => (
        <StudentReport />))}
    </Space>

  )
}