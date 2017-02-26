var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, value) {
  return [value, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, value) {
  array.unshift(value);
  return array;
}

function addElementToEndOfArray(array, value) {
  return [...array, value];
}

function destructivelyAddElementToEndOfArray(array, value) {
  array.push(value);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}

