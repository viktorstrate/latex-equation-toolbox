import { Reducer } from "redux";

interface LayoutState {
  loaded: boolean
}

const initialState: LayoutState = {
  loaded: false
}

const actionTypes = {
  LOADED: 'layout@loaded'
}

const reducer:Reducer<LayoutState> = (state = initialState, action) => {
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

export default reducer

export const actions = {
  load: () => ({
    type: actionTypes.LOADED
  })
}
