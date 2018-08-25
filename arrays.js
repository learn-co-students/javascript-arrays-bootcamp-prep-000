var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function accessElementInArray(array, index) {
  array = array[index];
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = array.slice(0);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.splice(-1, 1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(0, -1);
  return array;
}

function removeElementFromEndOfArray(array) {
  array.splice(0, -1);
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, 2);
  return array;
}
