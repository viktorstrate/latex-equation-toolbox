// eslint-disable-next-line
import GoldenLayout from 'imports-loader?ReactDOM=react-dom!imports-loader?React=react!golden-layout'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

import store from '../store'
import { actions as layoutActions } from '../reducers/layout'

const VisualInput = import('./VisualInput')
const CodeInput = import('./CodeInput')
const Symbols = import('./Symbols')
const Mathjax = import('./Mathjax')

export let layout = null
export const views = {
  editor: [
    ['visual-input', 0, 'Visual input'],
    ['code-input', 1, 'Code input'],
    ['symbols', 2, 'Symbols']
  ],
  viewer: [
    ['mathjax', 3, 'Preview']
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
  Promise.all([
    VisualInput, CodeInput, Symbols, Mathjax
  ]).then(values => {
    console.log(values)

    layout = new GoldenLayout(layoutConfig, element)
    Object.keys(views).forEach(category => {
      views[category].forEach(component => {
        layout.registerComponent(component[0], values[component[1]].default || values[component[1]])
      })
    })

    layout.init()
    store.dispatch(layoutActions.load())
  })
}
