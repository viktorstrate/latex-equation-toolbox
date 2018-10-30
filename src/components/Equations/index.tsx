import * as React from 'react'
import { connect } from 'react-redux'
import { solveVariable } from '../calculations'
import MathField from '../Preview/MathField'

import { actions, CalculationState } from '../../reducers/calculations'

interface PropsType extends CalculationState {
  latex: string
  solveVariable(variable: string): void
  changeVariables(variables: string[]): void
}

class Equations extends React.Component<PropsType, any> {
  constructor(props) {
    super(props)
    this.selectVariable = this.selectVariable.bind(this)
  }

  selectVariable(variable: string) {
    this.props.solveVariable(variable)
  }

  render() {
    const variableButtons = Object.keys(this.props.variables).map(v => {
      let style = null
      if (v === this.props.variable) {
        style = {
          backgroundColor: 'red',
        }
      }
      return (
        <button
          key={v}
          style={style}
          onClick={x => {
            this.selectVariable(v)
          }}
        >
          {v}
        </button>
      )
    })

    return (
      <div>
        <MathField
          latex={solveVariable(this.props.latex, this.props.variable)}
        />
        Solve for variable
        <button
          onClick={x => {
            this.selectVariable(null)
          }}
        >
          None
        </button>
        {variableButtons}
      </div>
    )
  }
}

export default connect(
  store => ({
    ...store.calculations,
    latex: store.input.latex,
  }),
  actions
)(Equations)
