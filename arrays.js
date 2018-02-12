chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, x) {
  var differentArray = [x, ...array];
  return differentArray;
}

function destructivelyAddElementToBeginningOfArray(array, y) {
  array.unshift(y);
  return array;
}

function addElementToEndOfArray(array, x) {
  var differentArray = [...array, x];
  return differentArray;
}

function destructivelyAddElementToEndOfArray(array, y) {
  array.push(y);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
}

function removeElementFromEndOfArray(array) {
  var que = array.slice(0, array.length -1);
  return que;
}
