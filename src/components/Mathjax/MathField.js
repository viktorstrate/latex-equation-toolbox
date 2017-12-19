import { h } from 'preact'
import { Context, Node } from 'react-mathjax'
import CopyButton from './CopyButton'

import style from './style.sass'

export default (props) => (
  <div className={style.mathfield}>
    <Context>
      <Node>
        {props.latex}
      </Node>
    </Context>
    <CopyButton value={props.latex} name='Copy as latex' />
  </div>
)
