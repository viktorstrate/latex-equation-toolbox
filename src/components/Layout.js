// eslint-disable-next-line
import GoldenLayout from 'imports-loader?ReactDOM=react-dom!imports-loader?React=react!golden-layout'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

import store from '../store'
import { actions as layoutActions } from '../reducers/layout'

import VisualInput from './VisualInput'
import CodeInput from './CodeInput'
import Symbols from './Symbols'
import Mathjax from './Mathjax'

export let layout = null
export const views = {
  editor: [
    ['visual-input', VisualInput, 'Visual input'],
    ['code-input', CodeInput, 'Code input'],
    ['symbols', Symbols, 'Symbols']
  ],
  viewer: [
    ['mathjax', Mathjax, 'Preview']
  ]
}

const layoutConfig = {
  content: [{
    type: 'row',
    content: [{
      type: 'column',
      content: [{
        title: 'Visual Input',
        type: 'react-component',
        component: 'visual-input',
        props: {
          store
        }
      }, {
        title: 'Code Input',
        type: 'react-component',
        component: 'code-input',
        props: {
          store
        }
      }]
    }, {
      type: 'column',
      content: [{
        title: 'Preview',
        type: 'react-component',
        component: 'mathjax',
        props: {
          store
        }
      }, {
        title: 'Symbols',
        type: 'react-component',
        component: 'symbols',
        props: { store }
      }]
    }]
  }]
}

export default (element) => {
  layout = new GoldenLayout(layoutConfig, element)
  Object.keys(views).forEach(category => {
    views[category].forEach(component => {
      layout.registerComponent(component[0], component[1])
    })
  })

  layout.init()
  store.dispatch(layoutActions.load())
}
