import { datePickerTrTR } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarTrTR } from './calendar'
import { eventModalTrTR } from './event-modal'

export const trTR: Language = {
  ...datePickerTrTR,
  ...calendarTrTR,
  ...eventModalTrTR,
}
