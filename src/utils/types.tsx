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

export interface Lesson {
  lessonId: number
  date: string
  time: string
  group: string
  lessonNumber: number
  lessonStatus: LessonStatus
  reportStatus: ReportStatus
}