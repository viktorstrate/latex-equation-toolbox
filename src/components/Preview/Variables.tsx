import * as React from 'react'
import { connect } from 'react-redux'
import { isEqual } from 'lodash'
// import AlgebraLatex from 'algebra-latex'
const AlgebraLatex = require('algebra-latex')
import { actions } from '../../reducers/calculations'
import { getVariables, solveVariables } from '../calculations'

// import style from './style.sass'
import * as Styles from './styles'

import MathField from './MathField'

interface Props {
  latex: string
  changeVariables(variables: string[])
  variables: string[]
  setVariable(name: string, value: number | null)
}

class Variables extends React.Component<Props> {
  inputChanged(event, variable) {
    if (!isNaN(Number(event.target.value)) && event.target.value !== '') {
      this.props.setVariable(variable, Number(event.target.value))
    } else {
      this.props.setVariable(variable, null)
    }
  }

  render() {
    let solution = null
    let solutionEl = null

    const calculatedVariables = getVariables(this.props.latex)
    if (!isEqual(Object.keys(this.props.variables), calculatedVariables)) {
      this.props.changeVariables(calculatedVariables)
    }

    if (this.props.latex) {
      try {
        solution = solveVariables(this.props.latex, this.props.variables)
        solutionEl = <MathField latex={solution} />
      } catch (e) {
        solution = e.message
        const asciiMath = new AlgebraLatex(this.props.latex).toMath()
        solutionEl = (
          <Styles.CenterDiv>
            Could not simplify math: {solution}
            <br />
            <i>{asciiMath}</i>
          </Styles.CenterDiv>
        )
      }
    }

    const self = this
    const inputs = Object.keys(this.props.variables).map(v => (
      <div key={v}>
        {v}:
        <input
          value={this.props.variables[v] || ''}
          onChange={x => {
            self.inputChanged(x, v)
          }}
        />
      </div>
    ))

    return (
      <div>
        <Styles.Header>Simplified:</Styles.Header> {solutionEl}
        Variables {inputs}
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
)(Variables)
