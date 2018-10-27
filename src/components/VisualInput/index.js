import * as React from 'react'
import { connect } from 'react-redux'

// eslint-disable-next-line
//import MathQuill from 'exports-loader?window.MathQuill!imports-loader?window.jQuery=jquery!mathquill/build/mathquill.js'
//import 'mathquill/build/mathquill.css'

import style from './style.sass'

import { actions } from '../../reducers/input'

class InputField extends Component {
  constructor(props) {
    super(props)
    this.mathElement = null
    this.mathField = null
  }

  componentDidMount() {
    /*const self = this

    const config = {
      handlers: {
        edit: function() {
          if (self.mathField) {
            if (self.mathField.latex().trim() !== self.props.latex.trim()) {
              self.props.changeLatex(self.mathField.latex())
            }
          }
        },
      },
      restrictMismatchedBrackets: true,
    }

    this.mathField = MathQuill.MathField(this.mathElement, config)
    this.mathField.latex(this.props.latex)*/
  }

  render(props) {
    // if (this.mathField !== null && props.latex !== this.mathField.latex()) {
    //   this.mathField.latex(props.latex)
    // }

    return (
      // <div
      //   className={style.inputfield}
      //   ref={x => {
      //     this.mathElement = x
      //   }}
      // />
      <div>MathQuill element goes here</div>
    )
  }
}

export default connect(
  state => ({
    latex: state.input.latex,
  }),
  actions
)(InputField)
