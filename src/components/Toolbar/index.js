import { h, Component } from 'preact'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import style from './style.sass'
import { views, layout } from '../Layout'

@connect(state => ({
  layoutLoaded: state.layout.loaded
}))
export default class Toolbar extends Component {
  constructor (props) {
    super(props)
    this.registerDragSource = this.registerDragSource.bind(this)
  }

  static contextTypes = {
    store: PropTypes.object
  }

  registerDragSource (element, component) {
    if (this.props.layoutLoaded) {
      console.log('Add layout loaded')
      layout.createDragSource(element, {
        title: component[1],
        type: 'react-component',
        component: component[0],
        props: {
          store: this.context.store
        }
      })
    }
  }

  render (props) {
    const self = this
    const viewElements = Object.keys(views).map(category => {
      const elements = views[category].map(component => {
        const element = <div ref={el => {
          self.registerDragSource(el, component)
        }} className={style.component} key={component[0]}>{component[1]}</div>

        return element
      })

      return (
        <div className={style.category}>
          {category}
          {elements}
        </div>
      )
    })
    return (
      <div className={style.header}>
        { viewElements }
      </div>
    )
  }
}
