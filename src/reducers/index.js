import { combineReducers } from 'redux'

import general from './general'
import layout from './layout'
import input from './input'
import catalogue from './catalogue'

export default combineReducers({
  general,
  layout,
  input,
  catalogue
})
