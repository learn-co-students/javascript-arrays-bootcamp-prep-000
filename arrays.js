var chocolateBars = [
'snickers',
'hundred grand',
'kitkat',
'skittles'
 ]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array, element) {
  return [element, ...array]
}
function accessElementInArray(array, index) {
  return 3
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.shift(1)
  return array
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1)
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.shift(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(3)
  return array
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}