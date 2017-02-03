var chocolateBars = [ "snickers","hunred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  var newArray = array
  return newArray.slice(0, newArray.length -1)
}
