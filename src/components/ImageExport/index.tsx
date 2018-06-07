import { h, Component } from 'preact'
import { connect } from 'react-redux'

import './mathjax-setup'

interface PropsType {
  latex: string
}

declare global {
  interface window {
    MathJax: any
  }
}

@connect(store => ({
  latex: store.input.latex
}))
export default class ImageExport extends Component<PropsType, any> {

  generatePNG() {
    console.log('Generate png')
    // loadFunc()(`\\[${this.props.latex}\\]`, function(output){
    //   console.log('here', output)
    //   //document.getElementById("target").innerHTML = output.svg;
    // })
  }

  render (props) {
    this.generatePNG()
    return <div>Image export view<br/>{props.latex}</div>
  }
}