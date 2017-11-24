var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array, element) {
  array.concat(element)
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  array.concat(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return index
}
function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.slice(2, 3)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.splice(2, 3)
  return array
}
function removeElementFromEndOfArray(array) {
  array.pop(1, 2)
  return array
}
