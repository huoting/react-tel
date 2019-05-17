import { combineReducers } from 'redux'
function reducer (state = 1, action) {
  switch (action.type) {
    case 'reducer':
      return 111 + action.filter
    default:
      return state
  }
}
function reducer2 (state = 2, action) {
  switch (action.type) {
    case 'reducer2':
      return 222 + action.filter
    default:
      return state
  }
}
const reducers = combineReducers({
  reducer,
  reducer2
})
export default reducers