var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(array, element){
  var arr = [element, ...array];
  return arr;
  
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = function(array, element) {
  var arr = [...array, element];
  return arr;
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}

var accessElementInArray = function (array, index) {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array, element) {
  array.shift(element);
  return array;
}

var removeElementFromBeginningOfArray = function(array) {
  var arr = array.slice(1);
  return arr;
}

var removeElementFromEndOfArray = function(array) {
  
  array.pop()

  return array;
}