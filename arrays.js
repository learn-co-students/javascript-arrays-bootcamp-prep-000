
var chocolateBars=["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return newArray = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  return newArray = [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  var removed = array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  return newArray = array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array) {
  var removed = array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
   return array.slice(0, length -1)


}
