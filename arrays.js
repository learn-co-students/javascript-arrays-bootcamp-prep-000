var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const array = [1]

var addElementToBeginningOfArray = function (array, x) {
  array = [x, ...array];
  return array;
}

var destructivelyAddElementToBeginningOfArray = function (array, x) {
  array.unshift(x);
  return array;
}

var addElementToEndOfArray = function (array, x) {
  array = [...array, x];
  return array;
}

var destructivelyAddElementToEndOfArray = function(array, x) {
  array.push(x);
  return array;
}

var accessElementInArray = function(array, x) {
  return array[x];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = function(array) {
  array = array.slice(1);
  return array;
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
  return array;
}

var removeElementFromEndOfArray = function(array) {
  array =  array.slice(0,array.length-1);
  return array;
}
