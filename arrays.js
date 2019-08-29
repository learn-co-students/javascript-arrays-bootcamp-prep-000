var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
  // add element to front of array, not destructive to original array
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  // add element to front of array, destructive (changes) to original array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  var newArray = [...array,element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
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
  // note: return array.pop() -> returns the removed element
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length - 1)
}

