import { datePickerEnUS } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarEnUS } from './calendar'
import { eventModalEnUS } from './event-modal'

export const enUS: Language = {
  ...datePickerEnUS,
  ...calendarEnUS,
  ...eventModalEnUS,
}
