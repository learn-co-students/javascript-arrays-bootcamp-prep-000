// 1.
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// 2.
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// 3.
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

// 4.
function accessElementInArray(array, index) {
  return array[index]
}

// 5.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

// 6.
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

// 7.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

// 8.
function removeElementFromEndOfArray(array) {
  return array.slice(0 , array.length - 1)
}
