const initialState = {
  darkTheme: true
}

const actionTypes = {
  CHANGE_THEME: 'general@changeTheme'
}

export default (state = initialState, action) => {
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

export const actions = {
  changeTheme: (darkTheme) => ({
    type: actionTypes.CHANGE_THEME,
    darkTheme
  })
}
