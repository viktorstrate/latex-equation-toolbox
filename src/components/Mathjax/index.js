import { h, Component } from 'preact'
import { connect } from 'react-redux'
import { Context, Node } from 'react-mathjax'

import style from './style.sass'

@connect(store => ({
  latex: store.input.latex
}))
export default class Mathjax extends Component {
  render (props) {
    let mathEl = 'Empty math'
    if (props.latex) {
      mathEl = <Node>{props.latex}</Node>
    }

    return (
      <div>
        <Context>
          {mathEl}
        </Context>
      </div>
    )
  }
}
