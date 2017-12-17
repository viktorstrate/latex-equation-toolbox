// eslint-disable-next-line
import GoldenLayout from 'imports-loader?ReactDOM=react-dom!imports-loader?React=react!golden-layout'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

import store from '../store'

import VisualInput from './VisualInput'
import CodeInput from './CodeInput'

const layoutConfig = {
  content: [{
    type: 'row',
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
  }]
}

export default (element) => {
  const layout = new GoldenLayout(layoutConfig, element)

  layout.registerComponent('visual-input', VisualInput)
  layout.registerComponent('code-input', CodeInput)

  layout.init()
}
