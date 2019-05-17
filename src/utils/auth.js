const ls = window.localStorage
// const ss = window.sessionStorage
const Collapsed = 'collapsed'
const TOKEN = 'Token'
const Cookie = {
  get(key) {
    return ls.getItem(key)
  },
  set(key, val) {
    ls.setItem(key, val)
  },
  remove(key) {
    ls.removeItem(key)
  }
}

export function CollapsedGetToken() {  
	return Cookie.get(Collapsed)
}
export function CollapsedSetToken(res) {
  return Cookie.set(Collapsed, res)
}
export function CollapsedRemoveToken() {
  return Cookie.remove(Collapsed)
}

export function GetToken() {  
	return Cookie.get(TOKEN)
}
export function SetToken(res) {
  return Cookie.set(TOKEN, res)
}
export function RemoveToken() {
  return Cookie.remove(TOKEN)
}
