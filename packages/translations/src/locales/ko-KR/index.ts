import { datePickerKoKR } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarKoKR } from './calender'
import { eventModalKoKR } from './event-modal'

export const koKR: Language = {
  ...datePickerKoKR,
  ...calendarKoKR,
  ...eventModalKoKR,
}
