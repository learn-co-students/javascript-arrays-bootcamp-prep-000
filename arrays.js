var chocolateBars = ['snickers', 'hundred grand', 'kitkat','skittles'];

function addElementToBeginningOfArray(array, element) {
  var addElementToBeginningOfArray = ['foo', ...array];
  return(addElementToBeginningOfArray);
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return(array);
};

function addElementToEndOfArray(array, element) {
  var addElementToEndOfArray = [...array, 'foo'];
  return(addElementToEndOfArray);
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return(array);
};

function accessElementInArray (array, index) {
  var accessElementInArray = array[2];
  return accessElementInArray;
};

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
};

function removeElementFromBeginningOfArray (array) {
  var removeElementFromBeginningOfArray = array.slice(1);
  return removeElementFromBeginningOfArray;
};

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
};

function removeElementFromEndOfArray (array) {
  var removeElementFromEndOfArray = array.slice(0, array.length - 1);
  return removeElementFromEndOfArray;
};
