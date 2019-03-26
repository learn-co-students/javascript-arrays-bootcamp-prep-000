var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
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
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}

var items = [1, 2, 3, 4, 5]
 
// let's remove the third element
 
// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
items = [...items.slice(0, 2), ...items.slice(3)] 
// [1, 2, 4, 5]

console.log(items)