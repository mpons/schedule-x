import { datePickerMkMK } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarMkMK } from './calendar'
import { eventModalMkMK } from './event-modal'

export const mkMK: Language = {
  ...datePickerMkMK,
  ...calendarMkMK,
  ...eventModalMkMK,
}
