export function deleteElement(collection, deletedKey) {
  return Object.keys(collection).filter(key => key !== deletedKey).reduce((
    result, current) => {
    result[current] = collection[current];
    return result;
  }, {});
}
export function addNestedElement(state, parentId, childId) {
  let changeobj = {[parentId]: [...state[parentId], childId]}
  // console.log('changeobj')
  // console.log(changeobj)
  let changedstate = Object.assign({}, state, changeobj)
  // console.log('changedstate')
  // console.log(changedstate)
  return changedstate
}