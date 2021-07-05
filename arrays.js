var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  //This is not required
  array = [element, ...array];
  //return [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  //This is not required
  array = [...array, element];
  //return [...array, element];
  return array;
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
  //This is not required
  array = array.slice(1);
  //return array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  //This is not required.
  array = array.slice(0, array.length - 1);
  // return array.slice(0, array.length - 1);
  return array;
}