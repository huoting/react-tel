import { combineReducers } from 'redux'
function reducerRouters (state = [], action) {
  switch (action.type) {
    case 'routes':
      return action.routes
    default:
      return state
  }
}
function user (state = '', action) {
  switch (action.type) {
    case 'user':
      return action.user
    default:
      return state
  }
}
function prevpath (state = {}, action) {
  switch (action.type) {
    case 'prevpath':
      return action.prevpath
    default:
      return state
  }
}
function breadCrumbs (state = {}, action) {
  switch (action.type) {
    case 'breadCrumbs':
      return action.breadCrumbs
    default:
      return state
  }
}
function collapsed (state = false, action) {
  switch (action.type) {
    case 'collapsed':
      return action.collapsed
    default:
      return state
  }
}

const reducers = combineReducers({
  reducerRouters,
  user,
  prevpath,
  breadCrumbs,
  collapsed
})
export default reducers