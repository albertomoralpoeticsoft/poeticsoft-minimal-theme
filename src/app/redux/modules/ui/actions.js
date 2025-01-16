export const UI_EVENTS_UPDATEEVENTS = 'UI_EVENTS_UPDATEEVENTS'
export const uiEventsUpdateevents = data => (
  {
    type: UI_EVENTS_UPDATEEVENTS,
    payload: {
      data: data
    }
  }
)