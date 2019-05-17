
import reducers from './reducers'
import { actionsFun } from './actions'
import { createStore } from 'redux'

const store = createStore(reducers)

function dispatchFun (value='') {
  store.dispatch(actionsFun(value))
}

export { dispatchFun, store }