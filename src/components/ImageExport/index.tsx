import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import loadMj2img from './mathjax-setup'
import { actions } from '../../reducers/image-export'

const ScrollBox = styled.div`
  overflow-y: scroll;
  height: 100%;
`

const Container = styled.div`
  margin: 8px 12px 16px;
`

const Title = styled.h2`
  margin: 0;
`

const MathImageWrapper = styled.div`
  background-color: white;
  display: table;
`

interface PropsType {
  latex: string
  imageExport: any
  dispatch(action: any)
}

declare global {
  interface window {
    MathJax: any
  }
}

class ImageExport extends React.Component<PropsType, any> {
  oldLatex = ''
  newestPromise = undefined

  generatePNG() {
    if (this.props.latex === this.oldLatex) {
      return
    }

    let dispatch = this.props.dispatch

    let localPromise = new Promise(resolve => {
      setTimeout(resolve, 400)
    })
    this.newestPromise = localPromise

    let self = this

    function updateMath() {
      loadMj2img().then(mj2img => {
        mj2img(self.props.latex, function(output) {
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

  render() {
    this.generatePNG()

    let svgData =
      'data:image/svg+xml;base64,' +
      window.btoa(unescape(encodeURIComponent(this.props.imageExport.svg)))

    this.oldLatex = this.props.latex
    return (
      <ScrollBox>
        <Container>
          <Title>Image export view</Title>
          You can drag and drop the images below, into other applications or a
          folder.
          <br />
          <br />
          SVG
          <br />
          <MathImageWrapper>
            <img src={this.props.imageExport.svgData} />
          </MathImageWrapper>
          <br />
          PNG
          <br />
          <MathImageWrapper>
            <img src={this.props.imageExport.png} />
          </MathImageWrapper>
        </Container>
      </ScrollBox>
    )
  }
}

export default connect(store => ({
  latex: store.input.latex,
  imageExport: store.imageExport,
}))(ImageExport)
