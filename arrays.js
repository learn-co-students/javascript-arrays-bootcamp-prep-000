var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray (array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)
  return (array)
}

function addElementToEndOfArray (array, element) {
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return (array)
}

function accessElementInArray (array, index){
  return (array[index])
}

function removeElementFromBeginningOfArray (array) {
  var newArray = array
  newArray = newArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return (array)
}

function removeElementFromEndOfArray (array) {
  var newArray = array
  newArray = newArray.slice(0, newArray.length - 1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return (array)
}