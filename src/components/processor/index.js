import { h, Component } from 'preact'
import AlgebraLatex from 'algebra-latex'

import style from './style.sass'

export default class Processor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      algebraLatex: null
    }
  }
  componentWillReceiveProps (props) {
    console.log(props)
    /* if (props.input) {
      console.log('here first', props.input)
      this.solveLatex(props.input)
    } */
  }

  solveLatex (latex) {
    console.log('here')
    this.setState({
      algebraLatex: new AlgebraLatex(latex)
    })
    console.log('now here')
  }

  render () {
    return (
      <div class={style.processor}>
        <span class={style.equalSign}>=</span>
        <span class={style.result}>{3}</span>
      </div>
    )
  }
}
