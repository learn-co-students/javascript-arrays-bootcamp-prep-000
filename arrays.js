var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var addElementToEndOfArray = function(array, element) {
  return [element, ...array];
};

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  return array.unshift(element);
};

var addElementToEndOfArray = function() {
  return [...array, element];
};

var destructivelyAddElementToEndOfArray = function() {
  return array.push(element);
};

var accessElementInArray = function(array, index) {
  return array[index];
};

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  return array.shift();
};

var removeElementFromBeginningOfArray = function(array) {
  return array.slice(1);
};

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  return array.pop();
};

var removeElementFromEndOfArray = function(array) {
  return array.slice(0, array.length-1);
};
