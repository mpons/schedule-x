import {
  CalendarEventInternal,
  CalendarEventsCallbacks,
} from '@schedule-x/shared/src/interfaces/calendar/calendar-event.interface'
import { TranslateFn } from '@schedule-x/shared/src/types/translations'

export const ActionButtons = ({
  translate,
  calendarEvent,
}: {
  translate: TranslateFn
  calendarEvent: CalendarEventInternal
}) => {
  if (!calendarEvent.callbacks) {
    return null
  }

  const actions = []
  for (const key in calendarEvent.callbacks) {
    const callback =
      calendarEvent.callbacks[key as keyof CalendarEventsCallbacks]
    if (callback) {
      actions.push(
        <button
          className={`sx__action sx__action__view`}
          onClick={() => callback(calendarEvent?.id.toString())}
          style={`--sx-hover-action: var(--sx-color-${calendarEvent._color}-container)`}
          key={key}
        >
          {translate(key)}
        </button>
      )
    }
  }

  return <div className={`sx__action-buttons`}>{actions}</div>
}
