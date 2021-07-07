var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, ele) { //new array
  return [ele, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, ele) { //mod array
  array.unshift(ele);
  return array;
}

function addElementToEndOfArray(array, element) { //new array
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) { //mod array
  array.push(element);
  return array;
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
  return array.slice(0, array.length - 1);
}
