import { datePickerEnGB } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarEnGB } from './calendar'
import { eventModalEnGB } from './event-modal'

export const enGB: Language = {
  ...datePickerEnGB,
  ...calendarEnGB,
  ...eventModalEnGB,
}
