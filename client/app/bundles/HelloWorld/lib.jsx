export function filterByKeysValues(obj, keys_values) {
  var result = {}
  Object.keys(obj).map((key) => {
    let filtred = false
    let element = obj[key]
    Object.keys(keys_values).map((key2) => {
      if(element[key2] != keys_values[key2]) {filtred = true}
    })
    if(!filtred) {result[key] = obj[key]}
  })
  return result
}
export function ArrHasEl(arr, el) {
  return ~arr.indexOf(el)
}
export function propToBool(prop) {
  switch (prop) {
    case "true":
      return true
    case "false":
      return false
    default:
      return false
  }
}
export function filterByKeys(obj, keys_arr) {
  var result = {}
  Object.keys(obj).map((key) => {
    if(~keys_arr.indexOf(key.toString())) {
      console.log('filter key ' + key + " " + obj[key])
      result[key] = obj[key]
    }
  })
  return result
}