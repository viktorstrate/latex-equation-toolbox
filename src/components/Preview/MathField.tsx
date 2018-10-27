import * as React from 'react'
//import { Context, Node } from 'react-mathjax'
import * as MathStyle from './styles'
import CopyButton from './CopyButton'
import AlgebraLatex from 'algebra-latex'

// import style from './style.sass'
import loadMj2img from '../ImageExport/mathjax-setup'

interface Props {
  latex: string
}

interface State {
  svgData: string
}

export default class MathField extends React.Component<Props, State> {
  oldLatex = ''
  newestPromise = undefined

  constructor(props) {
    super(props)
    this.state = {
      svgData: '',
    }
  }

  updateMath() {
    let self = this
    loadMj2img().then(mj2img => {
      mj2img(this.props.latex, function(output) {
        self.setState({
          svgData: output.svgData,
        })
      })
    })
  }

  delayedUpdateMath() {
    let localPromise = new Promise(resolve => {
      console.log('Waiting a sec to update')
      setTimeout(resolve, 400)
    })
    this.newestPromise = localPromise

    let self = this

    localPromise.then(res => {
      if (self.newestPromise === localPromise) {
        self.updateMath()
      } else {
        console.log('A newer promise was found')
      }
    })
  }

  render() {
    let self = this
    if (this.props.latex !== this.oldLatex) {
      this.oldLatex = this.props.latex

      this.delayedUpdateMath()
    }

    return (
      <MathStyle.MathFieldDiv>
        <MathStyle.MathJaxStyle />
        <MathStyle.ImageWrapper>
          {<img src={this.state.svgData} />}
        </MathStyle.ImageWrapper>
        <MathStyle.CenterDiv>
          <CopyButton value={this.props.latex} name="Copy as latex" />
          <CopyButton
            value={new AlgebraLatex(this.props.latex).toMath()}
            name="Copy as text"
          />
        </MathStyle.CenterDiv>
      </MathStyle.MathFieldDiv>
    )
  }
}
