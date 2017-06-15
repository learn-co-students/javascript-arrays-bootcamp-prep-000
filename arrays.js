var chocolateBars = ["snickers", "hundredGrand", "kitkat", "skittles"]

// Adds an element to the beginning of an array without modifying the original.
function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

// Adds an element to the beginning of an array and mutates the original.
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// Adds an element to the end of an array without modifying the original.
function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}

// Adds an element to the end of an array and mutates the original.
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

// Returns a specific item/index in the array.
function accessElementInArray(array, index) {
  var index = array[index]
  return index
}

// Removes an element from the beginning of an array and mutates the original.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

// Removes an element from the beginning of an array without modifying the original.
function removeElementFromBeginningOfArray(array) {
  newArray = array.slice(1)
  return newArray
}

// Removes an element from the end of an array and mutates the original.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

// Removes an element from the end of an array without modifying the original.
function removeElementFromEndOfArray(array) {
  newArray = array.slice(0, array.length - 1)
  return newArray
}
