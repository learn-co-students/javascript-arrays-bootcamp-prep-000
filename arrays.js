var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



var addElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;

}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}

var accessElementInArray = function(array, index) {
  var element = array[index];
  return element
}

var removeElementFromBeginningOfArray = function(array, element) {
  array.shift(element);
  return array;
}

var removeElementFromEndOfArray = function(array, element) {
  array.pop(element);
  return array;
}
