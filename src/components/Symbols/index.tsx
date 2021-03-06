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

interface ThemeStyleProp {
  darkTheme: boolean
}

const ItemDiv = styled.div<ItemDivProps>`
  display: ${props => (props.show ? 'inline' : 'none')};
`

const IconWrapper = styled.div<ThemeStyleProp>`
  background-color: ${props => (props.darkTheme ? '#444' : '#eee')};
  width: 48px;
  margin: 2px;
  cursor: pointer;
  display: inline-block;
`

const Category = styled.div<ThemeStyleProp>`
  background-color: ${props => (props.darkTheme ? '#333' : '#fff')};
  margin: 4px 0;
  padding: 4px;
  cursor: pointer;
  user-select: none;
`

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
`

const categories = ['arrows', 'greek']

interface SignItem {
  code: string
  icon: string
}

interface Props {
  latex: string
  visibleTabs: string[]
  darkTheme: boolean
  changeLatex(string)
  toggleTab(string)
}

class Symbols extends React.Component<Props> {
  constructor(props) {
    super(props)

    this.toggleTab = this.toggleTab.bind(this)
    this.insertSymbol = this.insertSymbol.bind(this)
  }

  loadCategory(sign: string) {
    const data = require('./signs/' + sign + '/data.json')

    const visibleStyle = {
      display: 'inline',
    }

    const self = this

    let elements = data.map((item: SignItem) => {
      const icon = require('./signs/' + sign + '/' + item.icon)
      return (
        <ItemDiv
          show={self.props.visibleTabs[sign] == true}
          key={item.code}
          onClick={this.insertSymbol.bind(null, item.code)}
        >
          {/* <img src={icon} /> */}
          <IconWrapper
            dangerouslySetInnerHTML={{
              __html: icon,
            }}
            darkTheme={this.props.darkTheme}
          />
        </ItemDiv>
      )
    })

    return <div>{elements}</div>
  }

  loadCategories() {
    let elements = categories.map(category => (
      <div key={category}>
        <Category darkTheme={this.props.darkTheme} onClick={this.toggleTab}>
          {category}
        </Category>
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
    darkTheme: state.settings.darkTheme,
  }),
  {
    ...actions,
    changeLatex,
  }
)(Symbols)
