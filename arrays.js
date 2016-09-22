var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
var addElementToBeginningOfArray = function(array, element) {
  newArray = array
  newArray.unshift(element)
  return newArray
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element)
  return array
}

var addElementToEndOfArray = function(array, element) {
  newArray = array
  newArray.push(element)
  return newArray
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element)
  return array
}

var accessElementInArray = function (array, index) {
  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.shift()
  return array
}
var removeElementFromBeginningOfArray = function(array) {
  newArray = array.slice(1)
  return newArray
}
var removeElementFromEndOfArray = function(array) {
  newArray = array.slice(0, array.length - 1)
  return newArray
}
var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop()
  return array
}
