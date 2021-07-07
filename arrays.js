var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var newArrayEnd = [...array, element]
  return newArrayEnd
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  var printThis = array[index]
  return printThis
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array 
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1)
  return newArray 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array 
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length  - 1)
}

