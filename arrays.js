var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var theArray = [element, array[0]]
  return theArray
  }

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  var theArray = [array[0], element]
  return theArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  var theArray = array[2]
  return theArray

}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
  }

function removeElementFromBeginningOfArray (array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop(3)
  return array
}

function removeElementFromEndOfArray (array) {
  array = array.slice(0, array.length - 1)
  return array
}
