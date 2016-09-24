var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...array]
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  [...array, element]
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var element = array[index]
  return element
}

function removeElementFromBeginningOfArray(array) {
  array.shift([0])
  return array
}


function removeElementFromEndOfArray(array) {
  array.pop([0])
  return array
}
