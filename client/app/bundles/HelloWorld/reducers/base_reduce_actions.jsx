export function deleteElement(collection, deletedKey) {
  return Object.keys(collection).filter(key => key !== deletedKey).reduce((
    result, current) => {
    result[current] = collection[current];
    return result;
  }, {});
}