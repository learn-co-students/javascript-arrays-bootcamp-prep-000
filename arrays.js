var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var myArray = [1]

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

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.splice(0, 1) 
  return array
}

function removeElementFromBeginningOfArray(array) {
  var yourArray = array.slice(1) 
  return yourArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var cutArray = array.slice(0, (array.length -1))
  return cutArray
}