var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(array, element) {
  var newArray = [...array];
  newArray.unshift(element);
  return newArray;
};

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
};

var addElementToEndOfArray = function(array, element) {
  var newArray = [...array];
  newArray.push(element);
  return newArray;
};

var destructivelyAddElementToEndOfArray = function (array, element) {
  array.push(element);
  return array;
};

var accessElementInArray = function(array, index) {
  return array[index];
};

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.shift();
  return array;
};

var removeElementFromBeginningOfArray = function(array) {
  var newArray = [...array];
  newArray.shift();
  return newArray;
};

var destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
  return array;
};

var removeElementFromEndOfArray = function(array) {
  var newArray = [...array];
  newArray.pop();
  return newArray;
};
