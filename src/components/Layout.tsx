// imports-loader?ReactDOM=react-dom!imports-loader?React=react!
// import GoldenLayout from 'golden-layout'
// import * as GoldenLayout from 'golden-layout'
import * as React from 'react'
import * as jquery from 'jquery'
import 'golden-layout/src/css/goldenlayout-base.css'

var GoldenLayout = require('golden-layout')({ react: React, jquery: jquery })

import store from '../store'
import { actions as layoutActions } from '../reducers/layout'

const viewComponents = {
  'visual-input': import('./VisualInput'),
  'code-input': import('./CodeInput'),
  symbols: import('./Symbols'),
  preview: import('./Preview'),
  equations: import('./Equations'),
  'image-export': import('./ImageExport'),
  settings: import('./Settings/Settings'),
}

export let layout = null
export const views = {
  Editor: [
    ['visual-input', 'Visual input'],
    ['code-input', 'Code input'],
    ['symbols', 'Symbols'],
  ],
  View: [
    ['preview', 'Preview'],
    ['equations', 'Equations'],
    ['image-export', 'Image Export'],
    ['settings', 'Settings'],
  ],
}

const layoutConfig = {
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'column',
          content: [
            {
              title: 'Visual Input',
              type: 'react-component',
              component: 'visual-input',
              props: {
                store,
              },
            },
            {
              title: 'Code Input',
              type: 'react-component',
              component: 'code-input',
              props: {
                store,
              },
            },
          ],
        },
        {
          type: 'column',
          content: [
            {
              type: 'stack',
              content: [
                {
                  title: 'Image Export',
                  type: 'react-component',
                  component: 'image-export',
                  props: {
                    store,
                  },
                },
                {
                  title: 'Preview',
                  type: 'react-component',
                  component: 'preview',
                  props: {
                    store,
                  },
                },
                {
                  title: 'Equations',
                  type: 'react-component',
                  component: 'equations',
                  props: {
                    store,
                  },
                },
              ],
            },
            {
              title: 'Symbols',
              type: 'react-component',
              component: 'symbols',
              props: { store },
            },
          ],
        },
      ],
    },
  ],
}

let prevTheme = undefined
function updateTheme(newDark) {
  if (prevTheme !== newDark) {
    console.log('Updating theme')

    let link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = `${
      process.env.NODE_ENV === 'production' ? '/latex-equation-toolbox' : ''
    }/style/goldenlayout-${newDark ? 'dark' : 'light'}-theme.css`
    link.id = 'layout-theme-style'

    let oldStyle
    if ((oldStyle = document.getElementById('layout-theme-style'))) {
      oldStyle.remove()
    }

    document.getElementsByTagName('head')[0].appendChild(link)

    prevTheme = newDark
  }
}

store.subscribe(() => {
  const state = store.getState()
  updateTheme(state.settings.darkTheme)
})

updateTheme(store.getState().settings.darkTheme)

function updateWindowOnResize(layout) {
  var resizeTimeout
  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null
        console.log('Updating layout size')
        layout.updateSize()
      }, 20)
    }
  }

  window.addEventListener('resize', resizeThrottler, false)
}

export default element => {
  const viewComponentModules = Object.keys(viewComponents).map(
    key => viewComponents[key]
  )

  Promise.all(viewComponentModules).then(values => {
    layout = new GoldenLayout(layoutConfig, element)

    for (let category of Object.keys(views)) {
      for (let component of views[category]) {
        const i = viewComponentModules.indexOf(viewComponents[component[0]])
        const value = values[i]

        layout.registerComponent(component[0], value.default || value)
      }
    }

    layout.init()

    updateWindowOnResize(layout)

    store.dispatch(layoutActions.load())
  })
}
