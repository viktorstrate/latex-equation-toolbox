import * as React from 'react'
import { Provider } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import store from '../store'
import setupLayout from './Layout'
import Toolbar from './Toolbar'

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px) !important;
`

export default class App extends React.Component {
  layout: HTMLDivElement

  constructor(props) {
    super(props)
    this.layout = null
  }

  updateMathInput = latex => {
    this.setState({ mathInput: latex })
  }

  componentDidMount() {
    setupLayout(this.layout)
    console.log('layout setup called')
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Toolbar />
          <Container
            ref={layout => {
              this.layout = layout
            }}
            id="app"
          />
        </div>
      </Provider>
    )
  }
}
