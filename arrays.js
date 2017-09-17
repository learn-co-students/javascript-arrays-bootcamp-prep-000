var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var array = `${array}`
  [`${element}`, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = `${array}`
  array.unshift(`${element}`)
  return array
}
function addElementToEndOfArray(array, element) {
  var array = `${array}`
  [array..., `${element}`]
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  var array = `${array}`
  array[array.length + 1] = `${element}`
  return array
}
