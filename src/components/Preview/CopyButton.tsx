import * as React from 'react'
import Clipboard from 'react-clipboard.js'

interface CopyButtonProps {
  value: string
  name: string
}

const CopyButton = function(props: CopyButtonProps) {
  return <Clipboard data-clipboard-text={props.value}>{props.name}</Clipboard>
}

export default CopyButton
