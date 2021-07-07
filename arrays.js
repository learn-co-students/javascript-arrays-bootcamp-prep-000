var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, 1]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
    return array
}
function addElementToEndOfArray(array, element) {
return [1, element]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[2]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1)
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  array = array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(3)
  return array
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  array = array.slice(0, array.length - 1)
  return array
}
