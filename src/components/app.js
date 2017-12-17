import { h, Component } from 'preact'
import { Provider } from 'react-redux'

import store from '../store'
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
      <Provider store={store} >
        <div ref={layout => { this.layout = layout }} id='app' />
      </Provider>
    )
  }
}
