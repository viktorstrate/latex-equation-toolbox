import { combineReducers } from 'redux'

import general from './general'
import layout from './layout'
import input from './input'
import symbols from './symbols'
import equations from './equations'

export default combineReducers({
  general,
  layout,
  input,
  symbols,
  equations
})
