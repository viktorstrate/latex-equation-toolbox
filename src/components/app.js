import { h, Component } from 'preact'

import setupLayout from './Layout'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.layout = null
  }

  updateMathInput = latex => {
    this.setState({ mathInput: latex })
  }

  componentDidMount () {
    setupLayout(this.layout)
  }

  render (props, state) {
    return (
      <div ref={layout => { this.layout = layout }} id='app' />
    )
  }
}
