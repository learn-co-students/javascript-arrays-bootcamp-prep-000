var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]
var addElementToBeginningOfArray = function(array, element) {
  return [element, ...array];
}
var destructivelyAddElementToBeginningOfArray = function(array, element) {
  return array.unshift(element);
}

var addElementToEndOfArray = function(array, element) {
  return [...array, element]
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  return array.push(element);
}

var accessElementInArray = function(array, index) {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  return array.shift();
}

var removeElementFromBeginningOfArray  = function(array) {
   array = array.slice();
   return array;
}

var destructivelyRemoveElementFromEndOfArray  = function(array) {
  return array.pop();
}
