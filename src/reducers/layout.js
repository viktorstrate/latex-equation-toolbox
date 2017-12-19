const initialState = {
  loaded: false
}

const actionTypes = {
  LOADED: 'layout@loaded'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADED:
      return {
        ...state,
        loaded: true
      }
    default:
      return state
  }
}

export const actions = {
  load: () => ({
    type: actionTypes.LOADED
  })
}
