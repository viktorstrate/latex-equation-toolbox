import { h, Component } from 'preact'
import { connect } from 'react-redux'
import isEqual from 'lodash/isEqual'
import AlgebraLatex from 'algebra-latex'
import { actions } from '../../reducers/calculations'
import { getVariables, solveVariables } from '../calculations'

import style from './style.sass'

import MathField from './MathField'

@connect(store => ({
  ...store.calculations,
  latex: store.input.latex
}), actions)
export default class Variables extends Component {
  inputChanged (event, variable) {
    if (!isNaN(Number(event.target.value)) && event.target.value !== '') {
      this.props.setVariable(variable, Number(event.target.value))
    } else {
      this.props.setVariable(variable, null)
    }
  }

  render (props) {
    let solution = null
    let solutionEl = null

    const calculatedVariables = getVariables(props.latex)
    if (!isEqual(Object.keys(props.variables), calculatedVariables)) {
      props.changeVariables(calculatedVariables)
    }

    if (props.latex) {
      try {
        solution = solveVariables(props.latex, props.variables)
        solutionEl = <MathField latex={solution} />
      } catch (e) {
        solution = e.message
        const asciiMath = new AlgebraLatex(props.latex).toMath()
        solutionEl = (
          <div className={style.center}>
            Could not simplify math: {solution}<br />
            <i>{asciiMath}</i>
          </div>)
      }
    }

    const self = this
    const inputs = Object.keys(props.variables)
      .map(v => (
        <div key={v}>
          {v}:
          <input value={props.variables[v]} onChange={(x) => { self.inputChanged(x, v) }} />
        </div>
      ))

    return (
      <div>
        <div className={style.header}>Simplified:</div> {solutionEl}
        Variables {inputs}
      </div>
    )
  }
}
