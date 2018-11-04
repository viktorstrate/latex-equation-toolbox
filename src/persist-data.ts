import { Store } from 'redux'

var GoldenLayout = require('golden-layout')

// Remove props
function setConfigProps(config, props) {
  if (config == null) {
    return null
  }

  // if (config.type && config.type == 'stack') {
  //   return setConfigProps(config.content[0], props)
  // }

  let newConfig: any = {}

  if (config.title) newConfig.title = config.title
  if (config.type) {
    if (config.type == 'component') {
      newConfig.type = 'react-component'
    } else {
      newConfig.type = config.type
    }
  }
  if (config.component) {
    newConfig.component = config.component
    newConfig.props = props
  }

  if (config.content == null) {
    return newConfig
  }

  newConfig.content = []

  for (let i = 0; ; i++) {
    let item = config.content[i]

    if (typeof item == 'undefined') {
      break
    }

    newConfig.content[i] = setConfigProps(item, props)
  }

  return newConfig
}

export function saveLayout(config): void {
  console.log('saving layout...')
  // Remove props
  config = setConfigProps(config, {})

  console.log('save layout config', config)
  localStorage.setItem('golden-layout-config', JSON.stringify(config))
}

export function getLayout(store: Store): any {
  console.log('getLayout')
  let config = JSON.parse(localStorage.getItem('golden-layout-config'))

  if (config == null) {
    return null
  }

  console.log('parse getLayout', config)
  // Remove props
  config = setConfigProps(config, { store })

  console.log('return getLayout', config)
  return config
}
