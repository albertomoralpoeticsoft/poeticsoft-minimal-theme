import immutableUpdate from 'immutable-update'

const initialState = {
}

const reducers = {

  UI_EVENTS_UPDATEEVENTS: (state, action) => {

    return immutableUpdate(
      state,
      {
        events: action.payload.data
      }
    )
  }
}

const ui = (state = initialState, action) => reducers[action.type] ? 
  reducers[action.type](state, action)
  :
  { ...state }

export default ui 