var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var add = array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  var add = array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var removed = array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var removed = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, 2);
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
