
// (KSu) Defining a variable that has a value of an array of strings
var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles")

// (KSu) Adding elements to arrays
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

// (KSu) Adding elements to arrays destructively
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

// (KSu) Accessing elements in arrays
function accessElementInArray(array, index) {
  return array[index]
}

// (KSu) Removing elements from arrays
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

// (KSu) Removing elements from arrays destructively
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
