import { datePickerFrFR } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarFrFR } from './calendar'
import { eventModalFrFR } from './event-modal'

export const frFR: Language = {
  ...datePickerFrFR,
  ...calendarFrFR,
  ...eventModalFrFR,
}
