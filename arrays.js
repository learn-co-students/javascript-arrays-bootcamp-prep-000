var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, e) {
  return [e, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, e) {
  array.unshift(e)
  return array
}

function addElementToEndOfArray(array, e) {
  return [...array, e]
}

function destructivelyAddElementToEndOfArray(array, e) {
  array.push(e)
  return array
}

function accessElementInArray(array, i) {
  return array[i]
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function removeElementFromEndOfArray(array) {
  array.pop()
  return array
}
