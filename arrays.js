function chocolateBars() {
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  array = array;
  return array;
}

function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  array = array;
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  array = array;
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  array = array;
  return array;
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}
