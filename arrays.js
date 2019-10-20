var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"
]

function addElementToBeginningOfArray(array, element) {
  return arrays=[element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return arrays=[...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  return array = array.splice(1)
}

function removeElementFromEndOfArray(array) {
  return array = array.slice(0, array.length -1)
}
