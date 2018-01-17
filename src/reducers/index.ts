import { combineReducers } from 'redux'

import general from './general'
import layout from './layout'
import input from './input'
import symbols from './symbols'
import calculations from './calculations'

export default combineReducers({
  general,
  layout,
  input,
  symbols,
  calculations
})
