import * as React from 'react'
import { connect } from 'react-redux'

import MathQuill, { addStyles as addMathquillStyles } from 'react-mathquill'
import styled, { createGlobalStyle } from 'styled-components'

addMathquillStyles()

interface MathQuillStylesProps {
  darkTheme: boolean
}

const MathquillStyles = createGlobalStyle<MathQuillStylesProps>`
  .mq-editable-field {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    padding: 20px;
    border: none !important;
  }

  .mq-cursor {
    border-color: ${props => (props.darkTheme ? 'white' : 'black')} !important;
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
`

import { actions } from '../../reducers/input'

interface Props {
  latex: string
  darkTheme: boolean
  changeLatex(latex: string)
}

class InputField extends React.Component<Props> {
  mathElement: HTMLElement | null
  mathField: any

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

  render() {
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
      <Container>
        <MathquillStyles darkTheme={this.props.darkTheme} />
        <MathQuill
          latex={this.props.latex} // Initial latex value for the input field
          onChange={latex => {
            if (latex.trim() !== this.props.latex.trim()) {
              this.props.changeLatex(latex)
            }
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
)(InputField)
