var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var addBeg = [element, ...array];
  return addBeg;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var addEnd = [...array, element];
  return addEnd;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(0);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var subBeg = array.slice(-2)
  return subBeg;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(2);
  return array;
}

function removeElementFromEndOfArray(array) {
  var subEnd = array.slice(0, array.length - 1);
  return subEnd;
}
