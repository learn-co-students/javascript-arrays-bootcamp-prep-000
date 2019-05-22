var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, elementToAdd) {
  var result = [elementToAdd,...array];
  return result;
}

function destructivelyAddElementToBeginningOfArray(array, elementToAdd) {
  array.unshift(elementToAdd);
  return array;
}

function addElementToEndOfArray(array, elementToAdd) {
  var result = [...array, elementToAdd];
  return result;
}

function destructivelyAddElementToEndOfArray(array, elementToAdd) {
  array.push(elementToAdd);
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var result = array.slice(0, array.length - 1);
  return result;
}