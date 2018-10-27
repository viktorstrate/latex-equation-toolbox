import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { actions } from '../../reducers/symbols'
import { actions as inputActions } from '../../reducers/input'
// import style from './style.sass'

const changeLatex = inputActions.changeLatex

interface ItemDivProps {
  show: boolean
}

const ItemDiv = styled.div<ItemDivProps>`
  display: ${props => (props.show ? 'inline' : 'none')};
`

const Category = styled.div`
  background-color: #333;
  margin: 4px 0;
  padding: 4px;
  cursor: pointer;
  user-select: none;
`

const Container = styled.div`
  overflow: scroll;
  height: 100%;
`

enum Sign {
  arrows,
  greek,
}

interface SignItem {
  code: string
  icon: string
}

interface Props {
  latex: string
  visibleTabs: Sign[]
  changeLatex(string)
  toggleTab(string)
}

class Symbols extends React.Component<Props> {
  constructor(props) {
    super(props)

    this.toggleTab = this.toggleTab.bind(this)
    this.insertSymbol = this.insertSymbol.bind(this)
  }

  loadCategory(sign: Sign) {
    const signName = Sign[sign]
    const data = require('./signs/' + signName + '/data.json')

    const visibleStyle = {
      display: 'inline',
    }

    const self = this

    let elements = data.map((item: SignItem) => {
      const icon = require('./signs/' + signName + '/' + item.icon)
      return (
        <ItemDiv
          show={self.props.visibleTabs.includes(sign)}
          key={item.code}
          onClick={this.insertSymbol.bind(null, item.code)}
        >
          <img src={icon} />
        </ItemDiv>
      )
    })

    return <div>{elements}</div>
  }

  loadCategories() {
    const categories = require('./signs/categories.json')

    let elements = categories.map(category => (
      <div>
        <Category onClick={this.toggleTab}>{category}</Category>
        {this.loadCategory(category)}
      </div>
    ))

    return <div>{elements}</div>
  }

  insertSymbol(symbol) {
    this.props.changeLatex(this.props.latex + symbol)
  }

  toggleTab(category) {
    console.log('Changing tab', category.target.innerText)
    this.props.toggleTab(category.target.innerText)
  }

  render() {
    return <Container>{this.loadCategories()}</Container>
  }
}

export default connect(
  state => ({
    ...state.symbols,
    latex: state.input.latex,
  }),
  {
    ...actions,
    changeLatex,
  }
)(Symbols)
