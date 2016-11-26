var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arrey, el) {
  return [el, ...arrey]
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  array.unshift(el)
  return array
}

var addElementToEndOfArray = function(array, el) {
  return [...array, el]
}

var destructivelyAddElementToEndOfArray = function(array, el) {
  array.push(el)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
   array2 = array.slice(1)
  return array2
}
var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop()
  return array
}
var removeElementFromEndOfArray = function(array) {
  array2 = array.slice(0, array.lenght - 1)
  return array
}

var accessElementInArray = (array, num) => {
  return array[num]
}
var removeElementFromEndOfArray = (array) => {
  array.pop()
  return array
}
