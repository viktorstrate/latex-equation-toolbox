
const initialState = {
  visibleTabs: {
    arrows: true,
    greek: true
  }
}

const actionTypes = {
  TOGGLE_TAB: 'catalogue@toggleTab'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TAB:
      return {
        ...state,
        visibleTabs: {
          ...state.visibleTabs,
          [action.tab]: !state.visibleTabs[action.tab]
        }
      }
    default:
      return state
  }
}

export const actions = {
  toggleTab: (tab) => ({
    type: actionTypes.TOGGLE_TAB,
    tab
  })
}
