function routersFun(routes) {
  return {
    type: 'routes',
    routes
  }
}
function usersFun(user) {
  return {
    type: 'user',
    user
  }
}
function prevpathFun(prevpath) {
  return {
    type: 'prevpath',
    prevpath
  }
}
function breadCrumbsFun(breadCrumbs) {
  return {
    type: 'breadCrumbs',
    breadCrumbs
  }
}
function collapsedFun(collapsed) {
  return {
    type: 'collapsed',
    collapsed
  }
}
export { routersFun, usersFun, prevpathFun, breadCrumbsFun, collapsedFun }
