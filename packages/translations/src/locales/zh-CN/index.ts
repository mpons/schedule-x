import { datePickerZhCN } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarZhCN } from './calendar'
import { eventModalZhCN } from './event-modal'

export const zhCN: Language = {
  ...datePickerZhCN,
  ...calendarZhCN,
  ...eventModalZhCN,
}
