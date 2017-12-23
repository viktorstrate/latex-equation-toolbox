const initialState = {
  latex: '\\cos\\left(A\\right)=\\frac{b^2+c^2-a^2}{2\\cdot b\\cdot c}'
}

const actionTypes = {
  CHANGE_LATEX: 'input@changeLatex'
}

export default (state = initialState, action) => {
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

export const actions = {
  changeLatex: (latex) => ({
    type: actionTypes.CHANGE_LATEX,
    latex
  })
}
