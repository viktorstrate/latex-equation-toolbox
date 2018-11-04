import * as React from 'react'
import { connect } from 'react-redux'
import { Controlled as CodeMirror } from 'react-codemirror2'
import styled, { createGlobalStyle } from 'styled-components'
import { actions } from '../../reducers/input'
import AlgebraLatex from 'algebra-latex'

require('codemirror/lib/codemirror.css')
require('codemirror/mode/stex/stex')
require('codemirror/theme/monokai.css')
require('codemirror/theme/base16-light.css')

const CodeMirrorGlobalStyles = createGlobalStyle`
  .CodeMirror {
    height: 100% !important;
  }
`

const Container = styled.div`
  height: 100%;
`

const CodeMirrorStyled = styled(CodeMirror)`
  height: 100vh;
  background-color: #222 !important;
`

interface PropsType {
  latex: string
  darkTheme: boolean
  changeLatex(value: string): void
}

interface State {
  mathString: string
}

class RegularInput extends React.Component<PropsType, State> {
  codeMirrorElm: any
  editor: CodeMirror.Editor
  oldLatex: string

  constructor(props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
    this.codeMirrorElm = null
    this.editor = null
    this.oldLatex = props.latex

    this.state = {
      mathString: this.calculateMathString(props.latex),
    }
  }

  onInputChange(editor, data, value) {
    // this.props.changeLatex(value)
    console.log('Changed regular input', value)

    this.setState({
      mathString: value,
    })

    this.updateLatex(value)
  }

  calculateMathString(latex: string): string {
    return new AlgebraLatex().parseLatex(latex).toMath()
  }

  updateLatex(math: string) {
    this.oldLatex = this.props.latex
    try {
      const newLatex = new AlgebraLatex().parseMath(math).toLatex()

      this.props.changeLatex(newLatex)
    } catch (e) {
      console.log('Could not parse to latex:', math)
    }
  }

  updateMath(latex: string) {
    this.oldLatex = this.props.latex
    try {
      const newMath = new AlgebraLatex().parseLatex(latex).toMath()

      this.setState({
        mathString: newMath,
      })
    } catch (e) {
      console.log('Could not parse to math:', latex)
    }
  }

  render() {
    const themeName = this.props.darkTheme ? 'monokai' : 'base16-light'

    if (this.oldLatex != this.props.latex) {
      this.updateMath(this.props.latex)
    }

    return (
      <Container>
        <CodeMirrorGlobalStyles />
        <CodeMirrorStyled
          options={{
            theme: themeName,
            lineWrapping: true,
          }}
          ref={el => {
            this.codeMirrorElm = el
          }}
          value={this.state.mathString}
          onBeforeChange={this.onInputChange}
          onChange={() => {}}
          editorDidMount={x => {
            this.editor = x
          }}
        />
      </Container>
    )
  }
}

export default connect(
  state => ({
    latex: state.input.latex,
    darkTheme: state.settings.darkTheme,
  }),
  actions
)(RegularInput)
