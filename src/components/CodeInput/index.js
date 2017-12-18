import { h, Component } from 'preact'
import { connect } from 'react-redux'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/stex/stex'
import 'codemirror/theme/monokai'

import { actions } from '../../reducers/input'
import style from './style.sass'

@connect(state => ({
  latex: state.input.latex
}), actions)
class CodeInput extends Component {
  constructor (props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.codeMirrorElm = null
  }

  onInputChange (value) {
    this.props.changeLatex(value)
  }
  render (props) {
    if (this.codeMirrorElm !== null &&
      this.codeMirrorElm.codeMirror.getValue() !== props.latex) {
      const codeMirror = this.codeMirrorElm.codeMirror
      codeMirror.setValue(props.latex)
      codeMirror.setCursor(codeMirror.lineCount(), 0)
    }

    return (
      <CodeMirror
        mode='stex'
        options={{
          theme: 'monokai'
        }}
        ref={el => { this.codeMirrorElm = el }}
        className={style.codeInput}
        value={this.props.latex}
        onChange={this.onInputChange} />
    )
  }
}

export default CodeInput
