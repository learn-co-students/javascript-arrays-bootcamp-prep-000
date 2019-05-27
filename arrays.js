var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray(array, elem) {
  return [elem, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elem) {
  array.unshift(elem)
  return array
}

function addElementToEndOfArray(array, elem) {
  return [...array, elem]
}

function destructivelyAddElementToEndOfArray(array, elem) {
  array.push(elem)
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
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}