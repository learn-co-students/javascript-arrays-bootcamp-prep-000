var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return newArray;
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
};

function accessElementInArray(array, index) {
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
};

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
};

function destructivelyRemoveElementFromEndOfArray(array) {
  var newArray = array.pop();
  return newArray;
};

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}
