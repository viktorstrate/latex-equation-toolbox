import { Reducer } from "redux";

interface InputState {
  latex: string
}

const initialState: InputState = {
  latex: '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}'
}

const actionTypes = {
  CHANGE_LATEX: 'input@changeLatex'
}

const reducer:Reducer<InputState> = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LATEX:
      return {
        ...state,
        latex: action.latex
      }
    default:
      return state
  }
}

export default reducer

export const actions = {
  changeLatex: (latex: string) => ({
    type: actionTypes.CHANGE_LATEX,
    latex
  })
}
