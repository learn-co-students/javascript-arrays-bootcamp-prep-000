var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
 var arrayWithNewBeginning = [element, ...array];
 return arrayWithNewBeginning;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var arrayWithNewEnd = [...array, element];
  return arrayWithNewEnd;
}

function destructivelyAddElementToEndOfArray(array, element) {
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
  var newArrayWithRemovedBeginning = array.slice(1);
  return newArrayWithRemovedBeginning;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  var newArrayWithRemovedEnd = array.slice(0, array.length - 1);
  return newArrayWithRemovedEnd;
}