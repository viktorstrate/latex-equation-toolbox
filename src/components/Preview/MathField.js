import React from 'react'
//import { Context, Node } from 'react-mathjax'
import CopyButton from './CopyButton'
import AlgebraLatex from 'algebra-latex'

import style from './style.sass'
import loadMj2img from '../ImageExport/mathjax-setup'

export default class MathField extends React.Component {
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

  render(props) {
    let self = this
    if (props.latex !== this.oldLatex) {
      this.oldLatex = props.latex

      this.delayedUpdateMath()
    }

    return (
      <div className={style.mathfield}>
        <div className={style.math}>{<img src={this.state.svgData} />}</div>
        <div className={style.center}>
          <CopyButton value={props.latex} name="Copy as latex" />
          <CopyButton
            value={new AlgebraLatex(props.latex).toMath()}
            name="Copy as text"
          />
        </div>
      </div>
    )
  }
}
