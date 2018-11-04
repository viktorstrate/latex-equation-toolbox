// imports-loader?ReactDOM=react-dom!imports-loader?React=react!
// import GoldenLayout from 'golden-layout'
// import * as GoldenLayout from 'golden-layout'
import * as React from 'react'
import * as jquery from 'jquery'
// require('golden-layout/src/css/goldenlayout-base.css')

// var GoldenLayout = require('golden-layout')({ react: React, jquery: jquery })
var GoldenLayout = require('golden-layout')
// const GoldenLayout = require('imports-loader?ReactDOM=react-dom!imports-loader?React=react!golden-layout')

import store from '../store'
import { actions as layoutActions } from '../reducers/layout'
import { saveLayout, getLayout } from '../persist-data'

const viewComponents = {
  'visual-input': import(/* webpackChunkName: "comp-visual-input" */ './VisualInput'),
  'code-input': import(/* webpackChunkName: "comp-code-input" */ './CodeInput'),
  'regular-input': import(/* webpackChunkName: "comp-regular-input" */ './RegularInput'),
  symbols: import(/* webpackChunkName: "comp-symbols" */ './Symbols'),
  preview: import(/* webpackChunkName: "comp-preview" */ './Preview'),
  equations: import(/* webpackChunkName: "comp-equations" */ './Equations'),
  'image-export': import(/* webpackChunkName: "comp-image-export" */ './ImageExport'),
  settings: import(/* webpackChunkName: "comp-settings" */ './Settings/Settings'),
}

export let layout = null
export const views = {
  Editor: [
    ['visual-input', 'Visual input'],
    ['code-input', 'Code input'],
    ['regular-input', 'Regular Math Input'],
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
    // link.href = `${
    //   process.env.NODE_ENV === 'production' ? '/latex-equation-toolbox' : ''
    // }/style/goldenlayout-${newDark ? 'dark' : 'light'}-theme.css`

    if (newDark) {
      link.href =
        'https://cdnjs.cloudflare.com/ajax/libs/golden-layout/1.5.9/css/goldenlayout-dark-theme.css'
    } else {
      link.href =
        'https://cdnjs.cloudflare.com/ajax/libs/golden-layout/1.5.9/css/goldenlayout-light-theme.css'
    }

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
    const savedLayout = getLayout(store)

    if (savedLayout && Object.keys(savedLayout).length !== 0) {
      layout = new GoldenLayout(savedLayout, element)
    } else {
      layout = new GoldenLayout(layoutConfig, element)
    }

    for (let category of Object.keys(views)) {
      for (let component of views[category]) {
        const i = viewComponentModules.indexOf(viewComponents[component[0]])
        const value = values[i]

        layout.registerComponent(component[0], value.default || value)
      }
    }

    layout.init()

    // const events = [
    //   'initialised',
    //   'windowOpened',
    //   'windowClosed',
    //   'itemDestroyed',
    //   'itemCreated',
    //   // 'componentCreated',
    //   // 'rowCreated',
    //   // 'columnCreated',
    //   // 'stackCreated',
    //   // 'tabCreated',
    // ]

    // for (let eventType of events) {
    //   layout.on(eventType, () => {
    //     console.log('saving from event', eventType)
    //     saveLayout(layout.toConfig())
    //   })
    // }

    layout.on('stateChanged', () => {
      console.log('layout state changed')
      saveLayout(layout.toConfig())
    })

    updateWindowOnResize(layout)

    store.dispatch(layoutActions.load())
  })
}
