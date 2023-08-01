import { Space, Table, Tag } from 'antd';
import "./StudentDataTable.scss"
const { Column } = Table;

interface DataType {
  id: number
  key: number
  date: string
  group: string
  lessonNumber: number
  reportText: string
  tMark: number
  pMark: number
  aMark: number,
  teacher: string
}

const data: DataType[] = [
  {
    id: 1,
    key: 1,
    date: "28.07.22",
    group: "255-03",
    lessonNumber: 123,
    reportText: 'Report report report',
    aMark: 5,
    pMark: 5,
    tMark: 5,
    teacher: "Teacher"
  },
  {
    id: 2,
    key: 2,
    date: "28.07.22",
    group: "255-03",
    lessonNumber: 123,
    reportText: 'Reportreport report',
    aMark: 5,
    pMark: 5,
    tMark: 5,
    teacher: "Teacher"
  },
];

export const StudentDataTable: React.FC = () => {
  return (
    <>
      <Table className='student-data-table' dataSource={data} scroll={{ x: "max-content" }}>
        <Column className='student-data-table__column' dataIndex="date" title="Дата" key="date" render={(date) => (<text>{date}</text>)} />
        <Column className='student-data-table__column' title="Группа" dataIndex="group" key="group" />
        <Column className='student-data-table__column' title="Урок" dataIndex="lessonNumber" key="lessonNumber" />
        <Column className='student-data-table__column' title="Отчет" dataIndex="reportText" key="reportText" />
        <Column className='student-data-table__column' title="Теория" dataIndex="tMark" key="tMark" />
        <Column className='student-data-table__column' title="Практика" dataIndex="pMark" key="pMark" />
        <Column className='student-data-table__column' title="Отношение" dataIndex="aMark" key="aMark" />
        <Column className='student-data-table__column' title="Преподаватель" dataIndex="teacher" key="teacher" />
      </Table >
    </>
  )
}