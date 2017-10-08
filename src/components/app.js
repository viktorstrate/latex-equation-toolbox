import { h, Component } from 'preact'

import InputField from './inputfield'
// import Processor from './Processor'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      mathInput: ''
    }
  }

  updateMathInput = latex => {
    this.setState({ mathInput: latex })
  }

  render (props, state) {
    return (
      <div id='app'>
        <h1>Online Algebra System</h1>
        <InputField onUpdate={this.updateMathInput} />
        {/* <Processor input={state.mathInput} /> */}
      </div>
    )
  }
}
