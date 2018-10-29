import * as React from 'react'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'

// import style from './style.sass'
import styled from 'styled-components'
import { views, layout } from '../Layout'

const Component = styled.div`
  display: inline;
  margin: 8px;
  padding: 8px;
  background-color: #56576b;

  :hover {
    box-shadow: 0 1px 4px black;
  }
`

const Category = styled.div`
  display: inline;
  padding: 0 8px;
`

const Header = styled.div`
  height: 50px;
`

interface Props {
  layoutLoaded: boolean
}

class Toolbar extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.registerDragSource = this.registerDragSource.bind(this)
  }

  static contextTypes = {
    store: PropTypes.object,
  }

  registerDragSource(element, component) {
    if (this.props.layoutLoaded) {
      console.log('Add layout loaded')
      layout.createDragSource(element, {
        title: component[1],
        type: 'react-component',
        component: component[0],
        props: {
          store: this.context.store,
        },
      })
    }
  }

  render() {
    const self = this
    const viewElements = Object.keys(views).map(category => {
      const elements = views[category].map(component => {
        const element = (
          <Component
            ref={el => {
              self.registerDragSource(el, component)
            }}
            key={component[0]}
          >
            {component[1]}
          </Component>
        )

        return element
      })

      return (
        <Category key={category}>
          {category}
          {elements}
        </Category>
      )
    })
    return <Header>{viewElements}</Header>
  }
}

export default connect(state => ({
  layoutLoaded: state.layout.loaded,
}))(Toolbar)
