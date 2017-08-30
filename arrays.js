var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array]
  return array2
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array2 = [...array, element]
  return array2
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(-2)
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}
