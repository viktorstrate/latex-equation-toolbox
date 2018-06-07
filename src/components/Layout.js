// eslint-disable-next-line
import GoldenLayout from 'imports-loader?ReactDOM=react-dom!imports-loader?React=react!golden-layout'
import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

import store from '../store'
import { actions as layoutActions } from '../reducers/layout'

const viewComponents = {
  'visual-input': import('./VisualInput'),
  'code-input': import('./CodeInput'),
  'symbols': import('./Symbols'),
  'preview': import('./Preview'),
  'equations': import('./Equations')
}

export let layout = null
export const views = {
  Editor: [
    ['visual-input', 'Visual input'],
    ['code-input', 'Code input'],
    ['symbols', 'Symbols']
  ],
  View: [
    ['preview', 'Preview'],
    ['equations', 'Equations']
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
      content: [
        {
          type: 'stack',
          content: [
            {
              title: 'Preview',
              type: 'react-component',
              component: 'preview',
              props: {
                store
              }
            },
            {
              title: 'Equations',
              type: 'react-component',
              component: 'equations',
              props: {
                store
              }
            }]
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
  console.log('View components loading')
  Promise.all(Object.values(viewComponents)).then(values => {
    console.log('View components loaded')
    layout = new GoldenLayout(layoutConfig, element)
    console.log('golden layout loaded')

    for (let category of Object.keys(views)) {
      for (let component of views[category]) {
        console.log('item', category, component)
        const i = Object.values(viewComponents).indexOf(viewComponents[component[0]])
        const value = values[i]
        console.log('here', value)
        layout.registerComponent(component[0], value.default || value)
        console.log('item end', component)
      }
      console.log('Outside', category)
    }

    // Object.keys(views).forEach(category => {
    //   views[category].forEach(component => {
    //     const i = Object.values(viewComponents).indexOf(viewComponents[component[0]])
    //     const value = values[i]
    //     layout.registerComponent(component[0], value.default || value)
    //   })
    // })

    console.log('Right before layout load')
    layout.init()
    store.dispatch(layoutActions.load())
    console.log('Layout loaded')
  })
}
