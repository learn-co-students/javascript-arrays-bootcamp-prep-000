var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  newarray = [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  newarray = array.slice(1)
  return newarray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(1)
  return array
}

function removeElementFromEndOfArray(array) {
  newarray = array.slice(0, array.length - 1)
  return newarray
}
