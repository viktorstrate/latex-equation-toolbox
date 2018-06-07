import { h, Component } from 'preact'
//import { Context, Node } from 'react-mathjax'
import CopyButton from './CopyButton'
import AlgebraLatex from 'algebra-latex'

import style from './style.sass'
import loadMj2img from '../ImageExport/mathjax-setup'

export default class MathField extends Component {

  oldLatex = ''

  constructor (props) {
    super(props)
    this.state = {
      svgData: ''
    }
  }

  render (props) {
    let self = this
    if (props.latex !== this.oldLatex) {
      this.oldLatex = props.latex
      // loadMj2img()(this.props.latex, (output) => {
      //   console.log('Preview result', output)
      //   // self.setState({
      //   //   oldLatex: props.latex,
      //   //   svgData: output.svgData
      //   // })
      // })
      loadMj2img().then(mj2img => {
        console.log('mj2img preview', mj2img)
        mj2img(this.props.latex, function(output){
          console.log('here preview', output)
          //dispatch(actions.updateImage(output.img, output.svg, output.svgData))
          //document.getElementById("target").innerHTML = output.svg;
          self.setState({
            svgData: output.svgData
          })
        })
      })
    }

    return (
      <div className={style.mathfield}>
        {<img className={style.math} src={this.state.svgData} />}
        <div className={style.center}>
          <CopyButton value={props.latex} name='Copy as latex' />
          <CopyButton value={new AlgebraLatex(props.latex).toMath()} name='Copy as text' />
        </div>
      </div>
    )
  }
}
