import { Tag } from "antd"
import { LessonStatus, Mark, ReportStatus } from "../../utils/types"
import { ReactNode } from "react"
import {
  LoadingOutlined,
  CheckOutlined,
  CloseOutlined,
  ClockCircleOutlined,
  StopOutlined,
  PlusOutlined,
  ExclamationOutlined,
  QuestionOutlined,
  EditOutlined
} from '@ant-design/icons';

interface TagsParams {
  color: string
  icon: ReactNode | null
}

const tags: Record<LessonStatus | ReportStatus | Mark, TagsParams> = {
  "на отмене": { color: "#e81f1f", icon: <LoadingOutlined /> },
  "назначается": { color: "#c7c407", icon: <LoadingOutlined /> },
  "новое": { color: "#0bd641", icon: <PlusOutlined /> },
  "новое время": { color: "#0bd641", icon: <ClockCircleOutlined /> },
  "отменено": { color: "#a29f9f", icon: <StopOutlined /> },
  "перенесено": { color: "#0bb8d6", icon: <EditOutlined /> },

  "есть ошибки": { color: "#e40606", icon: <CloseOutlined /> },
  "на проверке": { color: "#c7c407", icon: <LoadingOutlined /> },
  "нет отчета": { color: "#a29f9f", icon: <ExclamationOutlined /> },
  "подготовлен": { color: "#0bb8d6", icon: <QuestionOutlined /> },
  "принят": { color: "#0bd641", icon: <CheckOutlined /> },
  5: { color: "#0bd641", icon: null },
  4: { color: "#c7c407", icon: null },
  3: { color: "#e40606", icon: null }
}

export const CustomTag: React.FC<{ status: LessonStatus | ReportStatus | Mark }> = ({ status }) => {
  const tagProps = tags[status];
  return (
    <Tag style={{ cursor: "default" }} color={tagProps.color} icon={tagProps.icon}>{status}</Tag>
  )
}