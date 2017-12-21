const initialState = {
  variables: {}
}

const actionTypes = {
  CHANGE_VARIABLES: 'equations@changeVariables',
  SET_VARIABLE: 'equations@setVariable'
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
      return {
        ...state,
        variables: {
          ...state.variables,
          [action.variable]: action.value
        }
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
  })
}
