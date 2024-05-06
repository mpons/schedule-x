import { Language } from '../../types/language.translations'
import { calendarNlNL } from './calendar'
import { datePickerNlNL } from './date-picker'
import { eventModalNlNL } from './event-modal'

export const nlNL: Language = {
  ...datePickerNlNL,
  ...calendarNlNL,
  ...eventModalNlNL,
}
