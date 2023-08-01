export type LessonStatus = "на отмене" |
  "отменено" |
  "новое" |
  "перенесено" |
  "назначается" |
  "новое время"


export type ReportStatus = "нет отчета" |
  "подготовлен" |
  "принят" |
  "на проверке" |
  "есть ошибки"

export type Mark = 5 | 4 | 3

export interface Lesson {
  lessonId: number
  date: string
  time: string
  group: string
  lessonNumber: number
  lessonStatus: LessonStatus
  reportStatus: ReportStatus
}

export interface Report {
  reportId: number
  name: string
  date: string
  group: string
  lessonNumber: number
  reportText: string
  tMark: number
  pMark: number
  aMark: number
}