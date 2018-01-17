import { h, Component } from 'preact'
import { connect } from 'react-redux'
import { getVariables, solveVariable } from '../calculations'
import MathField from '../Preview/MathField'

import { actions, CalculationState } from '../../reducers/calculations'

const isEqual = require('lodash/isEqual')

interface PropsType extends CalculationState {
  latex: string,
  solveVariable(variable: string): void,
  changeVariables(variables: string[]): void
}

@connect(store => ({
  ...store.calculations,
  latex: store.input.latex
}), actions)
export default class Equations extends Component<PropsType, any> {

  constructor (props) {
    super(props)
    this.selectVariable = this.selectVariable.bind(this)
  }

  selectVariable (variable: string) {
    this.props.solveVariable(variable)
  }

  render () {
    const calculatedVariables = getVariables(this.props.latex)
    if (!isEqual(Object.keys(this.props.variables), calculatedVariables)) {
      this.props.changeVariables(calculatedVariables)
    }

    const variableButtons = Object.keys(this.props.variables).map(v => {
      let style = null
      if (v === this.props.variable) {
        style = {
          'background-color': 'red'
        }
      }
      return <button key={v} style={style} onClick={x => { this.selectVariable(v) }} >{v}</button>
    })

    return (
      <div>
        <MathField latex={solveVariable(this.props.latex, this.props.variable)} />
        Solve for variable
        <button onClick={x => { this.selectVariable(null) }} >None</button>
        {variableButtons}
      </div>
    )
  }
}
