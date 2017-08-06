var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var result = [element, ...array];
  return result;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var result = array
  result.unshift(element);
  return result;
}

function addElementToEndOfArray(array, element) {
  var result = [...array, element];
  return result;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var result = array
  result.push(element);
  return result;
}

function accessElementInArray(array, index) {
  var result = array[index]
  return result;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var result = array
  result.shift();
  return result;
}

function removeElementFromBeginningOfArray(array) {
  var result = array.slice(1);
  return result;
}

function removeElementFromEndOfArray(array) {
  var result = array.slice(0, array.length-1);
  return result;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var result = array
  result.pop();
  return result;
}
