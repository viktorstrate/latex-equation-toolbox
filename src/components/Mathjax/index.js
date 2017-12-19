import { h, Component } from 'preact'
import { connect } from 'react-redux'

import MathField from './MathField'
import { simplify } from './solve'

import './style.sass'

@connect(store => ({
  latex: store.input.latex
}))
export default class Mathjax extends Component {
  render (props) {
    let mathEl = 'Empty math'
    let solution = ''
    let solutionEl = null

    if (props.latex) {
      mathEl = <MathField latex={props.latex} />

      try {
        solution = simplify(props.latex)
        solutionEl = <MathField latex={solution} />
      } catch (e) {
        solution = e.message
        solutionEl = <div>{solution}</div>
      }
    }

    return (
      <div>
        Math: {mathEl}
        Simplified: {solutionEl}
      </div>
    )
  }
}
