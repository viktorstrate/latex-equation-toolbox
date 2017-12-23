import { h, Component } from 'preact'
import { connect } from 'react-redux'
import { getVariables, solve } from './calculations'
import MathField from '../Mathjax/MathField'
import isEqual from 'lodash/isEqual'

import { actions } from '../../reducers/equations'

@connect(store => ({
  ...store.equations,
  latex: store.input.latex
}), actions)
export default class Equations extends Component {
  constructor (props) {
    super(props)
    this.inputChanged = this.inputChanged.bind(this)
  }

  inputChanged (event, variable) {
    if (!isNaN(Number(event.target.value))) {
      this.props.setVariable(variable, Number(event.target.value))
    } else {
      this.props.setVariable(variable, null)
    }
  }

  render (props) {
    const calculatedVariables = getVariables(props.latex)
    if (!isEqual(Object.keys(props.variables), calculatedVariables)) {
      props.changeVariables(calculatedVariables)
    }

    const self = this
    console.log('input changed??', self.inputChanged)
    const inputs = Object.keys(props.variables)
      .map(v => (
        <div key={v}>
          {v}:
          <input value={props.variables[v]} onChange={(x) => { self.inputChanged(x, v) }} />
        </div>
      ))

    return (
      <div>
        <MathField latex={solve(props.latex, props.variables)} />
        {inputs}
        <hr />
        Solve for variable
        TODO
      </div>
    )
  }
}
