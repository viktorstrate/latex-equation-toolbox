import { h, Component } from 'preact'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MathField from './MathField'
import Variables from './Variables'

import style from './style.sass'

@connect(store => ({
  latex: store.input.latex,
  variables: store.calculations.variables
}))
export default class Preview extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor (props) {
    super(props)
  }

  render (props) {
    let mathEl = 'Empty math'

    if (props.latex) {
      mathEl = <MathField latex={props.latex} />
    }

    return (
      <div className={style.container}>
        <div>
          <div className={style.header}>Math:</div> {mathEl}
          <hr />
          <Variables store={props.store} />
        </div>
      </div>
    )
  }
}
