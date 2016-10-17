var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array,element) {
  return [...array,element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  var array = [...array];
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  var array = [...array];
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  var array = [...array];
  array.pop();
  return array;
}
