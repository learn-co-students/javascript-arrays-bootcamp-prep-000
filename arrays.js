
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, elem) {
  // arr.splice(0, -1, elem);
  return [elem, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elem) {
  arr.unshift(elem);
  return arr;
}

function addElementToEndOfArray(arr, elem) {
  return [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  arr.splice(arr.length, -1, elem);
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.splice(0, 1);
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1, arr.length);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.splice(arr.length - 1, 1);
  return arr;
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length - 1);
}
