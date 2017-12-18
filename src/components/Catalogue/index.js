import { h, Component } from 'preact'
import { connect } from 'react-redux'
import classnames from 'classnames'

import { actions } from '../../reducers/catalogue'
import { actions as inputActions } from '../../reducers/input'
import style from './style.sass'

const changeLatex = inputActions.changeLatex

@connect(state => ({
  ...state.catalogue,
  latex: state.input.latex
}), {
  ...actions,
  changeLatex
})
class Catalogue extends Component {
  constructor (props) {
    super(props)

    this.toggleTab = this.toggleTab.bind(this)
    this.insertSymbol = this.insertSymbol.bind(this)
  }

  loadCategory (name) {
    const data = require('./signs/' + name + '/data.json')

    const visibleStyle = {
      display: 'inline'
    }

    const self = this

    let elements = data.map(item => {
      const icon = require('./signs/' + name + '/' + item.icon)
      return <div
        style={self.props.visibleTabs[name] ? visibleStyle : null}
        className={classnames(style['catalogue-item'])}
        key={item.code}
        onClick={this.insertSymbol.bind(null, item.code)}>
        <img src={icon} />
      </div>
    })

    return (
      <div>
        {elements}
      </div>
    )
  }

  loadCategories () {
    const categories = require('./signs/categories.json')

    let elements = categories.map(category => (
      <div>
        <div onClick={this.toggleTab} >{category}</div>
        {this.loadCategory(category)}
      </div>
    ))

    return (
      <div>
        {elements}
      </div>
    )
  }

  insertSymbol (symbol) {
    this.props.changeLatex(this.props.latex + symbol)
  }

  toggleTab (category) {
    console.log('Changing tab', category.target.innerText)
    this.props.toggleTab(category.target.innerText)
  }

  render () {
    return (
      <div>
        {this.loadCategories()}
      </div>
    )
  }
}

export default Catalogue
