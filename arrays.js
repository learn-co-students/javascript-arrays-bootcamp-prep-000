var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return newArray
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}

function accessElementInArray(array, element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}