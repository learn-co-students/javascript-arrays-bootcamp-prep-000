var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(array, newItem) {
  var newArray = [newItem, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, newItem) {
  array.unshift(newItem);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function addElementToEndOfArray(array, newItem) {
  var newArray = [...array, newItem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, newItem) {
  array.push(newItem);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var slicedArray = array.slice(0, array.length - 1);
  return slicedArray;
}
