import { datePickerKyKG } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarKyKG } from './calendar'
import { eventModalKyKG } from './event-modal'

export const kyKG: Language = {
  ...datePickerKyKG,
  ...calendarKyKG,
  ...eventModalKyKG,
}
