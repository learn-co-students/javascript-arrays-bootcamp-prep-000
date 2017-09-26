var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return[element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return[...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

// Remove from the front of an Array.
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

// Remove from the front of an Array.
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

// Remove from the end of an Array.
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

// Remove from the end of an Array.
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1)
}
