var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  bars = [element, ...array]
  return bars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)  
  return array
}

function addElementToEndOfArray(array, element) {
  bars = [...array, element]
  return bars
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
  var sliced = array.slice(1)
  return sliced 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var sliced = array.slice(0, array.length - 1)
  return sliced 
}