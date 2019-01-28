var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  // create function with 2 arguements
  // adds element to the beginning of array
  return [element, ...array]
  // does not alter the orginal array
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  // create function with 2 arguements
  // adds element to the beginning of array
  array.unshift(element)
  // alters the orginal array
  return array
}

function addElementToEndOfArray(array, element) {
  // create function with 2 arguements
  // adds element to the end of array
  return [...array, element]
  //does not alter the orginal array
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  // create function with 2 arguements
  // adds element to the end of array
  array.push(element)
  // alters the orginal array
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