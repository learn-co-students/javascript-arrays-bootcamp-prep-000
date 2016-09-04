function chocolateBars() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToBeginningOfArray(array, element) {
  var arrayCopy = array.slice(0);
  arrayCopy.unshift(element);
  return arrayCopy;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var arrayCopy = array.slice(0);
  arrayCopy.push(element);
  return arrayCopy;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function removeElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
