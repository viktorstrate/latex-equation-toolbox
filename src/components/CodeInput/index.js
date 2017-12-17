import { h, Component } from 'preact'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/stex/stex'

import style from './style.sass'

class CodeInput extends Component {
  render () {
    return (
      <CodeMirror mode='stex' className={style.codeInput} />
    )
  }
}

export default CodeInput
