var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var addElementToBeginningOfArray = function(array, element) {
  return [element, ...array]
}
var destructivelyAddElementToBeginningOfArray = function(array, element) {
  var array = new Array(element, ...array)
  array
  return [array]
}