import * as React from 'react'
import { connect } from 'react-redux'
import {Controlled as CodeMirror} from 'react-codemirror2'

import { actions } from '../../reducers/input'

require('codemirror/lib/codemirror.css')
require('codemirror/mode/stex/stex')
require('codemirror/theme/monokai.css')

const style = require('./style.sass')

interface PropsType {
  latex:string,
  darkTheme: boolean,
  changeLatex(value:string):void
}

interface StateType {

}

@connect(state => ({
  latex: state.input.latex,
  darkTheme: state.general.darkTheme
}), actions)
class CodeInput extends React.Component<PropsType, StateType> {
  codeMirrorElm:any

  constructor (props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.codeMirrorElm = null
  }

  onInputChange (editor, data, value) {
    this.props.changeLatex(value)
  }
  render () {
    let props = this.props

    if (this.codeMirrorElm !== null &&
      this.codeMirrorElm.codeMirror.getValue() !== props.latex) {
      const codeMirror = this.codeMirrorElm.codeMirror
      codeMirror.setValue(props.latex)
      codeMirror.setCursor(codeMirror.lineCount(), 0)
    }

    return (
      <CodeMirror
        options={{
          theme: props.darkTheme ? 'monokai' : 'default'
        }}
        ref={el => { this.codeMirrorElm = el }}
        className={style.codeInput}
        value={this.props.latex}
        onBeforeChange={this.onInputChange}
        onChange={() => {}} />
    )
  }
}

export default CodeInput
