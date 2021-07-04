var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var addElementToBeginningOfArray = function(array, element) {
  return [element, ...array]
}
var destructivelyAddElementToBeginningOfArray = function(array, element) {
  return [array.unshift(element)]
}