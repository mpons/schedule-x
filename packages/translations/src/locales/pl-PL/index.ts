import { datePickerPlPL } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarPlPL } from './calendar'
import { eventModalPlPL } from './event-modal'

export const plPL: Language = {
  ...datePickerPlPL,
  ...calendarPlPL,
  ...eventModalPlPL,
}
