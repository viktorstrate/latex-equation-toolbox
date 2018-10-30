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
    font-size: 26px !important;
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
import { Store } from 'redux'

interface Props {
  latex: string
  darkTheme: boolean
  store: Store
  changeLatex(latex: string)
}

class InputField extends React.Component<Props> {
  mathElement: HTMLElement | null
  mathField: any
  previousLatex: string
  unsubscribe: Function

  constructor(props) {
    super(props)
    this.mathElement = null
    this.mathField = null
    this.previousLatex = null

    this.updateLatex.bind(this)
  }

  componentDidMount() {
    // this.unsubscribe = this.props.store.subscribe(() => {
    //   const state = this.props.store.getState()
    //   const newLatex = state.input.latex
    //   if (newLatex != this.previousLatex) {
    //     this.previousLatex = newLatex
    //     if (this.mathElement.getAttribute('class').includes('mq-focused')) {
    //       this.updateLatex()
    //     }
    //   }
    // })
  }

  updateLatex() {
    this.mathField.latex(this.props.store.getState().input.latex)
  }

  componentWillUnmount() {
    // this.unsubscribe()
  }

  render() {
    return (
      <Container
        onClick={() => {
          this.updateLatex()
        }}
      >
        <MathquillStyles darkTheme={this.props.darkTheme} />
        <MathQuill
          ref={x => {
            if (this.mathElement == null) {
              this.mathElement = x.element
            }
          }}
          latex={this.props.latex} // Initial latex value for the input field
          onChange={latex => {
            if (latex.trim() !== this.props.latex.trim()) {
              this.props.changeLatex(latex)
            }
          }}
          mathquillDidMount={instance => {
            this.mathField = instance
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
