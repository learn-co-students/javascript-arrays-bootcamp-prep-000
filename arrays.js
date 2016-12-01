var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


function addElementToEndOfArray(array, element) {
  var NewArray;
  NewArray = [...array, element];
  return NewArray;
}

function addElementToBeginningOfArray(array, element) {
  var NewArray;
  NewArray = [element, ...array];
  return NewArray;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  var mutatedArray;
  mutatedArray = array.slice(1);
  return mutatedArray;
}

function removeElementFromEndOfArray(array) {
  var mutatedArray;
  mutatedArray = array.slice(0, array.length -1);
  return mutatedArray;
}
