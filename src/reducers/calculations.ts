export interface CalculationState {
  variables: any
  variable?: string
}

const initialState: CalculationState = {
  variables: {},
  variable: null,
}

const actionTypes = {
  CHANGE_VARIABLES: 'calculations@changeVariables',
  SET_VARIABLE: 'calculations@setVariable',
  SOLVE_VARIABLE: 'calculations@solveVariable',
}

export default (state: CalculationState = initialState, action) => {
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
        variables: newVars,
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
          variable,
        },
      }
    case actionTypes.SOLVE_VARIABLE:
      return {
        ...state,
        variable: action.variable,
      }
    default:
      return state
  }
}

export const actions = {
  changeVariables: (variables: string[]) => ({
    type: actionTypes.CHANGE_VARIABLES,
    variables,
  }),
  setVariable: (variable: string, value: string) => ({
    type: actionTypes.SET_VARIABLE,
    variable,
    value,
  }),
  solveVariable: (variable: string) => ({
    type: actionTypes.SOLVE_VARIABLE,
    variable,
  }),
}
