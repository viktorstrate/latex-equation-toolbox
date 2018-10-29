import * as React from 'react'
import { connect } from 'react-redux'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styled from 'styled-components'

import { actions } from '../../reducers/input'

require('codemirror/lib/codemirror.css')
require('codemirror/mode/stex/stex')
require('codemirror/theme/monokai.css')
require('codemirror/theme/base16-light.css')

const CodeMirrorStyled = styled(CodeMirror)`
  height: 100vh;
  background-color: #222 !important;
`

interface PropsType {
  latex: string
  darkTheme: boolean
  changeLatex(value: string): void
}

interface StateType {}

class CodeInput extends React.Component<PropsType, StateType> {
  codeMirrorElm: any
  editor: CodeMirror.Editor

  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.codeMirrorElm = null
    this.editor = null
  }

  onInputChange(editor, data, value) {
    this.props.changeLatex(value)
  }
  render() {
    const themeName = this.props.darkTheme ? 'monokai' : 'base16-light'

    return (
      <CodeMirrorStyled
        options={{
          theme: themeName,
        }}
        ref={el => {
          this.codeMirrorElm = el
        }}
        value={this.props.latex}
        onBeforeChange={this.onInputChange}
        onChange={() => {}}
        editorDidMount={x => {
          this.editor = x
        }}
      />
    )
  }
}

export default connect(
  state => ({
    latex: state.input.latex,
    darkTheme: state.settings.darkTheme,
  }),
  actions
)(CodeInput)
