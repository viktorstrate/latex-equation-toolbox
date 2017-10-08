import { h, Component } from 'preact'

// eslint-disable-next-line
import MathQuill from 'exports-loader?window.MathQuill!imports-loader?window.jQuery=jquery!mathquill/build/mathquill.js'
import style from './style.sass'

export default class InputField extends Component {
  constructor (props) {
    super(props)
    this.mathElement = null
    this.mathField = null
  }

  componentDidMount () {
    const self = this

    const config = {
      handlers: {
        edit: function () {
          if (self.mathField) {
            console.log('Mathfield modified', self.mathField.latex())

            if (self.props.onUpdate) {
              self.props.onUpdate(self.mathField.latex())
            }
          }
        }
      },
      restrictMismatchedBrackets: true
    }

    this.mathField = MathQuill.MathField(this.mathElement, config)
  }

  render () {
    return (
      <div className={style.inputfield} ref={x => { this.mathElement = x }} />
    )
  }
}
