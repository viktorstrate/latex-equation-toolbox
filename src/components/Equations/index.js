import { h, Component } from 'preact'
import { connect } from 'react-redux'
import { getVariables, solveVariable } from '../calculations'
import isEqual from 'lodash/isEqual'
import MathField from '../Preview/MathField'

import { actions } from '../../reducers/calculations'

@connect(store => ({
  ...store.calculations,
  latex: store.input.latex
}), actions)
export default class Equations extends Component {
  constructor (props) {
    super(props)
    this.selectVariable = this.selectVariable.bind(this)
  }

  selectVariable (variable) {
    this.props.solveVariable(variable)
  }

  render (props) {
    const calculatedVariables = getVariables(props.latex)
    if (!isEqual(Object.keys(props.variables), calculatedVariables)) {
      props.changeVariables(calculatedVariables)
    }

    const variableButtons = Object.keys(props.variables).map(v => {
      let style = null
      if (v === props.variable) {
        style = {
          'background-color': 'red'
        }
      }
      return <button key={v} style={style} onClick={x => { this.selectVariable(v) }} >{v}</button>
    })

    return (
      <div>
        <MathField latex={solveVariable(props.latex, props.variable)} />
        Solve for variable
        <button onClick={x => { this.selectVariable(null) }} >None</button>
        {variableButtons}
      </div>
    )
  }
}
