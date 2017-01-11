var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
];

function addElementToBeginningOfArray(array, element) {
  var array = [element, ...array];
  return array;
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

function addElementToEndOfArray(array, element) {
  var array = [...array, element];
  return array;
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
};

function accessElementInArray(array, index) {
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1);
  return array;
};

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
};

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
};