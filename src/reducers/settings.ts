import { Reducer } from "redux";

// TODO change visibleTabs to an array of only active tabs instead of object
export interface SettingsState {
  darkTheme: boolean
}

const initialState: SettingsState = {
  darkTheme: true
}

const actionTypes = {
  CHANGE_THEME: 'settings@changeTheme'
}

const reducer: Reducer<SettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        darkTheme: action.darkTheme
      }
    default:
      return state
  }
}

export default reducer

export const actions = {
  changeTheme: (darkTheme: boolean) => ({
    type: actionTypes.CHANGE_THEME,
    darkTheme
  })
}
