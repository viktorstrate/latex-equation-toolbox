import { h, Component } from 'preact'
import { connect } from 'react-redux'

import loadMj2img from './mathjax-setup'
import { actions } from '../../reducers/image-export'

interface PropsType {
  latex: string,
  dispatch(action: any)
}

declare global {
  interface window {
    MathJax: any
  }
}

@connect(store => ({
  latex: store.input.latex,
  imageExport: store.imageExport
}))
export default class ImageExport extends Component<PropsType, any> {

  oldLatex = ''

  generatePNG() {

    if (this.props.latex === this.oldLatex) {
      return
    }

    console.log('Generate png')

    let dispatch = this.props.dispatch

    loadMj2img()(`\\[${this.props.latex}\\]`, function(output){
      console.log('here', output)
      dispatch(actions.updateImage(output.img, output.svg))
      //document.getElementById("target").innerHTML = output.svg;
    })
  }

  render (props) {
    this.generatePNG()

    this.oldLatex = this.props.latex
    return <div>
      Image export view<br/>
      <div style={{
        backgroundColor: 'white'
      }}>
      <img src={props.imageExport.png} />
      </div>
    </div>
  }
}