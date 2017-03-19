
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var x = array
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  x = array.slice(1)
  return x
}

function destructivelyRemoveElementFromEndOfArray(array) {
  x = array
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  x = array.slice(0, array.length-1)
  return x
}
