import { createStore, applyMiddleware, compose, Store, Middleware } from 'redux'
import rootReducer from './reducers'

const initialState = {}

const enhancers = []
const middleware: Middleware[] = []

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: string
  }
}

if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
