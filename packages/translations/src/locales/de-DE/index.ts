import { datePickerDeDE } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarDeDE } from './calendar'
import { eventModalDeDE } from './event-modal'

export const deDE: Language = {
  ...datePickerDeDE,
  ...calendarDeDE,
  ...eventModalDeDE,
}
