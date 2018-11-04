import * as React from 'react'
import { connect } from 'react-redux'
import * as _ from 'lodash'
// import AlgebraLatex from 'algebra-latex'
const AlgebraLatex = require('algebra-latex')
import { actions } from '../../reducers/calculations'
import { solveVariables } from '../calculations'

// import style from './style.sass'
import * as Styles from '../styles'

import MathField from './MathField'

interface Props {
  latex: string
  changeVariables(variables: string[])
  variables: string[]
  setVariable(name: string, value: number | null)
}

interface State {
  simplifiedEl: React.ReactElement<any>
}

class Variables extends React.Component<Props, State> {
  previousLatex: string

  constructor(props) {
    super(props)

    this.previousLatex = ''
    this.state = {
      simplifiedEl: <div />,
    }

    this.updateSimplify()
  }

  updateSimplify() {
    let solution = null
    let solutionEl = null

    if (this.props.latex && !this.props.latex.includes('=')) {
      try {
        solution = solveVariables(this.props.latex, this.props.variables)
        solutionEl = <MathField latex={solution} />
      } catch (e) {
        try {
          const asciiMath = new AlgebraLatex(this.props.latex).toMath()

          solutionEl = (
            <Styles.CenterDiv>
              Could not simplify math: {e.message}
              <br />
              <i>{asciiMath}</i>
            </Styles.CenterDiv>
          )
        } catch (e) {
          solutionEl = (
            <Styles.CenterDiv>
              Could not parse latex: {e.message}
            </Styles.CenterDiv>
          )
        }
      }
    } else if (this.props.latex.includes('=')) {
      solutionEl = (
        <Styles.CenterDiv>Cannot simplify equations</Styles.CenterDiv>
      )
    }

    this.setState({
      simplifiedEl: solutionEl,
    })
  }

  inputChanged(event, variable) {
    if (!isNaN(Number(event.target.value)) && event.target.value !== '') {
      this.props.setVariable(variable, Number(event.target.value))
    } else {
      this.props.setVariable(variable, null)
    }
  }

  render() {
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

    if (this.props.latex != this.previousLatex) {
      _.debounce(this.updateSimplify.bind(this), 400)
    }

    let inputSection = null
    if (inputs.length > 0) {
      inputSection = (
        <div>
          <h3>Solve variables:</h3>
          {inputs}
        </div>
      )
    }

    return (
      <div>
        <Styles.Header>Simplified expression</Styles.Header>{' '}
        {this.state.simplifiedEl}
        {inputSection}
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
