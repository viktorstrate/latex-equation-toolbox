import { Reducer, Action, AnyAction } from "redux";

interface State {
  darkTheme: boolean
}

const initialState: State = {
  darkTheme: true
}

const actionTypes = {
  CHANGE_THEME: 'general@changeTheme'
}

interface ChangeThemeAction extends Action {
  darkTheme: boolean
}

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        darkTheme: action.darkTheme
      }
    default:
      return state
  }
}

export default reducer

export const actions = {
  changeTheme: (darkTheme: boolean): ChangeThemeAction => ({
    type: actionTypes.CHANGE_THEME,
    darkTheme
  })
}
