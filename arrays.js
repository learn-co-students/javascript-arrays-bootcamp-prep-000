var chocolateBars = ["snickers", "hundred grand", "kitkat", "kittles"]
var addElementToBeginningOfArray = function(array, element) {
  return [element, ...array]
}
var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element)
  return array
}
var addElementToEndOfArray = function(array, element) {
  return [...array, element]
}
var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element)
  return array
}
var accessElementInArray = function(array, index) {
  return array[index]
}
var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  return array.shift()
}
var removeElementFromBeginningOfArray = function(array) {
  return array.slice(1)
}
var destructivelyRemoveElementFromEndOfArray = function(array) {
  return array.pop()
}
var removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length - 1)
}
