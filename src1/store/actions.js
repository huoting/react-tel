function actionsFun(filter) {
  return {
    type: 'reducer',
    filter
  }
}
function storeFun(filter) {
  return {
    type: 'reducer2',
    filter
  }
}
export { actionsFun, storeFun }