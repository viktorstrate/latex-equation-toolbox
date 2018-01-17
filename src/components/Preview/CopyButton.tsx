import { h } from 'preact'
import Clipboard from 'react-clipboard.js'

interface CopyButtonProps {
  value: string,
  name: string
}

const CopyButton = (props: CopyButtonProps) => (
  <Clipboard data-clipboard-text={props.value}>
    {props.name}
  </Clipboard>
)

export default CopyButton