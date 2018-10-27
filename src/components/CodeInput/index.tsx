import * as React from 'react'
import { connect } from 'react-redux'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styled from 'styled-components'

import { actions } from '../../reducers/input'

require('codemirror/lib/codemirror.css')
require('codemirror/mode/stex/stex')
require('codemirror/theme/monokai.css')

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

  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.codeMirrorElm = null
  }

  onInputChange(editor, data, value) {
    this.props.changeLatex(value)
  }
  render() {
    let props = this.props

    if (
      this.codeMirrorElm !== null &&
      this.codeMirrorElm.codeMirror.getValue() !== props.latex
    ) {
      const codeMirror = this.codeMirrorElm.codeMirror
      codeMirror.setValue(props.latex)
      codeMirror.setCursor(codeMirror.lineCount(), 0)
    }

    return (
      <CodeMirrorStyled
        options={{
          theme: props.darkTheme ? 'monokai' : 'default',
        }}
        ref={el => {
          this.codeMirrorElm = el
        }}
        value={this.props.latex}
        onBeforeChange={this.onInputChange}
        onChange={() => {}}
      />
    )
  }
}

export default connect(
  state => ({
    latex: state.input.latex,
    darkTheme: state.general.darkTheme,
  }),
  actions
)(CodeInput)
