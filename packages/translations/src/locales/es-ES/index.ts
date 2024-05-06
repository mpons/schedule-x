import { datePickerEsES } from './date-picker'
import { Language } from '../../types/language.translations'
import { calendarEsES } from './calendar'
import { eventModalEsES } from './event-modal'

export const esES: Language = {
  ...datePickerEsES,
  ...calendarEsES,
  ...eventModalEsES,
}
