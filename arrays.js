var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var array = [1, 2, 3];
  var index = array[2];
  return index
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array = [1, 2, 3];
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3];
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1, 2, 3];
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3];
  return array.slice(0, array.length - 1);
}
