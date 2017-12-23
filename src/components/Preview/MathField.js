import { h } from 'preact'
import { Context, Node } from 'react-mathjax'
import CopyButton from './CopyButton'
import AlgebraLatex from 'algebra-latex'

import style from './style.sass'

export default (props) => (
  <div className={style.mathfield}>
    <Context>
      <Node>
        {props.latex}
      </Node>
    </Context>
    <div className={style.center}>
      <CopyButton value={props.latex} name='Copy as latex' />
      <CopyButton value={new AlgebraLatex(props.latex).toMath()} name='Copy as text' />
    </div>
  </div>
)
