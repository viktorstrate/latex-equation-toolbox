import * as React from 'react'
//import { Context, Node } from 'react-mathjax'
import * as MathStyle from '../styles'
import CopyButton from './CopyButton'
const AlgebraLatex = require('algebra-latex')
import * as _ from 'lodash'

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

  render() {
    let self = this
    if (this.props.latex !== this.oldLatex) {
      this.oldLatex = this.props.latex

      _.debounce(this.updateMath, 400)
    }

    let mathString = null
    if (this.props.latex) {
      try {
        mathString = new AlgebraLatex().parseLatex(this.props.latex).toMath()
      } catch (e) {}
    }

    return (
      <MathStyle.MathFieldDiv>
        <MathStyle.MathJaxStyle />
        <MathStyle.ImageWrapper>
          {<img src={this.state.svgData} />}
        </MathStyle.ImageWrapper>
        <MathStyle.CenterDiv>
          <CopyButton value={this.props.latex} name="Copy as latex" />
          <CopyButton value={mathString} name="Copy as text" />
        </MathStyle.CenterDiv>
      </MathStyle.MathFieldDiv>
    )
  }
}
