var chocolateBars = ["snickers", "hundred grand", "kitkat",  "skittles"]

function addElementToBeginningOfArray(array, element) {
  var arrayAddBegin = [element, ...array]
  return arrayAddBegin
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var arrayAddBeginDestructively = array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var arrayAddEnd = [...array, element]
  return arrayAddEnd
}

function destructivelyAddElementToEndOfArray(array, element) {
  var arrayAddEndDestructively = array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var elementAtIndex = array[index]
  return elementAtIndex
}

function removeElementFromBeginningOfArray(array) {
  var arrayRemoveBegin = array.slice(1)
  return arrayRemoveBegin
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var arrayRemoveBeginDestructively = array.shift()
  return array
}

function removeElementFromEndOfArray(array) {
  var arrayRemoveEnd = array.slice(0, array.length - 1)
  return arrayRemoveEnd
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var arrayRemoveEndDestructively = array.pop()
  return array
}