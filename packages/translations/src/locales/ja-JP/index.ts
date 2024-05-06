import { datePickerJaJP } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarJaJP } from './calendar'
import { eventModalJaJP } from './event-modal'

export const jaJP: Language = {
  ...datePickerJaJP,
  ...calendarJaJP,
  ...eventModalJaJP,
}
