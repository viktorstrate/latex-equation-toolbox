import { combineReducers } from 'redux'

import general from './general'
import layout from './layout'
import input from './input'
import symbols from './symbols'

export default combineReducers({
  general,
  layout,
  input,
  symbols
})
