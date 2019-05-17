
import reducers from './reducers'
import { routersFun, usersFun, prevpathFun, breadCrumbsFun, collapsedFun } from './actions'
import { createStore } from 'redux'

import { Login } from '../api/login'

const store = createStore(reducers)

function dispatchRouteFun (value='') {
  store.dispatch(routersFun(value))
}

function dispatchUserFun () {
  return new Promise((resolve, reject) => {
    Login().then((res) => {
      store.dispatch(usersFun(res))
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}

function dispatchprevpathFun (value={}) {
  store.dispatch(prevpathFun(value))
}

function dispatchBreadCrumbs (value={}) {
  store.dispatch(breadCrumbsFun(value))
}

function dispatchCollapsed (value='') {
  store.dispatch(collapsedFun(value))
}

export { store, dispatchRouteFun, dispatchUserFun, dispatchprevpathFun, dispatchBreadCrumbs, dispatchCollapsed }