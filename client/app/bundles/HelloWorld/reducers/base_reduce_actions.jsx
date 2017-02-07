export function deleteElement(collection, deletedKey) {
  var newCollection = Object.keys(collection).filter(key => key !== deletedKey).reduce((
    result, current) => {
    result[current] = collection[current];
    return result;
  }, {});
  return newCollection
}