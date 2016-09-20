var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, newValue) {
  var newArray = [newValue, ...array];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = function(array, newValue) {
  array.unshift(newValue);
  return array;

}

var addElementToEndOfArray  = function(array, newValue) {
  var newArray = [...array, newValue];
  return newArray;
}

var destructivelyAddElementToEndOfArray = function(array, newValue) {
  array.push(newValue);
  return array;
}

var accessElementInArray = function(array, newValue) {
  return array[newValue];
}

var destructivelyRemoveElementFromBeginningOfArray  = function(array) {
  array.slice(1);
  return array;
}


var removeElementFromBeginningOfArray  = function(array) {
  var newArray = array.slice(1);
  return newArray;
}


var removeElementFromEndOfArray   = function(array) {
  var newArray = array.slice(0,-1);
  return newArray;
}
