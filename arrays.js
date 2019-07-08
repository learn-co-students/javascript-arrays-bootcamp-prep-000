var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, ele) {
  var newArray = [ele, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, ele) {
  var added = array.unshift(ele);
  return array;
}

function addElementToEndOfArray(array, ele) {
  var newArray = [...array, ele];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, ele) {
  var added = array.push(ele);
  return array;
}

function accessElementInArray(array, idx) {
  return array[idx];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var removed = array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var removed = array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

