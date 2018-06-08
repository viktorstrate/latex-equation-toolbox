import { h, Component } from 'preact'
import { connect } from 'react-redux'

import loadMj2img from './mathjax-setup'
import { actions } from '../../reducers/image-export'

let style = require('./style.sass')
let mathStyle = require('../Preview/style.sass')

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
  newestPromise = undefined

  generatePNG() {

    if (this.props.latex === this.oldLatex) {
      return
    }

    let dispatch = this.props.dispatch

    let localPromise = new Promise((resolve) => {
      setTimeout(resolve, 400)
    })
    this.newestPromise = localPromise

    let self = this

    function updateMath() {
      loadMj2img().then(mj2img => {
        mj2img(self.props.latex, function (output) {
          dispatch(actions.updateImage(output.img, output.svg, output.svgData))
          //document.getElementById("target").innerHTML = output.svg;
        })
      })
    }

    localPromise.then(res => {
      if (localPromise === self.newestPromise) {
        updateMath()
      }
    })


  }

  render(props) {
    this.generatePNG()

    let svgData = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(props.imageExport.svg)))

    this.oldLatex = this.props.latex
    return (
      <div className={style.scrollBox}>
        <div className={style.container}>
          <h2 className={style.title}>Image export view</h2>
          You can drag and drop the images below, into other applications or a folder.<br /><br />
          SVG<br />
          <div className={mathStyle.math}>
            <img src={props.imageExport.svgData} />
          </div><br />
          PNG<br />
          <div className={mathStyle.math}>
            <img src={props.imageExport.png} />
          </div>
        </div>
      </div>
    )
  }
}