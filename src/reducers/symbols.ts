import { Reducer } from "redux";

enum Tabs {
  arrows, greek
}

// TODO change visibleTabs to an array of only active tabs instead of object
interface SymbolState {
  visibleTabs: {
    arrows: boolean,
    greek: boolean
  }
}

const initialState: SymbolState = {
  visibleTabs: {
    arrows: true,
    greek: true
  }
}

const actionTypes = {
  TOGGLE_TAB: 'catalogue@toggleTab'
}

const reducer: Reducer<SymbolState> = (state = initialState, action) => {
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

export default reducer

export const actions = {
  toggleTab: (tab: Tabs) => ({
    type: actionTypes.TOGGLE_TAB,
    tab
  })
}
