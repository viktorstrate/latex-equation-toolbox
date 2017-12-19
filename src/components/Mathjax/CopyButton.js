import { h } from 'preact'
import Clipboard from 'react-clipboard.js'

export default (props) => (
  <Clipboard data-clipboard-text={props.value}>
    {props.name}
  </Clipboard>
)
