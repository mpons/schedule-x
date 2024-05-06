import { datePickerSvSE } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarSvSE } from './calendar'
import { eventModalSvSE } from './event-modal'

export const svSE: Language = {
  ...datePickerSvSE,
  ...calendarSvSE,
  ...eventModalSvSE,
}
