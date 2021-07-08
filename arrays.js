var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, el) {
  return [el, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(array, el) {
  return [...array, el];
}

function destructivelyAddElementToEndOfArray(array, el) {
  array.push(el);
  return array;
}

function accessElementInArray(array, ind) {
  return array[ind];
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
  return array.slice(0, array.length - 1);
}

