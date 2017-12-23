const initialState = {
  variables: {},
  variable: null
}

const actionTypes = {
  CHANGE_VARIABLES: 'calculations@changeVariables',
  SET_VARIABLE: 'calculations@setVariable',
  SOLVE_VARIABLE: 'calculations@solveVariable'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VARIABLES:
      let newVars = {}
      action.variables.forEach(v => {
        if (typeof state.variables[v] !== 'undefined') {
          newVars[v] = state.variables[v]
        } else {
          newVars[v] = null
        }
      })
      return {
        ...state,
        variables: newVars
      }
    case actionTypes.SET_VARIABLE:
      let variable = state.variable
      if (!Object.keys(state.variables).includes(state.variable)) {
        variable = null
      }
      return {
        ...state,
        variables: {
          ...state.variables,
          [action.variable]: action.value,
          variable
        }
      }
    case actionTypes.SOLVE_VARIABLE:
      return {
        ...state,
        variable: action.variable
      }
    default:
      return state
  }
}

export const actions = {
  changeVariables: (variables) => ({
    type: actionTypes.CHANGE_VARIABLES,
    variables
  }),
  setVariable: (variable, value) => ({
    type: actionTypes.SET_VARIABLE,
    variable,
    value
  }),
  solveVariable: (variable) => ({
    type: actionTypes.SOLVE_VARIABLE,
    variable
  })
}
