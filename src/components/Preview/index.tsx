import * as React from 'react'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import * as MathStyle from './styles'

import MathField from './MathField'
import Variables from './Variables'

interface Props {
  latex: string
  store: any
}

class Preview extends React.Component<Props> {
  static contextTypes = {
    store: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  render() {
    let mathEl = <div>Empty math</div>

    if (this.props.latex) {
      mathEl = <MathField latex={this.props.latex} />
    }

    return (
      <MathStyle.Container>
        <div>
          <MathStyle.Header>Preview rendered math</MathStyle.Header> {mathEl}
          <Variables store={this.props.store} />
        </div>
      </MathStyle.Container>
    )
  }
}

export default connect(store => ({
  latex: store.input.latex,
  variables: store.calculations.variables,
}))(Preview)
