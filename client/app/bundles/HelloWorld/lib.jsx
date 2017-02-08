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
}