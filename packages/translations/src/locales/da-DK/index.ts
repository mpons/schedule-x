import { datePickerDaDK } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarDaDK } from './calendar'
import { eventModalDaDK } from './event-modal'

export const daDK: Language = {
  ...datePickerDaDK,
  ...calendarDaDK,
  ...eventModalDaDK,
}
