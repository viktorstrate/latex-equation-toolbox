import { combineReducers } from 'redux'

import general from './general'
import input from './input'
import catalogue from './catalogue'

export default combineReducers({
  general,
  input,
  catalogue
})
