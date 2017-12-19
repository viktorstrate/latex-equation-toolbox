// eslint-disable-next-line
import GoldenLayout from 'imports-loader?ReactDOM=react-dom!imports-loader?React=react!golden-layout'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

import store from '../store'
import { actions as layoutActions } from '../reducers/layout'

import VisualInput from './VisualInput'
import CodeInput from './CodeInput'
import Catalogue from './Catalogue'
import Mathjax from './Mathjax'

export let layout = null
export const views = {
  editor: [
    ['visual-input', VisualInput, 'Visual input'],
    ['code-input', CodeInput, 'Code input'],
    ['catalogue', Catalogue, 'Catalogue']
  ],
  viewer: [
    ['mathjax', Mathjax, 'Mathjax view']
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
      title: 'Catalogue',
      type: 'react-component',
      component: 'catalogue',
      props: { store }
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
